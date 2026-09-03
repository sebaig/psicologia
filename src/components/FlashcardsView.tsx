import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw, HelpCircle } from 'lucide-react';
import { QUESTIONS_DATA } from '../data/questions';

export const FlashcardsView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = QUESTIONS_DATA[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % QUESTIONS_DATA.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + QUESTIONS_DATA.length) % QUESTIONS_DATA.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="w-full max-w-2xl">
        <div 
          className="relative w-full h-[400px] cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full h-full relative preserve-3d"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div className="absolute w-full h-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-4">{currentCard.title}</span>
              <p className="text-lg text-slate-800 dark:text-slate-100 text-center leading-relaxed font-medium">
                {currentCard.clinicalVignette}
              </p>
              <div className="mt-8 flex items-center text-slate-400 dark:text-slate-500 gap-2">
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm">Click para ver diagnóstico</span>
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full bg-indigo-900 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <h3 className="text-xl font-bold mb-4 text-indigo-300">Diagnóstico</h3>
              <p className="text-lg text-white text-center font-medium mb-6">
                {currentCard.feedback.summary}
              </p>
              <div className="mt-8 flex items-center text-indigo-300 gap-2">
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm">Click para volver al caso</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={handlePrev} className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
          <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>
        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          {currentIndex + 1} / {QUESTIONS_DATA.length}
        </span>
        <button onClick={handleNext} className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
          <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </button>
      </div>
    </div>
  );
};
