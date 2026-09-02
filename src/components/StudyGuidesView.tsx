import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Table, 
  Stethoscope, 
  HelpCircle, 
  ArrowLeft, 
  Search,
  BookMarked,
  Share2,
  Bookmark
} from 'lucide-react';
import { STUDY_GUIDES_DATA, ClinicalStudyGuide } from '../data/studyGuidesData';

interface StudyGuidesViewProps {
  onBackToQuiz: () => void;
  onOpenGlossary: () => void;
}

export const StudyGuidesView: React.FC<StudyGuidesViewProps> = ({ onBackToQuiz, onOpenGlossary }) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(STUDY_GUIDES_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedGuides, setSavedGuides] = useState<string[]>([]);

  const filteredGuides = STUDY_GUIDES_DATA.filter((guide) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      guide.title.toLowerCase().includes(q) ||
      guide.category.toLowerCase().includes(q) ||
      guide.subtitle.toLowerCase().includes(q)
    );
  });

  const activeGuide = STUDY_GUIDES_DATA.find((g) => g.id === selectedGuideId) || STUDY_GUIDES_DATA[0];

  const toggleSaveGuide = (id: string) => {
    setSavedGuides((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Editorial Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Contenido Académico y Monografías Clínicas
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Guías Clínicas y Artículos de Estudio en Psicopatología
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Lecciones exhaustivas con análisis de criterios DSM-5-TR, CIE-11, tablas diferenciales semiológicas y viñetas clínicas resueltas paso a paso para estudiantes y profesionales de la salud mental.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onBackToQuiz}
            className="px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al Simulador de Casos
          </button>
          <button
            onClick={onOpenGlossary}
            className="px-4 py-2.5 bg-indigo-600/80 hover:bg-indigo-600 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-indigo-400/30"
          >
            <Table className="w-3.5 h-3.5" />
            Glosario DSM-5
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar Navigator + Article Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sidebar Index (with explanatory metadata, avoiding empty/bare menus) */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-4">
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>Índice de Monografías ({STUDY_GUIDES_DATA.length})</span>
            </h3>
            
            {/* Search filter */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar en guías clínicas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Guide list */}
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filteredGuides.map((guide) => {
              const isSelected = guide.id === selectedGuideId;
              const isSaved = savedGuides.includes(guide.id);
              return (
                <div
                  key={guide.id}
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-50/80 border-indigo-300 shadow-2xs'
                      : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded">
                      {guide.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {guide.readingTimeMinutes} min
                    </span>
                  </div>

                  <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-indigo-950' : 'text-slate-800'}`}>
                    {guide.title}
                  </h4>

                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {guide.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Educational Note */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800 mb-0.5">Metodología de Estudio:</p>
            Recomendamos leer la monografía clínica correspondiente antes de responder las preguntas del simulador en dicha categoría para maximizar la tasa de acierto y la comprensión semiológica.
          </div>
        </aside>

        {/* Selected Clinical Guide Full Article View */}
        <article className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-2xs space-y-8">
          {/* Article Header */}
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold uppercase tracking-wider">
                {activeGuide.category}
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  Lectura estimada: {activeGuide.readingTimeMinutes} minutos
                </span>
                <button
                  onClick={() => toggleSaveGuide(activeGuide.id)}
                  className="p-1 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Guardar artículo para repaso"
                >
                  <Bookmark className={`w-4 h-4 ${savedGuides.includes(activeGuide.id) ? 'fill-indigo-600 text-indigo-600' : ''}`} />
                </button>
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {activeGuide.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {activeGuide.subtitle}
            </p>
          </div>

          {/* Learning Objectives Box */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Objetivos de Aprendizaje Clínico:
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 pl-5 list-disc">
              {activeGuide.learningObjectives.map((obj, i) => (
                <li key={i} className="leading-relaxed">
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Theoretical Framework */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Marco Teórico y Criterios Nosológicos
            </h3>
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-3">
              {activeGuide.theoreticalFramework}
            </div>
          </section>

          {/* Diagnostic Comparison Table */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Table className="w-4 h-4 text-indigo-600" />
              2. Tabla Comparativa de Diagnóstico Diferencial
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3 border-r border-slate-200 w-1/4">Parámetro Semiología</th>
                    <th className="p-3 border-r border-slate-200 w-1/3">Entidad A</th>
                    <th className="p-3 border-r border-slate-200 w-1/3">Entidad B</th>
                    <th className="p-3">Clave de Decisión</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {activeGuide.dsmComparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50/40">
                        {row.criterion}
                      </td>
                      <td className="p-3 border-r border-slate-200 text-slate-700">
                        {row.entityA}
                      </td>
                      <td className="p-3 border-r border-slate-200 text-slate-700">
                        {row.entityB}
                      </td>
                      <td className="p-3 font-medium text-indigo-800 bg-indigo-50/30">
                        {row.clinicalKey}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Practical Clinical Vignette with Step-by-Step Resolution */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-indigo-600" />
              3. Caso Clínico Ilustrado y Razonamiento Diagnóstico
            </h3>
            
            <div className="border border-indigo-100 bg-indigo-50/30 rounded-xl p-5 space-y-4">
              <div>
                <h4 className="font-bold text-sm text-indigo-950 mb-1">
                  {activeGuide.clinicalCaseExample.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-3.5 rounded-lg border border-indigo-100">
                  "{activeGuide.clinicalCaseExample.casePresentation}"
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-emerald-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Resolución y Juicio Clínico Razonado:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeGuide.clinicalCaseExample.diagnosticResolution}
                </p>
              </div>
            </div>
          </section>

          {/* Clinical Pearls & Memorization Anchors */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              4. Perlas Clínicas Indispensables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeGuide.clinicalPearls.map((pearl, pIdx) => (
                <div key={pIdx} className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-lg text-xs text-amber-950 leading-relaxed flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    ★
                  </span>
                  <span>{pearl}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Differential Algorithm */}
          <section className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              5. Algoritmo Rápido de Decisión
            </h3>
            <div className="space-y-2">
              {activeGuide.differentialAlgorithm.map((step, sIdx) => (
                <div key={sIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 flex items-center gap-3">
                  <span className="w-6 h-6 rounded bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                    {sIdx + 1}
                  </span>
                  <span className="leading-normal">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Action Footer */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={onBackToQuiz}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-xs flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Poner a prueba estos conocimientos en el Simulador
            </button>

            <span className="text-[11px] text-slate-400">
              Contenido avalado conforme a guías DSM-5-TR (APA) y CIE-11 (OMS).
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};
