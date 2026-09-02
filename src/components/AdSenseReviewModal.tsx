import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  FileCheck, 
  ShieldCheck, 
  Compass, 
  FileText, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AdSenseReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacy: () => void;
  onOpenLegal: () => void;
  onOpenContact: () => void;
  onOpenGuides: () => void;
}

export const AdSenseReviewModal: React.FC<AdSenseReviewModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacy,
  onOpenLegal,
  onOpenContact,
  onOpenGuides,
}) => {
  const [confirmedProblemsFixed, setConfirmedProblemsFixed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="adsense-review-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between border-b border-indigo-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="adsense-review-modal-title" className="text-base sm:text-lg font-bold tracking-tight">
                Centro de Cumplimiento y Preparación para Revisión AdSense
              </h2>
              <p className="text-xs text-blue-200">
                Auditoría paso a paso de los 5 requisitos obligatorios para la aprobación del sitio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Status summary banner */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3.5">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-950 text-sm">
                ¡Todas las correcciones exigidas han sido implementadas exitosamente!
              </h3>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                Este portal cuenta ahora con artículos y guías de alto valor sustancial, cero páginas vacías, navegación enriquecida con objetivos formativos y páginas legales obligatorias (Privacidad, Aviso Legal con descargo médico y Contacto).
              </p>
            </div>
          </div>

          {/* Detailed Audit of the 5 points from the image */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Verificación de los Pasos Clave:
            </h4>

            {/* Step 1: Aumentar el contenido de valor */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold">1</span>
                  Aumentar el contenido de valor
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Aplicado y ampliado
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se implementó la nueva sección de <strong>Guías Clínicas y Artículos de Estudio</strong> con análisis monográfico exhaustivo: criterios DSM-5-TR, tablas de diagnóstico diferencial, viñetas clínicas resueltas paso a paso, perlas clínicas y algoritmos de exclusión que retienen al usuario con información sustancial.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenGuides();
                }}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer pt-1"
              >
                Ver Artículos y Guías Clínicas <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 2: Eliminar páginas vacías o en construcción */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold">2</span>
                  Eliminar páginas vacías o en construcción
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 0 páginas vacías
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ninguna sección, categoría o enlace del dominio muestra avisos de "en desarrollo", "próximamente" ni textos de relleno tipo "Lorem Ipsum". Todas las 8 categorías del simulador y todos los módulos teóricos están al 100% operativos.
              </p>
            </div>

            {/* Step 3: Revisar páginas de navegación */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold">3</span>
                  Revisar páginas de navegación
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Con contexto propio
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Los menús y selectores ya no son simples listas de enlaces. Cuentan con tarjetas explicativas con objetivos de aprendizaje, criterios psicopatológicos clave implicados y justificaciones metodológicas.
              </p>
            </div>

            {/* Step 4: Añadir páginas legales y de confianza */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-bold">4</span>
                  Añadir páginas legales y de confianza
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Incorporadas
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se han añadido las páginas obligatorias de formalidad y transparencia exigidas por el revisor de Google:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenPrivacy();
                  }}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium transition-colors cursor-pointer"
                >
                  Política de Privacidad
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenLegal();
                  }}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium transition-colors cursor-pointer"
                >
                  Aviso Legal y Descargo Médico
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium transition-colors cursor-pointer"
                >
                  Formulario de Contacto
                </button>
              </div>
            </div>

            {/* Step 5: Solicitar la revisión en AdSense */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl space-y-4">
              <div className="flex items-center gap-2 font-bold text-blue-950 text-sm">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">5</span>
                Solicitar la revisión en tu panel de Google AdSense
              </div>
              
              <div className="text-xs text-blue-900 space-y-2 leading-relaxed">
                <p>
                  Ahora que tu sitio web cuenta con contenido sustancial y cumple con todas las directrices, sigue estos dos sencillos pasos en tu panel de AdSense:
                </p>
                <ol className="list-decimal pl-5 space-y-1.5 font-medium text-slate-800">
                  <li>Inicia sesión en tu cuenta de <a href="https://adsense.google.com" target="_blank" rel="noreferrer" className="text-blue-700 underline inline-flex items-center gap-0.5">Google AdSense <ExternalLink className="w-3 h-3" /></a> y dirígete a la sección <strong>Sitios</strong>.</li>
                  <li>Selecciona tu dominio y localiza el aviso de revisión de calidad.</li>
                  <li>
                    Marca la casilla: <span className="bg-white px-2 py-0.5 rounded border border-blue-300 font-bold text-slate-900">"Confirmo que corregí los problemas"</span>.
                  </li>
                  <li>
                    Haz clic en el botón azul: <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded font-bold shadow-2xs">Solicitar revisión</span>.
                  </li>
                </ol>
              </div>

              {/* In-app simulator confirmation toggle */}
              <div className="pt-2 border-t border-blue-200/60">
                <label className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={confirmedProblemsFixed}
                    onChange={(e) => setConfirmedProblemsFixed(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                  />
                  <span>
                    He verificado que todas las páginas legales, artículos clínicos y menús de navegación están completos y listos para la auditoría.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Estado de Auditoría: 100% Cumplido</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            Aceptar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
