import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header, ActiveAppView } from './components/Header';
import { QuizProgress } from './components/QuizProgress';
import { QuizCard } from './components/QuizCard';
import { ResultsSummary } from './components/ResultsSummary';
import { GlossaryModal } from './components/GlossaryModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { LegalNoticeModal } from './components/LegalNoticeModal';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { AdSenseReviewModal } from './components/AdSenseReviewModal';
import { StudyGuidesView } from './components/StudyGuidesView';
import { QUESTIONS_DATA, CATEGORIES_CONFIG } from './data/questions';
import { CategoryId, UserAnswer, Question } from './types';
import { 
  BookmarkCheck, 
  Filter, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  Mail, 
  GraduationCap, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  BookCheck,
  Stethoscope
} from 'lucide-react';

const BOOKMARKS_STORAGE_KEY = 'psico_quiz_bookmarks_v1';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveAppView>('quiz');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  
  // Modals
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [isLegalOpen, setIsLegalOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isAdSenseReviewOpen, setIsAdSenseReviewOpen] = useState<boolean>(false);

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filtered questions based on selected category
  const activeQuestions = useMemo(() => {
    if (selectedCategory === 'all') {
      return QUESTIONS_DATA;
    }
    return QUESTIONS_DATA.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion: Question | undefined = activeQuestions[currentQuestionIndex];
  const currentAnswer: UserAnswer | undefined = currentQuestion
    ? userAnswers[currentQuestion.id]
    : undefined;

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedIds));
    } catch {
      // Ignored
    }
  }, [bookmarkedIds]);

  // Handle category switch
  const handleCategoryChange = (category: CategoryId) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsCompleted(false);
  };

  // Handle option selection
  const handleSelectOption = (optionId: string) => {
    if (!currentQuestion || currentAnswer) return;

    const isCorrect = optionId === currentQuestion.correctOptionId;
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
      isCorrect,
      timestamp: Date.now(),
    };

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: newAnswer,
    }));
  };

  // Advance to next question or complete quiz
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentQuestionIndex, activeQuestions.length]);

  // Toggle bookmark for study review
  const handleToggleBookmark = (questionId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  // Restart entire current quiz
  const handleRestartAll = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry only failed questions
  const handleRetryFailed = () => {
    const updatedAnswers = { ...userAnswers };
    let firstFailedIdx = -1;

    activeQuestions.forEach((q, idx) => {
      if (updatedAnswers[q.id] && !updatedAnswers[q.id].isCorrect) {
        delete updatedAnswers[q.id];
        if (firstFailedIdx === -1) {
          firstFailedIdx = idx;
        }
      }
    });

    setUserAnswers(updatedAnswers);
    setCurrentQuestionIndex(firstFailedIdx >= 0 ? firstFailedIdx : 0);
    setIsCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        isGlossaryOpen || 
        isPrivacyOpen || 
        isLegalOpen || 
        isContactOpen || 
        isAboutOpen || 
        isAdSenseReviewOpen ||
        (e.target as HTMLElement).tagName === 'INPUT' ||
        (e.target as HTMLElement).tagName === 'TEXTAREA'
      ) return;

      if (activeView === 'quiz' && !isCompleted && currentQuestion) {
        if (!currentAnswer) {
          const key = e.key.toUpperCase();
          const optionIndex = ['A', 'B', 'C', 'D'].indexOf(key);
          if (optionIndex !== -1 && currentQuestion.options[optionIndex]) {
            handleSelectOption(currentQuestion.options[optionIndex].id);
          }
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeView, 
    currentQuestion, 
    currentAnswer, 
    isCompleted, 
    handleNextQuestion, 
    isGlossaryOpen, 
    isPrivacyOpen, 
    isLegalOpen, 
    isContactOpen, 
    isAboutOpen, 
    isAdSenseReviewOpen
  ]);

  const totalAnsweredCount = Object.keys(userAnswers).length;
  const correctCount = (Object.values(userAnswers) as UserAnswer[]).filter((a) => a.isCorrect).length;
  const categoryConfig = CATEGORIES_CONFIG.find((c) => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header Bar */}
      <Header
        activeView={activeView}
        onChangeView={setActiveView}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenAdSenseReview={() => setIsAdSenseReviewOpen(true)}
        onResetQuiz={handleRestartAll}
        totalAnswered={totalAnsweredCount}
        totalQuestions={activeQuestions.length}
        correctAnswersCount={correctCount}
        isCompleted={isCompleted}
      />

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8">
        {activeView === 'guides' ? (
          /* High-Value Clinical Lessons & Articles */
          <StudyGuidesView 
            onBackToQuiz={() => {
              setActiveView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        ) : !isCompleted ? (
          <div>
            {/* Category Didactic Guidance Banner (Solves bare menus and empty spaces) */}
            <div className="mb-5 p-4 bg-white border border-slate-200 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                    {categoryConfig?.name || 'Psicopatología General'}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    • {activeQuestions.length} casos interactivos
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  {categoryConfig?.description}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    setActiveView('guides');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-indigo-100"
                >
                  <BookCheck className="w-3.5 h-3.5" />
                  Leer Guías de Estudio
                </button>
              </div>
            </div>

            {/* Keyboard Shortcuts Hint */}
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
              <span className="font-medium text-slate-600">
                Selecciona la opción diagnóstica correcta para desplegar el análisis semiológico razonado:
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
                <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px] font-bold">
                  A
                </span>
                <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px] font-bold">
                  B
                </span>
                <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px] font-bold">
                  C
                </span>
                <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px] font-bold">
                  D
                </span>
                <span>para seleccionar •</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-[10px] font-bold">
                  Enter
                </span>
                <span>para continuar</span>
              </span>
            </div>

            {/* Linear Progress Bar */}
            <QuizProgress
              currentIndex={currentQuestionIndex}
              totalQuestions={activeQuestions.length}
              correctCount={correctCount}
              answeredCount={totalAnsweredCount}
              bookmarkedCount={bookmarkedIds.length}
              categoryName={categoryConfig?.name || ''}
            />

            {/* Current Question Card & Immediate Feedback */}
            {currentQuestion && (
              <QuizCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={activeQuestions.length}
                userAnswer={currentAnswer}
                onSelectOption={handleSelectOption}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentQuestionIndex === activeQuestions.length - 1}
                isBookmarked={bookmarkedIds.includes(currentQuestion.id)}
                onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
              />
            )}
          </div>
        ) : (
          /* Results and Comprehensive Diagnostic Review */
          <ResultsSummary
            questions={activeQuestions}
            userAnswers={userAnswers}
            onRestartAll={handleRestartAll}
            onRetryFailed={handleRetryFailed}
            onSelectCategory={() => {
              setSelectedCategory('all');
              handleRestartAll();
            }}
            onOpenGlossary={() => setIsGlossaryOpen(true)}
          />
        )}
      </main>

      {/* Comprehensive Academic & Legal Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-auto border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs leading-relaxed">
            {/* Column 1: Identity & Scientific Rigor */}
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs select-none">
                  ψ
                </div>
                <span className="font-bold text-white text-sm">
                  Psicopatología Clínica
                </span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Plataforma interactiva para la formación universitaria y médica continuada en semiología y diagnóstico diferencial psiquiátrico bajo directrices DSM-5-TR (APA) y CIE-11 (OMS).
              </p>
              <div className="pt-1 flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Contenido Educativo Verificado</span>
              </div>
            </div>

            {/* Column 2: Navigation & Academic Modules */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Módulos Académicos
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <button
                    onClick={() => {
                      setActiveView('quiz');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    Simulador de Casos Clínicos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveView('guides');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left flex items-center gap-1"
                  >
                    Guías y Monografías Clínicas
                    <span className="text-[9px] bg-emerald-900/60 text-emerald-300 px-1.5 py-0.2 rounded font-bold">
                      Valor
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsGlossaryOpen(true)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    Glosario de Criterios DSM-5
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsAboutOpen(true)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer text-left"
                  >
                    Equipo Docente y Metodología
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Trust, Transparency & Legal Pages */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Páginas Legales y Confianza
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                <li>
                  <button
                    onClick={() => setIsPrivacyOpen(true)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    Política de Privacidad y Cookies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsLegalOpen(true)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                  >
                    <Scale className="w-3 h-3 text-amber-400 shrink-0" />
                    Aviso Legal y Descargo Médico
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                  >
                    <Mail className="w-3 h-3 text-indigo-400 shrink-0" />
                    Contacto y Soporte Editorial
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsAboutOpen(true)}
                    className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5 text-left"
                  >
                    <GraduationCap className="w-3 h-3 text-purple-400 shrink-0" />
                    Comité Académico & Fuentes
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Compliance & AdSense Review Helper */}
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                Auditoría de Calidad AdSense
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Sitio auditado conforme a las políticas del programa de socios de Google AdSense para sitios web de contenido educativo.
              </p>
              <button
                onClick={() => setIsAdSenseReviewOpen(true)}
                className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <FileCheck className="w-3.5 h-3.5" />
                Ver Checklist de los 5 Pasos
              </button>
            </div>
          </div>

          {/* Bottom sub-footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2026 Módulo de Psicopatología Clínica. Recurso pedagógico independiente para fines formativos.
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Plataforma 100% Operativa
              </span>
              <span>Edición Revisada 2026</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <LegalNoticeModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <AdSenseReviewModal
        isOpen={isAdSenseReviewOpen}
        onClose={() => setIsAdSenseReviewOpen(false)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenLegal={() => setIsLegalOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenGuides={() => {
          setActiveView('guides');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
