/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { allMCQs, modulesList } from './data/mcqs';
import { MCQ, QuizMode } from './types/physics';
import { PracticeView } from './components/PracticeView';
import { ExamView } from './components/ExamView';
import { SimulatorsHub } from './components/SimulatorsHub';
import { FormulaReferenceView } from './components/FormulaReferenceView';
import {
  BookOpen,
  Timer,
  Activity,
  Calculator,
  Bookmark,
  Award,
  Layers,
  Search,
  CheckCircle2,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'practice' | 'exam' | 'simulators' | 'formulas'>('practice');
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<string>('ALL');

  // Exam configuration state
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [examQuestions, setExamQuestions] = useState<MCQ[]>([]);
  const [examQuestionCount, setExamQuestionCount] = useState<number>(25);
  const [examModuleScope, setExamModuleScope] = useState<string>('ALL');

  // Persistent user answers & bookmarks in localStorage
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem('physics_mcq_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('physics_mcq_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('physics_mcq_answers', JSON.stringify(userAnswers));
    } catch (e) {
      console.warn('Could not save answers to localStorage', e);
    }
  }, [userAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem('physics_mcq_bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.warn('Could not save bookmarks to localStorage', e);
    }
  }, [bookmarkedIds]);

  const handleSelectOption = (qId: number, optionIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const handleToggleBookmark = (qId: number) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) {
        next.delete(qId);
      } else {
        next.add(qId);
      }
      return next;
    });
  };

  const handleResetAnswers = () => {
    setUserAnswers({});
  };

  // Launch Exam with custom selection
  const handleStartExam = () => {
    let pool = allMCQs;
    if (examModuleScope !== 'ALL') {
      pool = allMCQs.filter((m) => m.module === examModuleScope);
    }
    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(examQuestionCount, shuffled.length));
    setExamQuestions(selected);
    setIsExamActive(true);
  };

  const handleEndExam = () => {
    setIsExamActive(false);
  };

  const handleGoToMCQsByTopic = (moduleCode: string) => {
    setSelectedModuleFilter(moduleCode);
    setActiveTab('practice');
  };

  // Progress stats
  const totalSolved = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => allMCQs[Number(id) - 1]?.correctAnswer === ans
  ).length;
  const overallAccuracy = totalSolved > 0 ? Math.round((correctCount / totalSolved) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Subject Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <span className="font-extrabold text-base tracking-tighter">Ψ</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-bold text-base sm:text-lg tracking-tight text-slate-900 leading-tight">
                    Physics Class 11 <span className="text-cyan-600 font-extrabold">A–Z</span>
                  </h1>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold uppercase tracking-wide">
                    500 MCQs
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Solids & Fluid Dynamics • Comprehensive Step-by-Step Reason & Urdu Notes
                </p>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              <button
                onClick={() => { setActiveTab('practice'); setIsExamActive(false); }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'practice'
                    ? 'bg-white text-cyan-800 shadow-xs ring-1 ring-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-cyan-600" />
                Practice Mode (500)
              </button>

              <button
                onClick={() => setActiveTab('exam')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'exam'
                    ? 'bg-white text-cyan-800 shadow-xs ring-1 ring-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Timer className="w-4 h-4 text-amber-500" />
                Exam Test
              </button>

              <button
                onClick={() => { setActiveTab('simulators'); setIsExamActive(false); }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'simulators'
                    ? 'bg-white text-cyan-800 shadow-xs ring-1 ring-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Activity className="w-4 h-4 text-emerald-600" />
                Physics Labs (4)
              </button>

              <button
                onClick={() => { setActiveTab('formulas'); setIsExamActive(false); }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'formulas'
                    ? 'bg-white text-cyan-800 shadow-xs ring-1 ring-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calculator className="w-4 h-4 text-indigo-600" />
                Formula Bank (A-Z)
              </button>
            </nav>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">
                <span className="text-slate-500">Solved:</span>
                <span className="font-bold text-slate-800">{totalSolved}/500</span>
                <span className="text-slate-300">|</span>
                <span className="text-emerald-700 font-bold">{overallAccuracy}% Acc.</span>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 border-t border-slate-100 space-y-1">
              <button
                onClick={() => { setActiveTab('practice'); setIsExamActive(false); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left ${
                  activeTab === 'practice' ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700'
                }`}
              >
                <BookOpen className="w-4 h-4 text-cyan-600" /> Practice Mode (500 MCQs)
              </button>
              <button
                onClick={() => { setActiveTab('exam'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left ${
                  activeTab === 'exam' ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700'
                }`}
              >
                <Timer className="w-4 h-4 text-amber-500" /> Exam Simulator Mode
              </button>
              <button
                onClick={() => { setActiveTab('simulators'); setIsExamActive(false); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left ${
                  activeTab === 'simulators' ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700'
                }`}
              >
                <Activity className="w-4 h-4 text-emerald-600" /> Virtual Physics Labs
              </button>
              <button
                onClick={() => { setActiveTab('formulas'); setIsExamActive(false); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-left ${
                  activeTab === 'formulas' ? 'bg-cyan-50 text-cyan-800' : 'text-slate-700'
                }`}
              >
                <Calculator className="w-4 h-4 text-indigo-600" /> Formulas & Constants Table
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main App Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* TAB 1: PRACTICE MODE */}
        {activeTab === 'practice' && (
          <PracticeView
            allMCQs={allMCQs}
            userAnswers={userAnswers}
            onSelectOption={handleSelectOption}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onResetAnswers={handleResetAnswers}
            onOpenSimulators={() => setActiveTab('simulators')}
          />
        )}

        {/* TAB 2: EXAM SIMULATOR */}
        {activeTab === 'exam' && (
          <div>
            {!isExamActive ? (
              /* Exam Setup Screen */
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-8 border border-indigo-900/40 shadow-xl text-center">
                  <div className="w-14 h-14 bg-amber-500/20 border border-amber-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-400 shadow-inner">
                    <Timer className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Timed Mock Exam Simulator</h2>
                  <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                    Test your mastery under realistic exam conditions. Answers and step-by-step reasoning are hidden during the test and revealed upon submission along with an instant scorecard.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Configure Your Mock Test
                  </h3>

                  {/* Question Count Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Number of Questions:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[15, 25, 50, 100].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setExamQuestionCount(num)}
                          className={`p-3 rounded-xl border text-center transition ${
                            examQuestionCount === num
                              ? 'border-cyan-600 bg-cyan-50/80 text-cyan-900 font-bold ring-2 ring-cyan-500'
                              : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="text-lg">{num} MCQs</div>
                          <div className="text-[11px] text-slate-500 font-normal">
                            ~{Math.round(num * 1.25)} mins
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Module Scope */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Topic / Module Scope:
                    </label>
                    <select
                      value={examModuleScope}
                      onChange={(e) => setExamModuleScope(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="ALL">Full Syllabus (Modules A to T — All 500 Questions Pool)</option>
                      {modulesList.map((m) => (
                        <option key={m.code} value={m.code}>
                          Module {m.code}: {m.name} (Q{m.startId}–{m.endId})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Exam Instructions */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-cyan-600" /> Exam Instructions:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      <li>You are allotted 75 seconds per question. Timer will auto-submit when time expires.</li>
                      <li>You can mark questions for review and jump across questions using the question palette.</li>
                      <li>Instant grade breakdown, accuracy percentage, and complete explanations will be generated upon submission.</li>
                    </ul>
                  </div>

                  {/* Start Exam Button */}
                  <button
                    onClick={handleStartExam}
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-600 via-indigo-600 to-blue-600 text-white font-bold rounded-xl shadow-md hover:from-cyan-700 hover:to-indigo-700 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <Timer className="w-4 h-4" /> Start Mock Exam Now ({examQuestionCount} MCQs)
                  </button>
                </div>
              </div>
            ) : (
              /* Active Exam Screen */
              <ExamView
                questions={examQuestions}
                onFinishExam={handleEndExam}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={handleToggleBookmark}
              />
            )}
          </div>
        )}

        {/* TAB 3: INTERACTIVE SIMULATORS */}
        {activeTab === 'simulators' && (
          <SimulatorsHub onGoToMCQsByTopic={handleGoToMCQsByTopic} />
        )}

        {/* TAB 4: FORMULAS & CONSTANTS */}
        {activeTab === 'formulas' && <FormulaReferenceView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p className="font-medium text-slate-700">
            Physics Class 11 Complete A to Z Question Bank (500 MCQs)
          </p>
          <p className="text-slate-400">
            Solids & Fluid Dynamics • Covers Pages 88 to 107 of Textbook with Full Explanations & Urdu Conceptual Notes
          </p>
        </div>
      </footer>
    </div>
  );
}
