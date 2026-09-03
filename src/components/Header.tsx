import React from 'react';
import { BookOpen, RefreshCw, Brain, CheckCircle2, FileCheck, BookCheck, ShieldCheck, Sparkles } from 'lucide-react';
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
}) => {
  const progressPercent = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  return (
    <header className="bg-white border-b border-slate-200 shadow-xs sticky top-0 z-30">
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
                  <h1 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 leading-tight">
                    Módulo de Psicopatología Clínica
                  </h1>
                  <span className="hidden md:inline-block px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider border border-indigo-100">
                    DSM-5-TR / CIE-11
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Evaluación diagnóstica, artículos clínicos y análisis diferencial
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs (Simulador, Flashcards, Guías) */}
          <div className="hidden md:flex items-center p-1 bg-slate-100/90 rounded-lg border border-slate-200/80 text-xs">
            <button
              id="nav-tab-quiz"
              onClick={() => onChangeView('quiz')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'quiz'
                  ? 'bg-white text-indigo-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-indigo-600" />
              Simulador de Casos
            </button>
            <button
              id="nav-tab-flashcards"
              onClick={() => onChangeView('flashcards')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'flashcards'
                  ? 'bg-white text-indigo-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Flashcards
            </button>
            <button
              id="nav-tab-guides"
              onClick={() => onChangeView('guides')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeView === 'guides'
                  ? 'bg-white text-indigo-700 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <BookCheck className="w-3.5 h-3.5 text-indigo-600" />
              Artículos
            </button>
          </div>

          {/* Right Header: Progress Bar & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* General Progress (Visible only in quiz mode or as condensed indicator) */}
            {activeView === 'quiz' && (
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Progreso: <strong className="text-slate-800">{totalAnswered}/{totalQuestions}</strong>
                </span>
                <div className="w-24 sm:w-36 h-2 bg-slate-100 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                id="btn-open-glossary"
                onClick={onOpenGlossary}
                className="px-2.5 sm:px-3 py-1.5 text-xs font-medium border border-slate-300 rounded hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                title="Consultar Criterios Diagnósticos DSM-5"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden lg:inline">Glosario DSM-5</span>
                <span className="lg:hidden">DSM-5</span>
              </button>

              {activeView === 'quiz' && (
                <button
                  id="btn-reset-quiz"
                  onClick={onResetQuiz}
                  className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-medium border border-slate-300 rounded hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
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
        <div className="md:hidden py-2 border-t border-slate-100 flex items-center justify-center gap-2">
          <button
            onClick={() => onChangeView('quiz')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeView === 'quiz' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Casos
          </button>
          <button
            onClick={() => onChangeView('flashcards')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeView === 'flashcards' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Flashcards
          </button>
          <button
            onClick={() => onChangeView('guides')}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              activeView === 'guides' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Guías
          </button>
        </div>

        {/* Category Navigation Sub-bar (Only in Quiz View) */}
        {activeView === 'quiz' && (
          <div className="py-2.5 border-t border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
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
                      ? 'bg-indigo-600 text-white font-semibold shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
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
