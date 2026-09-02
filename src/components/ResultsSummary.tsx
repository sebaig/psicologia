import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  AlertTriangle,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { Question, UserAnswer } from '../types';

interface ResultsSummaryProps {
  questions: Question[];
  userAnswers: Record<string, UserAnswer>;
  onRestartAll: () => void;
  onRetryFailed: () => void;
  onSelectCategory: () => void;
  onOpenGlossary: () => void;
}

export const ResultsSummary: React.FC<ResultsSummaryProps> = ({
  questions,
  userAnswers,
  onRestartAll,
  onRetryFailed,
  onSelectCategory,
  onOpenGlossary,
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const totalQuestions = questions.length;
  const correctCount = questions.filter(
    (q) => userAnswers[q.id]?.isCorrect
  ).length;
  const incorrectCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Trigger confetti for good results
  useEffect(() => {
    if (percentage >= 70) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback if canvas-confetti fails in test environment
      }
    }
  }, [percentage]);

  // Performance category breakdown
  interface CategoryStat {
    total: number;
    correct: number;
    label: string;
  }

  const initialStats: Record<string, CategoryStat> = {};

  const categoryStats = questions.reduce((acc, q) => {
    const cat = q.category;
    if (!acc[cat]) {
      acc[cat] = { total: 0, correct: 0, label: q.categoryLabel };
    }
    acc[cat].total += 1;
    if (userAnswers[q.id]?.isCorrect) {
      acc[cat].correct += 1;
    }
    return acc;
  }, initialStats);

  const getClinicalFeedbackGrade = () => {
    if (percentage >= 90) {
      return {
        title: 'Excelente Dominio Psicopatológico',
        desc: 'Demuestras un discernimiento clínico impecable según los criterios diagnósticos del DSM-5 y CIE-11.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      };
    }
    if (percentage >= 70) {
      return {
        title: 'Buena Competencia Diagnóstica',
        desc: 'Comprendes los núcleos patológicos esenciales, con pequeñas dudas en criterios temporales o diferenciales sutiles.',
        color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      };
    }
    if (percentage >= 50) {
      return {
        title: 'Nivel Intermedio en Formación',
        desc: 'Identificas los cuadros clínicos centrales pero es aconsejable reforzar diagnósticos diferenciales y síntomas negativos vs positivos.',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
      };
    }
    return {
      title: 'Repaso Clínico Recomendado',
      desc: 'Te sugerimos consultar el Glosario de Criterios DSM-5 y volver a realizar el examen para afianzar los conceptos fundamentales.',
      color: 'text-rose-800 bg-rose-50 border-rose-200',
    };
  };

  const grade = getClinicalFeedbackGrade();

  return (
    <div className="space-y-6">
      {/* Top Results Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs text-center">
        <div className="inline-flex w-12 h-12 bg-indigo-600 rounded-lg text-white items-center justify-center mb-4 shadow-2xs">
          <Trophy className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Resultados de la Evaluación Clínica
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          Has completado el bloque formativo de psicopatología. A continuación puedes revisar tu rendimiento y el desglose caso por caso.
        </p>

        {/* Big Score Card */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-6 px-6 bg-slate-50 rounded-xl border border-slate-200 max-w-xl mx-auto mb-6">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {percentage}%
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Puntuación Final
            </span>
          </div>

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {correctCount}
              </div>
              <span className="text-xs text-slate-500">Aciertos</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">
                {incorrectCount}
              </div>
              <span className="text-xs text-slate-500">Errores</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">
                {totalQuestions}
              </div>
              <span className="text-xs text-slate-500">Total</span>
            </div>
          </div>
        </div>

        {/* Clinical Level Badge */}
        <div className={`p-4 rounded-lg border max-w-xl mx-auto text-left ${grade.color}`}>
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm sm:text-base mb-0.5">
                {grade.title}
              </h4>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                {grade.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {incorrectCount > 0 && (
            <button
              id="btn-retry-failed"
              onClick={onRetryFailed}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-rose-300 rounded text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-2xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repasar {incorrectCount} falladas</span>
            </button>
          )}

          <button
            id="btn-restart-quiz"
            onClick={onRestartAll}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-slate-300 rounded hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar test completo</span>
          </button>

          <button
            id="btn-change-cat"
            onClick={onSelectCategory}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-indigo-300 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors cursor-pointer shadow-2xs"
          >
            <span>Ver todas las categorías</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category breakdown bar meters */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Rendimiento por Área Psicopatológica</span>
        </h3>
        <div className="space-y-3.5">
          {(Object.entries(categoryStats) as [string, CategoryStat][]).map(([key, stat]) => {
            const catPct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div key={key} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-800">{stat.label}</span>
                  <span className="text-slate-500">
                    {stat.correct}/{stat.total} ({catPct}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      catPct >= 70
                        ? 'bg-emerald-500'
                        : catPct >= 50
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${catPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Question Review List */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Revisión Detallada Caso por Caso</span>
          </h3>
          <span className="text-xs text-slate-500">
            Haz clic en cualquier pregunta para ver su retroalimentación
          </span>
        </div>

        <div className="space-y-3">
          {questions.map((q, idx) => {
            const answer = userAnswers[q.id];
            const isCorrect = answer?.isCorrect;
            const isExpanded = expandedQuestionId === q.id;
            const selectedOpt = q.options.find((opt) => opt.id === answer?.selectedOptionId);
            const correctOpt = q.options.find((opt) => opt.id === q.correctOptionId);

            return (
              <div
                key={q.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
              >
                {/* Header row */}
                <button
                  id={`review-item-${q.id}`}
                  onClick={() =>
                    setExpandedQuestionId(isExpanded ? null : q.id)
                  }
                  className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-400">
                          #{idx + 1}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {q.categoryLabel}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {q.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {isCorrect ? 'Correcta' : 'Incorrecta'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-200 space-y-4 text-sm">
                    {/* Vignette if present */}
                    {q.clinicalVignette && (
                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 italic text-xs sm:text-sm">
                        "{q.clinicalVignette}"
                      </div>
                    )}

                    <p className="font-semibold text-slate-900">
                      {q.question}
                    </p>

                    {/* Answer choices comparison */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div
                        className={`p-3 rounded-lg border ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50 border-rose-200 text-rose-950'
                        }`}
                      >
                        <span className="font-bold block text-xs uppercase mb-1">
                          Tu Selección:
                        </span>
                        <span>{selectedOpt?.text || 'Sin respuesta'}</span>
                      </div>

                      <div className="p-3 rounded-lg border bg-emerald-50 border-emerald-200 text-emerald-950">
                        <span className="font-bold block text-xs uppercase mb-1 text-emerald-800">
                          Respuesta Correcta:
                        </span>
                        <span>{correctOpt?.text}</span>
                      </div>
                    </div>

                    {/* Rationale and criteria */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Fundamento Clínico
                        </span>
                        <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                          {q.feedback.detailedRationale}
                        </p>
                      </div>

                      {/* Distractor breakdown */}
                      {q.feedback.distractorAnalysis && (
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                            Por qué se descartan las otras opciones
                          </span>
                          <div className="space-y-1.5">
                            {q.feedback.distractorAnalysis.map((dist, dIdx) => (
                              <div key={dIdx} className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                                <strong className="text-slate-800 block">
                                  {dist.optionText}:
                                </strong>
                                {dist.whyIncorrect}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pearl */}
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-xs text-amber-900 font-medium">
                        <strong>Clave Clínica: </strong> {q.feedback.clinicalPearl}
                      </div>

                      <div className="text-xs text-slate-500 font-medium">
                        Criterio: {q.feedback.dsmCriteriaReference}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
