import React from 'react';
import { MCQ } from '../types/physics';
import { Bookmark, BookmarkCheck, CheckCircle2, XCircle, BookOpen, Lightbulb, Copy, Check } from 'lucide-react';

interface MCQCardProps {
  mcq: MCQ;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  showExplanation: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isExamMode?: boolean;
}

export const MCQCard: React.FC<MCQCardProps> = ({
  mcq,
  selectedOption,
  onSelectOption,
  showExplanation,
  isBookmarked,
  onToggleBookmark,
  isExamMode = false
}) => {
  const [copied, setCopied] = React.useState(false);

  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleCopy = () => {
    const text = `Q${mcq.id}: ${mcq.question}\n(A) ${mcq.options[0]}\n(B) ${mcq.options[1]}\n(C) ${mcq.options[2]}\n(D) ${mcq.options[3]}\nAnswer: (${optionLetters[mcq.correctAnswer]})\nExplanation: ${mcq.explanation}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getOptionStyle = (index: number) => {
    // In Exam mode, just show selected state without revealing correct answer
    if (isExamMode) {
      if (selectedOption === index) {
        return 'border-cyan-500 bg-cyan-50/70 text-cyan-950 font-medium ring-1 ring-cyan-500';
      }
      return 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';
    }

    // In Practice / Review mode, show immediate correctness
    if (showExplanation) {
      if (index === mcq.correctAnswer) {
        return 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-500';
      }
      if (selectedOption === index && index !== mcq.correctAnswer) {
        return 'border-rose-500 bg-rose-50/80 text-rose-950 font-medium ring-1 ring-rose-500';
      }
      return 'border-slate-200 bg-white opacity-60 text-slate-600';
    }

    // Default unselected state
    if (selectedOption === index) {
      return 'border-cyan-500 bg-cyan-50 text-cyan-900 font-medium ring-1 ring-cyan-500';
    }
    return 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800';
  };

  return (
    <div
      id={`mcq-${mcq.id}`}
      className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs transition-shadow hover:shadow-sm"
    >
      {/* Question Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-bold text-slate-900 font-mono text-sm">
            Q{mcq.id}
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-cyan-700 font-medium">
            Module {mcq.module}: {mcq.moduleName}
          </span>
          <span className="text-slate-300">·</span>
          <span>{mcq.topic}</span>
          <span className="text-slate-300">·</span>
          <span
            className={`font-medium ${
              mcq.difficulty === 'Basic'
                ? 'text-emerald-700'
                : mcq.difficulty === 'Intermediate'
                ? 'text-amber-700'
                : 'text-rose-700'
            }`}
          >
            {mcq.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md transition-colors cursor-pointer"
            title="Copy question"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              isBookmarked ? 'text-amber-500 hover:text-amber-600' : 'text-slate-400 hover:text-slate-600'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Question Statement */}
      <p className="text-base font-medium text-slate-900 leading-relaxed mb-4">
        {mcq.question}
      </p>

      {/* Options List */}
      <div className="space-y-2.5 mb-4">
        {mcq.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === mcq.correctAnswer;
          const showSuccessIcon = showExplanation && isCorrect;
          const showErrorIcon = showExplanation && isSelected && !isCorrect;

          return (
            <button
              key={idx}
              onClick={() => onSelectOption(idx)}
              className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-start gap-3 cursor-pointer ${getOptionStyle(
                idx
              )}`}
            >
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                  showSuccessIcon
                    ? 'bg-emerald-600 text-white'
                    : showErrorIcon
                    ? 'bg-rose-600 text-white'
                    : isSelected
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {optionLetters[idx]}
              </span>
              <span className="flex-1 leading-snug">{option}</span>
              {showSuccessIcon && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
              {showErrorIcon && <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
            </button>
          );
        })}
      </div>

      {/* Explanation Box (Visible in Practice Mode or after answer revealed) */}
      {showExplanation && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
          {/* Detailed Scientific Step-by-Step Explanation */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-700">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
              <BookOpen className="w-4 h-4 text-cyan-600" />
              <span>Correct Option: ({optionLetters[mcq.correctAnswer]}) — Detailed Scientific Explanation:</span>
            </div>
            <p className="text-slate-700 pl-5 leading-normal">{mcq.explanation}</p>
          </div>

          {/* Roman Urdu / Urdu Conceptual Reason */}
          <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs leading-relaxed text-amber-950">
            <div className="flex items-center gap-1.5 font-semibold text-amber-900 mb-1">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Urdu / Roman Urdu Explanation (Wajah):</span>
            </div>
            <p className="text-amber-900 pl-5 font-sans leading-normal">{mcq.reasonUrdu}</p>
          </div>

          {/* Badges: Formula & Textbook Reference */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-slate-500">
            {mcq.formula && mcq.formula !== 'N/A' && (
              <span className="font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                Formula: {mcq.formula}
              </span>
            )}
            <span className="text-slate-500 ml-auto">
              Book Ref: {mcq.textbookRef}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
