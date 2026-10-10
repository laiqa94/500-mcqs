import React, { useState, useEffect } from 'react';
import { MCQ, UserAnswerState } from '../types/physics';
import { MCQCard } from './MCQCard';
import { Timer, AlertCircle, CheckCircle, Award, RotateCcw, ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExamViewProps {
  questions: MCQ[];
  onFinishExam: () => void;
  bookmarkedIds: Set<number>;
  onToggleBookmark: (id: number) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  questions,
  onFinishExam,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(questions.length * 75); // 75 seconds per question
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showReviewList, setShowReviewList] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [qId]: optIdx
    }));
  };

  const toggleReviewTag = (id: number) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const currentMCQ = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  // Format time MM:SS
  const minutes = Math.floor(timeRemainingSeconds / 60);
  const seconds = timeRemainingSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Results calculation:
  let correctCount = 0;
  let wrongCount = 0;
  questions.forEach((q) => {
    if (answers[q.id] !== undefined) {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });
  const unattemptedCount = questions.length - answeredCount;
  const scorePercent = ((correctCount / questions.length) * 100).toFixed(1);

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        {/* Results Scoreboard */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs text-center">
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Award className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            Exam Completed!
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Solids & Fluid Dynamics Assessment Report
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto mb-6">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="block text-2xl font-bold text-slate-900">{scorePercent}%</span>
              <span className="text-xs text-slate-500">Overall Score</span>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="block text-2xl font-bold text-emerald-600">{correctCount}</span>
              <span className="text-xs text-emerald-700">Correct</span>
            </div>
            <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
              <span className="block text-2xl font-bold text-rose-600">{wrongCount}</span>
              <span className="text-xs text-rose-700">Incorrect</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="block text-2xl font-bold text-slate-600">{unattemptedCount}</span>
              <span className="text-xs text-slate-500">Unattempted</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowReviewList(!showReviewList)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors cursor-pointer"
            >
              {showReviewList ? 'Hide Explanations' : 'Review All Questions & Explanations'}
            </button>
            <button
              onClick={onFinishExam}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
            >
              Exit to Study Mode
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        {showReviewList && (
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-slate-900">
              Detailed Question Solutions & Answers:
            </h3>
            {questions.map((q) => (
              <MCQCard
                key={q.id}
                mcq={q}
                selectedOption={answers[q.id] ?? null}
                onSelectOption={() => {}}
                showExplanation={true}
                isBookmarked={bookmarkedIds.has(q.id)}
                onToggleBookmark={() => onToggleBookmark(q.id)}
                isExamMode={false}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Exam Header Strip */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-800 font-mono font-semibold">
            <Timer className={`w-5 h-5 ${timeRemainingSeconds < 300 ? 'text-rose-600 animate-pulse' : 'text-cyan-600'}`} />
            <span className={`text-base ${timeRemainingSeconds < 300 ? 'text-rose-600' : 'text-slate-900'}`}>
              {timeFormatted}
            </span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="text-xs text-slate-500">
            Answered: <strong className="text-slate-800">{answeredCount}</strong> / {questions.length}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleReviewTag(currentMCQ.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
              markedForReview.has(currentMCQ.id)
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {markedForReview.has(currentMCQ.id) ? '★ Marked for Review' : 'Mark for Review'}
          </button>
          <button
            onClick={handleSubmitExam}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Main Single Question Area */}
      {currentMCQ && (
        <MCQCard
          mcq={currentMCQ}
          selectedOption={answers[currentMCQ.id] ?? null}
          onSelectOption={(idx) => handleSelectOption(currentMCQ.id, idx)}
          showExplanation={false}
          isBookmarked={bookmarkedIds.has(currentMCQ.id)}
          onToggleBookmark={() => onToggleBookmark(currentMCQ.id)}
          isExamMode={true}
        />
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>

        <span className="text-xs text-slate-500 font-mono">
          Question {currentIndex + 1} of {questions.length}
        </span>

        <button
          onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
          disabled={currentIndex === questions.length - 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Question Palette Grid */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span className="font-semibold text-slate-800">Question Palette</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-cyan-600"></span> Answered
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-amber-400"></span> Review
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-slate-100 border border-slate-300"></span> Unanswered
            </span>
          </div>
        </div>

        <div className="grid grid-cols-10 sm:grid-cols-15 md:grid-cols-20 lg:grid-cols-25 gap-1.5 max-h-48 overflow-y-auto p-1">
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isMarked = markedForReview.has(q.id);
            const isCurrent = idx === currentIndex;

            let bgClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
            if (isAnswered) bgClass = 'bg-cyan-600 text-white border-cyan-600 font-semibold';
            if (isMarked) bgClass = 'bg-amber-400 text-slate-900 border-amber-500 font-bold';

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 rounded text-xs font-mono border flex items-center justify-center transition-all cursor-pointer ${bgClass} ${
                  isCurrent ? 'ring-2 ring-slate-900 ring-offset-1' : ''
                }`}
                title={`Q${q.id}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
