import React from 'react';
import { X, ShieldCheck, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 id="privacy-modal-title" className="text-base sm:text-lg font-bold tracking-tight">
                Política de Privacidad y Protección de Datos
              </h2>
              <p className="text-xs text-slate-400">
                Transparencia, cumplimiento RGPD/CCPA y políticas de Google AdSense
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
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-emerald-950 text-xs sm:text-sm uppercase tracking-wider mb-1">
                Compromiso de Privacidad en Educación Médica
              </h4>
              <p className="text-xs text-emerald-800">
                Este portal es una plataforma educativa orientada a la formación académica en psicopatología. No recopilamos información personal sensible de pacientes ni datos médicos confidenciales.
              </p>
            </div>
          </div>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-600" />
              1. Responsable del Tratamiento
            </h3>
            <p>
              El presente sitio web ("Módulo de Psicopatología Clínica") opera como un recurso pedagógico abierto bajo la coordinación de un equipo editorial independiente de docentes y especialistas en psicología clínica y psiquiatría. Para cualquier ejercicio de derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), puede contactar a través del canal oficial:{' '}
              <span className="font-mono text-indigo-600 font-medium">privacidad@psicopatologiaclinica.edu</span>.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-600" />
              2. Datos Recopilados y Almacenamiento Local (LocalStorage)
            </h3>
            <p>
              El sitio funciona de forma totalmente accesible sin requerir registro ni credenciales. Para garantizar la usabilidad docente, utilizamos el almacenamiento local de su navegador (<code>localStorage</code>) exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Guardar preguntas marcadas para repaso (marcadores bibliográficos).</li>
              <li>Mantener el registro temporal de respuestas y porcentajes de acierto en la sesión de estudio actual.</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Estos datos residen única y exclusivamente en el dispositivo del usuario y no son transmitidos ni almacenados en servidores externos.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              3. Políticas de Google AdSense y Cookies de Terceros
            </h3>
            <p>
              Para financiar el mantenimiento del servidor y la actualización continua de contenidos académicos, este sitio puede integrar anuncios servidos por Google AdSense:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Cookies publicitarias de Google:</strong> Google utiliza cookies para publicar anuncios basados en las visitas previas del usuario a este sitio web o a otros sitios de Internet.
              </li>
              <li>
                <strong>Cookie de DoubleClick (DART):</strong> Permite a Google y a sus socios mostrar anuncios basados en las visitas realizadas a este y a otros sitios web.
              </li>
              <li>
                <strong>Inhabilitación voluntaria:</strong> Los usuarios pueden inhabilitar la publicidad personalizada consultando la sección de Configuración de anuncios de Google (<a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-indigo-600 underline">google.com/settings/ads</a>) o a través de <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-indigo-600 underline">aboutads.info</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">
              4. Cumplimiento del RGPD (Unión Europea) y CCPA (California)
            </h3>
            <p>
              Garantizamos a todos los usuarios el derecho a navegar de forma anónima, a deshabilitar las cookies en cualquier momento desde los ajustes de su navegador web y a solicitar la eliminación de cualquier consulta o correspondencia enviada a nuestros buzones de soporte.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">
              5. Enlaces Externos a Manuales Oficiales
            </h3>
            <p>
              El sitio puede incluir hipervínculos a recursos bibliográficos externos de la <em>American Psychiatric Association</em> (APA) o de la <em>Organización Mundial de la Salud</em> (OMS). No nos responsabilizamos por las políticas de privacidad ni los contenidos de dichos portales externos.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Última actualización: Septiembre 2026 | Versión 2.5</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
