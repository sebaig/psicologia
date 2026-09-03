import React from 'react';
import { BookOpen, RefreshCw, Brain, CheckCircle2, FileCheck, BookCheck, ShieldCheck, Sparkles, Sun, Moon } from 'lucide-react';
import { CategoryId } from '../types';
import { CATEGORIES_CONFIG } from '../data/questions';

export type ActiveAppView = 'quiz' | 'guides' | 'flashcards';

interface HeaderProps {
  activeView: ActiveAppView;
  onChangeView: (view: ActiveAppView) => void;
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenGlossary: () => void;
  onResetQuiz: () => void;
  totalAnswered: number;
  totalQuestions: number;
  correctAnswersCount: number;
  isCompleted: boolean;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onChangeView,
  selectedCategory,
  onSelectCategory,
  onOpenGlossary,
  onResetQuiz,
  totalAnswered,
  totalQuestions,
  correctAnswersCount,
  isCompleted,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const progressPercent = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  return (
    <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xs sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Header Bar */}
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo and App Title */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onChangeView('quiz')}
              className="flex items-center gap-3 text-left cursor-pointer group"
              title="Ir al inicio"
            >
              <div className="w-8 h-8 bg-indigo-600 group-hover:bg-indigo-700 transition-colors rounded flex items-center justify-center text-white font-bold text-base shadow-xs shrink-0 select-none">
                ψ
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
                    Módulo de Psicopatología Clínica
                  </h1>
                  <span className="hidden md:inline-block px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-[10px] font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-800">
                    DSM-5-TR / CIE-11
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                  Evaluación diagnóstica, artículos clínicos y análisis diferencial
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs (Simulador, Flashcards, Guías) */}
          <div className="hidden md:flex items-center p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
            <button
              id="nav-tab-quiz"
              onClick={() => onChangeView('quiz')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'quiz'
                  ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 shadow-xs border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Simulador de Casos
            </button>
            <button
              id="nav-tab-flashcards"
              onClick={() => onChangeView('flashcards')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'flashcards'
                  ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 shadow-xs border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Flashcards
            </button>
            <button
              id="nav-tab-guides"
              onClick={() => onChangeView('guides')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'guides'
                  ? 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 shadow-xs border border-slate-200/60 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <BookCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Artículos
            </button>
          </div>

          {/* Right Header: Progress Bar & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            {/* General Progress (Visible only in quiz mode or as condensed indicator) */}
            {activeView === 'quiz' && (
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Progreso: <strong className="text-slate-800 dark:text-slate-200">{totalAnswered}/{totalQuestions}</strong>
                </span>
                <div className="w-24 sm:w-36 h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 dark:bg-indigo-600 transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                id="btn-open-glossary"
                onClick={onOpenGlossary}
                className="px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                title="Consultar Criterios Diagnósticos DSM-5"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span className="hidden lg:inline">Glosario DSM-5</span>
                <span className="lg:hidden">DSM-5</span>
              </button>

              {activeView === 'quiz' && (
                <button
                  id="btn-reset-quiz"
                  onClick={onResetQuiz}
                  className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
                  title="Reiniciar o pausar sesión"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Reiniciar</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="md:hidden py-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2">
          <button
            onClick={() => onChangeView('quiz')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeView === 'quiz' ? 'bg-indigo-600 dark:bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Casos
          </button>
          <button
            onClick={() => onChangeView('flashcards')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeView === 'flashcards' ? 'bg-indigo-600 dark:bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => onChangeView('guides')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeView === 'guides' ? 'bg-indigo-600 dark:bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            Guías
          </button>
        </div>

        {/* Category Navigation Sub-bar (Only in Quiz View) */}
        {activeView === 'quiz' && (
          <div className="py-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              Filtro:
            </span>
            {CATEGORIES_CONFIG.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-pill-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id as CategoryId)}
                  className={`whitespace-nowrap px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-700 text-white font-semibold shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
