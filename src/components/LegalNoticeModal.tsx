import React from 'react';
import { X, Scale, AlertTriangle, BookCheck, ShieldAlert, CheckCircle } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-amber-400" />
            <div>
              <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold tracking-tight">
                Aviso Legal, Términos de Uso y Descargo Médico
              </h2>
              <p className="text-xs text-slate-400">
                Marco regulatorio educativo, propiedad intelectual y límites de responsabilidad
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
          {/* Medical Disclaimer Banner */}
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-950 text-xs sm:text-sm uppercase tracking-wider mb-1">
                Descargo de Responsabilidad Médica y Clínica (Cláusula Fundamental)
              </h4>
              <p className="text-xs text-amber-900 leading-normal">
                Este portal web es un <strong>simulador educativo y formativo</strong> dirigido a estudiantes, psicólogos clínicos, residentes de psiquiatría y profesionales de la salud mental.
                <strong> Los contenidos, casos hipotéticos y preguntas aquí expuestas NO constituyen bajo ninguna circunstancia asesoramiento médico, diagnóstico clínico individual, prescripción psicofarmacológica ni sustituto de una consulta con un facultativo especialista en salud mental debidamente colegiado.</strong>
              </p>
            </div>
          </div>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <BookCheck className="w-4 h-4 text-indigo-600" />
              1. Finalidad Académica y Docente
            </h3>
            <p>
              El objetivo prioritario de este recurso es el entrenamiento en el razonamiento nosológico, la discriminación de criterios del DSM-5-TR (Manual Diagnóstico y Estadístico de los Trastornos Mentales, Quinta Edición, Texto Revisado) de la American Psychiatric Association y de la CIE-11 de la Organización Mundial de la Salud. Las viñetas clínicas son simulaciones redactadas con propósitos pedagógicos para ilustrar la semiología psicopatológica.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-indigo-600" />
              2. Propiedad Intelectual y Citas Científicas
            </h3>
            <p>
              Las menciones a nomenclaturas, criterios y códigos de clasificación diagnóstica se realizan al amparo del derecho de cita y divulgación científica con fines estrictamente docentes e investigadores (<em>fair use</em> académico). Las marcas DSM-5® y APA® son propiedad exclusiva de la American Psychiatric Association. Todos los textos originales de casos clínicos, algoritmos pedagógicos y explicaciones razonadas son autoría intelectual del equipo coordinador de la plataforma.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">
              3. Condiciones de Uso y Acceso
            </h3>
            <p>
              El acceso al sitio es libre y gratuito. El usuario se compromete a hacer un uso lícito y ético de la plataforma, absteniéndose de utilizar sus contenidos para diagnósticos automatizados en seres humanos o fines contrarios al código deontológico de la psicología y la medicina.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">
              4. Limitación de Responsabilidad
            </h3>
            <p>
              El equipo editorial no se hace responsable de decisiones clínicas erróneas, interpretaciones descontextualizadas ni del uso indebido que terceros puedan hacer de la información aquí contenida. Toda decisión terapéutica o diagnóstica en la práctica clínica real debe basarse en la anamnesis individual, exploración psicopatológica presencial y el juicio clínico profesional del terapeuta.
            </p>
          </section>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Legislación aplicable: Principios éticos de la Declaración de Helsinki y normativas internacionales de divulgación de ciencias de la salud.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Registro Documental ID: LEG-DSM5-2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Aceptar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
