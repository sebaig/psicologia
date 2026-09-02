import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, CheckCircle2, XCircle } from 'lucide-react';
import { Question, UserAnswer } from '../types';
import { FeedbackPanel } from './FeedbackPanel';

interface QuizCardProps {
  question: Question;
  questionNumber?: number;
  totalQuestions?: number;
  userAnswer?: UserAnswer;
  onSelectOption: (optionId: string) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
  onSelectOption,
  onNextQuestion,
  isLastQuestion,
  isBookmarked,
  onToggleBookmark,
}) => {
  const isAnswered = Boolean(userAnswer);

  const getDifficultyBadge = (diff: Question['difficulty']) => {
    switch (diff) {
      case 'básico':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'intermedio':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'avanzado':
        return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  const getTypeBadge = (type: Question['type']) => {
    switch (type) {
      case 'viñeta_clinica':
        return 'Viñeta Clínica';
      case 'criterio_dsm5':
        return 'Criterio Diagnóstico';
      case 'diagnostico_diferencial':
        return 'Diagnóstico Diferencial';
    }
  };

  const renderQuestionSection = () => (
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Step pill & metadata badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {questionNumber && totalQuestions && (
            <span className="inline-block px-2 py-1 rounded bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              Pregunta {questionNumber} de {totalQuestions}
            </span>
          )}
          <span className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            {question.categoryLabel}
          </span>
          <span
            className={`px-2 py-0.5 rounded text-xs font-medium border capitalize ${getDifficultyBadge(
              question.difficulty
            )}`}
          >
            {question.difficulty}
          </span>
          <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200">
            {getTypeBadge(question.type)}
          </span>
        </div>

        {/* Question Heading Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-4">
          {question.title}
        </h2>

        {/* Clinical Vignette (if present) */}
        {question.clinicalVignette && (
          <div className="mb-6 p-4 sm:p-5 rounded-lg bg-slate-50 border-l-4 border-indigo-500 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed font-sans">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Stethoscope className="w-4 h-4" />
              <span>Historia Clínica & Examen Psicopatológico</span>
            </div>
            <p className="italic text-slate-700">
              "{question.clinicalVignette}"
            </p>
          </div>
        )}

        {/* Direct Question Prompt */}
        <div className="mb-6">
          <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
            {question.question}
          </p>
        </div>

        {/* Options List styled exactly to Professional Polish design */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            const isSelected = userAnswer?.selectedOptionId === option.id;
            const isCorrect = question.correctOptionId === option.id;

            if (!isAnswered) {
              return (
                <div
                  key={option.id}
                  id={`opt-${question.id}-${option.id}`}
                  onClick={() => onSelectOption(option.id)}
                  className="p-4 border-2 border-slate-100 rounded-lg flex items-center gap-4 hover:border-slate-200 cursor-pointer transition-colors bg-white group"
                >
                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-700 group-hover:border-indigo-400 group-hover:text-indigo-600 shrink-0 transition-colors">
                    {letter}
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700 text-sm sm:text-base font-normal group-hover:text-slate-900 leading-snug">
                      {option.text}
                    </p>
                    {option.subtext && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {option.subtext}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            // State: Option is Answered
            if (isSelected && isCorrect) {
              // User correctly selected this option (theme-matching indigo/highlight)
              return (
                <div
                  key={option.id}
                  id={`opt-${question.id}-${option.id}`}
                  className="p-4 border-2 border-indigo-500 bg-indigo-50 rounded-lg flex items-center gap-4 cursor-default relative"
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {letter}
                  </div>
                  <div className="flex-1 pr-8">
                    <p className="text-indigo-900 font-medium text-sm sm:text-base leading-snug">
                      {option.text}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 text-indigo-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
              );
            }

            if (isSelected && !isCorrect) {
              // User incorrectly selected this option
              return (
                <div
                  key={option.id}
                  id={`opt-${question.id}-${option.id}`}
                  className="p-4 border-2 border-rose-400 bg-rose-50 rounded-lg flex items-center gap-4 cursor-default relative"
                >
                  <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {letter}
                  </div>
                  <div className="flex-1 pr-8">
                    <p className="text-rose-950 font-medium text-sm sm:text-base leading-snug">
                      {option.text}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 text-rose-600">
                    <XCircle className="w-6 h-6" />
                  </div>
                </div>
              );
            }

            if (isCorrect) {
              // This was the correct diagnostic answer when user made a mistake
              return (
                <div
                  key={option.id}
                  id={`opt-${question.id}-${option.id}`}
                  className="p-4 border-2 border-emerald-500 bg-emerald-50/70 rounded-lg flex items-center gap-4 cursor-default relative"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {letter}
                  </div>
                  <div className="flex-1 pr-8">
                    <p className="text-emerald-950 font-medium text-sm sm:text-base leading-snug">
                      {option.text}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
              );
            }

            // Neutral disabled options
            return (
              <div
                key={option.id}
                id={`opt-${question.id}-${option.id}`}
                className="p-4 border-2 border-slate-100 rounded-lg flex items-center gap-4 opacity-50 cursor-not-allowed bg-slate-50/50"
              >
                <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0">
                  {letter}
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-snug">
                  {option.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {isAnswered && userAnswer ? (
        /* Split Workstation Layout on Desktop (Grid 12 cols: 7 / 5) */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          <section className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
            {renderQuestionSection()}
          </section>

          <aside className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <FeedbackPanel
              question={question}
              userAnswer={userAnswer}
              onNextQuestion={onNextQuestion}
              isLastQuestion={isLastQuestion}
              isBookmarked={isBookmarked}
              onToggleBookmark={onToggleBookmark}
            />
          </aside>
        </div>
      ) : (
        /* Focused Question Canvas when answering */
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-10">
          {renderQuestionSection()}
        </div>
      )}
    </motion.div>
  );
};
