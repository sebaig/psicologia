export interface ClinicalStudyGuide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  learningObjectives: string[];
  theoreticalFramework: string;
  dsmComparisonTable: {
    criterion: string;
    entityA: string;
    entityB: string;
    clinicalKey: string;
  }[];
  clinicalCaseExample: {
    title: string;
    casePresentation: string;
    diagnosticResolution: string;
  };
  clinicalPearls: string[];
  differentialAlgorithm: string[];
}

export const STUDY_GUIDES_DATA: ClinicalStudyGuide[] = [
  {
    id: 'guia-esquizofrenia-psicosis',
    category: 'Espectro de la Esquizofrenia',
    title: 'Diagnóstico Diferencial del Espectro Esquizofrénico y Trastornos Psicóticos',
    subtitle: 'Criterios DSM-5-TR, duración temporal de los episodios y diferenciación con psicosis afectivas',
    readingTimeMinutes: 10,
    learningObjectives: [
      'Dominar la regla temporal cardinal del espectro psicótico (1 día a 1 mes vs 1 a 6 meses vs >6 meses).',
      'Diferenciar con precisión entre Trastorno Esquizoafectivo y Trastorno Depresivo/Bipolar con síntomas psicóticos.',
      'Identificar la semiología de los síntomas negativos primarios vs el efecto parkinsoniano de los antipsicóticos.'
    ],
    theoreticalFramework: `El espectro de la esquizofrenia y otros trastornos psicóticos engloba entidades definidas por anomalías en uno o más de los siguientes cinco dominios: delirios, alucinaciones, pensamiento (discurso) desorganizado, comportamiento motor muy desorganizado o anómalo (incluida la catatonía) y síntomas negativos.

La duración de la alteración es el eje directriz para el diagnóstico nosológico inicial:
1. Trastorno Psicótico Breve: Dura al menos 1 día pero menos de 1 mes, con retorno total al nivel de funcionamiento premórbido. Con frecuencia sigue a un estresor biográfico masivo (psicosis reactiva breve).
2. Trastorno Esquizofreniforme: El cuadro sintomático idéntico al de la esquizofrenia dura al menos 1 mes pero menos de 6 meses. Si no se resuelve antes del sexto mes, el diagnóstico se reclasifica automáticamente como Esquizofrenia.
3. Esquizofrenia: Requiere signos continuos de la alteración durante al menos 6 meses, que deben incluir al menos 1 mes de síntomas de fase activa (Criterio A: al menos 2 de los 5 dominios, siendo indispensable que al menos uno sea delirio, alucinación o discurso desorganizado).

Uno de los retos diagnósticos más sutiles radica en distinguir el Trastorno Esquizoafectivo de un episodio afectivo con síntomas psicóticos. El Criterio B del DSM-5-TR para Trastorno Esquizoafectivo exige que hayan existido delirios o alucinaciones durante al menos 2 semanas en ausencia de un episodio mayor del estado de ánimo (depresivo o maníaco) en algún momento a lo largo de la vida de la enfermedad.`,
    dsmComparisonTable: [
      {
        criterion: 'Duración temporal total',
        entityA: 'Esquizofrenia: ≥ 6 meses (con ≥ 1 mes de síntomas Criterio A activos).',
        entityB: 'Trastorno Esquizofreniforme: ≥ 1 mes y < 6 meses en total.',
        clinicalKey: 'Esquizofreniforme es el diagnóstico provisional de transición hasta cumplir 6 meses.'
      },
      {
        criterion: 'Psicosis sin síntomas afectivos',
        entityA: 'Esquizoafectivo: Psicosis presente durante al menos 2 semanas en eutimia sin depresión ni manía.',
        entityB: 'Depresión Mayor con psicosis: La psicosis NUNCA aparece fuera del episodio depresivo.',
        clinicalKey: 'Si los delirios ocurren mientras el paciente no está deprimido ni maníaco, se inclina a esquizoafectivo.'
      },
      {
        criterion: 'Deterioro social/laboral',
        entityA: 'Esquizofrenia: Marcado descenso en el nivel de funcionamiento en trabajo, relaciones o autocuidado.',
        entityB: 'Trastorno Delirante: El funcionamiento psicosocial no está marcadamente alterado salvo por el tema delirante.',
        clinicalKey: 'En el trastorno delirante el paciente suele mantener empleo y apariencia ordenada.'
      }
    ],
    clinicalCaseExample: {
      title: 'Caso Clínico: El enigma de las dos semanas asintomáticas',
      casePresentation: 'Paciente de 31 años con historial de episodios depresivos graves recurrentes. Durante el último año, mientras se encontraba en remisión completa de su depresión y con estado de ánimo eutímico verificado durante 3 semanas, comenzó a escuchar voces que le comentaban sus acciones y desarrolló el delirio de que sus pensamientos eran interceptados por radiofrecuencia. Posteriormente, reapareció un episodio depresivo mayor melancólico.',
      diagnosticResolution: 'El paciente cumple criterios de Trastorno Esquizoafectivo (tipo depresivo), dado que presentó delirios y alucinaciones en ausencia de síntomas afectivos durante más de 14 días consecutivos, superando el umbral exigido por el Criterio B del DSM-5.'
    },
    clinicalPearls: [
      'Regla temporal: Menos de 1 mes = Psicótico Breve; 1 a 6 meses = Esquizofreniforme; más de 6 meses = Esquizofrenia.',
      'En el Trastorno Esquizoafectivo, la psicosis debe existir "sola" al menos 2 semanas. En la depresión psicótica, la psicosis solo viaja de la mano del ánimo deprimido.',
      'Los síntomas negativos (abulia, aplanamiento afectivo, alogia) son los mejores predictores del pronóstico funcional a largo plazo.'
    ],
    differentialAlgorithm: [
      '1. ¿Hay consumo de tóxicos o causa neurológica identificable? -> Descartar Psicosis inducida por sustancias o médica.',
      '2. ¿Cuánto tiempo dura el cuadro? -> <1 mes (Psicótico Breve), 1-6 meses (Esquizofreniforme), >6 meses (Esquizofrenia).',
      '3. ¿Coexisten episodios afectivos? -> Evaluar si hay psicosis ≥ 2 semanas sin síntomas afectivos (Esquizoafectivo).'
    ]
  },
  {
    id: 'guia-tept-trauma',
    category: 'Trauma y Disociación',
    title: 'Guía Clínica de Evaluación del Trauma Psicológico: TEPT y Estrés Agudo',
    subtitle: 'Análisis de los cuatro clústeres de síntomas del DSM-5-TR, flash-backs y factores de cronicidad',
    readingTimeMinutes: 9,
    learningObjectives: [
      'Identificar con precisión el Criterio A (exposición a muerte, lesión grave o violencia sexual).',
      'Desglosar los 4 clústeres de síntomas del TEPT: Intrusión, Evitación, Alteraciones cognitivas/afectivas e Hiperreactividad.',
      'Manejar la frontera temporal entre Trastorno de Estrés Agudo (3 días a 1 mes) y TEPT (> 1 mes).'
    ],
    theoreticalFramework: `El Trastorno de Estrés Postraumático (TEPT) requiere la exposición directa o indirecta a un acontecimiento traumático que amenace la vida, cause lesiones graves o implique violencia sexual (Criterio A). Esto excluye el malestar producido por eventos estresantes comunes (pérdidas laborales, rupturas sentimentales o pérdidas financieras no catastróficas, que corresponden al Trastorno de Adaptación).

Para el diagnóstico formal del TEPT según el DSM-5, los síntomas deben estructurarse en cuatro agrupaciones sintomáticas con duración superior a 1 mes:
1. Clúster B (Intrusión): Recuerdos angustiosos involuntarios, pesadillas recurrentes, reacciones disociativas (flashbacks en los que el sujeto siente o actúa como si el trauma se repitiera) e intenso malestar psicológico al exponerse a recordatorios.
2. Clúster C (Evitación persistente): Evitación activa de recuerdos, pensamientos o sentimientos vinculados al trauma, o evitación de recordatorios externos (personas, lugares, conversaciones, objetos o situaciones).
3. Clúster D (Alteraciones cognitivas y del estado de ánimo negativas): Amnesia disociativa de aspectos cruciales del trauma, creencias exageradamente negativas sobre uno mismo o el mundo ("el mundo es totalmente peligroso", "nadie es de fiar"), culpa desmedida, anhedonia y desapego.
4. Clúster E (Alteraciones de la alerta y reactividad): Hipervigilancia, respuesta de sobresalto exagerada, irritabilidad con explosiones de ira, conductas imprudentes o autodestructivas y dificultades severas de concentración y sueño.`,
    dsmComparisonTable: [
      {
        criterion: 'Criterio temporal',
        entityA: 'Trastorno de Estrés Agudo: De 3 días a máximo 1 mes tras el acontecimiento.',
        entityB: 'TEPT: Persistencia de los síntomas por más de 1 mes tras el acontecimiento.',
        clinicalKey: 'Si el cuadro se resuelve a los 20 días, es Estrés Agudo; si continúa a la quinta semana, es TEPT.'
      },
      {
        criterion: 'Especificador Disociativo',
        entityA: 'Despersonalización: Sentirse observador externo del propio cuerpo o mente.',
        entityB: 'Desrealización: Percibir el entorno exterior como irreal, distante o como en un sueño.',
        clinicalKey: 'Ambos especificadores revelan una fragmentación protectora de la conciencia ante el dolor insoportable.'
      },
      {
        criterion: 'Evento desencadenante',
        entityA: 'TEPT / Estrés Agudo: Muerte real/inminente, violencia sexual o daño físico extremo.',
        entityB: 'Trastorno de Adaptación: Estresores psicosociales comunes (despido, divorcio, mudanza).',
        clinicalKey: 'Un divorcio amargo sin amenaza de muerte no califica para Criterio A de TEPT.'
      }
    ],
    clinicalCaseExample: {
      title: 'Caso Clínico: El veterano y los fuegos artificiales',
      casePresentation: 'Un bombero de 36 años que sobrevivió a un derrumbe estructural con víctimas hace 8 meses consulta por insomnio grave. Al escuchar detonaciones pirotécnicas en una fiesta local, se arrojó al suelo cubriéndose la cabeza, convencido durante varios minutos de que el techo del salón se estaba viniendo abajo. Evita circular por la avenida donde ocurrió el siniestro y afirma que "ya no puede sentir cariño ni empatía por sus hijas".',
      diagnosticResolution: 'El cuadro cumple plenamente con TEPT crónico: Intrusión (flashback disociativo con pérdida del sentido de realidad presente), Evitación (no transitar por el lugar del desastre), Alteración cognitiva/afectiva (anestesia emocional hacia su familia) e Hiperreactividad, con una evolución superior a 1 mes.'
    },
    clinicalPearls: [
      'Un flashback no es solo recordar el trauma: es revivirlo sensorialmente en el aquí y el ahora con pérdida transitoria de orientación.',
      'El especificador "Con expresión retardada" se aplica si la totalidad de los criterios diagnósticos se alcanza al menos 6 meses después del trauma.',
      'El tratamiento de elección en psicoterapia es la terapia cognitivo-conductual centrada en el trauma (TCC-CT) y el EMDR.'
    ],
    differentialAlgorithm: [
      '1. ¿El evento amenazó la vida, causó agresión sexual o lesión grave? -> Si NO, considerar Trastorno Adaptativo.',
      '2. ¿Cuánto tiempo ha transcurrido desde el impacto? -> 3 días a 1 mes: Estrés Agudo. Más de 1 mes: TEPT.',
      '3. ¿Existen síntomas disociativos de extrañeza del cuerpo o del entorno? -> Añadir especificador de Despersonalización/Desrealización.'
    ]
  },
  {
    id: 'guia-trastornos-animo-bipolar',
    category: 'Trastornos del Estado de Ánimo',
    title: 'Espectro Bipolar y Depresivo: Semiología Diferencial y Riesgo Clínico',
    subtitle: 'Diagnóstico diferencial de Manía vs Hipomanía, Melancolía, Síndrome de Cotard y Ciclotimia',
    readingTimeMinutes: 11,
    learningObjectives: [
      'Diferenciar con precisión milimétrica la Manía de la Hipomanía según el DSM-5-TR.',
      'Identificar los criterios de Trastorno Bipolar I frente a Trastorno Bipolar II.',
      'Reconocer la depresión con características melancólicas y el Síndrome de Cotard (nihilismo biológico).'
    ],
    theoreticalFramework: `Los trastornos del estado de ánimo representan oscilaciones patológicas de la energía, el tono afectivo y la velocidad de los procesos psicomotores. La piedra angular de la psiquiatría clínica consiste en no confundir una depresión unipolar con una depresión bipolar, ya que el uso de antidepresivos en monoterapia en el trastorno bipolar puede inducir un viraje maníaco o acelerar el ciclado rápido.

Para diagnosticar Trastorno Bipolar I es obligatorio y suficiente haber presentado al menos un episodio maníaco completo en toda la vida. Por el contrario, el Trastorno Bipolar II requiere obligatoriamente: 1) al menos un episodio hipomaníaco de mínimo 4 días Y 2) al menos un episodio depresivo mayor previo o actual, sin haber padecido jamás un episodio maníaco.

La frontera entre Manía e Hipomanía:
- Manía: Estado de ánimo anormal y persistentemente elevado, expansivo o irritable con aumento de energía durante al menos 1 semana (o cualquier duración si precisa ingreso hospitalario o presenta psicosis). Provoca un deterioro social o laboral marcado.
- Hipomanía: Dura al menos 4 días consecutivos. Es observable por terceros, pero NO genera deterioro sociolaboral grave, NO requiere hospitalización y NUNCA presenta psicosis. La aparición de un solo síntoma psicótico convierte el cuadro de inmediato en Manía.`,
    dsmComparisonTable: [
      {
        criterion: 'Duración mínima requerida',
        entityA: 'Manía: ≥ 7 días (o cualquier duración si amerita hospitalización).',
        entityB: 'Hipomanía: ≥ 4 días consecutivos ininterrumpidos.',
        clinicalKey: 'La hospitalización preventiva suspende el requisito de los 7 días y confirma Manía.'
      },
      {
        criterion: 'Presencia de síntomas psicóticos',
        entityA: 'Manía: Puede cursar con delirios o alucinaciones (congruentes o incongruentes).',
        entityB: 'Hipomanía: NUNCA presenta psicosis (su presencia la excluye por definición).',
        clinicalKey: 'Si hay delirio de grandeza o megalomanía mística, es Manía Bipolar I sin excepción.'
      },
      {
        criterion: 'Episodio depresivo previo',
        entityA: 'Bipolar I: NO es indispensable haber tenido depresión mayor (basta la manía).',
        entityB: 'Bipolar II: Es ESTRICTAMENTE obligatorio haber tenido al menos un episodio de depresión mayor.',
        clinicalKey: 'Bipolar II es una entidad de hipomanía + depresión mayor obligatoria.'
      }
    ],
    clinicalCaseExample: {
      title: 'Caso Clínico: El emprendedor incansable de cuatro días',
      casePresentation: 'Una diseñadora de 29 años acude con su pareja. Durante los últimos 5 días durmió apenas 3 horas cada noche despertando con vitalidad desbordante. Escribió 2 propuestas creativas premiadas por sus clientes y se mostró sumamente simpática, bromista y enérgica en reuniones. No generó deudas irresponsables, no tuvo alucinaciones ni alteró su juicio de realidad. Hace dos años había estado postrada con un episodio de depresión mayor durante 3 meses.',
      diagnosticResolution: 'El cuadro corresponde a un Episodio Hipomaníaco superpuesto a un historial de Depresión Mayor, configurando el diagnóstico de Trastorno Bipolar II.'
    },
    clinicalPearls: [
      'Si el paciente requiere internamiento psiquiátrico o tiene delirios, NUNCA es hipomanía: es manía.',
      'Síndrome de Cotard: El paciente melancólico asegura que sus vísceras están podridas, que no tiene corazón o que ya está muerto. Es un delirio nihilista congruente con la extrema depresión.',
      'Preguntar siempre en la historia de toda depresión: "¿Ha tenido épocas donde necesitaba dormir mucho menos y se sentía capaz de todo?". La omisión de este dato es la principal causa de viraje iatrogénico con ISRS.'
    ],
    differentialAlgorithm: [
      '1. ¿Hay ánimo elevado o irritable con disminución del sueño? -> Evaluar si dura ≥4 días.',
      '2. ¿Hay psicosis, hospitalización o deterioro marcado? -> Si SÍ: Manía (Bipolar I). Si NO: Hipomanía.',
      '3. ¿Ha existido depresión mayor previa? -> Hipomanía + Depresión = Trastorno Bipolar II.'
    ]
  },
  {
    id: 'guia-trastornos-personalidad',
    category: 'Trastornos de la Personalidad',
    title: 'Trastornos de la Personalidad: Clusters A, B y C con Enfoque Dimensional',
    subtitle: 'Semiología diferencial de los 10 trastornos clásicos y distinción entre Egosintonía y Egodistonía',
    readingTimeMinutes: 12,
    learningObjectives: [
      'Comprender la división de los tres clusters: A (extraños/excéntricos), B (dramáticos/emocionales) y C (ansiosos/temerosos).',
      'Distinguir el Trastorno Límite (TLP) de la Bipolaridad y el Trastorno Histriónico.',
      'Diferenciar entre Trastorno Esquizoide y Trastorno Evitativo en función del deseo vincular.'
    ],
    theoreticalFramework: `Un trastorno de la personalidad es un patrón perdurable de experiencia interna y de comportamiento que se desvía notablemente de las expectativas de la cultura del individuo, tiene su inicio en la adolescencia o en las primeras etapas de la edad adulta, es estable a lo largo del tiempo y causa malestar o deterioro funcional.

Clasificación de los Clusters en el DSM-5:
- Clúster A (Extraños o excéntricos):
  * Paranoide: Desconfianza y suspicacia generalizada hacia los demás, interpretando sus motivos como malévolos.
  * Esquizoide: Desapego en las relaciones sociales y rango restringido de expresión emocional. Falta total de deseo de intimidad o relaciones íntimas.
  * Esquizotípico: Malestar agudo en las relaciones íntimas, distorsiones cognitivas o perceptivas (pensamiento mágico, ilusiones) y excentricidades en el comportamiento y lenguaje.
- Clúster B (Dramáticos, impulsivos y erráticos):
  * Antisocial: Desprecio y violación sistemática de los derechos de los demás desde los 15 años (con antecedentes de trastorno de conducta antes de los 15).
  * Límite (TLP): Inestabilidad afectiva, miedo frenético al abandono real o imaginado, relaciones intensas y caóticas (idealización/devaluación), impulsividad autodestructiva y conductas suicidas o parasuicidas recurrentes.
  * Histriónico: Emotividad excesiva y búsqueda constante de atención, seducción inapropiada y necesidad de ser el centro de interés.
  * Narcisista: Patrón de grandiosidad, necesidad de admiración ilimitada y falta total de empatía, con vulnerabilidad encubierta a la humillación.
- Clúster C (Ansiosos o temerosos):
  * Evitativo: Inhibición social marcada, sentimientos de incompetencia e hipersensibilidad a la crítica o rechazo (anhela el afecto pero le aterra ser humillado).
  * Dependiente: Necesidad dominante y excesiva de que le cuiden, comportamiento sumiso y pavor a la separación.
  * Obsesivo-Compulsivo (TOCP): Preocupación por el orden, perfeccionismo y control mental/interpersonal a expensas de la flexibilidad y la eficiencia (egosintónico).`,
    dsmComparisonTable: [
      {
        criterion: 'Deseo de intimidad humana',
        entityA: 'Esquizoide: NO desea ni disfruta las relaciones íntimas, prefiere la soledad absoluta.',
        entityB: 'Evitativo: DESEA con fervor tener amigos, pero se aísla por terror paralizante a la burla.',
        clinicalKey: '¿Sufre por su soledad? Si NO = Esquizoide. Si SÍ pero teme ser juzgado = Evitativo.'
      },
      {
        criterion: 'Curso de la inestabilidad afectiva',
        entityA: 'Trastorno Límite (TLP): Fluctuaciones afectivas ultrarrápidas de horas, reactivas a estresores interpersonales.',
        entityB: 'Trastorno Bipolar: Episodios afectivos sostenidos de días a semanas, autónomos de estresores menores.',
        clinicalKey: 'El TLP pasa de la ira a la tristeza y a la calma en la misma tarde ante una llamada perdida.'
      },
      {
        criterion: 'Relación con el orden y control',
        entityA: 'TOCP (Personalidad): Egosintónico: el sujeto cree que su estándar es perfecto, superior y justo.',
        entityB: 'TOC (Eje I): Egodistónico: las obsesiones son tortuosas, ajenas y el paciente anhela liberarse de ellas.',
        clinicalKey: 'En el TOCP el paciente impone sus listas a los demás; en el TOC el paciente sufre por sus rituales.'
      }
    ],
    clinicalCaseExample: {
      title: 'Caso Clínico: El miedo desgarrador a la soledad',
      casePresentation: 'Una mujer de 24 años consulta tras una ruptura amorosa. Refiere que no puede estar sola ni un minuto porque siente un "vacío desgarrador en el pecho". Describe que su expareja era "un dios perfecto", pero cuando llegó tarde a una cena lo consideró "un monstruo perverso". Presenta cortes superficiales en ambos antebrazos realizados para "sentir algo físico que apague el dolor del alma".',
      diagnosticResolution: 'Cumple criterios de Trastorno de la Personalidad Límite (TLP): Miedo frenético al abandono, escisión (idealización y devaluación extremas), sensación crónica de vacío y autolesiones no suicidas como regulación emocional disfuncional.'
    },
    clinicalPearls: [
      'Clave diagnóstica entre Esquizoide y Evitativo: La persona con personalidad esquizoide no sufre en la cabaña solitaria del bosque; el evitativo llora en la cabaña deseando una fiesta a la que tiene miedo de ir.',
      'Para diagnosticar Trastorno Antisocial en un adulto de 18 años, es imprescindible documentar la presencia de un Trastorno de Conducta antes de los 15 años.',
      'En el TLP la psicoterapia de primera línea con mayor evidencia es la Terapia Dialéctica Conductual (DBT) de Marsha Linehan.'
    ],
    differentialAlgorithm: [
      '1. ¿El estilo interpersonal es de retraimiento frío? -> Evaluar Clúster A (Paranoide, Esquizoide, Esquizotípico).',
      '2. ¿El estilo es de hiperreactividad, transgresión o teatralidad? -> Evaluar Clúster B (Antisocial, Límite, Histriónico, Narcisista).',
      '3. ¿El estilo está dominado por la ansiedad y la sumisión/perfeccionismo? -> Evaluar Clúster C (Evitativo, Dependiente, TOCP).'
    ]
  },
  {
    id: 'guia-ansiedad-somatizacion-toc',
    category: 'Ansiedad y Somatomorfos',
    title: 'Ansiedad, Somatización y Espectro TOC: Diagnóstico de Exclusión y Fisiopatología',
    subtitle: 'Signo de Hoover en Conversión, Pánico vs TAG y Diferencia crucial entre Facticio y Simulación',
    readingTimeMinutes: 10,
    learningObjectives: [
      'Reconocer el Trastorno de Conversión (Síntoma Neurológico Funcional) mediante pruebas positivas de incompatibilidad clínica.',
      'Diferenciar Trastorno Facticio de Simulación según la naturaleza interna vs externa del incentivo.',
      'Comprender la diferencia entre Trastorno de Síntomas Somáticos y Trastorno de Ansiedad por Enfermedad.'
    ],
    theoreticalFramework: `La interconexión entre la mente y el cuerpo constituye uno de los desafíos más apasionantes de la psicopatología. Los síntomas somáticos inexplicados médicamente suelen provocar frustración en pacientes y profesionales si no se aplica una evaluación semiológica precisa.

En el DSM-5, el Trastorno de Conversión (Trastorno de Síntomas Neurológicos Funcionales) dio un giro epistemológico crucial: ya no se exige identificar obligatoriamente el conflicto psicológico reprimido, sino que se requiere la demostración positiva de incompatibilidad clínica entre el síntoma y los patrones anatómicos y fisiopatológicos neurológicos reconocidos.

Por su parte, el dilema entre Trastorno Facticio y Simulación reside enteramente en el propósito de la mentira:
- Trastorno Facticio (antiguamente Síndrome de Münchhausen): La persona falsifica signos físicos o se autoinduce lesiones/enfermedad sin que exista una recompensa externa evidente. Su motivación es asumir el rol de enfermo y recibir la atención compasiva del personal sanitario (incentivo psicológico interno).
- Simulación (Malingering): No es un trastorno mental en el DSM-5, sino un problema objeto de atención clínica. Consiste en la producción voluntaria y consciente de síntomas motivada por incentivos externos transparentes: indemnizaciones económicas, evitar el servicio militar, eludir un juicio penal o conseguir fármacos estupefacientes.`,
    dsmComparisonTable: [
      {
        criterion: 'Incentivo rector del engaño',
        entityA: 'Trastorno Facticio: Rol de paciente/enfermo (incentivo psicológico interno).',
        entityB: 'Simulación: Dinero, incapacidad fraudulenta o evitar prisión (incentivo material externo).',
        clinicalKey: 'Si el sujeto arriesga su vida inyectándose insulina solo para que lo internen y cuiden, es Facticio.'
      },
      {
        criterion: 'Presencia de síntomas corporales reales',
        entityA: 'Trastorno de Síntomas Somáticos: Presenta dolor o fatiga real que genera pensamientos desproporcionados.',
        entityB: 'Trastorno de Ansiedad por Enfermedad: NO tiene síntomas somáticos o son mínimos, pero teme tener un cáncer oculto.',
        clinicalKey: '¿Le duele el cuerpo? = Síntomas Somáticos. ¿No le duele nada pero pide resonancias? = Ansiedad por Enfermedad.'
      },
      {
        criterion: 'Compatibilidad neuroanatómica',
        entityA: 'Trastorno de Conversión: Incompatibilidad demostrable (e.g., signo de Hoover positivo).',
        entityB: 'Enfermedad Neurológica Orgánica: Coherencia estricta con dermatomos, reflejos y neuroimagen.',
        clinicalKey: 'El signo de Hoover normal demuestra integridad anatómica de la vía piramidal.'
      }
    ],
    clinicalCaseExample: {
      title: 'Caso Clínico: La parálisis indolente de fin de semana',
      casePresentation: 'Una mujer de 33 años es ingresada por paraplejía súbita bilateral 24 horas después de una discusión conyugal violenta. En el examen neurológico se encuentra el signo de Hoover positivo (al pedirle flexión contralateral de la pierna sana contra resistencia, se comprueba una enérgica extensión involuntaria del talón de la pierna paralizada contra la camilla). La paciente comenta su severa incapacidad motriz con una calma y sonrisas llamativas (Belle Indifférence).',
      diagnosticResolution: 'Diagnóstico de Trastorno de Conversión (Síntoma Neurológico Funcional). La maniobra de Hoover positiva demuestra la integridad neurofisiológica de la vía motora y la ausencia de lesión estructural.'
    },
    clinicalPearls: [
      'Belle Indifférence: La paradoja de un paciente que describe una supuesta parálisis o ceguera total sin angustia, con sorprendente frialdad y tranquilidad.',
      'En el Trastorno de Pánico, el problema no es la crisis inicial, sino el mes de ansiedad anticipatoria ("el miedo al miedo") que desata la evitación agorafóbica.',
      'Las personas con TOC saben que lavarse las manos 40 veces es ilógico, pero el alivio ansiolítico transitorio refuerza el bucle compulsivo.'
    ],
    differentialAlgorithm: [
      '1. ¿El síntoma motor/sensitivo contradice la anatomía neurológica? -> Evaluar Trastorno de Conversión.',
      '2. ¿Los síntomas son falsificados deliberadamente? -> Buscar si hay dinero/evasión penal (Simulación) o rol de enfermo (Facticio).',
      '3. ¿Hay preocupación por una enfermedad sin dolor físico? -> Trastorno de Ansiedad por Enfermedad.'
    ]
  },
  {
    id: 'guia-tca-alimentaria',
    category: 'Conducta Alimentaria',
    title: 'Trastornos de la Conducta Alimentaria (TCA): Algoritmos y Reglas Jerárquicas',
    subtitle: 'El peso corporal como divisor estricto entre Anorexia Nerviosa y Bulimia Nerviosa',
    readingTimeMinutes: 9,
    learningObjectives: [
      'Aplicar con seguridad el principio de exclusión jerárquica del DSM-5 entre Anorexia y Bulimia.',
      'Identificar los criterios del Trastorno por Atracón frente a la Bulimia Nerviosa.',
      'Reconocer las complicaciones médicas y biomarcadores de riesgo vital en TCA.'
    ],
    theoreticalFramework: `Los Trastornos de la Conducta Alimentaria (TCA) son patologías psiquiátricas graves con una de las tasas de mortalidad más elevadas de la especialidad, derivadas de complicaciones somáticas de la desnutrición o del suicidio.

El dilema de diagnóstico diferencial más frecuente se plantea cuando una persona presenta atracones de comida y conductas de purga (vómitos autoinducidos, uso de laxantes o diuréticos):
- Si el paciente presenta un peso corporal significativamente bajo (en adultos definido por un Índice de Masa Corporal [IMC] inferior a 18.5 kg/m² o percentil inferior al peso esperado en niños), la regla jerárquica del DSM-5 obliga a diagnosticar Anorexia Nerviosa, subtipo con atracones/purgas.
- Para poder diagnosticar Bulimia Nerviosa, el paciente DEBE mantener un peso corporal en rango normal o de sobrepeso (IMC ≥ 18.5 kg/m²). La bulimia queda excluida formalmente si hay infrapeso significativo.

Por su parte, el Trastorno por Atracón (Binge Eating Disorder) se caracteriza por episodios de atracones recurrentes con sensación de pérdida de control, asociados a marcado malestar subjetivo, pero con una ausencia absoluta de conductas compensatorias inapropiadas recurrentes (no hay vómitos, ni purgas, ni ayunos compensatorios sistemáticos).`,
    dsmComparisonTable: [
      {
        criterion: 'Índice de Masa Corporal (IMC)',
        entityA: 'Anorexia Nerviosa: IMC < 18.5 kg/m² (peso significativamente bajo inferior al mínimo).',
        entityB: 'Bulimia Nerviosa: IMC ≥ 18.5 kg/m² (normopeso o sobrepeso habitual).',
        clinicalKey: 'El IMC es el juez estricto que decide entre Anorexia y Bulimia.'
      },
      {
        criterion: 'Conductas compensatorias (purgas/ayuno)',
        entityA: 'Bulimia Nerviosa: Presentes de forma obligatoria (vómitos, laxantes, ejercicio compulsivo).',
        entityB: 'Trastorno por Atracón: AUSENCIA de conductas compensatorias inapropiadas sistemáticas.',
        clinicalKey: '¿Tiene atracones pero nunca se purga ni compensa? = Trastorno por Atracón.'
      },
      {
        criterion: 'Alteración de la percepción corporal',
        entityA: 'Anorexia Nerviosa: Dismorfofobia intensa, rechazo a reconocer la gravedad del bajo peso.',
        entityB: 'Trastorno de Evitación/Restricción de Alimentos (ARFID): No hay preocupación por la silueta ni peso.',
        clinicalKey: 'En el ARFID el rechazo es por aversión sensorial a texturas o miedo a atragantarse.'
      }
    ],
    clinicalCaseExample: {
      title: 'Caso Clínico: La paradoja del vómito en bajo peso',
      casePresentation: 'Una joven de 19 años es llevada a consulta por sus padres. Presenta episodios nocturnos de ingesta descontrolada de dulces 3 veces por semana, seguidos de vómitos provocados y consumo de laxantes por pánico a engordar. En la báscula su peso es de 42 kg para una estatura de 1.68 m (IMC de 14.8 kg/m², delgadez extrema). Presenta callosidades en el dorso de los nudillos (Signo de Russell) y amenorrea de 6 meses.',
      diagnosticResolution: 'Aunque la paciente tiene atracones y purgas clásicos de bulimia, su IMC de 14.8 kg/m² activa la regla jerárquica del DSM-5: el diagnóstico obligatorio es Anorexia Nerviosa, tipo con atracones/purgas grave.'
    },
    clinicalPearls: [
      'Signo de Russell: Callosidades o cicatrices en el dorso de los dedos causadas por el roce repetido contra los dientes incisivos al provocarse el vómito.',
      'Signo del espejo: Si un paciente con atracones y vómitos pesa 40 kg es Anorexia purgativa; si pesa 60 kg es Bulimia Nerviosa.',
      'El Síndrome de Realimentación (hipofosfatemia súbita potencialmente mortal al reintroducir hidratos de carbono rápido) es la principal emergencia médica en desnutrición severa.'
    ],
    differentialAlgorithm: [
      '1. ¿El peso corporal es significativamente bajo (IMC < 18.5)? -> Si SÍ: Anorexia Nerviosa (evaluar si restrictiva o purgativa).',
      '2. Si el peso es normal: ¿Hay conductas compensatorias recurrentes? -> Si SÍ: Bulimia Nerviosa.',
      '3. Si hay atracones sin compensación: -> Trastorno por Atracón.'
    ]
  }
];
