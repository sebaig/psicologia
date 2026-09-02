import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // =========================================================================
  // 1. TRASTORNO DE ESTRÉS POSTRAUMÁTICO (TEPT)
  // =========================================================================
  {
    id: 'tept-01',
    category: 'tept',
    categoryLabel: 'Estrés Postraumático',
    difficulty: 'intermedio',
    type: 'viñeta_clinica',
    title: 'Viñeta: Reacción tras asalto a mano armada',
    clinicalVignette: 'Una mujer de 29 años acude a consulta 3 semanas después de sufrir un violento asalto en su lugar de trabajo. Manifiesta recuerdos intrusivos vívidos del cañón del arma, pesadillas recurrentes, insomnio de conciliación e hipervigilancia extrema ante cualquier ruido súbito. Ha evitado regresar a su oficina y afirma sentirse "como en una niebla, desconectada de su propio cuerpo" por momentos.',
    question: 'Considerando el tiempo de evolución (3 semanas) y la constelación de síntomas, ¿cuál es el diagnóstico psicopatológico más preciso?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de Estrés Postraumático (TEPT)',
        subtext: 'Cumple criterios sintomáticos pero revise el criterio temporal.'
      },
      {
        id: 'opt-b',
        text: 'Trastorno de Estrés Agudo (TEA)',
        subtext: 'Presencia de síntomas intrusivos, de evitación y disociativos con duración de 3 días a 1 mes.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno de Adaptación con ansiedad',
        subtext: 'Respuesta desadaptativa a estresores no traumáticos extremos.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de Pánico con agorafobia',
        subtext: 'Crisis paroxísticas inesperadas de angustia sin nexo traumático directo.'
      }
    ],
    correctOptionId: 'opt-b',
    feedback: {
      summary: 'El diagnóstico correcto es Trastorno de Estrés Agudo (TEA) debido estrictamente al criterio de duración temporal (3 semanas).',
      detailedRationale: 'Según el DSM-5, el Trastorno de Estrés Agudo (TEA) comparte una constelación sintomática casi idéntica al TEPT (intrusión, evitación, ánimo negativo, hiperalerta y síntomas disociativos), pero su marco temporal de diagnóstico va desde los 3 días posteriores al evento traumático hasta un máximo de 1 mes (4 semanas). Si los síntomas persisten más allá de 30 días, el diagnóstico se reclasifica formalmente como TEPT.',
      distractorAnalysis: [
        {
          optionId: 'opt-a',
          optionText: 'Trastorno de Estrés Postraumático (TEPT)',
          whyIncorrect: 'Incorrecto únicamente por el criterio de duración. El Criterio F del DSM-5 exige que la alteración sintomática dure más de 1 mes. En esta paciente solo han transcurrido 3 semanas.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno de Adaptación con ansiedad',
          whyIncorrect: 'Se diagnostica ante estresores de la vida cotidiana (divorcio, desempleo, mudanza) que no amenazan la vida ni la integridad física. Un asalto a mano armada califica como trauma Criterio A.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno de Pánico con agorafobia',
          whyIncorrect: 'Las crisis de pánico se caracterizan por descargas autonómicas paroxísticas inesperadas sin un evento traumático precipitante identificable con recuerdos intrusivos específicos.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio Temporal TEA (3 días a 1 mes) vs TEPT Criterio F (Duración > 1 mes).',
      clinicalPearl: 'Regla mnemotécnica temporal: De 3 días a 30 días post-evento = Estrés Agudo. A partir del día 31 con persistencia sintomática = TEPT.'
    }
  },
  {
    id: 'tept-02',
    category: 'tept',
    categoryLabel: 'Estrés Postraumático',
    difficulty: 'avanzado',
    type: 'criterio_dsm5',
    title: 'Subtipo Disociativo en el TEPT',
    clinicalVignette: 'Un veterano de operaciones tácticas diagnosticado con TEPT reporta que, al escuchar fuegos artificiales o portazos, a menudo siente que su entorno se vuelve irreal, artificial y como si estuviera viendo el mundo a través de un vidrio o una pantalla de cine. En otras ocasiones siente que "flota sobre su cuerpo" observándose a sí mismo desde arriba.',
    question: '¿A qué especificación diagnóstica formal del DSM-5 corresponden respectivamente estos dos fenómenos disociativos?',
    options: [
      {
        id: 'opt-a',
        text: 'Desrealización (entorno irreal) y Despersonalización (desapego del propio cuerpo)',
        subtext: 'Especificación del TEPT con síntomas disociativos persistentes.'
      },
      {
        id: 'opt-b',
        text: 'Despersonalización (entorno irreal) y Fuga Disociativa (verse desde arriba)',
        subtext: 'Inversión de conceptos psicopatológicos.'
      },
      {
        id: 'opt-c',
        text: 'Amnesia disociativa selectiva y Alucinación cenestésica',
        subtext: 'Confusión con alteraciones sensoperceptivas psicóticas.'
      },
      {
        id: 'opt-d',
        text: 'Distorsión sensoperceptiva hipnopómpica y Anestesia emocional',
        subtext: 'Términos no contemplados como especificadores diagnósticos del TEPT.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El DSM-5 contempla el especificador "Con síntomas disociativos": Desrealización (sentir el mundo externo irreal o de ensueño) y Despersonalización (sentirse separado de los propios procesos mentales o del cuerpo).',
      detailedRationale: 'El TEPT con subtipo disociativo fue formalizado en el DSM-5 para pacientes que, además de cumplir todos los criterios de TEPT, presentan de forma persistente o recurrente uno de dos síntomas: 1) Despersonalización: experiencia de ser un observador externo del propio cuerpo o mente; 2) Desrealización: experiencia de irrealidad, distanciamiento o distorsión del entorno (parece un sueño, distante o artificial). Estos pacientes a menudo muestran una hiper-inhibición frontolímbica (freno excesivo de la amígdala por la corteza prefrontal medial).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Despersonalización (entorno irreal) y Fuga Disociativa',
          whyIncorrect: 'Está invertido: la desrealización afecta la vivencia del entorno, mientras que la fuga disociativa implica un viaje o deambulación con amnesia de la identidad previa.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Amnesia disociativa selectiva y Alucinación cenestésica',
          whyIncorrect: 'La paciente no presenta olvido de hechos traumáticos (amnesia) ni alucinaciones de sensaciones viscerales o corporales patológicas.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Distorsión sensoperceptiva hipnopómpica y Anestesia emocional',
          whyIncorrect: 'Lo hipnopómpico ocurre al despertar del sueño; el fenómeno del paciente ocurre despierto en vigilia ante estímulos detonantes.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Especificador: TEPT con síntomas disociativos (Despersonalización / Desrealización).',
      clinicalPearl: 'Mnemotecnia: Des-PERSONAL-ización atañe a la Persona propia (cuerpo/mente); Des-REAL-ización atañe a la Realidad circundante (entorno).'
    }
  },
  {
    id: 'tept-03',
    category: 'tept',
    categoryLabel: 'Estrés Postraumático',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'Núcleos sintomáticos del TEPT según el DSM-5',
    question: '¿Cuáles son los cuatro grupos (clusters) de síntomas nucleares exigidos por el Criterio B, C, D y E del DSM-5 para el diagnóstico de TEPT?',
    options: [
      {
        id: 'opt-a',
        text: 'Intrusión, Evitación, Alteraciones cognitivas/ánimo negativas, e Hiperactivación/reactividad',
        subtext: 'Modelo de 4 factores introducido en DSM-5.'
      },
      {
        id: 'opt-b',
        text: 'Somatización, Catatonía, Labilidad emocional y Dependencia interpersonal',
        subtext: 'Síntomas heterogéneos pertenecientes a otros cuadros.'
      },
      {
        id: 'opt-c',
        text: 'Fobias específicas, Compulsiones motoras, Delirios persecutorios e Insomnio',
        subtext: 'Mezcla de trastornos de ansiedad y psicosis.'
      },
      {
        id: 'opt-d',
        text: 'Reexperimentación, Disociación primaria, Obsesiones ideativas y Astenia',
        subtext: 'Terminología clásica previa al DSM-5.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El DSM-5 organizó el TEPT en cuatro conglomerados sintomáticos definidos: Intrusión (B), Evitación (C), Alteraciones cognitivas y del ánimo (D) e Hiperreactividad (E).',
      detailedRationale: 'A diferencia del DSM-IV que agrupaba los síntomas en 3 clusters (Reexperimentación, Evitación/Embotamiento e Hiperalerta), el DSM-5 separó la evitación conductual activa (Criterio C) de las alteraciones cognitivas negativas y del estado de ánimo (Criterio D: creencias distorsionadas sobre la causa, culpa persistente, anhedonia, desapego), manteniendo Intrusión (Criterio B) e Hiperactivación/reactividad (Criterio E).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Somatización, Catatonía, Labilidad emocional y Dependencia',
          whyIncorrect: 'La catatonía pertenece a la psicosis o cuadros médicos; la dependencia es rasgo de personalidad; la somatización corresponde al trastorno de síntomas somáticos.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Fobias específicas, Compulsiones motoras, Delirios e Insomnio',
          whyIncorrect: 'Las compulsiones son exclusivas del TOC; los delirios indican psicosis, salvo que sean flashbacks extremos con juicio preservado.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Reexperimentación, Disociación primaria, Obsesiones y Astenia',
          whyIncorrect: 'Usa nomenclatura psicoanalítica o descriptiva antigua, no los 4 dominios formales del DSM-5.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterios B, C, D y E para Trastorno de Estrés Postraumático (309.81).',
      clinicalPearl: 'Recuerda los 4 pilares: 1) Entra a la fuerza (Intrusión), 2) Huye del estímulo (Evitación), 3) Mente y ánimo oscurecidos (Cognitivo/ánimo), 4) Alerta en rojo continuo (Hiperalerta).'
    }
  },

  // =========================================================================
  // 2. ESQUIZOFRENIA Y TRASTORNOS PSICÓTICOS
  // =========================================================================
  {
    id: 'esq-01',
    category: 'esquizofrenia',
    categoryLabel: 'Esquizofrenia y Psicosis',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'Duración temporal diferencial en Psicosis',
    clinicalVignette: 'Un joven universitario de 21 años presenta desde hace 7 semanas un cuadro caracterizado por delirios de persecución (cree que sus profesores conspiran mediante frecuencias de radio), alucinaciones auditivas fonémicas comentadoras y notable desorganización del pensamiento. Antes de estas 7 semanas su rendimiento y funcionamiento eran óptimos.',
    question: 'Si el cuadro actual tiene una duración exacta de 7 semanas (menos de 6 meses pero más de 1 mes), ¿cuál es el diagnóstico psicopatológico preciso según el DSM-5?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno Esquizofreniforme',
        subtext: 'Duración de al menos 1 mes pero menos de 6 meses.'
      },
      {
        id: 'opt-b',
        text: 'Esquizofrenia paranoide',
        subtext: 'Requiere un tiempo total de evolución mínimo de 6 meses.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno Psicótico Breve',
        subtext: 'Duración estrictamente menor a 1 mes (remisión completa).'
      },
      {
        id: 'opt-d',
        text: 'Trastorno Delirante Crónico',
        subtext: 'Delirios no bizarros de al menos 1 mes sin alucinaciones preponderantes ni desorganización.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El diagnóstico formal es Trastorno Esquizofreniforme. Cumple los síntomas del Criterio A de la esquizofrenia pero su tiempo de evolución se sitúa entre 1 mes y 6 meses.',
      detailedRationale: 'La psicopatología diferencial del espectro psicótico depende críticamente de la variable temporal: \n1) Trastorno Psicótico Breve: desde 1 día hasta menos de 1 mes, con retorno al nivel previo de actividad.\n2) Trastorno Esquizofreniforme: al menos 1 mes pero menos de 6 meses de duración total (incluyendo pródromos, fase activa y residual).\n3) Esquizofrenia: signos continuos de la alteración durante al menos 6 meses (con al menos 1 mes de síntomas activos Criterio A). Como el paciente lleva 7 semanas (~1.7 meses), se clasifica como Esquizofreniforme (provisional si continúa en evolución).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Esquizofrenia paranoide',
          whyIncorrect: 'El DSM-5 eliminó los subtipos clásicos de esquizofrenia (paranoide, hebefrénica, etc.) y exige 6 meses de duración total. En 7 semanas aún no se puede etiquetar como esquizofrenia.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno Psicótico Breve',
          whyIncorrect: 'El psicótico breve tiene un límite superior estricto de 1 mes (30 días). En 7 semanas ya rebasó con creces este umbral.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno Delirante Crónico',
          whyIncorrect: 'En el trastorno delirante NO hay alucinaciones auditivas prominentes ni desorganización del pensamiento; además, las ideas suelen ser no extravagantes y el funcionamiento general está relativamente preservado.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio Temporal Esquizofreniforme (295.40) vs Esquizofrenia (295.90).',
      clinicalPearl: 'Línea de tiempo psicótica: < 1 mes = Breve. Entre 1 y 6 meses = Esquizofreniforme. > 6 meses = Esquizofrenia.'
    }
  },
  {
    id: 'esq-02',
    category: 'esquizofrenia',
    categoryLabel: 'Esquizofrenia y Psicosis',
    difficulty: 'avanzado',
    type: 'diagnostico_diferencial',
    title: 'Diferencial: Trastorno Esquizoafectivo vs Trastorno Bipolar con Psicosis',
    clinicalVignette: 'Un paciente de 35 años presenta antecedentes de episodios depresivos mayores y episodios maníacos. Sin embargo, durante un período de 3 semanas en que su estado de ánimo era completamente eutímico (sin manía ni depresión), presentó delirios bizarros de inserción del pensamiento y alucinaciones auditivas continuas. En otros periodos del año, los síntomas psicóticos coexisten con síntomas afectivos.',
    question: '¿Qué hallazgo clínico cardinal define que este caso sea un Trastorno Esquizoafectivo y NO un Trastorno Bipolar con síntomas psicóticos congruentes?',
    options: [
      {
        id: 'opt-a',
        text: 'La presencia de delirios o alucinaciones durante al menos 2 semanas en ausencia de un episodio mayor del estado de ánimo',
        subtext: 'Criterio diagnóstico discriminante mandatorio en el DSM-5.'
      },
      {
        id: 'opt-b',
        text: 'La intensidad de las alucinaciones auditivas durante la fase maníaca',
        subtext: 'La intensidad no es criterio diferencial patognomónico.'
      },
      {
        id: 'opt-c',
        text: 'La presencia de síntomas motores catatónicos durante la fase depresiva',
        subtext: 'La catatonía puede presentarse tanto en depresión mayor como en esquizofrenia.'
      },
      {
        id: 'opt-d',
        text: 'El antecedente familiar de primer grado con trastorno del humor',
        subtext: 'Factor de riesgo genético pero no criterio nosológico diferencial.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Trastorno Esquizoafectivo exige imperativamente un período de al menos 2 semanas de delirios o alucinaciones en ausencia de síntomas maníacos o depresivos mayores.',
      detailedRationale: 'Este es uno de los diagnósticos diferenciales más evaluados en psicopatología: \n• En el Trastorno Bipolar o Depresión Mayor con características psicóticas, los delirios y alucinaciones ocurren ÚNICAMENTE durante los episodios del estado de ánimo (manía o depresión).\n• En el Trastorno Esquizoafectivo (Criterio B del DSM-5), debe existir un período de al menos 2 semanas continuas de delirios o alucinaciones en toda la vida del sujeto SIN que existan síntomas significativos del estado de ánimo (episodio depresivo mayor o maníaco). Esto demuestra que la psicosis es independiente y primaria, no meramente un epifenómeno de la alteración afectiva.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'La intensidad de las alucinaciones auditivas durante la fase maníaca',
          whyIncorrect: 'La intensidad sintomática no discrimina; un episodio maníaco severo puede cursar con psicosis sumamente florida y ruidosa.'
        },
        {
          optionId: 'opt-c',
          optionText: 'La presencia de síntomas motores catatónicos',
          whyIncorrect: 'La catatonía es un especificador transversal que puede añadirse tanto a trastornos del ánimo como a la esquizofrenia o condiciones médicas.'
        },
        {
          optionId: 'opt-d',
          optionText: 'El antecedente familiar de primer grado con trastorno del humor',
          whyIncorrect: 'Los antecedentes familiares orientan etiología pero no determinan los criterios diagnósticos operativos de clasificación formal.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno Esquizoafectivo (295.70), Criterio B.',
      clinicalPearl: 'Regla de oro: ¿Hay psicosis sola durante al menos 2 semanas cuando el ánimo está sano? Sí = Esquizoafectivo. No (la psicosis solo aparece cuando está muy maníaco o muy deprimido) = Trastorno Afectivo con psicosis.'
    }
  },
  {
    id: 'esq-03',
    category: 'esquizofrenia',
    categoryLabel: 'Esquizofrenia y Psicosis',
    difficulty: 'básico',
    type: 'criterio_dsm5',
    title: 'Síntomas Negativos en la Esquizofrenia: Las 5 "A"',
    question: '¿Cuál de los siguientes grupos de manifestaciones clínicas corresponde con exactitud a los denominados "Síntomas Negativos" (déficit) de la esquizofrenia?',
    options: [
      {
        id: 'opt-a',
        text: 'Aplanamiento afectivo, Alogia, Abulia, Anhedonia y Asocialidad',
        subtext: 'Pérdida o disminución de funciones cognitivas y emocionales normales.'
      },
      {
        id: 'opt-b',
        text: 'Alucinaciones auditivas, Agitación psicomotora, Ansiedad y Agresividad',
        subtext: 'Predominio de síntomas positivos y de conducta motora reactiva.'
      },
      {
        id: 'opt-c',
        text: 'Amnesia retrógrada, Afasia de Broca, Apraxia y Agnosia visual',
        subtext: 'Signos focales neurológicos característicos de síndromes neurocognitivos mayores (demencias).'
      },
      {
        id: 'opt-d',
        text: 'Angustia paroxística, Agorafobia, Acatisia e Ideas delirantes',
        subtext: 'Combinación de trastornos de ansiedad, efectos secundarios extrapiramidales y psicosis positiva.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Los síntomas negativos representan un déficit o sustracción del funcionamiento normal, agrupados clásicamente como: Aplanamiento afectivo, Alogia, Abulia, Anhedonia y Asocialidad.',
      detailedRationale: 'En psicopatología clínica se distingue entre síntomas positivos (exceso o distorsión de funciones normales: delirios, alucinaciones, lenguaje y conducta desorganizada) y síntomas negativos (disminución o pérdida de capacidades normales). Los síntomas negativos nucleares del DSM-5 incluyen la expresión emotiva disminuida (aplanamiento afectivo, falta de contacto visual y entonación monótona) y la abulia (disminución de actividades autodirigidas por iniciativa propia), acompañados de alogia (pobreza del habla), anhedonia (incapacidad para experimentar placer) y asocialidad (falta de interés en interacciones sociales). Suelen responder con menor eficacia a antipsicóticos típicos.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Alucinaciones, Agitación, Ansiedad y Agresividad',
          whyIncorrect: 'Las alucinaciones son el prototipo de síntoma positivo (exceso sensoperceptivo); la agitación no es un síntoma de déficit.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Amnesia, Afasia de Broca, Apraxia y Agnosia',
          whyIncorrect: 'Las 4 A de la neurología cognitiva cortical (síndrome afaso-apraxo-agnósico), características del daño cerebral focal y enfermedad de Alzheimer.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Angustia, Agorafobia, Acatisia e Ideas delirantes',
          whyIncorrect: 'La acatisia es un efecto adverso motor de los neurolépticos (inquietud psicomotora) y las ideas delirantes son síntomas positivos.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio A5 para Esquizofrenia: Síntomas negativos (expresión emotiva disminuida o abulia).',
      clinicalPearl: 'Mnemotecnia de las 5 "A" negativas: Afecto aplanado, Alogia (sin palabras), Abulia (sin voluntad), Anhedonia (sin placer), Asocialidad (sin contacto).'
    }
  },

  // =========================================================================
  // 3. NARCISISMO Y TRASTORNO NARCISISTA DE LA PERSONALIDAD (TPN)
  // =========================================================================
  {
    id: 'narc-01',
    category: 'narcisismo',
    categoryLabel: 'Narcisismo y Trastornos de Personalidad',
    difficulty: 'intermedio',
    type: 'viñeta_clinica',
    title: 'Viñeta: "Nadie en esta empresa está a mi nivel intelectual"',
    clinicalVignette: 'Un ejecutivo de 42 años es derivado a recursos humanos tras múltiples quejas de subordinados. Durante la entrevista, el sujeto se muestra altivo y desdeñoso: exige ser atendido únicamente por el director clínico senior alegando que "profesionales ordinarios no comprenderían la complejidad de su mente". Se enfurece ante el más mínimo cuestionamiento, exige privilegios especiales, minimiza el esfuerzo de sus colegas y se atribuye el éxito de proyectos ajenos sin mostrar la menor preocupación por el despido de colaboradores clave provocado por sus acusaciones.',
    question: '¿Qué rasgo psicopatológico distintivo y criterio nuclear del Trastorno de la Personalidad Narcisista (TPN) se ilustra de manera más prominente en su exigencia de trato preferencial y la creencia de ser comprendido solo por personas de alto estatus?',
    options: [
      {
        id: 'opt-a',
        text: 'Patrón de grandiosidad y creencia de ser "especial" o único (Criterio 3 DSM-5)',
        subtext: 'Convicción de que solo puede relacionarse o ser comprendido por personas o instituciones de alto estatus.'
      },
      {
        id: 'opt-b',
        text: 'Delirio megalomaníaco con pérdida total del juicio de realidad',
        subtext: 'Implica una idea delirante psicótica encapsulated.'
      },
      {
        id: 'opt-c',
        text: 'Compulsión de comprobación de jerarquía',
        subtext: 'Fenómeno obsesivo-compulsivo de carácter ansioso.'
      },
      {
        id: 'opt-d',
        text: 'Fuga disociativa con asunción de falsa identidad',
        subtext: 'Pérdida de memoria con desplazamiento geográfico.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Corresponde al Criterio 3 del TPN en el DSM-5: el individuo cree que es "especial" y único, y que solo pueden comprenderle o solo puede relacionarse con personas (o instituciones) que son especiales o de alto estatus.',
      detailedRationale: 'El Trastorno de la Personalidad Narcisista (Cluster B) se caracteriza por un patrón general de grandiosidad (en la fantasía o en la conducta), una necesidad constante de admiración y una profunda falta de empatía. En esta viñeta se aprecian varios de sus 9 criterios: 1) Sentimientos de grandeza y prepotencia; 2) Creencia de ser especial y único; 3) Necesidad excesiva de admiración; 4) Sentimiento de privilegio (expectativas irracionales de trato favorable); 5) Explotación interpersonal; 6) Falta de empatía. A diferencia de un delirio, aquí no hay una creencia bizarra fuera del marco cultural o pérdida de juicio psicótico, sino un estilo de personalidad egosintónico y rígido.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Delirio megalomaníaco con pérdida del juicio',
          whyIncorrect: 'El narcisista mantiene el contacto con la realidad consensuada. No afirma ser Napoleón o un enviado divino con poderes sobrenaturales (lo cual sería psicótico).'
        },
        {
          optionId: 'opt-c',
          optionText: 'Compulsión de comprobación de jerarquía',
          whyIncorrect: 'Las compulsiones son conductas egodistónicas repetitivas destinadas a reducir la angustia de una obsesión, no actitudes de auto-engrandecimiento egosintónico.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Fuga disociativa con asunción de identidad',
          whyIncorrect: 'La fuga disociativa implica viajar súbitamente lejos del hogar con amnesia de la identidad propia, lo cual nada tiene que ver con la personalidad narcisista.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de la Personalidad Narcisista (301.81), Criterio A (especialmente ítem 3).',
      clinicalPearl: 'Clave diagnóstica: La grandiosidad narcisista busca reverencia y validación de estatus; la manía bipolar busca aceleración hedónica e hiperactividad difusa; el delirio megalómano carece de lógica contextual.'
    }
  },
  {
    id: 'narc-02',
    category: 'narcisismo',
    categoryLabel: 'Narcisismo y Trastornos de Personalidad',
    difficulty: 'avanzado',
    type: 'diagnostico_diferencial',
    title: 'Narcisismo Grandioso vs Narcisismo Vulnerable (Encubierto)',
    clinicalVignette: 'Un paciente de 28 años busca terapia quejándose de depresión y profunda amargura. Describe un resentimiento crónico hacia sus amigos porque "ellos tienen éxito a pesar de ser mediocres, mientras que mi brillantez es ignorada por el mundo". Es sumamente hipersensible al rechazo, tímido en público por miedo a no brillar, pero internamente alberga fantasías omnipotentes de triunfo vindicativo donde humilla a quienes no lo apreciaron.',
    question: 'En la investigación clínica contemporánea sobre psicopatología de la personalidad, ¿a qué constructo fenotípico corresponde esta presentación clínica?',
    options: [
      {
        id: 'opt-a',
        text: 'Narcisismo Vulnerable o Encubierto (Covert Narcissism)',
        subtext: 'Caracterizado por afecto negativo, hipersensibilidad a la crítica y grandiosidad defensiva oculta.'
      },
      {
        id: 'opt-b',
        text: 'Trastorno de la Personalidad por Dependencia',
        subtext: 'Sumisión constante, desamparo y necesidad de cuidado ajeno.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno Esquizoide de la Personalidad',
        subtext: 'Indiferencia afectiva genuina hacia los elogios y el estatus social.'
      },
      {
        id: 'opt-d',
        text: 'Fobia Social pura no relacionada con la personalidad',
        subtext: 'Ansiedad por desempeño sin componente de arrogancia interior ni envidia hostil.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Se trata de un Narcisismo Vulnerable (encubierto o hipersensible): grandiosidad latente y envidia encubiertas bajo una fachada de timidez, victimismo y reactividad emocional al rechazo.',
      detailedRationale: 'La literatura clínica (Wink, Pincus, Kernberg) distingue dos caras del narcisismo patológico: \n1) Narcisismo Grandioso (Overt): extroversión, carisma dominante, descarada prepotencia y baja reactividad a la crítica externa.\n2) Narcisismo Vulnerable (Covert): introversión aparente, alta neuroticismo/ansiedad, hipersensibilidad al juicio ajeno, sentimientos crónicos de amargura, resentimiento ("la vida no me ha hecho justicia") y fantasías secretas de superioridad. Aunque parezca tímido o depresivo, comparte el núcleo narcisista: derecho percibido, falta de empatía genuina y envidia patológica.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Trastorno de la Personalidad por Dependencia',
          whyIncorrect: 'El dependiente se subordina voluntariamente para ser cuidado, teme la separación y carece de fantasías de superioridad o desprecio vindicativo hacia el éxito ajeno.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno Esquizoide de la Personalidad',
          whyIncorrect: 'Al esquizoide le es indiferente la alabanza o la crítica ajena; no sufre por no ser reconocido ni alberga envidia hacia los logros de los demás.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Fobia Social pura',
          whyIncorrect: 'En la fobia social, la persona se siente inferior o avergonzada genuinamente; no considera a los demás "mediocres" ni tiene fantasías secretas de que su "brillantez superior" merece admiración.'
        }
      ],
      dsmCriteriaReference: 'Subtipos dimensionales del Trastorno Narcisista de la Personalidad (Modelo Alternativo del DSM-5, Sección III).',
      clinicalPearl: 'El narcisista grandioso te dice a la cara que es el rey; el narcisista vulnerable sufre en silencio y te desprecia por no haberte dado cuenta de que él es el rey.'
    }
  },

  // =========================================================================
  // 4. OTROS TRASTORNOS DE LA PERSONALIDAD (TLP, TPA, HISTRIÓNICO, ETC.)
  // =========================================================================
  {
    id: 'pers-01',
    category: 'personalidad',
    categoryLabel: 'Trastornos de la Personalidad',
    difficulty: 'intermedio',
    type: 'viñeta_clinica',
    title: 'Viñeta: Rupturas tormentosas e impulsividad autodestructiva',
    clinicalVignette: 'Una joven de 23 años acude tras un intento de autolesión con cortes superficiales en los antebrazos motivado por el retraso de 30 minutos de su pareja para una cena, lo que interpretó como "la prueba definitiva de que me va a abandonar para siempre". Describe que hace dos días consideraba a su pareja "el ser más perfecto del universo", pero tras este hecho lo percibe como "un monstruo cruel y despreciable". Refiere un sentimiento crónico de vacío interior y accesos de furia incontrolable.',
    question: '¿Qué mecanismo de defensa psicopatológico primario y qué diagnóstico del Cluster B se manifiestan de forma paradigmática en este cuadro?',
    options: [
      {
        id: 'opt-a',
        text: 'Escisión (Splitting) y Trastorno Límite de la Personalidad (TLP / Borderline)',
        subtext: 'Fluctuación polarizada extrema entre idealización y devaluación con terror al abandono.'
      },
      {
        id: 'opt-b',
        text: 'Proyección y Trastorno Paranoide de la Personalidad',
        subtext: 'Atribución de impulsos hostiles propios a terceros sin inestabilidad afectiva ni autolesiones.'
      },
      {
        id: 'opt-c',
        text: 'Racionalización y Trastorno Obsesivo-Compulsivo de la Personalidad',
        subtext: 'Intelectualización y rigidez normativa sin desregulación emocional intensa.'
      },
      {
        id: 'opt-d',
        text: 'Negación y Trastorno Histriónico de la Personalidad',
        subtext: 'Búsqueda de atención teatral pero sin patrón de autolesiones ni miedo al abandono.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El cuadro corresponde de manera arquetípica al Trastorno Límite de la Personalidad (TLP) operando bajo el mecanismo defensivo primitivo de Escisión (Splitting).',
      detailedRationale: 'El TLP (301.83) se define por un patrón dominante de inestabilidad de las relaciones interpersonales, de la autoimagen y de los afectos, e impulsividad intensa. En la viñeta destacan: \n1) Esfuerzos desesperados para evitar el desamparo real o imaginado (Criterio 1);\n2) Relaciones inestables e intensas marcadas por la alternancia entre idealización y devaluación extremas (Criterio 2: "Splitting" o escisión, incapacidad de integrar aspectos positivos y negativos de una misma persona);\n3) Comportamiento, actitud o amenazas recurrentes de suicidio o automutilación (Criterio 5);\n4) Sentimientos crónicos de vacío (Criterio 7);\n5) Ira inapropiada e intensa (Criterio 8).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Proyección y Trastorno Paranoide',
          whyIncorrect: 'El paranoide es desconfiado y suspicaz respecto a las intenciones de otros, pero no presenta intentos de autolesión, fluctuación de idealización/devaluación ni miedo al abandono.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Racionalización y Trastorno Obsesivo-Compulsivo',
          whyIncorrect: 'El TOCP se define por preocupación por el orden, perfeccionismo y control mental, sin la impulsividad ni la tormenta afectiva del TLP.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Negación y Trastorno Histriónico',
          whyIncorrect: 'El histriónico busca ser el centro de atención mediante la seducción o dramatización superficial, pero no cursa con la agresividad autodirigida, mutilación ni el vacío crónico del TLP.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de la Personalidad Límite (301.83), Criterios 1, 2, 5, 7 y 8.',
      clinicalPearl: 'La escisión (splitting) divide al mundo en blanco o negro ("o eres mi salvador absoluto o mi peor enemigo mortal"), sin espacio para matices o ambivalencia.'
    }
  },
  {
    id: 'pers-02',
    category: 'personalidad',
    categoryLabel: 'Trastornos de la Personalidad',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'Requisito anamnésico infanto-juvenil para el Trastorno de la Personalidad Antisocial',
    clinicalVignette: 'Un hombre de 26 años es evaluado en el sistema penitenciario tras cometer estafas reiteradas y agresiones físicas. Manifiesta indiferencia absoluta por el daño causado a sus víctimas, declarando que "el mundo es de los vivos y los tontos merecen ser engañados". Carece de remordimiento, culpa o lealtad hacia cualquier grupo.',
    question: 'Para establecer formalmente el diagnóstico de Trastorno de la Personalidad Antisocial (TPA) según el DSM-5, ¿cuál de los siguientes requisitos de historia previa es estrictamente obligatorio?',
    options: [
      {
        id: 'opt-a',
        text: 'Evidencia de Trastorno de la Conducta (Disocial) con inicio antes de los 15 años de edad',
        subtext: 'Criterio C ineludible del DSM-5 para el diagnóstico formal de TPA.'
      },
      {
        id: 'opt-b',
        text: 'Historia documentada de enuresis nocturna y piromanía infantil',
        subtext: 'Componentes de la tríada de Macdonald, de valor correlacional pero no criterio diagnóstico obligatorio.'
      },
      {
        id: 'opt-c',
        text: 'Diagnóstico de Trastorno por Déficit de Atención e Hiperactividad (TDAH) tipo inatento',
        subtext: 'Posible comorbilidad frecuente pero no prerrequisito nosológico.'
      },
      {
        id: 'opt-d',
        text: 'Episodios previos de amnesia psicógena disociativa',
        subtext: 'No forma parte de los criterios del trastorno antisocial.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Criterio C del DSM-5 exige de forma ineludible la presencia demostrable de un Trastorno de la Conducta (antes llamado trastorno disocial) que haya comenzado antes de los 15 años.',
      detailedRationale: 'Para diagnosticar Trastorno de la Personalidad Antisocial (301.7), el DSM-5 establece 4 criterios indispensables:\n• Criterio A: Patrón dominante de inatención y vulneración de los derechos de los demás desde la edad de 15 años (deshonestidad, impulsividad, agresividad, ausencia de remordimiento).\n• Criterio B: El individuo tiene como mínimo 18 años de edad.\n• Criterio C: Existen evidencias de la presencia de un Trastorno de la Conducta con inicio antes de los 15 años (agresión a personas o animales, destrucción de propiedad, fraudes o hurtos graves, violaciones graves de normas).\n• Criterio D: El comportamiento antisocial no se produce exclusivamente en el curso de la esquizofrenia o un trastorno bipolar.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Enuresis nocturna y piromanía infantil',
          whyIncorrect: 'Forma parte de la llamada "Tríada de Macdonald" (enuresis, piromanía y crueldad hacia animales), una teoría criminológica clásica, pero la enuresis NO es criterio formal en el DSM-5.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Diagnóstico de TDAH tipo inatento',
          whyIncorrect: 'El TDAH es un factor de riesgo para el trastorno de conducta en la infancia, pero no es un requisito normativo para diagnosticar TPA.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Episodios previos de amnesia psicógena',
          whyIncorrect: 'La amnesia disociativa pertenece a los trastornos disociativos y no guarda relación diagnóstica con la psicopatía o el trastorno antisocial.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de la Personalidad Antisocial (301.7), Criterios B (>= 18 años) y C (Trastorno de Conducta antes de los 15 años).',
      clinicalPearl: 'Sin Trastorno de la Conducta documentado en la infancia/adolescencia (< 15 años), NO se puede emitir el diagnóstico de Trastorno Antisocial en el adulto según el DSM-5.'
    }
  },
  {
    id: 'pers-03',
    category: 'personalidad',
    categoryLabel: 'Trastornos de la Personalidad',
    difficulty: 'avanzado',
    type: 'diagnostico_diferencial',
    title: 'Diferencial: Trastorno Esquizoide vs Trastorno de la Personalidad por Evitación',
    clinicalVignette: 'Dos pacientes de 30 años viven en completo aislamiento social sin pareja ni amigos fuera del círculo familiar primario. \n• El Paciente 1 afirma: "Estar solo me resulta indiferente; no siento la menor necesidad de hacer amigos ni me interesa compartir con nadie. No sufro por esto".\n• El Paciente 2 afirma: "Deseo con toda mi alma tener amigos y una pareja, pero el miedo a ser juzgado, criticado o rechazado me paraliza por completo; me siento inepto y sufro intensamente por mi soledad".',
    question: '¿A qué diagnósticos corresponden respectivamente el Paciente 1 y el Paciente 2?',
    options: [
      {
        id: 'opt-a',
        text: 'Paciente 1: Trastorno Esquizoide / Paciente 2: Trastorno de la Personalidad por Evitación',
        subtext: 'Falta de deseo de relación (Esquizoide) vs Deseo de relación bloqueado por miedo al rechazo (Evitación).'
      },
      {
        id: 'opt-b',
        text: 'Paciente 1: Trastorno de la Personalidad por Evitación / Paciente 2: Trastorno Esquizoide',
        subtext: 'Inversión completa de la psicodinámica y los criterios diagnósticos.'
      },
      {
        id: 'opt-c',
        text: 'Paciente 1: Fobia Social Generalizada / Paciente 2: Agorafobia con crisis de angustia',
        subtext: 'Diagnósticos del eje de ansiedad que no captan la estructura de personalidad.'
      },
      {
        id: 'opt-d',
        text: 'Paciente 1: Esquizotipia latente / Paciente 2: Trastorno Depresivo Mayor persistente',
        subtext: 'No presentan distorsiones cognitivas/mágicas ni clínica depresiva primaria.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Paciente 1 es Esquizoide (Cluster A: anhedonia social, no desea ni disfruta las relaciones íntimas); el Paciente 2 es Evitativo (Cluster C: desea intensamente conectar, pero se aísla por terror al rechazo y baja autoestima).',
      detailedRationale: 'Esta es una de las distinciones más elegantes de la psicopatología descriptiva: \n• Trastorno Esquizoide (Cluster A): Criterio 1: "No desea ni disfruta las relaciones íntimas, incluido el formar parte de una familia". Hay un aplanamiento afectivo genuino, desinterés por el elogio o la crítica, y no hay angustia por la falta de contacto.\n• Trastorno de la Personalidad por Evitación (Cluster C): El individuo anhela profundamente la cercanía interpersonal, pero se inhibe socialmente debido a sentimientos de incompetencia y una hipersensibilidad extrema a la evaluación negativa (miedo a la vergüenza, crítica o rechazo). Su soledad es una fuente de sufrimiento agudo y crónico.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Paciente 1: Evitación / Paciente 2: Esquizoide',
          whyIncorrect: 'Está exactamente invertido. El evitativo sufre por estar solo; el esquizoide no sufre ni desea estar acompañado.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Fobia Social / Agorafobia',
          whyIncorrect: 'La fobia social se solapa con el trastorno evitativo, pero no describe al esquizoide (quien no tiene fobia ni ansiedad social, sino pura indiferencia y desapego).'
        },
        {
          optionId: 'opt-d',
          optionText: 'Esquizotipia latente / Depresión Mayor',
          whyIncorrect: 'En el esquizotípico hay pensamiento mágico, ideas de referencia y excentricidad, ausentes en el Paciente 1.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno Esquizoide (301.20) vs Trastorno de la Personalidad por Evitación (301.82).',
      clinicalPearl: 'Regla nemotécnica de consulta: El Esquizoide está solo y NO quiere compañía. El Evitativo está solo y SE MUERE por tener compañía pero tiene pánico al rechazo.'
    }
  },
  {
    id: 'pers-04',
    category: 'personalidad',
    categoryLabel: 'Trastornos de la Personalidad',
    difficulty: 'intermedio',
    type: 'diagnostico_diferencial',
    title: 'Egosintonía vs Egodistonía: TOC vs Trastorno Obsesivo-Compulsivo de la Personalidad (TOCP)',
    question: '¿Cuál es la diferencia psicopatológica fundamental entre el Trastorno Obsesivo-Compulsivo (TOC) del espectro de ansiedad y el Trastorno de la Personalidad Obsesivo-Compulsiva (TOCP / Anancástico)?',
    options: [
      {
        id: 'opt-a',
        text: 'En el TOC los pensamientos y compulsiones son egodistónicos (vividos con angustia y como ajenos/absurdos), mientras que en el TOCP los rasgos de orden y perfeccionismo son egosintónicos (vistos como la forma correcta y moral de actuar)',
        subtext: 'Diferencia nuclear entre síntoma patológico invasivo y rasgo de personalidad caracterológico.'
      },
      {
        id: 'opt-b',
        text: 'El TOC siempre tiene origen orgánico cerebral y el TOCP es puramente aprendido en la infancia',
        subtext: 'Ambos tienen bases multifactoriales neurobiológicas y ambientales.'
      },
      {
        id: 'opt-c',
        text: 'El TOCP cursa con alucinaciones táctiles de suciedad y el TOC con delirios de limpieza',
        subtext: 'Ninguno de los dos cuadros cursa típicamente con síntomas psicóticos.'
      },
      {
        id: 'opt-d',
        text: 'El TOC solo se presenta en adultos mayores y el TOCP exclusivamente en adolescentes',
        subtext: 'Inexactitud epidemiológica evidente; ambos debutan en etapas tempranas de la vida.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El TOC se caracteriza por obsesiones y rituales egodistónicos (intrusivos, indeseados que causan angustia subjetiva), mientras que el TOCP es un estilo general de personalidad egosintónico (el sujeto cree que su perfeccionismo y rigidez son virtudes deseables).',
      detailedRationale: 'Esta es una distinción nosológica crucial:\n• TOC (Trastorno Obsesivo-Compulsivo): El paciente reconoce (en la mayoría de los casos) que sus pensamientos obsesivos sobre contaminación, agresión o dudas son absurdos, intrusivos y molestos (egodistonía). Realiza compulsiones para aliviar esa angustia insoportable.\n• TOCP (Trastorno de la Personalidad Obsesivo-Compulsiva, Cluster C): No hay obsesiones ni compulsiones ritualizadas clásicas. Hay un patrón generalizado de preocupación por el orden, el perfeccionismo inflexible y el control interpersonal y mental. El sujeto siente que su forma de proceder es la "correcta, eficiente y moralmente superior", y se irrita cuando los demás no se someten a sus normas estrictas (egosintonía).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Origen orgánico vs puramente aprendido',
          whyIncorrect: 'Falso dualismo; tanto los trastornos de personalidad como los del espectro obsesivo cuentan con complejas bases epigenéticas, neuroquímicas y de desarrollo.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Alucinaciones táctiles vs delirios de limpieza',
          whyIncorrect: 'Tanto el TOC como el TOCP pertenecen a patologías no psicóticas primarias (aunque en el TOC muy grave puede haber juicio pobre).'
        },
        {
          optionId: 'opt-d',
          optionText: 'TOC en adultos mayores vs TOCP en adolescentes',
          whyIncorrect: 'El TOC suele iniciarse típicamente en la infancia o adultez temprana; el TOCP se consolida al inicio de la edad adulta.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno Obsesivo-Compulsivo (300.3) vs Trastorno de la Personalidad Obsesivo-Compulsiva (301.4).',
      clinicalPearl: 'Egodistónico (TOC): "Odio tener que lavarme las manos 40 veces, me hace sufrir". Egosintónico (TOCP): "El mundo funcionaría mucho mejor si todos fueran tan organizados, limpios e impecables como yo".'
    }
  },

  // =========================================================================
  // 5. CASOS CLÍNICOS INTEGRADOS Y DIAGNÓSTICO DIFERENCIAL
  // =========================================================================
  {
    id: 'caso-01',
    category: 'casos_clinicos',
    categoryLabel: 'Casos Clínicos en Viñeta',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Caso Clínico: Sospecha de infidelidad y robo de documentos',
    clinicalVignette: 'Un contador de 49 años, sin antecedentes psiquiátricos previos, está firmemente convencido desde hace 4 meses de que su esposa ha sido seducida por un vecino para robarle documentos confidenciales de su trabajo. Contrata detectives privados, instala cámaras ocultas en el dormitorio y revisa minuciosamente las sábanas buscando manchas sospechosas. Pese a que todas las investigaciones descartan cualquier infidelidad, su convicción permanece inamovible. Fuera de este tema específico, su discurso es coherente, viste con pulcritud, no presenta alucinaciones, no hay desorganización del pensamiento ni síntomas negativos, y continúa desempeñando su trabajo contable con precisión.',
    question: '¿Cuál es el diagnóstico clínico más exacto de acuerdo a los criterios del DSM-5?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno Delirante (Tipo Celotípico / Síndrome de Otelo)',
        subtext: 'Presencia de una o más ideas delirantes de al menos 1 mes sin deterioro sustancial del funcionamiento fuera del impacto del delirio.'
      },
      {
        id: 'opt-b',
        text: 'Esquizofrenia paranoide de inicio tardío',
        subtext: 'Requeriría Criterio A cumplido con alucinaciones o pensamiento desorganizado o síntomas negativos.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno Paranoide de la Personalidad',
        subtext: 'Desconfianza generalizada desde el inicio de la edad adulta, no un delirio monotemático estructurado de 4 meses.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de Ansiedad Generalizada con rumiación celotípica',
        subtext: 'Las preocupaciones en el TAG son reconocidas como temores, no como certezas delirantes incorregibles.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El diagnóstico es Trastorno Delirante, tipo celotípico (tradicionalmente conocido como Síndrome de Otelo).',
      detailedRationale: 'Los criterios del DSM-5 para el Trastorno Delirante (297.1) exigen: \n• Criterio A: Presencia de uno (o más) delirios de al menos un mes de duración (en este caso, 4 meses).\n• Criterio B: Nunca se ha cumplido el Criterio A de esquizofrenia (no hay alucinaciones preponderantes, ni desorganización del habla o la conducta, ni síntomas negativos).\n• Criterio C: Aparte del impacto del delirio o sus ramificaciones lógicas (instalar cámaras, investigar a la esposa), el funcionamiento no está muy alterado y el comportamiento no es manifiestamente extravagante o bizarro. \n• Especificador: Tipo celotípico, cuando el tema central del delirio es que la pareja o cónyuge le es infiel.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Esquizofrenia paranoide',
          whyIncorrect: 'Faltan los criterios de esquizofrenia: no hay alucinaciones, ni pensamiento incoherente/desorganizado, y el resto de la vida personal y laboral del paciente está completamente intacta.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno Paranoide de la Personalidad',
          whyIncorrect: 'El trastorno de personalidad es un patrón que comienza en la adolescencia y abarca múltiples esferas de la vida. Aquí se trata de un delirio focal estructurado de inicio agudo/subagudo hace 4 meses.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno de Ansiedad Generalizada',
          whyIncorrect: 'En el TAG hay preocupaciones excesivas ("temo que me engañe"), pero el sujeto admite la posibilidad de estar equivocado. En el delirio celotípico hay una certeza apofántica absoluta e incorregible ante la evidencia contraria.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno Delirante (297.1), Tipo Celotípico.',
      clinicalPearl: 'El Trastorno Delirante se caracteriza por una isla delirante en un mar de funcionamiento normal: todo funciona bien en su vida, excepto en la temática de su delirio.'
    }
  },
  {
    id: 'caso-02',
    category: 'casos_clinicos',
    categoryLabel: 'Casos Clínicos en Viñeta',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Caso Clínico: Teatro emocional y necesidad de validación',
    clinicalVignette: 'Una actriz de 31 años consulta refiriendo "una depresión insoportable que desgarra mi alma en mil pedazos" tras no ser seleccionada en una audición secundaria. Durante la sesión viste un atuendo llamativo y extravagante, llora de forma dramática pero se calma de inmediato cuando el terapeuta le hace un cumplido sobre su carisma. Utiliza un lenguaje vago, cargado de adjetivos superlativos pero carente de detalles fácticos ("fue una experiencia cósmica y atroz a la vez"). Se insinúa de forma sutilmente seductora con el profesional y afirma que siente que el terapeuta "es su amigo del alma y la única persona que la entiende en el planeta", a pesar de ser su primera sesión.',
    question: '¿Qué trastorno de la personalidad del Grupo B (Cluster B) describe con mayor precisión esta presentación clínica?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de la Personalidad Histriónica (TPH)',
        subtext: 'Emotividad generalizada excesiva, dramatismo, sugestibilidad y necesidad imperiosa de atención.'
      },
      {
        id: 'opt-b',
        text: 'Trastorno Bipolar tipo I en fase maníaca',
        subtext: 'Requeriría elevación afectiva desmedida persistente con fuga de ideas y disminución del sueño.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno de Ansiedad Social con hiperemotividad',
        subtext: 'En la fobia social la persona evita el foco de atención por vergüenza, no lo busca activamente.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de la Personalidad Esquizoide',
        subtext: 'Polo opuesto: frialdad afectiva, desinterés social absoluto y expresión emocional plana.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Se trata de un Trastorno de la Personalidad Histriónica (Cluster B del DSM-5).',
      detailedRationale: 'El Trastorno de la Personalidad Histriónica (301.50) se define por un patrón dominante de emotividad excesiva y de búsqueda de atención. En la viñeta se evidencian claramente sus criterios diagnósticos:\n1) Se siente incómodo en situaciones en las que no es el centro de atención;\n2) La interacción con los demás se caracteriza a menudo por un comportamiento sexualmente seductor o provocativo inapropiado;\n3) Presenta cambios rápidos y expresión plana/superficial de las emociones;\n4) Utiliza constantemente el aspecto físico para atraer la atención;\n5) Tiene un estilo de hablar que se basa excesivamente en las impresiones y carece de detalles;\n6) Muestra autodramatización, teatralidad y expresión exagerada de la emoción;\n7) Considera que las relaciones son más estrechas de lo que son en realidad (afirma que el terapeuta es su amigo íntimo en la 1ª cita).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Trastorno Bipolar en fase maníaca',
          whyIncorrect: 'La manía es un episodio sindromático agudo con insomnio sin fatiga, hiperactividad motora desbordante y fuga de ideas, no un estilo constante de carácter teatral.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno de Ansiedad Social',
          whyIncorrect: 'El ansioso social teme ser el centro de atención y huye de las miradas; el histriónico sufre cuando NO es el centro de atención.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno de la Personalidad Esquizoide',
          whyIncorrect: 'El esquizoide es la antítesis clínica del histriónico: no expresa afecto, no busca llamar la atención y prefiere la soledad absoluta.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de la Personalidad Histriónica (301.50).',
      clinicalPearl: 'Clave del Histriónico: "El mundo es su escenario". Las emociones son como una tormenta de verano: muy ruidosas, teatrales, pero superficiales y rápidamente cambiantes.'
    }
  },
  {
    id: 'caso-03',
    category: 'casos_clinicos',
    categoryLabel: 'Casos Clínicos en Viñeta',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Caso Clínico: Apatía, aislamiento y convicciones astrológicas extrañas',
    clinicalVignette: 'Un hombre de 24 años es llevado a evaluación por sus padres. Nunca ha tenido amigos cercanos ni pareja. Viste combinaciones de ropa incongruentes (abrigo de invierno en verano con bufanda de lana). Habla con metáforas oscuras y frases divagatorias que cuesta seguir. Afirma que puede predecir accidentes viales porque "siente una vibración magnética especial en la base de su cráneo" y está convencido de que los titulares de los periódicos contienen mensajes cósmicos dirigidos secretamente hacia él (ideas de referencia). No obstante, no presenta alucinaciones francas ni delirios sistematizados y sus facultades de juicio no están completamente abolidas.',
    question: '¿Cuál es el diagnóstico más congruente dentro del Grupo A (Cluster A) de la personalidad?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de la Personalidad Esquizotípica',
        subtext: 'Déficit social con distorsiones cognitivas, pensamiento mágico, ideas de referencia y excentricidad.'
      },
      {
        id: 'opt-b',
        text: 'Esquizofrenia catatónica floridamente activa',
        subtext: 'Requeriría estupor, negativismo o catalepsia motora y criterios psicóticos francos.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno de la Personalidad Narcisista',
        subtext: 'No hay búsqueda de admiración ni grandiosidad social dominante.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno del Espectro Autista de inicio en el adulto',
        subtext: 'El autismo es del neurodesarrollo temprano y no se caracteriza por pensamiento mágico/esotérico con ideas de referencia.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El cuadro corresponde con exactitud al Trastorno de la Personalidad Esquizotípica (Cluster A: raro/excéntrico).',
      detailedRationale: 'El Trastorno de la Personalidad Esquizotípica (301.22) se sitúa en el espectro de la esquizofrenia pero sin alcanzar el umbral de psicosis franca persistente. Cumple criterios del DSM-5:\n1) Ideas de referencia (interpretar casualidades como mensajes dirigidos a sí mismo, con juicio no del todo delirante);\n2) Creencias extrañas o pensamiento mágico que influye en el comportamiento (telepatía, vibraciones magnéticas craneales);\n3) Experiencias perceptivas inhabituales (ilusiones corporales);\n4) Pensamiento y discurso extraños (vago, metafórico, hiperelaborado);\n5) Suspicacia o ideas paranoides;\n6) Afecto inapropiado o limitado;\n7) Comportamiento o aspecto extraño, excéntrico o peculiar (vestimenta inadecuada para el clima);\n8) Ausencia de amigos íntimos o de confianza fuera de los parientes de primer grado.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Esquizofrenia catatónica',
          whyIncorrect: 'No hay catalepsia, flexibilidad cérea, mutismo ni alucinaciones activas continuas; es una alteración de la personalidad estable a lo largo del tiempo.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno Narcisista',
          whyIncorrect: 'El paciente esquizotípico no busca aprobación, estatus ni admiración; su mundo interno está dominado por vivencias esotéricas y aislamiento.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno del Espectro Autista en el adulto',
          whyIncorrect: 'El TEA debuta en la infancia temprana con déficits pragmáticos y conductas repetitivas/intereses restringidos, no con ideas de referencia ni pensamiento mágico pseudopsicótico.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de la Personalidad Esquizotípica (301.22).',
      clinicalPearl: 'Diferencia del Cluster A: El Paranoide desconfía de todos; el Esquizoide se aísla sin desear compañía; el Esquizotípico es raro, tiene pensamiento mágico y sensaciones perceptivas extrañas.'
    }
  },
  {
    id: 'tept-04',
    category: 'tept',
    categoryLabel: 'Estrés Postraumático',
    difficulty: 'avanzado',
    type: 'diagnostico_diferencial',
    title: 'TEPT Complejo (C-PTSD) según la CIE-11',
    clinicalVignette: 'Una mujer de 34 años con antecedentes de abusos físicos, psicológicos y cautiverio durante 8 años en su infancia por parte de un progenitor acude a consulta. Además de recuerdos intrusivos y conductas de evitación fóbica, presenta una desregulación emocional profunda con ataques de rabia incontrolables, una creencia persistente y arraigada de que "está rota y es despreciable como ser humano" y una incapacidad casi total para mantener relaciones interpersonales estables sin sentirse re-victimizada.',
    question: '¿Qué entidad clínica formalizada en la CIE-11 de la OMS describe este cuadro originado por traumas prolongados o repetidos de difícil escape?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de Estrés Postraumático Complejo (TEPT-C / C-PTSD)',
        subtext: 'Añade a la tríada del TEPT: desregulación afectiva, autoimagen negativa profunda y dificultades interpersonales.'
      },
      {
        id: 'opt-b',
        text: 'Trastorno Depresivo Recurrente con rasgos psicóticos',
        subtext: 'No captura la etiología traumática prolongada ni los síntomas específicos de intrusión y evitación.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno de Ansiedad por Separación del adulto',
        subtext: 'Se limita al temor patológico de separarse de figuras de apego.'
      },
      {
        id: 'opt-d',
        text: 'Síndrome de Ganser',
        subtext: 'Estado disociativo raro caracterizado por respuestas aproximadas o de desatino.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'La CIE-11 (OMS) incorporó formalmente el Trastorno de Estrés Postraumático Complejo (TEPT-C, código 6B41).',
      detailedRationale: 'A diferencia del TEPT simple (que suele derivar de un evento único o de corta duración, como un accidente o asalto), el TEPT Complejo se origina tras la exposición a eventos estresantes crónicos, repetidos y de los cuales el escape es difícil o imposible (abusos infantiles prolongados, tortura, violencia doméstica continuada). La CIE-11 exige los 3 núcleos del TEPT tradicional (reexperimentación, evitación e hipervigilancia) MÁS 3 dominios adicionales conocidos como "Alteraciones en la Auto-organización" (DSO):\n1) Grave desregulación afectiva (dificultad para calmarse, reactividad explosiva o disociación emocional);\n2) Creencias persistentes sobre uno mismo como un ser humillado, fracasado o sin valor (culpa/vergüenza crónica);\n3) Dificultades persistentes para sostener relaciones y para sentirse cercano a los demás.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Trastorno Depresivo Recurrente con rasgos psicóticos',
          whyIncorrect: 'Aunque puede haber síntomas afectivos secundarios, el núcleo rector son los flashbacks traumáticos, la hiperalerta y el daño de la auto-organización por trauma infantil.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno de Ansiedad por Separación',
          whyIncorrect: 'Se centra únicamente en la angustia ante la distancia de las figuras vinculares, no en el trauma prolongado ni la autoimagen destrozada.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Síndrome de Ganser',
          whyIncorrect: 'Trastorno disociativo en el que el paciente da respuestas de "pararrespuesta" (e.g. 2+2=5), observado a menudo en contextos forenses.'
        }
      ],
      dsmCriteriaReference: 'CIE-11 Código 6B41 (Trastorno de Estrés Postraumático Complejo - Complex PTSD).',
      clinicalPearl: 'TEPT Clásico = Herida por un impacto traumático agudo. TEPT Complejo = Arquitectura de la personalidad erosionada por trauma crónico relacional sin escape.'
    }
  },
  {
    id: 'narc-03',
    category: 'narcisismo',
    categoryLabel: 'Narcisismo y Trastornos de Personalidad',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'La "Herida Narcisista" y la Rabia Reactiva',
    clinicalVignette: 'Un profesor universitario es evaluado tras amenazar con destruir la carrera de un comité de evaluación que otorgó un premio a una colega en lugar de a él. Describe que sintió una humillación insoportable y una sensación física de vacío y descomposición, seguida de un estallido de ira volcánica: "Esos ignorantes se van a arrepentir de haberme faltado el respeto".',
    question: '¿Cómo conceptualiza la psicopatología clínica este fenómeno de colapso de la autoestima grandiosa frente a la crítica o frustración?',
    options: [
      {
        id: 'opt-a',
        text: 'Injuria / Herida Narcisista con Rabia Narcisista reactiva',
        subtext: 'Reacción defensiva violenta ante la amenaza a la autoimagen idealizada y frágil.'
      },
      {
        id: 'opt-b',
        text: 'Crisis epiléptica parcial del lóbulo temporal',
        subtext: 'Fenómeno neurológico paroxístico no atribuible a un rasgo de personalidad.'
      },
      {
        id: 'opt-c',
        text: 'Aura prodrómica de demencia frontotemporal',
        subtext: 'Trastorno neurodegenerativo con desinhibición progresiva sin historia previa de grandiosidad.'
      },
      {
        id: 'opt-d',
        text: 'Episodio maníaco disfórico de ciclotimia',
        subtext: 'Fluctuación tímica endógena independiente de estímulos de estatus o prestigio.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Se trata de la clásica Herida Narcisista (Narcissistic Injury) que detona una Rabia Narcisista defensiva ante la no confirmación del estatus superior.',
      detailedRationale: 'Conceptualizado históricamente por Heinz Kohut y Otto Kernberg, la herida narcisista ocurre cuando el yo inflado del individuo narcisista es confrontado con un fracaso, rechazo o crítica real. Debido a que la autoestima narcisista es sumamente precaria y depende por completo de la validación y el aplauso externo incondicional, cualquier desmentida de su superioridad es experimentada como una amenaza aniquilante. Para defenderse del sentimiento de vergüenza o insignificancia intolerable, el sujeto recurre a la rabia narcisista: hostilidad, desprecio y venganza proyectada hacia el agente frustrador.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Crisis epiléptica parcial temporal',
          whyIncorrect: 'Las crisis uncinadas o temporales cursan con automatismos, olores desagradables o déjà vu, no con rencor temático estructurado sobre premios académicos.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Demencia frontotemporal',
          whyIncorrect: 'La variante conductual de la DFT cursa con apatía, pérdida de empatía y desinhibición neurocognitiva en edad madura, pero no con grandiosidad caracterológica reactiva específica a premios.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Episodio maníaco disfórico',
          whyIncorrect: 'La disforia maníaca no requiere un detonante de frustración de estatus para manifestarse y se acompaña de presión del habla, insomnio y fuga de ideas.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de la Personalidad Narcisista: Vulnerabilidad de la autoestima e hipersensibilidad a la crítica o la derrota.',
      clinicalPearl: 'Paradoja narcisista: Cuanto más descomunal e inquebrantable parece la armadura exterior de arrogancia, más quebradiza y dependiente del aplauso ajeno es la autoestima interior.'
    }
  },
  // =========================================================================
  // 6. TRASTORNOS DEL ESTADO DE ÁNIMO Y BIPOLARIDAD (animo_bipolar)
  // =========================================================================
  {
    id: 'animo-01',
    category: 'animo_bipolar',
    categoryLabel: 'Ánimo y Bipolaridad',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'Diagnóstico diferencial: Trastorno Bipolar I vs Bipolar II',
    clinicalVignette: 'Un hombre de 34 años es traído a urgencias por sus familiares. Durante los últimos 6 días apenas ha dormido 2 horas por noche sin experimentar cansancio. Compró tres automóviles deportivos endeudando a su familia, afirma tener un plan directo dictado por el presidente para privatizar el agua nacional y habla con tal aceleración y volumen que resulta imposible interrumpirlo.',
    question: 'Según los criterios diagnósticos del DSM-5, ¿cuál de los siguientes enunciados define de manera inequívoca la presencia de un Trastorno Bipolar I frente a un Trastorno Bipolar II?',
    options: [
      {
        id: 'opt-a',
        text: 'La presencia de al menos un episodio maníaco completo a lo largo de la vida, independientemente de si han existido episodios depresivos mayores.',
        subtext: 'Bipolar I requiere estrictamente manía; no es obligatorio haber presentado depresión mayor para el diagnóstico formal.'
      },
      {
        id: 'opt-b',
        text: 'La concurrencia obligatoria de al menos un episodio de depresión mayor junto a un episodio hipomaníaco de mínimo 4 días.',
        subtext: 'Este es el criterio diagnóstico definitorio del Trastorno Bipolar II.'
      },
      {
        id: 'opt-c',
        text: 'La presencia de alucinaciones auditivas complejas durante la fase de depresión exclusivamente.',
        subtext: 'La psicosis puede aparecer en manía o depresión mayor grave en ambos espectros.'
      },
      {
        id: 'opt-d',
        text: 'La duración del episodio de euforia durante más de 2 meses consecutivos sin tratamiento.',
        subtext: 'El criterio temporal de manía es de al menos 1 semana, no 2 meses.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Para el diagnóstico de Trastorno Bipolar I es necesario y suficiente haber presentado al menos un episodio maníaco a lo largo de la vida. No se requiere historial previo de depresión mayor.',
      detailedRationale: 'En el DSM-5, el Trastorno Bipolar I queda establecido formalmente tan pronto como el paciente cumple criterios de un episodio maníaco (ánimo anormal y persistentemente elevado, expansivo o irritable con aumento de energía durante al menos 1 semana, o cualquier duración si precisa hospitalización o presenta psicosis). Aunque la gran mayoría de los pacientes con Bipolar I padecerán episodios depresivos mayores, no son un requisito sine qua non. Por el contrario, el Trastorno Bipolar II exige obligatoriamente: 1) al menos un episodio hipomaníaco (mínimo 4 días sin psicosis ni hospitalización) Y 2) al menos un episodio depresivo mayor previo o actual, sin haber padecido jamás un episodio maníaco completo.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Concurrencia obligatoria de depresión mayor e hipomanía',
          whyIncorrect: 'Esta es la definición exacta del Trastorno Bipolar II, no del Bipolar I.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Alucinaciones auditivas en fase depresiva exclusivamente',
          whyIncorrect: 'Las manifestaciones psicóticas pueden presentarse en manía o depresión grave; de hecho, la psicosis en fase expansiva automáticamente convierte el episodio en maníaco (Bipolar I).'
        },
        {
          optionId: 'opt-d',
          optionText: 'Duración mayor a 2 meses',
          whyIncorrect: 'El umbral temporal de manía es de solo 7 días (o menos si requiere hospitalización urgente).'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterios de Trastorno Bipolar I (Criterio A-D) vs Trastorno Bipolar II (Criterio A-F).',
      clinicalPearl: 'Regla de oro psiquiátrica: Un solo episodio maníaco en toda la biografía del paciente determina para siempre el diagnóstico de Trastorno Bipolar I.'
    }
  },
  {
    id: 'animo-02',
    category: 'animo_bipolar',
    categoryLabel: 'Ánimo y Bipolaridad',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Depresión Mayor con síntomas psicóticos congruentes con el ánimo',
    clinicalVignette: 'Una mujer de 62 años acude acompañada por sus hijos con un cuadro de 2 meses de pérdida de 12 kg, anhedonia total, insomnio terminal y enlentecimiento psicomotor severo. Repite con angustia lacerante: "Mis intestinos se pudrieron por mis pecados, estoy muerta por dentro y he arruinado económicamente a toda mi descendencia". Los estudios endoscópicos y analíticos son rigurosamente normales.',
    question: '¿Qué entidad psicopatológica clásica y qué especificador diagnóstico del DSM-5 describe con mayor precisión esta presentación clínica?',
    options: [
      {
        id: 'opt-a',
        text: 'Episodio Depresivo Mayor con características psicóticas congruentes con el estado de ánimo (Síndrome de Cotard / Delirio de negación de órganos).',
        subtext: 'Delirios nihilistas, de ruina y putrefacción corporal en armonía temática con la profunda melancolía.'
      },
      {
        id: 'opt-b',
        text: 'Esquizofrenia paranoide de inicio tardío con delirio somático.',
        subtext: 'Falta la incongruencia con el afecto, la cronicidad y los síntomas negativos característicos.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno Delirante de tipo somático puro.',
        subtext: 'En el trastorno delirante no coexiste un episodio afectivo mayor florido con inhibición melancólica.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de Ansiedad por Enfermedad con despersonalización somática.',
        subtext: 'La convicción delirante inquebrantable y el nihilismo orgánico sobrepasan la neurosis ansiosa.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Se trata de un Episodio Depresivo Mayor grave con características psicóticas congruentes con el estado de ánimo, configurando el clásico Síndrome de Cotard (delirio nihilista o de negación de órganos).',
      detailedRationale: 'El DSM-5 distingue entre síntomas psicóticos congruentes e incongruentes con el estado de ánimo. Los contenidos congruentes son aquellos cuyo tema es enteramente coherente con la temática depresiva: culpa personal insalvable, ruina económica inminente, enfermedad catastrófica incurable, muerte y negación corporal (nihilismo). El Síndrome de Cotard (descrito por Jules Cotard en 1880 como "délire de négation") es la máxima expresión del delirio melancólico: el paciente cree que sus órganos están petrificados o destruidos, o incluso que ya ha fallecido.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Esquizofrenia paranoide tardía',
          whyIncorrect: 'En la esquizofrenia los delirios suelen ser extravagantes y no están impulsados por una melancolía primaria con culpa y enlentecimiento psicomotor tan marcado.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno Delirante tipo somático',
          whyIncorrect: 'El Criterio C del Trastorno Delirante exige que si se han producido episodios del estado de ánimo, su duración total haya sido breve en comparación con los períodos delirantes. Aquí el núcleo rector es el episodio depresivo grave.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno de Ansiedad por Enfermedad',
          whyIncorrect: 'En la ansiedad por enfermedad el paciente teme adquirir una dolencia pero mantiene cierto insight y juicio de realidad, no presenta la certeza delirante absoluta de estar muerto o podrido.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Especificador: "Con características psicóticas congruentes con el estado de ánimo" en Trastorno de Depresión Mayor.',
      clinicalPearl: 'En el Síndrome de Cotard, el delirio de inmortalidad maldita o putrefacción de vísceras es el reflejo más extremo de la culpa melancólica proyectada en la corporalidad.'
    }
  },
  {
    id: 'animo-03',
    category: 'animo_bipolar',
    categoryLabel: 'Ánimo y Bipolaridad',
    difficulty: 'básico',
    type: 'criterio_dsm5',
    title: 'Criterio temporal en Trastorno Depresivo Persistente (Distimia)',
    clinicalVignette: 'Un contable de 41 años refiere que "siempre ha sido una persona gris y con la batería a media carga". Describe sentirse desanimado, con baja energía, pesimismo y baja autoestima casi a diario desde hace aproximadamente 4 años. Ha podido continuar trabajando, pero manifiesta que "no recuerda lo que es sentirse alegre o con vitalidad plena". Niega oscilaciones hacia la euforia.',
    question: '¿Cuál es el criterio temporal mínimo exigido por el DSM-5 para diagnosticar formalmente Trastorno Depresivo Persistente (Distimia) en adultos?',
    options: [
      {
        id: 'opt-a',
        text: 'Presencia de estado de ánimo depresivo durante al menos 2 años, sin períodos asintomáticos superiores a 2 meses seguidos.',
        subtext: 'Requisito temporal y de continuidad sintomática del DSM-5 en adultos.'
      },
      {
        id: 'opt-b',
        text: 'Presencia de ánimo deprimido durante un mínimo de 6 meses ininterrumpidos.',
        subtext: '6 meses corresponde al umbral del TAG, no al de distimia en adultos.'
      },
      {
        id: 'opt-c',
        text: 'Duración mínima de 1 año con presencia simultánea de anhedonia y delirios.',
        subtext: '1 año es el criterio para niños/adolescentes, pero la distimia no cursa con delirios.'
      },
      {
        id: 'opt-d',
        text: 'Al menos 5 años de fluctuaciones entre desánimo y eutimia reactiva.',
        subtext: 'Tiempo excesivo que supera el estándar criterial.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Trastorno Depresivo Persistente (Distimia) en adultos requiere un estado de ánimo deprimido durante la mayor parte del día, presente la mayoría de los días durante al menos 2 años (1 año en niños y adolescentes).',
      detailedRationale: 'El DSM-5 unificó el Trastorno Distímico y el Trastorno Depresivo Mayor Crónico bajo el término "Trastorno Depresivo Persistente". El criterio cardinal es la cronicidad: al menos 2 años continuos de ánimo subsindrómico o depresivo donde el individuo nunca ha estado libre de los síntomas por más de 2 meses seguidos. Debe presentar al menos dos de los siguientes síntomas: poco apetito o sobrealimentación, insomnio o hipersomnia, baja energía o fatiga, baja autoestima, escasa concentración o dificultad para tomar decisiones, y sentimientos de desesperanza.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Mínimo de 6 meses',
          whyIncorrect: '6 meses es el umbral para el Trastorno de Ansiedad Generalizada (TAG) o el Trastorno de Adaptación prolongado, insuficiente para el diagnóstico de distimia en adultos.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Duración mínima de 1 año con delirios',
          whyIncorrect: '1 año es el criterio temporal válido solo para niños y adolescentes; además la distimia no presenta síntomas psicóticos.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Al menos 5 años',
          whyIncorrect: 'Aunque muchos pacientes consultan tras 5 o 10 años por normalización de los síntomas, el umbral diagnóstico es de 2 años.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio A y Criterio C para Trastorno Depresivo Persistente (Distimia).',
      clinicalPearl: 'Fenómeno de "Doble Depresión": Ocurre cuando un paciente con Distimia basal de años de evolución sufre sobreañadido un Episodio Depresivo Mayor agudo.'
    }
  },
  {
    id: 'animo-04',
    category: 'animo_bipolar',
    categoryLabel: 'Ánimo y Bipolaridad',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Reconocimiento de Episodio Hipomaníaco',
    clinicalVignette: 'Una diseñadora gráfica de 28 años experimenta durante 5 días seguidos un marcado incremento de energía, optimismo desbordante y locuacidad. Durmió únicamente 3 horas cada noche despertando completamente descansada. Concluyó proyectos pendientes con alta eficiencia y sus compañeros la notaron "más bromista y desinhibida que nunca", pero sin generar conflictos, sin conductas de riesgo económico ni requerir hospitalización.',
    question: '¿Qué rasgo semiológico descarta de plano que este cuadro califique como un episodio maníaco completo y lo sitúa como hipomanía?',
    options: [
      {
        id: 'opt-a',
        text: 'La ausencia de un deterioro social o laboral marcado, la falta de necesidad de hospitalización y la ausencia de síntomas psicóticos.',
        subtext: 'Tríada diferencial cardinal entre hipomanía y manía en el DSM-5.'
      },
      {
        id: 'opt-b',
        text: 'El hecho de que la paciente sea mujer en edad fértil.',
        subtext: 'El género no influye en la distinción nosológica entre manía e hipomanía.'
      },
      {
        id: 'opt-c',
        text: 'La reducción del sueño a 3 horas sin cansancio matutino.',
        subtext: 'Este síntoma está presente tanto en manía como en hipomanía.'
      },
      {
        id: 'opt-d',
        text: 'Haber durado 5 días en vez de 48 horas.',
        subtext: 'La hipomanía exige un mínimo de 4 días consecutivos de duración.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'La hipomanía se distingue categóricamente de la manía en que NO provoca un deterioro social o laboral significativo, NO requiere hospitalización y NUNCA presenta síntomas psicóticos.',
      detailedRationale: 'Tanto la manía como la hipomanía comparten los mismos síntomas nucleares (autoestima exagerada, disminución de la necesidad de dormir, taquipsiquia, verborrea, distracción). Sin embargo, difieren en gravedad e impacto: 1) Tiempo mínimo: 4 días consecutivos en hipomanía vs 7 días en manía; 2) Gravedad funcional: en la hipomanía el cambio es observable por otros pero no causa deterioro grave en el funcionamiento sociolaboral ni requiere hospitalización preventiva; 3) Psicosis: Si aparecen delirios o alucinaciones, el episodio pasa a considerarse MANÍACO por definición, independientemente de los días transcurridos.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Género de la paciente',
          whyIncorrect: 'El sexo y la edad no tienen relación con el criterio nosológico.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Reducción del sueño a 3 horas',
          whyIncorrect: 'La disminución de la necesidad de dormir sin fatiga es común a ambos estados expansivos.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Durar 5 días',
          whyIncorrect: 'El criterio DSM-5 para hipomanía exige al menos 4 días consecutivos (5 días cumple perfectamente el umbral).'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio E de Episodio Hipomaníaco: "El episodio no es suficientemente grave para causar una alteración importante del funcionamiento... Si hay características psicóticas, el episodio es, por definición, maníaco".',
      clinicalPearl: 'Si hay hospitalización o psicosis, NUNCA es hipomanía: es manía franca.'
    }
  },

  // =========================================================================
  // 7. ANSIEDAD, FOBIAS Y ESPECTRO OBSESIVO (ansiedad_toc)
  // =========================================================================
  {
    id: 'ansiedad-01',
    category: 'ansiedad_toc',
    categoryLabel: 'Ansiedad y Espectro TOC',
    difficulty: 'intermedio',
    type: 'diagnostico_diferencial',
    title: 'Egodistonía en el TOC vs Egosintonía en el TOCP',
    clinicalVignette: 'Un profesor de 38 años acude a consulta torturado por pensamientos recurrentes de que podría empujar a alguien a las vías del tren al pasar el metro, o de apuñalar a su pareja con los cubiertos de la cocina. Sabe con certeza que jamás desearía cometer tales actos, los considera monstruosos y ajenos a su moral, y pasa horas rezando mentalmente y contando de 7 en 7 para cancelar la culpa y evitar que ocurran.',
    question: '¿Qué propiedad psicopatológica fundamental define a estas intrusiones frente a los rasgos del Trastorno de la Personalidad Obsesivo-Compulsiva (TOCP)?',
    options: [
      {
        id: 'opt-a',
        text: 'Son intrusiones egodistónicas (vividas como inaceptables y ajenas al Yo), mientras que en el TOCP los patrones de orden y perfeccionismo son egosintónicos (percibidos como correctos y deseables).',
        subtext: 'Diferencia cardinal de insight y vivencia del Yo entre eje I y eje II.'
      },
      {
        id: 'opt-b',
        text: 'Son ideas delirantes de influencia psicótica producidas por desregulación dopaminérgica estriatal.',
        subtext: 'El paciente preserva juicio de realidad y reconoce que los pensamientos provienen de su propia mente.'
      },
      {
        id: 'opt-c',
        text: 'Son impulsos parafílicos no consumados enmascarados como obsesiones.',
        subtext: 'En las parafilias los deseos producen excitación y placer, no angustia ni culpa horrorizada.'
      },
      {
        id: 'opt-d',
        text: 'Representan fobias específicas a objetos punzocortantes sin ritual de neutralización.',
        subtext: 'El paciente no teme al cuchillo por sí mismo, sino a la idea intrusiva de perder el control y dañar.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Trastorno Obsesivo-Compulsivo (TOC) se caracteriza por obsesiones egodistónicas (chocan con los valores del individuo y causan intensa angustia), a diferencia del TOCP, donde la minuciosidad y rigidez son egosintónicas.',
      detailedRationale: 'En el TOC clásico, las obsesiones son pensamientos, impulsos o imágenes recurrentes y persistentes que se experimentan como intrusas y no deseadas, y que causan ansiedad o malestar importante (egodistonía). El paciente reconoce que son producto de su propia mente e intenta suprimirlas o neutralizarlas con compulsiones (como contar o rezar). En contraste, el Trastorno de la Personalidad Obsesivo-Compulsiva (TOCP) es un patrón generalizado de preocupación por el orden, perfeccionismo y control mental que el sujeto considera correcto, útil y virtuoso (egosintonía), sin presentar obsesiones ni compulsiones ritualizadas francas.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Ideas delirantes de influencia',
          whyIncorrect: 'El paciente con TOC tiene conciencia de que la idea nace en su mente (no cree que un chip o la televisión le transmitan el pensamiento) y lucha activamente contra ella.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Impulsos parafílicos',
          whyIncorrect: 'Las obsesiones de daño o tabú en el TOC son egodistónicas y causan terror moral, a diferencia de los impulsos perversos placenteros.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Fobia específica a objetos',
          whyIncorrect: 'El foco no es el objeto sino el temor obsesivo a cometer un acto involuntario repudiado y la subsiguiente necesidad de rituales neutralizadores.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterios de Trastorno Obsesivo-Compulsivo (Criterio A) vs Trastorno de la Personalidad Obsesivo-Compulsiva.',
      clinicalPearl: 'Obsesiones de agresión ("daño involuntario a terceros"): Cuanto más horror le causa al paciente la idea de hacer daño, más lejos está de ser un psicópata o un agresor real.'
    }
  },
  {
    id: 'ansiedad-02',
    category: 'ansiedad_toc',
    categoryLabel: 'Ansiedad y Espectro TOC',
    difficulty: 'básico',
    type: 'criterio_dsm5',
    title: 'Criterio temporal y cognitivo del Trastorno de Pánico',
    clinicalVignette: 'Una joven ejecutiva de 25 años sufrió hace 6 semanas su primera crisis de angustia paroxística en un túnel vial (taquicardia súbita, sensación de asfixia, mareo y pavor a morir de un infarto). Aunque los exámenes cardiológicos fueron perfectos, desde entonces vive aterrorizada pensando en cuándo volverá a ocurrirle y ha dejado de conducir automóviles, usar el metro o salir sola a la calle.',
    question: '¿Qué criterio formal del DSM-5 consolida el diagnóstico de Trastorno de Pánico más allá de la crisis paroxística aislada?',
    options: [
      {
        id: 'opt-a',
        text: 'Al menos 1 mes de inquietud o preocupación continua por la aparición de nuevas crisis de pánico o sus consecuencias, o cambios desadaptativos significativos de conducta.',
        subtext: 'El Criterio B del DSM-5 define el "miedo al miedo" y la conducta evitativa secundaria.'
      },
      {
        id: 'opt-b',
        text: 'Haber presentado un mínimo de 10 crisis documentadas en un servicio de urgencias médicas.',
        subtext: 'El número absoluto de crisis no es el criterio definitorio, sino la reacción cognitiva anticipatoria.'
      },
      {
        id: 'opt-c',
        text: 'La presencia de prolapso de la válvula mitral con bloqueo auriculoventricular de primer grado.',
        subtext: 'Si el cuadro se debe a una cardiopatía orgánica no se diagnostica trastorno primario de pánico.'
      },
      {
        id: 'opt-d',
        text: 'Duración ininterrumpida de la crisis durante más de 8 horas continuas.',
        subtext: 'Las crisis de pánico alcanzan su pico en minutos y habitualmente remiten en menos de una hora.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Trastorno de Pánico exige crisis imprevistas recurrentes seguidas de al menos 1 mes de ansiedad anticipatoria ("miedo al miedo") o cambios desadaptativos en la conducta.',
      detailedRationale: 'Tener una crisis de pánico aislada no equivale a padecer Trastorno de Pánico (hasta un tercio de la población general experimentará una crisis en su vida). El Criterio B del DSM-5 estipula que al menos una de las crisis debe haber ido seguida durante 1 mes (o más) de uno o ambos de los siguientes hechos: 1) Inquietud o preocupación continua acerca de tener más crisis o de sus consecuencias (e.g., perder el control, tener un ataque cardíaco, "volverse loco"); 2) Un cambio desadaptativo significativo en el comportamiento relacionado con las crisis (e.g., conductas de evitación agorafóbica como no conducir ni acudir a lugares concurridos).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Mínimo de 10 crisis documentadas',
          whyIncorrect: 'El DSM-5 no exige un número fijo de diez crisis; lo determinante es la recurrencia imprevista y el impacto psicológico persistente de al menos 1 mes.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Prolapso de válvula mitral',
          whyIncorrect: 'Si los síntomas son atribuibles a una afección médica general o a sustancias, se descarta el trastorno de pánico primario.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Duración de más de 8 horas',
          whyIncorrect: 'Una crisis de pánico típica alcanza su pico máximo de intensidad en aproximadamente 10 minutos y decae paulatinamente.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de Pánico Criterio B (Ansiedad anticipatoria > 1 mes).',
      clinicalPearl: 'El núcleo patológico del Trastorno de Pánico no es el ataque inicial, sino el condicionamiento interoceptivo posterior: el temor crónico a las propias sensaciones corporales.'
    }
  },
  {
    id: 'ansiedad-03',
    category: 'ansiedad_toc',
    categoryLabel: 'Ansiedad y Espectro TOC',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'Trastorno de Ansiedad Generalizada (TAG): Semiología y Criterios',
    clinicalVignette: 'Un maestro de 45 años consulta por contracturas cervicales constantes, cansancio crónico e insomnio de conciliación. Al ser interrogado, reconoce que pasa el día angustiado por innumerables motivos: que su hijo pueda enfermar, que la caldera se descomponga, que la economía del país colapse o que llegue tarde a cualquier cita. Refiere que no puede apagar estas preocupaciones y que este estado se prolonga desde hace más de 8 meses.',
    question: '¿Cuál de los siguientes criterios del DSM-5 es característico del Trastorno de Ansiedad Generalizada (TAG)?',
    options: [
      {
        id: 'opt-a',
        text: 'Ansiedad y preocupación excesiva (anticipación aprensiva) sobre una amplia gama de acontecimientos, difícil de controlar, durante al menos 6 meses, con al menos 3 síntomas fisiológicos.',
        subtext: 'Definición criterial completa del TAG en adultos según el DSM-5.'
      },
      {
        id: 'opt-b',
        text: 'Miedo circunscrito exclusivamente a sufrir humillación al hablar en público.',
        subtext: 'Esto define a la Fobia Social (Trastorno de Ansiedad Social), no al TAG.'
      },
      {
        id: 'opt-c',
        text: 'Aparición de pesadillas recurrentes tras una catástrofe natural.',
        subtext: 'Síntoma intrusivo de TEPT o Estrés Agudo, no de ansiedad generalizada difusa.'
      },
      {
        id: 'opt-d',
        text: 'Inquietud desencadenada únicamente al alejarse de figuras de apego primario.',
        subtext: 'Trastorno de Ansiedad por Separación.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El TAG se define por preocupación excesiva e incontrolable acerca de una variedad de acontecimientos cotidianos, presente más de la mitad de los días durante al menos 6 meses, junto con síntomas somáticos.',
      detailedRationale: 'En el DSM-5, el Trastorno de Ansiedad Generalizada exige: A) Ansiedad y preocupación excesiva y desproporcionada sobre diversos sucesos durante mínimo 6 meses; B) Dificultad para controlar la preocupación; C) Asociación con al menos 3 de los siguientes 6 síntomas somáticos en adultos (solo 1 requerido en niños): 1) Inquietud o impaciencia, 2) Fatigabilidad fácil, 3) Dificultad para concentrarse, 4) Irritabilidad, 5) Tensión muscular marcada, y 6) Alteraciones del sueño (dificultad para conciliar o mantener el sueño).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Miedo circunscrito al escrutinio social',
          whyIncorrect: 'Corresponde a la Fobia Social. En el TAG las preocupaciones son multifocales y universales (salud, finanzas, trabajo, quehaceres cotidianos).'
        },
        {
          optionId: 'opt-c',
          optionText: 'Pesadillas tras catástrofe',
          whyIncorrect: 'Propio del TEPT, donde hay un trauma Criterio A específico detonante.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Ansiedad al alejarse de figuras de apego',
          whyIncorrect: 'Trastorno de Ansiedad por Separación.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de Ansiedad Generalizada (Criterios A, B y C).',
      clinicalPearl: 'En el TAG, la mente del paciente funciona en un bucle perenne de "¿Y si pasa X?", percibiendo la preocupación como un mecanismo mágico de control preventivo.'
    }
  },
  {
    id: 'ansiedad-04',
    category: 'ansiedad_toc',
    categoryLabel: 'Ansiedad y Espectro TOC',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Trastorno Dismórfico Corporal (TDC) y Conductas Repetitivas',
    clinicalVignette: 'Un universitario de 22 años pasa entre 4 y 5 horas diarias examinándose pequeñas asimetrías casi imperceptibles en el puente de su nariz frente a diversos espejos con iluminación especial. Ha acudido a 4 cirujanos plásticos distintos, quienes rechazaron operarlo por considerar su anatomía normal. Usa maquillaje denso, camina con la cabeza baja para no ser visto y ha dejado de asistir a la universidad por considerarse "un monstruo repulsivo". Su peso e índice de masa corporal son normales y no expresa preocupación por su grasa corporal.',
    question: '¿Cuál es el diagnóstico más certero y qué rasgo conductual exigido por el DSM-5 se evidencia en este caso?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno Dismórfico Corporal, evidenciado por la preocupación por defectos no observables o leves junto con conductas repetitivas compulsivas (revisión en el espejo y camuflaje).',
        subtext: 'Entidad perteneciente al capítulo de Trastorno Obsesivo-Compulsivo y trastornos relacionados.'
      },
      {
        id: 'opt-b',
        text: 'Anorexia Nerviosa con distorsión sensorial atípica.',
        subtext: 'En el TDC la preocupación no se centra en el peso o la grasa corporal global.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno Delirante de tipo persecutorio con disociación facial.',
        subtext: 'No hay delirio de persecución por parte de terceros ni conspiración externa.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de la Personalidad Narcisista en fase descompensada.',
        subtext: 'El TPN busca admiración y exhibición de superioridad, no el aislamiento por vergüenza corporal.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El caso cumple todos los criterios de Trastorno Dismórfico Corporal (TDC): preocupación por defectos físicos percibidos inapreciables para otros y conductas repetitivas de comprobación o camuflaje.',
      detailedRationale: 'El Trastorno Dismórfico Corporal fue trasladado en el DSM-5 al espectro del Trastorno Obsesivo-Compulsivo debido a su fenomenología obsesivo-compulsiva subyacente. Exige: A) Preocupación por uno o más defectos o imperfecciones percibidas en el aspecto físico que no son observables o parecen sin importancia a otras personas; B) En algún momento durante el trastorno, el sujeto ha realizado comportamientos repetitivos (e.g., mirarse en el espejo, asearse en exceso, rascarse la piel, buscar aprobación) o actos mentales en respuesta a la preocupación; C) Causa malestar clínicamente significativo; D) La preocupación no se explica mejor por inquietudes acerca del tejido adiposo o peso en un TCA.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Anorexia Nerviosa atípica',
          whyIncorrect: 'El Criterio D del TDC descarta expresamente la anorexia; la preocupación de este paciente es la morfología de la nariz, no su delgadez ni el peso corporal.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno Delirante persecutorio',
          whyIncorrect: 'No hay temática persecutoria; incluso cuando el insight en TDC es nulo ("con convicción delirante"), sigue categorizándose como subtipo de TDC.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno Narcisista de la Personalidad',
          whyIncorrect: 'El TDC causa un sufrimiento desgarrador y vergüenza autocrítica invalidante, obligando al paciente a aislarse.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno Dismórfico Corporal (Criterios A a D).',
      clinicalPearl: 'Alerta médica: Los pacientes con TDC suelen consultar primero a dermatólogos o cirujanos plásticos; las cirugías estéticas casi nunca alivian la obsesión y con frecuencia exacerban el conflicto o derivan en litigios.'
    }
  },

  // =========================================================================
  // 8. SOMATIZACIÓN, DISOCIACIÓN E IMPULSOS (somaticos_disociativos)
  // =========================================================================
  {
    id: 'somat-01',
    category: 'somaticos_disociativos',
    categoryLabel: 'Somatización e Impulsos',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Trastorno de Conversión (Síntomas Neurológicos Funcionales)',
    clinicalVignette: 'Una mujer de 32 años presenta paraplejía súbita bilateral de miembros inferiores 24 horas después de descubrir una infidelidad de su cónyuge. Durante la exploración física en neurología, la resonancia cerebral y medular es normal, los reflejos osteotendinosos son simétricos sin Babinski y la maniobra de Hoover resulta positiva (al pedirle que flexione la pierna contralateral contra resistencia, se palpa una potente extensión involuntaria de la pierna supuestamente paralizada en la camilla). La paciente relata su incapacidad motora con llamativa serenidad y calma emocional.',
    question: '¿Qué diagnóstico formal del DSM-5 corresponde a este cuadro clínico y qué fenómeno clásico refleja la actitud emocional de la paciente?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de Conversión (Trastorno de Síntomas Neurológicos Funcionales), reflejando la histórica "Belle Indifférence" (bella indiferencia).',
        subtext: 'Incompatibilidad clínica demostrable entre el síntoma y la patología neurológica anatómica real.'
      },
      {
        id: 'opt-b',
        text: 'Simulación pura motivada por indemnización económica judicial.',
        subtext: 'En la simulación el sujeto persigue una ganancia externa tangible evidente (dinero, evitar prisión).'
      },
      {
        id: 'opt-c',
        text: 'Esclerosis Múltiple remitente-recurrente con brote motor inicial.',
        subtext: 'Descartado por neuroimagen normal y signo de Hoover inequívocamente funcional.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno Facticio aplicado a uno mismo con daño orgánico encubierto.',
        subtext: 'En el trastorno facticio el paciente produce intencionalmente el síntoma (inyectándose toxinas o medicamentos).'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'Se trata de un Trastorno de Conversión (Trastorno de Síntomas Neurológicos Funcionales), caracterizado por incompatibilidad clínica (Signo de Hoover positivo) y la clásica Belle Indifférence de Charcot.',
      detailedRationale: 'El DSM-5 reformó los criterios del Trastorno de Conversión eliminando la obligatoriedad de identificar el conflicto psicológico precipitante (aunque con frecuencia esté presente) y centrando el diagnóstico en el hallazgo positivo de incompatibilidad médica entre el síntoma y las vías neurológicas reconocidas. El Signo de Hoover es una prueba cardinal de medicina funcional: evalúa la extensión sinérgica de la cadera contralateral; su presencia demuestra que las vías corticoespinales están anatómicamente íntegras. La "Belle Indifférence" describe la paradoja de un paciente que relata una catástrofe neurológica (como una parálisis total) con sorprendente frialdad o serenidad.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Simulación pura',
          whyIncorrect: 'La simulación no es un trastorno psiquiátrico; exige un beneficio externo evidente (cobro de seguro, incapacidad laboral fraudulenta). En la conversión, el paciente no produce conscientemente el déficit motor.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Esclerosis Múltiple',
          whyIncorrect: 'La normalidad estricta de la neuroimagen por RM y la prueba de Hoover normal descartan daño desmielinizante de motoneurona.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno Facticio',
          whyIncorrect: 'El trastorno facticio implica falsificación deliberada activa mediante autoinducción física de patología para adoptar el rol de enfermo.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de Conversión (Trastorno de Síntomas Neurológicos Funcionales), Criterio B: "Los hallazgos clínicos aportan pruebas de la incompatibilidad entre el síntoma y las afecciones neurológicas o médicas reconocidas".',
      clinicalPearl: 'En neurología funcional, la clave del diagnóstico no es la "ausencia de lesiones", sino la "demostración positiva de inconsistencia fisiológica interna" (e.g., signo de Hoover, arrastre de miembro sin circumducción).'
    }
  },
  {
    id: 'somat-02',
    category: 'somaticos_disociativos',
    categoryLabel: 'Somatización e Impulsos',
    difficulty: 'intermedio',
    type: 'diagnostico_diferencial',
    title: 'Trastorno Facticio (Münchhausen) vs Simulación (Malingering)',
    clinicalVignette: 'Dos pacientes llegan a un hospital con hipoglucemias graves y recurrentes por administración clandestina de insulina. El Paciente A es un enfermero que oculta ampollas vacías; cuando los médicos descubren la causa, no pide dinero ni indemnización laboral, sino que parece disfrutar de la atención compasiva del equipo y del estatus de paciente enigmático. El Paciente B, en cambio, se inyectó la insulina para fingir un shock en su fábrica y cobrar una compensación de 100.000 euros en un juicio que tiene la próxima semana.',
    question: '¿Cuáles son respectivamente los diagnósticos y clasificaciones clínicas de estos dos individuos?',
    options: [
      {
        id: 'opt-a',
        text: 'Paciente A: Trastorno Facticio aplicado a uno mismo; Paciente B: Simulación (no clasificada como trastorno mental en el DSM-5).',
        subtext: 'Diferenciación crucial por la naturaleza interna vs externa del incentivo rector.'
      },
      {
        id: 'opt-b',
        text: 'Paciente A: Simulación de síntomas somáticos; Paciente B: Trastorno Facticio por poderes.',
        subtext: 'Inversión de las definiciones diagnósticas.'
      },
      {
        id: 'opt-c',
        text: 'Paciente A: Trastorno de Síntomas Somáticos grave; Paciente B: Trastorno Delirante inducido.',
        subtext: 'Ninguno de los dos presenta convicción delirante ni somatización involuntaria.'
      },
      {
        id: 'opt-d',
        text: 'Ambos cumplen criterios de Trastorno Bipolar I con psicosis hipoglucémica.',
        subtext: 'No hay vínculo fenomenológico con el espectro bipolar.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Paciente A padece Trastorno Facticio (falsificación de síntomas sin recompensa externa manifiesta, motivado por asumir el rol de enfermo). El Paciente B presenta Simulación (engaño deliberado con ganancia externa evidente).',
      detailedRationale: 'La distinción capital radica en el propósito del engaño: En el Trastorno Facticio (antiguamente llamado Síndrome de Münchhausen), la persona falsifica signos o síntomas o se induce lesiones/enfermedad intencionalmente para asumir el rol de enfermo y recibir cuidados médicos; el comportamiento engañoso es evidente incluso en ausencia de recompensas externas aparentes. En contraste, la Simulación (Malingering) NO es un trastorno psiquiátrico (se codifica como código V / problema objeto de atención clínica): es la producción intencionada de síntomas motivada por incentivos externos transparentes (obtener compensaciones económicas, evitar el servicio militar o un juicio penal, o conseguir drogas).',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Inversión de conceptos',
          whyIncorrect: 'El paciente A no busca dinero (no es simulación); el paciente B no tiene trastorno facticio porque su motor es la ganancia económica directa.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno de Síntomas Somáticos vs Delirio',
          whyIncorrect: 'En el trastorno de síntomas somáticos los pacientes no se inyectan insulina deliberadamente ni fingen las pruebas de laboratorio con intención engañosa.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno Bipolar con psicosis',
          whyIncorrect: 'No guardan relación alguna con los criterios de manía ni depresión bipolar.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno Facticio aplicado a uno mismo (Criterios A a D) vs Simulación (Capítulo de otras afecciones que pueden ser objeto de atención clínica).',
      clinicalPearl: 'Clave mnemotécnica: Trastorno Facticio = busca el rol de enfermo (incentivo psicológico interno). Simulación = busca el dinero, la baja laboral o evitar la cárcel (incentivo material externo).'
    }
  },
  {
    id: 'somat-03',
    category: 'somaticos_disociativos',
    categoryLabel: 'Somatización e Impulsos',
    difficulty: 'intermedio',
    type: 'criterio_dsm5',
    title: 'Trastorno de Ansiedad por Enfermedad vs Trastorno de Síntomas Somáticos',
    clinicalVignette: 'Un hombre de 49 años acude a múltiples consultas de oncología absolutamente convencido de que padece un glioblastoma cerebral oculto, a pesar de que dos resonancias magnéticas de encéfalo con contraste fueron completamente negativas. Niega cefaleas, mareos, alteraciones visuales o cualquier otro malestar físico. Pasa horas midiendo su reflejo pupilar, buscando síntomas neurológicos en internet y exigiendo una tomografía por emisión de positrones (PET).',
    question: 'Considerando que el paciente prácticamente no experimenta síntomas somáticos físicos, ¿cuál es el diagnóstico psicopatológico según el DSM-5?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de Ansiedad por Enfermedad (Illness Anxiety Disorder).',
        subtext: 'Preocupación centrada en tener o adquirir una enfermedad grave, sin síntomas somáticos presentes o siendo estos mínimos.'
      },
      {
        id: 'opt-b',
        text: 'Trastorno de Síntomas Somáticos con predominio de dolor.',
        subtext: 'Exige la presencia obligatoria de uno o más síntomas somáticos reales que angustien al sujeto.'
      },
      {
        id: 'opt-c',
        text: 'Hipocondriasis clásica del DSM-IV con delirio de referencia somática.',
        subtext: 'El término hipocondriasis fue eliminado del DSM-5 y dividido entre estos dos nuevos trastornos.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno Dismórfico Corporal subtipo neurológico.',
        subtext: 'El TDC se restringe a imperfecciones estéticas visibles, no a patologías oncológicas internas.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'En el DSM-5, la ausencia o levedad extrema de síntomas somáticos físicos combinada con una preocupación obsesiva por padecer una enfermedad letal define al Trastorno de Ansiedad por Enfermedad.',
      detailedRationale: 'En el paso de DSM-IV a DSM-5, el concepto tradicional de "Hipocondría" fue desmantelado: aproximadamente el 75% de los pacientes pasaron al "Trastorno de Síntomas Somáticos" (porque tienen síntomas somáticos corporales angustiantes reales, como dolores o fatiga, ante los que reaccionan con ansiedad desmesurada). El 25% restante, como el paciente de la viñeta, padece "Trastorno de Ansiedad por Enfermedad": la persona NO tiene síntomas físicos significativos (o son sensaciones fisiológicas normales como el latido cardíaco), pero la alarma sobre la propia salud y la hipervigilancia cognitiva ante una enfermedad grave no diagnosticada domina por completo su vida.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Trastorno de Síntomas Somáticos',
          whyIncorrect: 'El Criterio A exige expresamente uno o más síntomas somáticos que causan malestar. En este paciente los síntomas somáticos no están presentes o son prácticamente nulos.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Hipocondriasis clásica del DSM-IV',
          whyIncorrect: 'Categoría obsoleta y retirada del manual diagnótico contemporáneo.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno Dismórfico Corporal',
          whyIncorrect: 'El TDC se refiere a la fealdad o defectos estéticos visibles en el espejo, no al temor a tener un cáncer cerebral.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Trastorno de Ansiedad por Enfermedad (Criterios A a F).',
      clinicalPearl: '¿Tiene dolor de espalda o fatiga real que lo obsesiona? = Trastorno de Síntomas Somáticos. ¿No le duele nada pero vive aterrorizado de tener un cáncer indetectable? = Trastorno de Ansiedad por Enfermedad.'
    }
  },
  {
    id: 'somat-04',
    category: 'somaticos_disociativos',
    categoryLabel: 'Somatización e Impulsos',
    difficulty: 'avanzado',
    type: 'diagnostico_diferencial',
    title: 'Diagnóstico diferencial en Trastornos de la Conducta Alimentaria (TCA)',
    clinicalVignette: 'Una joven de 19 años presenta atracones recurrentes 3 veces por semana en los que consume grandes cantidades de carbohidratos en poco tiempo con pérdida de control, seguidos de vómitos autoinducidos y abuso de laxantes por pánico a subir de peso. En el examen físico, su índice de masa corporal (IMC) es de 16.2 kg/m² (peso significativamente inferior al mínimo normal para su edad y talla) y presenta amenorrea secundaria y lanugo.',
    question: 'A pesar de la presencia de atracones y purgas, ¿cuál es el diagnóstico correcto según el principio jerárquico del DSM-5?',
    options: [
      {
        id: 'opt-a',
        text: 'Anorexia Nerviosa de tipo con atracones / purgas.',
        subtext: 'El peso corporal significativamente bajo (IMC < 18.5) prevalece jerárquicamente sobre el diagnóstico de Bulimia Nerviosa.'
      },
      {
        id: 'opt-b',
        text: 'Bulimia Nerviosa grave con purgas compensatorias.',
        subtext: 'La bulimia requiere que el paciente mantenga un peso normal o sobrepeso; ante infrapeso grave el diagnóstico es siempre anorexia.'
      },
      {
        id: 'opt-c',
        text: 'Trastorno por Atracón con desregulación electrolítica.',
        subtext: 'El trastorno por atracón se caracteriza justamente por la ausencia de conductas compensatorias inapropiadas.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de Purga aislado con síndrome consuntivo.',
        subtext: 'En el trastorno de purga no existen episodios de atracones de comida recurrentes.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El diagnóstico correcto es Anorexia Nerviosa, tipo con atracones/purgas. Si el paciente presenta un peso significativamente bajo (IMC < 18.5), la regla jerárquica del DSM-5 dictamina Anorexia Nerviosa, excluyendo la Bulimia Nerviosa.',
      detailedRationale: 'Este es uno de los dilemas diferenciales más comunes en psiquiatría: Cuando un paciente presenta atracones y purgas (vómitos, laxantes, diuréticos), la decisión entre Anorexia Nerviosa y Bulimia Nerviosa depende EXCLUSIVAMENTE del peso corporal (Criterio A de Anorexia: restricción energética que conduce a un peso corporal significativamente bajo con relación a la edad y sexo). Si el IMC está por debajo de 18.5 kg/m² en adultos, el diagnóstico es Anorexia Nerviosa (subtipo con atracones/purgas). Para diagnosticar Bulimia Nerviosa, el peso del paciente DEBE situarse en un rango normal o con sobrepeso.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Bulimia Nerviosa grave',
          whyIncorrect: 'Falla por el criterio de peso corporal. En la bulimia nerviosa los pacientes NO presentan un peso significativamente bajo (suelen tener normopeso o sobrepeso).'
        },
        {
          optionId: 'opt-c',
          optionText: 'Trastorno por Atracón',
          whyIncorrect: 'El Criterio C del Trastorno por Atracón exige que el atracón NO se asocie al uso recurrente de conductas compensatorias inapropiadas (aquí se autoinduce el vómito y usa laxantes).'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno de Purga aislado',
          whyIncorrect: 'En el trastorno de purga la conducta evacuatoria ocurre tras ingerir cantidades normales o pequeñas de comida, sin los atracones masivos descritos.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio A y Subtipos de Anorexia Nerviosa vs Criterio E de Bulimia Nerviosa.',
      clinicalPearl: 'Jerarquía diagnóstica cardinal: Infrapeso significativo (IMC < 18.5) + miedo a engordar = SIEMPRE Anorexia Nerviosa (restrictiva o purgativa). Nunca diagnostique Bulimia en presencia de infrapeso manifiesto.'
    }
  },

  // =========================================================================
  // 9. CASOS CLÍNICOS EN VIÑETA ADICIONALES (casos_clinicos)
  // =========================================================================
  {
    id: 'casos-03',
    category: 'casos_clinicos',
    categoryLabel: 'Casos Clínicos en Viñeta',
    difficulty: 'avanzado',
    type: 'viñeta_clinica',
    title: 'Diagnóstico diferencial: Trastorno Esquizoafectivo vs Trastorno Afectivo con Psicosis',
    clinicalVignette: 'Un hombre de 31 años es evaluado en el centro de salud mental. Durante los últimos dos años ha presentado dos episodios depresivos mayores floridos. Sin embargo, su historia clínica documenta con claridad que durante un período de casi 4 semanas consecutivas, mientras su estado de ánimo era rigurosamente eutímico y estable, presentó alucinaciones auditivas comentadoras ("no vales nada, te están vigilando") e ideas delirantes de persecución bien estructuradas.',
    question: '¿Qué criterio psicopatológico fundamental del DSM-5 inclina la balanza de manera concluyente hacia el diagnóstico de Trastorno Esquizoafectivo en lugar de una Depresión Mayor con síntomas psicóticos?',
    options: [
      {
        id: 'opt-a',
        text: 'La presencia de delirios o alucinaciones durante al menos dos semanas consecutivas en ausencia de un episodio mayor del estado de ánimo a lo largo de la vida de la enfermedad.',
        subtext: 'Criterio B indispensable para Trastorno Esquizoafectivo en el DSM-5.'
      },
      {
        id: 'opt-b',
        text: 'El hecho de que el paciente sea de sexo masculino y menor de 35 años.',
        subtext: 'La edad de inicio típica no constituye un criterio taxonómico excluyente.'
      },
      {
        id: 'opt-c',
        text: 'La respuesta terapéutica incompleta al tratamiento con antidepresivos tricíclicos.',
        subtext: 'La respuesta farmacológica no reemplaza el criterio fenomenológico criterial.'
      },
      {
        id: 'opt-d',
        text: 'La persistencia exclusiva de los síntomas psicóticos durante los episodios de profunda melancolía.',
        subtext: 'Si la psicosis solo ocurre durante la depresión, el diagnóstico sería Trastorno Depresivo Mayor con psicosis.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El Trastorno Esquizoafectivo exige el cumplimiento del Criterio B: existencia de delirios o alucinaciones durante 2 o más semanas en ausencia de un episodio mayor del estado de ánimo (depresivo o maníaco).',
      detailedRationale: 'El diagnóstico diferencial entre Trastorno Esquizoafectivo y Trastorno del Estado de Ánimo con síntomas psicóticos es uno de los desafíos diagnósticos más exigentes en psicopatología. El DSM-5 resolvió la distinción con una regla temporal estricta (Criterio B): Debe haber habido en algún momento del curso evolutivo de la enfermedad al menos 2 semanas de delirios o alucinaciones en ausencia de síntomas significativos del estado de ánimo. Si los síntomas psicóticos aparecen ÚNICAMENTE durante los episodios depresivos o maníacos, el diagnóstico es Trastorno Afectivo con síntomas psicóticos (congruentes o incongruentes). En este paciente, las 4 semanas de alucinaciones y delirios en plena eutimia consolidan el diagnóstico de Trastorno Esquizoafectivo.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Sexo masculino y edad',
          whyIncorrect: 'Las variables demográficas orientan probabilidades estadísticas, pero no definen los criterios diagnósticos categoriales.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Respuesta terapéutica incompleta',
          whyIncorrect: 'La refractariedad farmacológica no es criterio diagnóstico formal en el DSM-5.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Psicosis solo durante la melancolía',
          whyIncorrect: 'Si los síntomas psicóticos solo se presentaran durante la melancolía profunda, el diagnóstico sería justamente el contrario: Trastorno Depresivo Mayor con síntomas psicóticos.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterio B de Trastorno Esquizoafectivo.',
      clinicalPearl: 'Regla nemotécnica de las dos semanas: ¿Hay psicosis sola (sin manía ni depresión) por ≥ 2 semanas? = Trastorno Esquizoafectivo. ¿La psicosis NUNCA viaja sola sin el ánimo alterado? = Trastorno Afectivo con psicosis.'
    }
  },
  {
    id: 'casos-04',
    category: 'casos_clinicos',
    categoryLabel: 'Casos Clínicos en Viñeta',
    difficulty: 'intermedio',
    type: 'viñeta_clinica',
    title: 'Semiología diferencial: Trastorno Histriónico de la Personalidad vs TLP',
    clinicalVignette: 'Una actriz de 26 años consulta por insatisfacción en sus relaciones de pareja. En la consulta se muestra sumamente expresiva, gesticulante y con atuendos llamativos. Llora con facilidad para luego sonreír en segundos, habla de forma teatral con escasos detalles fácticos ("él era como un ángel de luz pero el universo conspiró"), se muestra seductora con el terapeuta y se angustia intensamente cuando siente que la conversación no se centra en ella. Niega tajantemente autolesiones, intentos suicidas, impulsividad autodestructiva o sentimientos crónicos de vacío interior.',
    question: '¿Cuál es el diagnóstico más consistente con la constelación de síntomas descrita?',
    options: [
      {
        id: 'opt-a',
        text: 'Trastorno de la Personalidad Histriónica (Cluster B).',
        subtext: 'Búsqueda constante de atención, teatralidad, sugestibilidad y seducción inapropiada sin destructividad suicida.'
      },
      {
        id: 'opt-b',
        text: 'Trastorno Límite de la Personalidad en fase de escisión defensiva.',
        subtext: 'La ausencia de autolesiones, pánico al abandono destructivo y vacío crónico aleja el diagnóstico de TLP.'
      },
      {
        id: 'opt-c',
        text: 'Episodio maníaco con fuga de ideas y grandiosidad erotomaníaca.',
        subtext: 'El cuadro describe un estilo caracterológico continuo de personalidad, no un episodio afectivo agudo.'
      },
      {
        id: 'opt-d',
        text: 'Trastorno de la Personalidad Esquizotípica con lenguaje metafórico.',
        subtext: 'El esquizotípico es excéntrico y socialmente ansioso/retraído, opuesto a la sociabilidad extrovertida e histriónica.'
      }
    ],
    correctOptionId: 'opt-a',
    feedback: {
      summary: 'El cuadro se ajusta con exactitud al Trastorno de la Personalidad Histriónica: necesidad de ser el centro de atención, emotividad superficial y rápidamente cambiante, habla impresionista y conducta seductora.',
      detailedRationale: 'El Trastorno de la Personalidad Histriónica (Grupo B) se caracteriza por un patrón dominante de emotividad excesiva y de búsqueda constante de atención. Los pacientes se sienten incómodos en situaciones en las que no son el centro de atención, interactúan mediante un comportamiento sexualmente seductor o provocador inapropiado, presentan cambios rápidos y expresión plana de las emociones, utilizan constantemente el aspecto físico para llamar la atención, tienen un estilo de hablar excesivamente subjetivo y carente de detalles (estilo impresionista), muestran autodramatización, teatralidad y exagerada expresión emocional, y consideran que sus relaciones son más estrechas de lo que son en realidad. Se diferencia del TLP en que en el Histriónico NO hay vacío crónico, ira destructiva ni autolesiones reiteradas.',
      distractorAnalysis: [
        {
          optionId: 'opt-b',
          optionText: 'Trastorno Límite de la Personalidad',
          whyIncorrect: 'Aunque ambos pertenecen al Grupo B, el paciente histriónico carece de las conductas autolesivas, el terror aniquilante al abandono real, la difusión grave de identidad y el vacío existencial crónico típicos del TLP.'
        },
        {
          optionId: 'opt-c',
          optionText: 'Episodio maníaco con fuga de ideas',
          whyIncorrect: 'En la manía hay aceleración psicomotora severa, insomnio y disfunción cognitiva aguda. La teatralidad histriónica es un rasgo estable de la personalidad.'
        },
        {
          optionId: 'opt-d',
          optionText: 'Trastorno Esquizotípico',
          whyIncorrect: 'El esquizotípico (Grupo A) presenta aislamiento, anhedonia relacional, suspicacia y pensamiento mágico, en las antípodas de la hiperexpresividad histriónica.'
        }
      ],
      dsmCriteriaReference: 'DSM-5 Criterios para el Trastorno de la Personalidad Histriónica (Grupo B).',
      clinicalPearl: 'Diferenciación práctica Grupo B: El histriónico busca atención; el narcisista busca admiración y estatus; el antisocial busca explotación; el límite busca evitar el abandono a toda costa.'
    }
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', name: 'Todos los Temas', description: 'Evaluación integral mixta de psicopatología' },
  { id: 'tept', name: 'Estrés Postraumático (TEPT)', description: 'Criterios DSM-5, TEA, síntomas disociativos y TEPT-C' },
  { id: 'esquizofrenia', name: 'Esquizofrenia y Psicosis', description: 'Síntomas positivos/negativos, temporalidad y diagnósticos diferenciales' },
  { id: 'narcisismo', name: 'Narcisismo y Personalidad', description: 'TPN, subtipos grandioso/vulnerable y herida narcisista' },
  { id: 'personalidad', name: 'Otros Trastornos de Personalidad', description: 'TLP, antisocial, histriónico, esquizoide vs evitativo, TOCP' },
  { id: 'animo_bipolar', name: 'Ánimo y Bipolaridad', description: 'Depresión Mayor, Manía/Hipomanía, Bipolar I vs II, Ciclotimia y Distimia' },
  { id: 'ansiedad_toc', name: 'Ansiedad y Espectro TOC', description: 'TOC, Trastorno de Pánico, TAG, Ansiedad Social y Dismorfia' },
  { id: 'somaticos_disociativos', name: 'Somatización, Disociación e Impulsos', description: 'Conversión, Ansiedad por Enfermedad, Facticio vs Simulación y TCA' },
  { id: 'casos_clinicos', name: 'Casos Clínicos en Viñeta', description: 'Evaluación diagnóstica aplicada a historias clínicas complejas' },
] as const;
