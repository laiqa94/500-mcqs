import React, { useState, useMemo } from 'react';
import { MCQ, Difficulty } from '../types/physics';
import { modulesList } from '../data/mcqs';
import { MCQCard } from './MCQCard';
import {
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  BookOpen,
  LayoutGrid,
  List,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface PracticeViewProps {
  allMCQs: MCQ[];
  userAnswers: Record<number, number>;
  onSelectOption: (qId: number, optionIdx: number) => void;
  bookmarkedIds: Set<number>;
  onToggleBookmark: (qId: number) => void;
  onResetAnswers: () => void;
  onOpenSimulators: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  allMCQs,
  userAnswers,
  onSelectOption,
  bookmarkedIds,
  onToggleBookmark,
  onResetAnswers,
  onOpenSimulators
}) => {
  const [selectedModule, setSelectedModule] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'UNANSWERED' | 'CORRECT' | 'WRONG' | 'BOOKMARKED'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jumpInput, setJumpInput] = useState<string>('');
  const [viewLayout, setViewLayout] = useState<'step' | 'list'>('step');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [showExplanationAlways, setShowExplanationAlways] = useState<boolean>(true);

  // Filtered MCQs
  const filteredMCQs = useMemo(() => {
    return allMCQs.filter((mcq) => {
      // Module filter
      if (selectedModule !== 'ALL' && mcq.module !== selectedModule) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'ALL' && mcq.difficulty !== selectedDifficulty) {
        return false;
      }
      // Status filter
      const ans = userAnswers[mcq.id];
      const isAnswered = ans !== undefined;
      const isCorrect = ans === mcq.correctAnswer;
      const isBookmarked = bookmarkedIds.has(mcq.id);

      if (statusFilter === 'UNANSWERED' && isAnswered) return false;
      if (statusFilter === 'CORRECT' && (!isAnswered || !isCorrect)) return false;
      if (statusFilter === 'WRONG' && (!isAnswered || isCorrect)) return false;
      if (statusFilter === 'BOOKMARKED' && !isBookmarked) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesText =
          mcq.question.toLowerCase().includes(q) ||
          mcq.topic.toLowerCase().includes(q) ||
          mcq.options.some((opt) => opt.toLowerCase().includes(q)) ||
          mcq.explanation.toLowerCase().includes(q) ||
          mcq.reasonUrdu.toLowerCase().includes(q) ||
          (mcq.formula && mcq.formula.toLowerCase().includes(q)) ||
          mcq.id.toString() === q;
        if (!matchesText) return false;
      }

      return true;
    });
  }, [allMCQs, selectedModule, selectedDifficulty, statusFilter, searchQuery, userAnswers, bookmarkedIds]);

  // Adjust step index if filtered list changes
  const activeStepMCQ = filteredMCQs[currentStepIndex] || filteredMCQs[0];

  // Stats calculation
  const totalAttempted = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => allMCQs[Number(id) - 1]?.correctAnswer === ans
  ).length;
  const accuracy = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

  const handleJumpToQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(jumpInput, 10);
    if (!isNaN(id) && id >= 1 && id <= 500) {
      // Reset filters so the question is visible
      setSelectedModule('ALL');
      setSelectedDifficulty('ALL');
      setStatusFilter('ALL');
      setSearchQuery('');
      const targetIndex = allMCQs.findIndex((m) => m.id === id);
      if (targetIndex !== -1) {
        setCurrentStepIndex(targetIndex);
      }
      setJumpInput('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Quick Stats */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-indigo-900/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Complete 500 MCQs A to Z (Modules A–T)
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Physics Practice & Step-by-Step Solutions</h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
              Every MCQ features conceptual explanations, mathematical derivations, formula references, and Roman Urdu notes for clarity.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 backdrop-blur-sm">
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 font-medium">Available</div>
              <div className="text-xl font-bold text-cyan-400">500</div>
            </div>
            <div className="text-center px-2 border-l border-slate-700">
              <div className="text-xs text-slate-400 font-medium">Attempted</div>
              <div className="text-xl font-bold text-amber-400">{totalAttempted}</div>
            </div>
            <div className="text-center px-2 border-l border-slate-700">
              <div className="text-xs text-slate-400 font-medium">Accuracy</div>
              <div className="text-xl font-bold text-emerald-400">{accuracy}%</div>
            </div>
            <div className="text-center px-2 border-l border-slate-700">
              <div className="text-xs text-slate-400 font-medium">Saved</div>
              <div className="text-xl font-bold text-purple-400">{bookmarkedIds.size}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters, Search & View Toggle */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200/80 space-y-4">
        {/* Row 1: Search & Quick Jump */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by topic, formula, question text, or keywords (e.g. Bernoulli, Stokes, Young's)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 px-1.5 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>

          <form onSubmit={handleJumpToQuestion} className="flex items-center gap-2 w-full sm:w-auto">
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Jump to Q#:</div>
            <input
              type="number"
              min="1"
              max="500"
              placeholder="1-500"
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              className="w-24 px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800"
            />
            <button
              type="submit"
              className="px-3 py-2 text-xs font-semibold bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
            >
              Go
            </button>
          </form>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 self-end sm:self-auto">
            <button
              onClick={() => setViewLayout('step')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition ${
                viewLayout === 'step'
                  ? 'bg-white text-cyan-800 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Card by card step view"
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Step View
            </button>
            <button
              onClick={() => setViewLayout('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition ${
                viewLayout === 'list'
                  ? 'bg-white text-cyan-800 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Continuous list view"
            >
              <List className="w-3.5 h-3.5" /> All List
            </button>
          </div>
        </div>

        {/* Row 2: Module Filter Buttons & Status Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
          <div className="font-semibold text-slate-700 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-cyan-600" /> Module (A-T):
          </div>

          <select
            value={selectedModule}
            onChange={(e) => {
              setSelectedModule(e.target.value);
              setCurrentStepIndex(0);
            }}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:ring-2 focus:ring-cyan-500"
          >
            <option value="ALL">All Modules (A to T — 500 MCQs)</option>
            {modulesList.map((m) => (
              <option key={m.code} value={m.code}>
                Module {m.code}: {m.name} (Q{m.startId}–{m.endId})
              </option>
            ))}
          </select>

          {/* Difficulty Dropdown */}
          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              setCurrentStepIndex(0);
            }}
            className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:ring-2 focus:ring-cyan-500"
          >
            <option value="ALL">All Difficulties</option>
            <option value="Basic">Basic Concepts</option>
            <option value="Intermediate">Intermediate Applications</option>
            <option value="Advanced">Advanced / Derivations</option>
          </select>

          {/* Status Filters */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200 ml-auto">
            <button
              onClick={() => { setStatusFilter('ALL'); setCurrentStepIndex(0); }}
              className={`px-2 py-1 rounded text-xs transition ${
                statusFilter === 'ALL' ? 'bg-white font-semibold text-slate-800 shadow-xs' : 'text-slate-600'
              }`}
            >
              All ({allMCQs.length})
            </button>
            <button
              onClick={() => { setStatusFilter('CORRECT'); setCurrentStepIndex(0); }}
              className={`px-2 py-1 rounded text-xs transition ${
                statusFilter === 'CORRECT' ? 'bg-white font-semibold text-emerald-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              Correct ({correctCount})
            </button>
            <button
              onClick={() => { setStatusFilter('WRONG'); setCurrentStepIndex(0); }}
              className={`px-2 py-1 rounded text-xs transition ${
                statusFilter === 'WRONG' ? 'bg-white font-semibold text-rose-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              Wrong ({totalAttempted - correctCount})
            </button>
            <button
              onClick={() => { setStatusFilter('BOOKMARKED'); setCurrentStepIndex(0); }}
              className={`px-2 py-1 rounded text-xs transition ${
                statusFilter === 'BOOKMARKED' ? 'bg-white font-semibold text-purple-700 shadow-xs' : 'text-slate-600'
              }`}
            >
              Bookmarks ({bookmarkedIds.size})
            </button>
          </div>
        </div>

        {/* Selected Module Summary Banner if single module selected */}
        {selectedModule !== 'ALL' && (
          <div className="bg-cyan-50/70 border border-cyan-200/80 rounded-lg p-3 text-xs text-cyan-900 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-cyan-700 mt-0.5 shrink-0" />
            <div>
              <span className="font-bold">
                Module {selectedModule}: {modulesList.find((m) => m.code === selectedModule)?.name}
              </span>
              <p className="text-slate-600 mt-0.5">
                {modulesList.find((m) => m.code === selectedModule)?.summary}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      {filteredMCQs.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
          <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No MCQs matched your filters</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search keyword or switching module and status filters back to "All".
          </p>
          <button
            onClick={() => {
              setSelectedModule('ALL');
              setSelectedDifficulty('ALL');
              setStatusFilter('ALL');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-lg text-xs font-semibold hover:bg-cyan-700 transition"
          >
            Clear All Filters
          </button>
        </div>
      ) : viewLayout === 'step' ? (
        /* Single Step Mode */
        <div className="space-y-4">
          {/* Step Navigation Bar */}
          <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 text-xs shadow-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">
                Question {currentStepIndex + 1} of {filteredMCQs.length}
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500">
                (Global ID: <strong className="text-slate-700">#{activeStepMCQ?.id}</strong>)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <button
                disabled={currentStepIndex >= filteredMCQs.length - 1}
                onClick={() => setCurrentStepIndex((prev) => Math.min(filteredMCQs.length - 1, prev + 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600 font-semibold text-white hover:bg-cyan-700 disabled:opacity-40 disabled:pointer-events-none transition"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Card */}
          {activeStepMCQ && (
            <MCQCard
              mcq={activeStepMCQ}
              selectedOption={userAnswers[activeStepMCQ.id] ?? null}
              onSelectOption={(optIdx) => onSelectOption(activeStepMCQ.id, optIdx)}
              showExplanation={showExplanationAlways || userAnswers[activeStepMCQ.id] !== undefined}
              isBookmarked={bookmarkedIds.has(activeStepMCQ.id)}
              onToggleBookmark={() => onToggleBookmark(activeStepMCQ.id)}
            />
          )}

          {/* Mini Quick Jump Grid for current filter */}
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <div className="text-xs font-semibold text-slate-600 mb-2 flex items-center justify-between">
              <span>Quick Navigation ({filteredMCQs.length} questions):</span>
              <span className="text-slate-400 font-normal">Click any number to jump</span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-1 border border-slate-100 rounded-lg">
              {filteredMCQs.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isSelected = idx === currentStepIndex;
                let bg = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (ans !== undefined) {
                  bg = ans === q.correctAnswer ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800';
                }
                if (isSelected) {
                  bg += ' ring-2 ring-cyan-500 font-bold';
                }
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`w-7 h-7 rounded text-[11px] font-medium flex items-center justify-center transition ${bg}`}
                    title={`Q#${q.id} - ${q.topic}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* List Mode: Continuous scroll */
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Showing {filteredMCQs.length} MCQs matching criteria</span>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showExplanationAlways}
                  onChange={(e) => setShowExplanationAlways(e.target.checked)}
                  className="rounded text-cyan-600 focus:ring-cyan-500"
                />
                <span className="text-slate-700 font-medium">Always show solutions & reason</span>
              </label>
            </div>
          </div>

          {filteredMCQs.map((mcq) => (
            <MCQCard
              key={mcq.id}
              mcq={mcq}
              selectedOption={userAnswers[mcq.id] ?? null}
              onSelectOption={(optIdx) => onSelectOption(mcq.id, optIdx)}
              showExplanation={showExplanationAlways || userAnswers[mcq.id] !== undefined}
              isBookmarked={bookmarkedIds.has(mcq.id)}
              onToggleBookmark={() => onToggleBookmark(mcq.id)}
            />
          ))}
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all your recorded practice answers?')) {
                onResetAnswers();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Practice Answers
          </button>
          <span className="text-xs text-slate-500">
            Progress is automatically saved in browser session.
          </span>
        </div>

        <button
          onClick={onOpenSimulators}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-semibold rounded-lg hover:from-cyan-700 hover:to-indigo-700 transition shadow-xs"
        >
          Explore Interactive Physics Labs <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
