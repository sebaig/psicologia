import React, { useState } from 'react';
import { X, Search, BookOpen, ChevronRight } from 'lucide-react';
import { DIAGNOSTIC_CRITERIA_DATA } from '../data/criteriaGlossary';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDisorderId, setSelectedDisorderId] = useState<string>(
    DIAGNOSTIC_CRITERIA_DATA[0]?.id || ''
  );

  if (!isOpen) return null;

  const filteredCriteria = DIAGNOSTIC_CRITERIA_DATA.filter(
    (item) =>
      item.disorderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keyFeatures.some((f) =>
        f.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const activeCriterion =
    DIAGNOSTIC_CRITERIA_DATA.find((c) => c.id === selectedDisorderId) ||
    DIAGNOSTIC_CRITERIA_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-indigo-600 text-white flex items-center justify-center shadow-2xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Glosario de Criterios Diagnósticos DSM-5 / CIE-11
              </h3>
              <p className="text-xs text-slate-500">
                Referencia rápida de psicopatología clínica y diagnóstico diferencial
              </p>
            </div>
          </div>
          <button
            id="btn-close-glossary"
            onClick={onClose}
            className="w-8 h-8 rounded flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-6 py-3 border-b border-slate-200 bg-slate-50/60">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar por trastorno (ej. TEPT, Narcisismo, Esquizofrenia, Límite)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Content split pane */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-0">
          {/* List sidebar */}
          <div className="md:col-span-4 border-r border-slate-200 overflow-y-auto p-3 space-y-1.5 bg-slate-50/70 max-h-48 md:max-h-none">
            {filteredCriteria.map((item) => {
              const isSelected = item.id === selectedDisorderId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedDisorderId(item.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white text-indigo-950 shadow-2xs border border-indigo-200 font-semibold'
                      : 'text-slate-700 hover:bg-slate-200/50 border border-transparent'
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs sm:text-sm leading-snug line-clamp-1">
                      {item.disorderName}
                    </div>
                    <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                      {item.category}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Detailed viewer */}
          <div className="md:col-span-8 p-6 overflow-y-auto space-y-5 bg-white">
            {activeCriterion ? (
              <>
                <div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {activeCriterion.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2">
                    {activeCriterion.disorderName}
                  </h4>
                </div>

                {/* Key features */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Rasgos Clínicos Esenciales
                  </h5>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {activeCriterion.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DSM-5 Criteria */}
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1.5">
                    Marco Criterial DSM-5
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {activeCriterion.dsm5Criteria}
                  </p>
                </div>

                {/* Differential Tips */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Puntos Clave de Diagnóstico Diferencial
                  </h5>
                  <div className="space-y-2">
                    {activeCriterion.differentialTips.map((tip, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed"
                      >
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm text-slate-500">
                No se encontraron criterios que coincidan con la búsqueda.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium border border-slate-300 rounded hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer shadow-2xs"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};
