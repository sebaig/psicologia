import { DiagnosticCriterionItem } from '../types';

export const DIAGNOSTIC_CRITERIA_DATA: DiagnosticCriterionItem[] = [
  {
    id: 'crit-tept',
    disorderName: 'Trastorno de Estrés Postraumático (TEPT / PTSD)',
    category: 'Trastornos relacionados con traumas y factores de estrés',
    keyFeatures: [
      'Exposición a muerte, lesión grave o violencia sexual (real o amenaza).',
      'Presencia de 1 o más síntomas de intrusión (flashbacks, pesadillas, malestar ante estímulos detonantes).',
      'Evitación persistente de estímulos internos (recuerdos) o externos (lugares, personas).',
      'Alteraciones cognitivas y del estado de ánimo negativas (amnesia disociativa, culpa distorsionada, desapego).',
      'Hiperreactividad marcada (hipervigilancia, sobresalto exagerado, irritabilidad, insomnio).'
    ],
    dsm5Criteria: 'Duración de las alteraciones > 1 mes (Criterio F). Causa malestar clínicamente significativo o deterioro social/laboral. Subtipo disociativo: con Despersonalización o Desrealización.',
    differentialTips: [
      'Trastorno de Estrés Agudo: síntomas similares pero duración de 3 días a 1 mes máximo.',
      'Trastorno de Adaptación: estresor no extremo/vital (e.g. divorcio, despido) sin síntomas de intrusión plenos.',
      'TEPT Complejo (CIE-11): suma desregulación afectiva grave, autoconcepto negativo persistente y problemas relacionales tras traumas crónicos sin escape.'
    ]
  },
  {
    id: 'crit-esq',
    disorderName: 'Esquizofrenia y Espectro Psicótico',
    category: 'Espectro de la esquizofrenia y otros trastornos psicóticos',
    keyFeatures: [
      'Criterio A: Dos o más de los siguientes durante al menos 1 mes (al menos uno debe ser 1, 2 o 3): 1) Delirios, 2) Alucinaciones, 3) Discurso desorganizado, 4) Comportamiento muy desorganizado o catatónico, 5) Síntomas negativos.',
      'Deterioro marcado del nivel de funcionamiento en trabajo, relaciones o autocuidado.',
      'Síntomas negativos: abulia, expresión emotiva disminuida, alogia, anhedonia, asocialidad.'
    ],
    dsm5Criteria: 'Signos continuos de la alteración durante al menos 6 meses (incluyendo pródromos y síntomas residuales), con al menos 1 mes de síntomas activos.',
    differentialTips: [
      'Trastorno Psicótico Breve: duración < 1 mes con retorno completo al nivel previo.',
      'Trastorno Esquizofreniforme: duración de al menos 1 mes pero menos de 6 meses.',
      'Trastorno Esquizoafectivo: episodio mayor del estado de ánimo concurrente pero con al menos 2 semanas de delirios/alucinaciones en ausencia de síntomas del ánimo.',
      'Trastorno Delirante: ideas delirantes de al menos 1 mes sin que se cumpla el Criterio A de esquizofrenia y sin deterioro general de la personalidad.'
    ]
  },
  {
    id: 'crit-tpn',
    disorderName: 'Trastorno de la Personalidad Narcisista (TPN)',
    category: 'Trastornos de la personalidad - Grupo B (Dramáticos / Emocionales)',
    keyFeatures: [
      'Patrón dominante de grandiosidad (fantasía o conducta), necesidad de admiración y falta de empatía.',
      'Sentimientos de grandeza y prepotencia; exagera logros y talentos.',
      'Absorto en fantasías de éxito, poder, brillantez o amor ideal ilimitados.',
      'Cree ser "especial" y único, solo comprensible por personas o instituciones de alto estatus.',
      'Sentimiento de privilegio (expectativas irracionales de trato especialmente favorable).',
      'Explotación interpersonal (se aprovecha de los demás para sus propios fines).'
    ],
    dsm5Criteria: 'Cumplimiento de al menos 5 de los 9 criterios del DSM-5, manifestados en diversos contextos desde el inicio de la edad adulta.',
    differentialTips: [
      'Narcisismo Grandioso (Overt): arrogante, dominante, descaradamente seguro de sí mismo.',
      'Narcisismo Vulnerable (Covert): hipersensible, tímido, resentido, con fantasías omnipotentes secretas.',
      'vs Trastorno Límite: la herida narcisista busca venganza o denigración por ataque al estatus; el límite teme el abandono y reacciona con pánico y autolesión.',
      'vs Manía bipolar: en manía el ánimo elevado es episódico y fluctuante; en el narcisismo es un rasgo caracterológico duradero.'
    ]
  },
  {
    id: 'crit-tlp',
    disorderName: 'Trastorno Límite de la Personalidad (TLP / Borderline)',
    category: 'Trastornos de la personalidad - Grupo B',
    keyFeatures: [
      'Esfuerzos desesperados para evitar el abandono real o imaginado.',
      'Patrón de relaciones interpersonales inestables e intensas caracterizado por la alternancia entre idealización y devaluación extremas (Escisión / Splitting).',
      'Alteración de la identidad: autoimagen o sentido del yo marcadamente inestable.',
      'Impulsividad en al menos dos áreas potencialmente autolesivas (gastos, sexo, drogas, conducción temeraria).',
      'Amenazas, gestos o conductas recurrentes de suicidio o automutilación.',
      'Inestabilidad afectiva debida a una reactividad notable del estado de ánimo.',
      'Sensación crónica de vacío e ira inapropiada e intensa.'
    ],
    dsm5Criteria: 'Al menos 5 de los 9 criterios específicos, con inicio en las primeras etapas de la edad adulta.',
    differentialTips: [
      'vs Trastorno Bipolar: los cambios de humor en el TLP duran horas (reactivos a estresores interpersonales), mientras que en el bipolar duran días, semanas o meses.',
      'vs Histriónico: el histriónico busca atención pero no presenta el vacío crónico, la destructividad ni los gestos suicidas del TLP.'
    ]
  },
  {
    id: 'crit-tpa',
    disorderName: 'Trastorno de la Personalidad Antisocial (TPA)',
    category: 'Trastornos de la personalidad - Grupo B',
    keyFeatures: [
      'Patrón dominante de inatención y vulneración de los derechos de los demás desde los 15 años.',
      'Incumplimiento de las normas sociales respecto a los comportamientos legales.',
      'Engaño, mentiras reiteradas o estafa para provecho o placer personal.',
      'Impulsividad, agresividad reiterada (peleas físicas), desatención imprudente de la seguridad.',
      'Ausencia total o marcada de remordimiento e indiferencia ante el sufrimiento ajeno.'
    ],
    dsm5Criteria: 'El individuo tiene como mínimo 18 años. Existen evidencias de Trastorno de la Conducta con inicio antes de los 15 años de edad.',
    differentialTips: [
      'vs Narcisismo: el narcisista busca reverencia y admiración social; el antisocial busca explotación directa sin importarle la aprobación externa ni la legalidad.',
      'vs Conducta delictiva común: en el TPA los rasgos antisociales impregnan todas las áreas de la vida personal y relacional.'
    ]
  },
  {
    id: 'crit-esquizoide-evitativo',
    disorderName: 'Esquizoide vs Evitativo vs Esquizotípico',
    category: 'Diagnóstico diferencial de la personalidad',
    keyFeatures: [
      'Trastorno Esquizoide (Cluster A): desapego absoluto de las relaciones sociales, no desea amigos, afecto frío, indiferente al elogio o la crítica.',
      'Trastorno Evitativo (Cluster C): desea profundamente relacionarse pero se inhibe por miedo atroz a la crítica, desaprobación o rechazo; sufre por la soledad.',
      'Trastorno Esquizotípico (Cluster A): pensamiento mágico, ideas de referencia, lenguaje metafórico excéntrico, ilusiones perceptivas sin psicosis franca.'
    ],
    dsm5Criteria: 'Estructuras de personalidad duraderas, egosintónicas en su concepción del mundo, consolidadas desde la adultez temprana.',
    differentialTips: [
      '¿Desea intimidad? Si NO = Esquizoide. Si SÍ pero le aterra el rechazo = Evitativo.',
      '¿Tiene creencias esotéricas, ilusiones corporales y aspecto estrambótico? = Esquizotípico.'
    ]
  },
  {
    id: 'crit-bipolar',
    disorderName: 'Trastornos Bipolares (Bipolar I vs Bipolar II vs Ciclotimia)',
    category: 'Trastornos bipolares y trastornos relacionados',
    keyFeatures: [
      'Bipolar I: Al menos un episodio maníaco completo (duración ≥ 7 días, o cualquier duración si precisa hospitalización o presenta psicosis). El episodio depresivo mayor es frecuente pero no indispensable para el diagnóstico.',
      'Bipolar II: Al menos un episodio de hipomanía (duración ≥ 4 días consecutivos sin psicosis ni hospitalización) Y al menos un episodio de depresión mayor (≥ 2 semanas). NUNCA ha tenido un episodio maníaco.',
      'Ciclotimia: Al menos 2 años (1 año en niños/adolescentes) de numerosos períodos con síntomas hipomaníacos y depresivos que no cumplen criterios para episodio pleno.',
      'Síntomas de la fase expansiva: autoestima inflada/grandiosidad, disminución de la necesidad de dormir, taquipsiquia/fuga de ideas, verborrea, distracción, aumento de actividad dirigida a metas o agitación, conductas de riesgo desinhibidas.'
    ],
    dsm5Criteria: 'La presencia de psicosis o necesidad de ingreso hospitalario convierte automáticamente el cuadro en Maníaco (Bipolar I), jamás hipomaníaco.',
    differentialTips: [
      '¿Tuvo alguna vez manía franca, psicosis en fase eufórica o requirió hospitalización? = Bipolar I.',
      '¿Solo hipomanía de 4 días y depresión mayor obligatoria, sin manía? = Bipolar II.',
      'vs TLP: la inestabilidad afectiva en el TLP es reactiva en cuestión de horas; en el bipolar los episodios duran días a semanas.'
    ]
  },
  {
    id: 'crit-depresion-distimia',
    disorderName: 'Trastorno Depresivo Mayor y Distimia (Depresivo Persistente)',
    category: 'Trastornos depresivos',
    keyFeatures: [
      'Depresión Mayor: Al menos 5 de 9 síntomas durante 2 semanas consecutivas (al menos uno debe ser ánimo deprimido o anhedonia/pérdida de interés). Otros: variaciones de peso/apetito, insomnio/hipersomnia, agitación/retardo psicomotor, fatiga, culpa excesiva/inapropiada, indecisión y pensamientos de muerte/suicidio.',
      'Trastorno Depresivo Persistente (Distimia): Ánimo deprimido la mayor parte del día, la mayoría de los días durante al menos 2 años (1 año en niños) sin remisión > 2 meses.',
      'Especificadores clínicos: Con características melancólicas, atípicas, con síntomas psicóticos (congruentes o incongruentes con el ánimo), catatónicas, o de inicio en el periparto.'
    ],
    dsm5Criteria: 'Causa malestar clínicamente significativo o deterioro funcional. Descartar efecto fisiológico directo de sustancias o afección médica (hipotiroidismo).',
    differentialTips: [
      'Síndrome de Cotard: delirios nihilistas de negación de órganos ("estoy muerto por dentro, mis vísceras se pudrieron") congruentes con melancolía severa.',
      'Doble Depresión: episodio depresivo mayor agudo sobreañadido a una distimia de fondo de años de evolución.'
    ]
  },
  {
    id: 'crit-toc',
    disorderName: 'Trastorno Obsesivo-Compulsivo (TOC) y Espectro',
    category: 'Trastorno obsesivo-compulsivo y trastornos relacionados',
    keyFeatures: [
      'Obsesiones: pensamientos, impulsos o imágenes recurrentes y persistentes que se experimentan como intrusas y no deseadas (egodistónicas) y causan ansiedad o malestar notable.',
      'Compulsiones: comportamientos repetitivos (lavado de manos, comprobación, orden) o actos mentales (rezar, contar, repetir palabras) que el sujeto se siente obligado a realizar para reducir la angustia o prevenir un acontecimiento temido.',
      'Insight variable: con introspección buena/aceptable, con poca introspección, o con ausencia de introspección / creencias delirantes.'
    ],
    dsm5Criteria: 'Las obsesiones o compulsiones requieren mucho tiempo (más de 1 hora al día) o causan malestar clínicamente significativo o deterioro social/laboral.',
    differentialTips: [
      'TOC vs TOCP: en el TOC las obsesiones son egodistónicas (el sujeto sufre y lucha contra ellas); en el TOCP la rigidez y perfeccionismo son egosintónicos (cree que su modo es el único correcto).',
      'Trastorno Dismórfico Corporal: obsesión circunscrita al aspecto físico y defectos percibidos con conductas repetitivas de comprobación frente al espejo.'
    ]
  },
  {
    id: 'crit-conversion-somat',
    disorderName: 'Conversión (Neurológico Funcional) y Somatización',
    category: 'Trastornos de síntomas somáticos y trastornos relacionados',
    keyFeatures: [
      'Trastorno de Conversión: Uno o más síntomas de alteración de la función motora o sensitiva voluntaria con incompatibilidad clínica demostrable (e.g. Signo de Hoover positivo, marcha funcional sin caídas traumáticas).',
      'Belle Indifférence: curiosa serenidad o falta de angustia proporcional ante un déficit funcional sobrecogedor (como parálisis o ceguera súbita).',
      'Trastorno de Síntomas Somáticos: Uno o más síntomas somáticos reales angustiantes acompañados de pensamientos, ansiedad o conductas excesivas vinculadas a la salud.',
      'Trastorno de Ansiedad por Enfermedad: Preocupación excesiva e hipervigilancia por tener una enfermedad letal con ausencia o levedad de síntomas somáticos físicos.'
    ],
    dsm5Criteria: 'Conversión exige demostración positiva de inconsistencia neurológica. Facticio se distingue por engaño sin beneficio material; simulación exige beneficio externo tangible.',
    differentialTips: [
      '¿Busca asumir el rol de enfermo sin ganar dinero ni librarse de juicio? = Trastorno Facticio (Münchhausen).',
      '¿Finge síntomas para cobrar un seguro o evadir el código penal? = Simulación (no es trastorno psiquiátrico).',
      '¿El síntoma motor es involuntario y tiene signo de Hoover positivo? = Trastorno de Conversión.'
    ]
  },
  {
    id: 'crit-tca',
    disorderName: 'Trastornos de la Conducta Alimentaria (Anorexia vs Bulimia vs Atracón)',
    category: 'Trastornos de la conducta alimentaria y de la ingesta de alimentos',
    keyFeatures: [
      'Anorexia Nerviosa: Restricción de la ingesta energética que conduce a un peso corporal significativamente bajo (IMC < 18.5 kg/m² en adultos); miedo intenso a ganar peso o engordar; alteración de la percepción del propio peso o silueta (dismorfofobia). Subtipos: Restrictivo vs Con atracones/purgas.',
      'Bulimia Nerviosa: Episodios recurrentes de atracones con sensación de falta de control; conductas compensatorias inapropiadas recurrentes (vómitos autoinducidos, laxantes, ayuno o ejercicio excesivo) al menos 1 vez/semana durante 3 meses. Peso habitualmente normal o sobrepeso.',
      'Trastorno por Atracón: Atracones recurrentes con marcado malestar pero SIN el uso recurrente de conductas compensatorias inapropiadas.'
    ],
    dsm5Criteria: 'Principio jerárquico DSM-5: Si hay peso corporal significativamente bajo (IMC < 18.5) junto a atracones y purgas, el diagnóstico prevalente es Anorexia Nerviosa (subtipo purgativo), nunca Bulimia.',
    differentialTips: [
      '¿IMC < 18.5 con vómitos autoinducidos? = Anorexia Nerviosa con atracones/purgas.',
      '¿IMC normal (22 kg/m²) con atracones y vómitos compensatorios? = Bulimia Nerviosa.',
      '¿Atracones masivos sin ninguna compensación purgativa? = Trastorno por Atracón.'
    ]
  }
];
