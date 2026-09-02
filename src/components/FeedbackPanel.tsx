import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Bookmark,
  BookMarked,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { Question, UserAnswer } from '../types';

interface FeedbackPanelProps {
  question: Question;
  userAnswer: UserAnswer;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  question,
  userAnswer,
  onNextQuestion,
  isLastQuestion,
  isBookmarked,
  onToggleBookmark,
}) => {
  const isCorrect = userAnswer.isCorrect;
  const { feedback, options, correctOptionId } = question;
  const correctOptionIndex = options.findIndex((opt) => opt.id === correctOptionId);
  const correctOptionLetter = String.fromCharCode(65 + (correctOptionIndex >= 0 ? correctOptionIndex : 0));

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Top Header with Pulsing Live Status & Study Bookmark */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 text-emerald-700">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <h3 className="font-bold uppercase tracking-widest text-xs text-emerald-900">
              Retroalimentación Detallada
            </h3>
          </div>

          <button
            id="btn-toggle-bookmark"
            onClick={onToggleBookmark}
            className={`px-3 py-1.5 text-xs font-medium border rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs ${
              isBookmarked
                ? 'bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold'
                : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-indigo-600 text-indigo-600' : 'text-slate-500'}`} />
            <span>{isBookmarked ? 'Guardada' : 'Guardar'}</span>
          </button>
        </div>

        {/* Primary Analysis Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs mb-5">
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <h4 className="font-bold text-slate-800 text-sm sm:text-base">
              {isCorrect ? 'Análisis de la Respuesta Correcta' : 'Diagnóstico Clínico Confirmado'} ({correctOptionLetter})
            </h4>
          </div>

          <p className="text-slate-600 leading-relaxed text-xs sm:text-sm mb-4">
            {feedback.detailedRationale}
          </p>

          {/* Key Concept / Clinical Pearl Callout */}
          <div className="p-3.5 sm:p-4 bg-slate-100 rounded border-l-4 border-indigo-500">
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
              Concepto Clave: {feedback.summary}
            </p>
            <p className="text-xs text-slate-700 italic leading-relaxed">
              "{feedback.clinicalPearl}"
            </p>
          </div>
        </div>

        {/* Distractors & Differential Diagnosis */}
        {feedback.distractorAnalysis && feedback.distractorAnalysis.length > 0 && (
          <div className="space-y-3 mb-5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Diagnóstico Diferencial y Distractores
            </h4>
            <div className="space-y-2.5">
              {feedback.distractorAnalysis.map((dist, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-slate-200 rounded-lg text-xs hover:border-slate-300 transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-slate-800 mb-1">
                    <span className="text-rose-500 text-sm font-bold leading-none">✕</span>
                    <span>{dist.optionText}</span>
                  </div>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed pl-4">
                    {dist.whyIncorrect}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DSM Criteria Reference */}
        <div className="flex items-center gap-2 mb-5 text-[11px] text-slate-500">
          <BookMarked className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>
            Referencia: <strong className="text-slate-700 font-semibold">{feedback.dsmCriteriaReference}</strong>
          </span>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        id="btn-next-question"
        onClick={onNextQuestion}
        className="w-full mt-4 py-3.5 sm:py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-md hover:bg-indigo-700 active:transform active:scale-95 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <span>{isLastQuestion ? 'Ver Resumen Final y Diagnóstico' : 'Siguiente Pregunta'}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
