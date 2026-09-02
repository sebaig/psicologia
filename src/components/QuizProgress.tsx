import React from 'react';
import { Bookmark, Target } from 'lucide-react';

interface QuizProgressProps {
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  answeredCount: number;
  bookmarkedCount: number;
  categoryName: string;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentIndex,
  totalQuestions,
  correctCount,
  answeredCount,
  bookmarkedCount,
  categoryName,
}) => {
  const percentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const accuracyPercentage =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 p-3.5 sm:p-4 mb-6 shadow-2xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-900 text-sm">
            Pregunta {currentIndex + 1}{' '}
            <span className="text-slate-400 font-normal">de {totalQuestions}</span>
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-medium">{categoryName}</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          {bookmarkedCount > 0 && (
            <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
              <Bookmark className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
              <span>{bookmarkedCount} para repaso</span>
            </span>
          )}

          {answeredCount > 0 && (
            <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
              <Target className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                Precisión: <strong className="text-slate-900 font-semibold">{accuracyPercentage}%</strong>
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Progress track matching design */}
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="bg-indigo-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
