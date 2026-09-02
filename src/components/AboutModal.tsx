import React from 'react';
import { X, Award, BookOpen, Users, CheckCircle, GraduationCap, Building2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <div>
              <h2 id="about-modal-title" className="text-base sm:text-lg font-bold tracking-tight">
                Sobre el Proyecto, Equipo Docente y Fuentes Científicas
              </h2>
              <p className="text-xs text-slate-400">
                Metodología pedagógica, rigor nosológico y estándares de publicación
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          {/* Mission Card */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 sm:p-5">
            <h3 className="font-bold text-indigo-950 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-600" />
              Misión y Objetivos de Formación
            </h3>
            <p className="text-xs sm:text-sm text-indigo-900 leading-relaxed">
              El <strong>Módulo de Psicopatología Clínica</strong> nació con el propósito de superar el aprendizaje memorístico pasivo de los manuales psiquiátricos, sustituyéndolo por un entrenamiento interactivo basado en viñetas clínicas de alta fidelidad, análisis pormenorizado de alternativas distractoras y retroalimentación diagnóstica razonada paso a paso.
            </p>
          </div>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              1. Fuentes Bibliográficas y Estándares Nosológicos
            </h3>
            <p>
              Todos los casos, criterios temporales y discriminaciones diferenciales se han contrastado rigurosamente con los manuales de referencia médica internacional:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 block text-xs">DSM-5-TR® (APA, 2022)</span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision. American Psychiatric Association.
                </span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-bold text-slate-900 block text-xs">CIE-11 (OMS, 2022)</span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Clasificación Internacional de Enfermedades, 11.ª revisión. Capítulo 06: Trastornos mentales, del comportamiento y del neurodesarrollo.
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" />
              2. Proceso Editorial y Revisión por Pares (Peer Review)
            </h3>
            <p>
              Cada viñeta clínica y cada distractor es sometido a un triple filtro metodológico:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
              <li>
                <strong>Filtro semiológico:</strong> Verificación de coherencia del cuadro sintomático con la anamnesis real.
              </li>
              <li>
                <strong>Filtro criterial:</strong> Contraste estricto de criterios de exclusión e inclusión temporal (p. ej., umbral de 6 meses en TAG vs distimia).
              </li>
              <li>
                <strong>Filtro didáctico:</strong> Redacción de la justificación etiopatológica y la "Perla Clínica" para favorecer la fijación en memoria a largo plazo.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600" />
              3. Independencia y Transparencia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Este recurso se mantiene de manera independiente sin patrocinios de la industria farmacéutica. Cualquier contenido publicitario desplegado para financiar la infraestructura de hosting cumple rigurosamente las directrices del programa Google AdSense para páginas educativas y científicas.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Comité Editorial de Psicopatología Clínica</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Cerrar Información
          </button>
        </div>
      </div>
    </div>
  );
};
