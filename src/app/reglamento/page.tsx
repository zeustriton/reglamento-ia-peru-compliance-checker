"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  FileText, 
  BookOpen, 
  Scale, 
  Users, 
  Shield, 
  Clock, 
  ChevronRight,
  Search,
  Download,
  Eye,
  Bookmark,
  Share2,
  Target,
  Building,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Award,
  Globe,
  Filter,
  Calendar,
  User,
  Database,
  Settings,
  Zap,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

const decretoCompleto = {
  tituloGeneral: "Decreto Supremo Nº 115-2025-PCM",
  subtitulo: "Reglamento de la Ley Nº 31814 - Ley que promueve el uso de la inteligencia artificial en favor del desarrollo económico y social del país",
  
  titulos: [
    {
      numero: "TÍTULO I",
      nombre: "DISPOSICIONES GENERALES",
      resumen: "Establece el objeto, finalidad, ámbito de aplicación, definiciones y principios rectores del reglamento.",
      articulos: [
        { 
          numero: "Artículo 1", 
          titulo: "Objeto", 
          contenido: "Establecer disposiciones reglamentarias de la Ley N° 31814, Ley que promueve el uso de la Inteligencia Artificial en favor del desarrollo económico y social del país.",
          detalles: [
            "Complementa la Ley N° 31814",
            "Establece reglas operativas específicas",
            "Define el marco de implementación",
            "Fija responsabilidades y obligaciones"
          ]
        },
        { 
          numero: "Artículo 2", 
          titulo: "Finalidad", 
          contenido: "Fomentar e impulsar el desarrollo y uso de la Inteligencia Artificial por parte de entidades públicas, organizaciones del sector privado, sociedad civil, ciudadanía y academia.",
          detalles: [
            "Promover el uso seguro y responsable de la IA",
            "Garantizar el respeto de los derechos humanos",
            "Establecer desarrollo ético, sostenible, transparente, replicable, responsable e inclusivo",
            "Favorecer el desarrollo económico y social"
          ]
        },
        { 
          numero: "Artículo 3", 
          titulo: "Ámbito de aplicación", 
          contenido: "Aplicable a entidades de la Administración Pública, empresas del Estado, y organizaciones del sector privado que integran el SNTD.",
          detalles: [
            "Entidades públicas del TUO de la Ley Nº 27444",
            "Empresas bajo FONAFE",
            "Empresas públicas de gobiernos regionales y locales",
            "Organizaciones del sector privado en el SNTD"
          ]
        },
        { 
          numero: "Artículo 4", 
          titulo: "Excepciones", 
          contenido: "No aplicable para uso personal y para defensa y seguridad nacional (con ciertos principios).",
          detalles: [
            "Uso de sistemas de IA para fines personales",
            "Uso en defensa y seguridad nacional con condiciones",
            "Debe respetar principios de protección de derechos",
            "Aplica no discriminación, seguridad, proporcionalidad"
          ]
        },
        { 
          numero: "Artículo 5", 
          titulo: "Acrónimos", 
          contenido: "Define acrónimos como CND, CNIDIA, CGTD, CONCYTEC, ENIA, IA, PCM, PNTD, PRODUCE, SGTD, SNTD.",
          detalles: [
            "CND: Centro Nacional de Datos",
            "CNIDIA: Centro Nacional de Innovación Digital e Inteligencia Artificial",
            "CGTD: Comité de Gobierno y Transformación Digital",
            "CONCYTEC: Consejo Nacional de Ciencia, Tecnología e Innovación",
            "ENIA: Estrategia Nacional de Inteligencia Artificial",
            "PCM: Presidencia del Consejo de Ministros",
            "PNTD: Política Nacional de Transformación Digital",
            "PRODUCE: Ministerio de la Producción",
            "SGTD: Secretaría de Gobierno y Transformación Digital",
            "SNTD: Sistema Nacional de Transformación Digital"
          ]
        },
        { 
          numero: "Artículo 6", 
          titulo: "Definiciones", 
          contenido: "Define términos clave como Alfabetización Digital, Desarrollador, Sesgo Algorítmico, Software, Usuario, Algoritmo, Sistema basado en IA.",
          detalles: [
            "Alfabetización Digital: Proceso de adquisición de competencias digitales",
            "Desarrollador: Persona natural/jurídica que diseña, programa o entrena sistemas de IA",
            "Sesgo Algorítmico: Error sistemático en decisiones de IA",
            "Software: Totalidad o parte de programas de procesamiento de información",
            "Usuario: Persona natural que utiliza un sistema de IA",
            "Algoritmo: Representación que transforma datos para resolver problemas",
            "Sistema basado en IA: Sistema que infiere outputs para influir en entornos"
          ]
        },
        { 
          numero: "Artículo 7", 
          titulo: "Principios Rectores", 
          contenido: "Establece 12 principios: No discriminación, Privacidad, Protección de derechos, Derechos de autor, Seguridad, Sensibilización, Sostenibilidad, Supervisión Humana, Transparencia, Rendición de Cuentas, Desarrollo ético, Estándares de seguridad.",
          detalles: [
            "No discriminación: Prevenir resultados discriminatorios o sesgados",
            "Privacidad de datos: Respeto irrestricto a la protección de datos personales",
            "Protección de derechos fundamentales: Priorizar bienestar humano",
            "Respeto del derecho de autor: Respetar derechos morales y patrimoniales",
            "Seguridad, proporcionalidad y fiabilidad: Sistemas fiables y seguros",
            "Sensibilización y educación: Fomentar alfabetización digital",
            "Sostenibilidad: Analizar repercusiones humanas, sociales, ambientales",
            "Supervisión humana: Intervención humana necesaria para corregir o detener",
            "Transparencia: Sistemas claros, explicables y accesibles",
            "Rendición de cuentas: Responsabilidad por impactos generados",
            "Desarrollo ético: Respeto a la dignidad y bienestar colectivo",
            "Estándares de seguridad basados en riesgos: Comprensión profunda de riesgos"
          ]
        }
      ]
    },
    {
      numero: "TÍTULO II",
      nombre: "GOBERNANZA PARA EL DESARROLLO Y USO DE IA",
      resumen: "Define la estructura de gobernanza, actores clave e instrumentos para la promoción y desarrollo de la IA.",
      articulos: [
        { 
          numero: "Artículo 8", 
          titulo: "Autoridad Nacional", 
          contenido: "La PCM a través de la SGTD es la autoridad técnico-normativa nacional responsable de dirigir, evaluar y supervisar el uso y promoción del desarrollo de la IA.",
          detalles: [
            "Fomentar espacios de intercambio técnico y legal",
            "Aprobar lineamientos, estándares y guías técnicas",
            "Monitorear sistemas de uso indebido",
            "Realizar seguimiento a mediciones e índices internacionales",
            "Promover intercambio de buenas prácticas",
            "Emitir opinión vinculante sobre interpretación de normas",
            "Supervisar cumplimiento y comunicar incumplimientos",
            "Informar anualmente al Congreso de la República",
            "Brindar capacitación y asistencia técnica",
            "Articular con entidades públicas y privadas",
            "Desempeñar rol de punto de contacto nacional"
          ]
        },
        { 
          numero: "Artículo 9", 
          titulo: "Actores para la gobernanza", 
          contenido: "Define los actores clave: PCM/SGTD, Comité de Alto Nivel, CGTD, Oficiales de Seguridad, Gobierno de Datos y Datos Personales, sector privado, academia.",
          detalles: [
            "PCM/SGTD: Ente rector del SNTD",
            "Comité de Alto Nivel: Mecanismo de articulación multisectorial",
            "CGTD: Responsables en entidades públicas de proyectos de IA",
            "Oficial de Seguridad y Confianza Digital: Promoción de seguridad",
            "Oficial de Gobierno de Datos: Calidad e intercambio de datos",
            "Oficial de Datos Personales: Tratamiento adecuado de datos personales",
            "Sector privado, academia, sociedad civil: Participación activa"
          ]
        },
        { 
          numero: "Artículo 10", 
          titulo: "Instrumentos para la promoción", 
          contenido: "PNTD, ENIA, ENGD, CND, CNSD, CNIDIA, Laboratorio de Gobierno y Transformación Digital.",
          detalles: [
            "PNTD: Política Nacional de Transformación Digital",
            "ENIA: Estrategia Nacional de Inteligencia Artificial",
            "ENGD: Estrategia Nacional de Gobierno de Datos",
            "CND: Centro Nacional de Datos",
            "CNSD: Centro Nacional de Seguridad Digital",
            "CNIDIA: Centro Nacional de Innovación Digital e Inteligencia Artificial",
            "Laboratorio de Gobierno y Transformación Digital"
          ]
        },
        { 
          numero: "Artículo 11", 
          titulo: "Centro Nacional de Innovación", 
          contenido: "La SGTD impulsa acciones a través del CNIDIA para servicios de IA, soporte a entidades, alianzas y eventos.",
          detalles: [
            "Poner a disposición servicios para diseñar y entrenar IA",
            "Contribuir en diseño y desarrollo de sistemas de IA",
            "Promover y proponer alianzas con entidades públicas",
            "Facilitar identificación de proyectos prioritarios",
            "Promover eventos nacionales e internacionales",
            "Realizar publicaciones sobre uso y adopción de IA",
            "Promover desafíos de innovación",
            "Articular acciones con CND",
            "Concertar con CONCYTEC para fomento e investigación",
            "Articular con PRODUCE para desarrollo empresarial",
            "Fomentar participación de Institutos Públicos de Investigación",
            "Articular con Ministerio de Defensa para seguridad y defensa"
          ]
        },
        { 
          numero: "Artículo 12", 
          titulo: "Protección de Grupos Vulnerables", 
          contenido: "Los servicios digitales con IA deben considerar necesidades de mujeres, niños, adultos mayores, personas con discapacidad y grupos vulnerables.",
          detalles: [
            "Considerar necesidades diferenciadas de grupos vulnerables",
            "Mujeres, niñas, niños y adolescentes",
            "Adultos mayores",
            "Personas con discapacidad",
            "Grupos en situación de especial vulnerabilidad",
            "Garantizar servicios seguros, sostenibles, estables e inclusivos"
          ]
        }
      ]
    },
    {
      numero: "TÍTULO III",
      nombre: "FORMACIÓN DE CAPACIDADES Y DESARROLLO INNOVADOR",
      resumen: "Establece mecanismos para la formación de talento, capacitación y promoción de la innovación en IA.",
      articulos: [
        { 
          numero: "Artículo 13", 
          titulo: "Formación de conocimientos", 
          contenido: "La SGTD promueve formación en IA a través de la Plataforma Nacional de Talento Digital y articulación con MINEDU.",
          detalles: [
            "Identificar y proveer cursos, programas, talleres formativos",
            "Articular con entidades públicas, sociedad civil, academia, sector privado",
            "Promover uso responsable, ético, transparente e inclusivo en educación básica",
            "Preparar estudiantado para futuro digital promoviendo igualdad",
            "Promover formación de personal docente en IA y tecnologías digitales",
            "Fomentar implementación de programas de estudio en educación superior",
            "Incorporar contenidos de IA en carreras afines",
            "Fortalecer perfil profesional de egresados"
          ]
        },
        { 
          numero: "Artículo 14", 
          titulo: "Campañas de sensibilización", 
          contenido: "Desarrollo de campañas como 'Alianza Nacional por una Internet Segura' para concientizar sobre uso ético de IA.",
          detalles: [
            "Articular acciones con entidades públicas, sociedad civil, academia, sector privado",
            "Desarrollar sesiones de valor, actividades, programas, campañas",
            "Generar espacio o plataforma de difusión y concientización",
            "Poner a disposición contenido sobre beneficios de la IA",
            "Generar espacios de reflexión para evitar uso indebido",
            "Prevenir comisión de delitos informáticos, afectación a reputación",
            "Evitar violencia contra mujeres y grupo familiar",
            "Aprender sobre uso adecuado de sistemas basados en IA"
          ]
        },
        { 
          numero: "Artículo 15", 
          titulo: "Formación y retención de talento", 
          contenido: "Estrategias para atraer y retener talento nacional e internacional en IA.",
          detalles: [
            "Implementar estrategias para atraer y retener talento",
            "Programas de mentorías, investigación conjunta, docentes visitantes",
            "Asegurar sostenibilidad del conocimiento e innovación",
            "Promover generación de comunidades o redes de especialistas",
            "Gestionar apoyo de espacios multilaterales y multiactores"
          ]
        },
        { 
          numero: "Artículo 16", 
          titulo: "Promoción de la IA para la competitividad", 
          contenido: "Promoción del desarrollo y financiamiento del uso de IA para mejorar productos y servicios.",
          detalles: [
            "Promover y fomentar desarrollo y uso de IA",
            "Mejorar productos y servicios en favor del desarrollo económico y social",
            "Articular con PCM a través de SGTD cuando corresponda",
            "Promover creación de laboratorios en IA en universidades e institutos",
            "Fomentar financiación de programas formativos y proyectos de investigación",
            "Impulsar desarrollo de Sistemas basados en IA de código abierto"
          ]
        }
      ]
    },
    {
      numero: "TÍTULO IV",
      nombre: "FINANCIAMIENTO, INCENTIVOS Y MEDIDAS PROACTIVAS",
      resumen: "Establece mecanismos de financiamiento, incentivos y medidas para fomentar la innovación en IA.",
      articulos: [
        { 
          numero: "Artículo 17", 
          titulo: "Entorno de experimentación", 
          contenido: "Creación de entornos controlados (sandbox) para probar sistemas de IA de manera segura.",
          detalles: [
            "Entorno organizado de reglas, tecnología y capacidades",
            "Proveer entorno digital controlado para desarrollo, prueba, validación",
            "Flexibilizar y/o eximir regulaciones en espacio geográfico o sector",
            "Implementar proceso de postulación, evaluación y selección",
            "Temáticas elegibles: desarrollo de algoritmos, herramientas de optimización",
            "Implementación de soluciones con impacto en productividad",
            "Soluciones para seguridad y defensa nacional"
          ]
        },
        { 
          numero: "Artículo 18", 
          titulo: "Impulso a MIPYMES", 
          contenido: "Promoción de ferias, eventos y mecanismos de financiamiento para MIPYMES y emprendimientos innovadores en IA.",
          detalles: [
            "Promover e impulsar ferias, eventos, desafíos de innovación",
            "Fomentar visibilidad de soluciones innovadoras en IA",
            "Promover participación en entorno de experimentación controlada",
            "Articular con PRODUCE y CONCYTEC mecanismos de financiamiento",
            "Apoyar uso, desarrollo o adaptación de sistemas de IA"
          ]
        },
        { 
          numero: "Artículo 19", 
          titulo: "Uso de computación en la nube", 
          contenido: "Habilitación de recursos de computación en la nube para desarrollo de IA.",
          detalles: [
            "Habilitar recursos de computación en la nube pública",
            "Solución de problemas públicos en base a datos",
            "Facilitar acceso a entidades públicas, investigadores, docentes, estudiantes"
          ]
        },
        { 
          numero: "Artículo 20", 
          titulo: "Estándares y buenas prácticas", 
          contenido: "Promoción de estándares nacionales e internacionales para sistemas de IA.",
          detalles: [
            "Incorporar buenas prácticas, técnicas y estándares",
            "Estándares nacionales e internacionales reconocidos",
            "Articular con INACAL aprobación de Normas Técnicas Peruanas",
            "Adoptar estándares técnicos para gestión e implementación responsable"
          ]
        },
        { 
          numero: "Artículo 21", 
          titulo: "Fomento de comunidades de código abierto", 
          contenido: "Promoción de comunidades de desarrolladores y publicación voluntaria de proyectos de código abierto.",
          detalles: [
            "Fomentar creación y desarrollo de comunidades de desarrolladores",
            "Promover publicación voluntaria de proyectos de código abierto",
            "Promover reconocimientos para desarrolladores que liberen código",
            "Respetar principios de seguridad, privacidad y uso ético"
          ]
        }
      ]
    },
    {
      numero: "TÍTULO V",
      nombre: "RIESGOS, TRANSPARENCIA Y PRIVACIDAD",
      resumen: "Establece la clasificación de riesgos, medidas de transparencia y protección de datos para sistemas de IA.",
      articulos: [
        { 
          numero: "Artículo 22", 
          titulo: "Clasificación de Riesgos", 
          contenido: "Establece tres categorías: Uso indebido (prohibido), Uso de riesgo alto (con controles), Riesgo aceptable.",
          detalles: [
            "Uso indebido: Impacto irreversible, significativo y negativo en derechos fundamentales",
            "Uso de riesgo alto: Peligro para vida, dignidad, libertad, seguridad física",
            "Riesgo aceptable: Todos los demás sistemas no clasificados en categorías anteriores",
            "Debe garantizarse cumplimiento del reglamento y principios rectores"
          ]
        },
        { 
          numero: "Artículo 23", 
          titulo: "Uso indebido de la IA", 
          contenido: "Prohíbe sistemas para manipulación subliminal, capacidad letal autónoma, vigilancia masiva, predicción criminal, entre otros.",
          detalles: [
            "Influir de manera engañosa o manipulativa en toma de decisiones",
            "Generar capacidad letal autónoma en ámbito civil",
            "Realizar vigilancia masiva sin base legal o impacto desproporcionado",
            "Analizar o clasificar personas a partir de datos biométricos",
            "Realizar identificación biométrica en tiempo real en espacios públicos",
            "Predecir comisión de delitos basándose en perfil o rasgos de personalidad",
            "SGTD establece mecanismos de monitoreo",
            "Desarrolladores pueden solicitar consulta sobre clasificación"
          ]
        },
        { 
          numero: "Artículo 24", 
          titulo: "Uso de sistemas de riesgo alto", 
          contenido: "Define sistemas de alto riesgo como gestión de activos críticos, evaluación educativa, procesos de selección, acceso a programas sociales, evaluación crediticia, servicios de salud.",
          detalles: [
            "Gestión de activos críticos nacionales (energía, telecomunicaciones, salud)",
            "Evaluación en procesos de niños, niñas y adolescentes en sector educativo",
            "Procesos de selección, evaluación, contratación y cese de trabajadores",
            "Determinación del acceso, evaluación, priorización o cese de programas sociales",
            "Determinación de evaluación crediticia de personas (excepto detección de fraude)",
            "Determinación del acceso a servicios de salud y sistemas complementarios",
            "Inferencia de emociones en entornos laborales y educativos",
            "Desarrolladores pueden solicitar consulta sobre clasificación"
          ]
        },
        { 
          numero: "Artículo 25", 
          titulo: "Transparencia Algorítmica", 
          contenido: "Obliga a informar a usuarios sobre la finalidad y funcionalidades de sistemas de alto riesgo.",
          detalles: [
            "Informar al usuario de forma previa, clara y sencilla",
            "Informar sobre finalidad o uso del sistema basado en IA",
            "Informar sobre funcionalidades principales y tipo de decisiones",
            "Permitir comprensión de interacción con sistema",
            "Respetar secreto industrial y comercial",
            "Incluir etiquetado visible del sistema basado en IA",
            "Garantizar explicación de resultados en lenguaje accesible"
          ]
        }
      ]
    },
    {
      numero: "TÍTULO VI",
      nombre: "OBLIGACIONES ESPECÍFICAS",
      resumen: "Establece las obligaciones específicas para entidades públicas y privadas, medidas de seguridad y plazos de implementación.",
      articulos: [
        { 
          numero: "Artículo 26", 
          titulo: "Obligaciones para la Administración Pública", 
          contenido: "Políticas institucionales, uso de estándares técnicos, publicación de código fuente, supervisión humana, planes digitales.",
          detalles: [
            "Aprobar política institucional para uso seguro, responsable y ético de IA",
            "Utilizar Norma Técnica Peruana NTP-ISO/IEC 42001:2025",
            "Publicar código fuente de sistemas financiados con fondos públicos",
            "Implementar mecanismos de supervisión humana efectiva",
            "Incluir proyectos de IA en Plan de Gobierno Digital (PGD)",
            "Conformar equipos técnicos multidisciplinarios"
          ]
        },
        { 
          numero: "Artículo 27", 
          titulo: "Medidas de seguridad digital", 
          contenido: "Gestión de riesgos, privacidad desde el diseño, auditorías de seguridad, gestión de incidentes.",
          detalles: [
            "Gestionar riesgos inherentes a sistemas de IA",
            "Integrar protección de privacidad desde primeras etapas de diseño",
            "Realizar auditorías de seguridad digital periódicas y obligatorias",
            "Integrar gestión de incidentes en Sistema de Gestión de Seguridad"
          ]
        },
        { 
          numero: "Artículo 28", 
          titulo: "Evaluación de impacto", 
          contenido: "Obligación de realizar evaluaciones de impacto para sistemas de alto riesgo.",
          detalles: [
            "Realizar análisis de impacto previo a desarrollo o implementación",
            "Identificar, analizar y minimizar riesgos potenciales para derechos fundamentales",
            "Documentar medidas de mitigación adoptadas",
            "Ajustar modelos, mejorar calidad de datos, reforzar supervisión humana"
          ]
        },
        { 
          numero: "Artículo 29", 
          titulo: "Obligaciones para el sector privado", 
          contenido: "Registros actualizados, supervisión humana, políticas internas, evaluaciones de impacto voluntarias.",
          detalles: [
            "Mantener registro actualizado sobre funcionamiento de sistemas de riesgo alto",
            "Implementar mecanismos de supervisión humana efectiva",
            "Establecer políticas, protocolos y procedimientos internos",
            "Realizar voluntariamente evaluaciones de impacto para sistemas de alto riesgo",
            "Documentar hallazgos y conservarlos por mínimo tres años",
            "SGTD promoverá reconocimientos para quienes realicen evaluaciones"
          ]
        },
        { 
          numero: "Artículo 30", 
          titulo: "Implementación gradual", 
          contenido: "Establece cronograma de implementación por fases para sector público y privado.",
          detalles: [
            "Implementación gradual de obligaciones de transparencia y específicas",
            "Administración Pública: 1 año (Ejecutivo, Legislativo, Judicial), 2 años (Regionales, Universidades, FONAFE), 3 años (Gobiernos locales)",
            "Sector Privado: 1 año (salud, educación, justicia, seguridad, economía), 2 años (transporte, comercio, trabajo), 3 años (producción, agricultura, energía, minería), 4 años (todos los demás)",
            "MYPES y Emprendimientos: 2 años (ventas hasta 1,700 UIT), 3 años (ventas hasta 150 UIT)"
          ]
        },
        { 
          numero: "Artículo 31", 
          titulo: "Supervisión y denuncias", 
          contenido: "La SGTD supervisa el cumplimiento y los ciudadanos pueden alertar sobre uso indebido.",
          detalles: [
            "SGTD supervisa cumplimiento por parte de entidades públicas",
            "Reportar incumplimientos a Contraloría",
            "Comunicar a autoridades competentes ante vulneraciones",
            "Ciudadanos pueden alertar sobre uso indebido a través de gob.pe/iaperu",
            "Personas afectadas pueden presentar denuncias formales"
          ]
        },
        { 
          numero: "Artículo 32", 
          titulo: "Infracciones y sanciones", 
          contenido: "Establece el régimen de infracciones y sanciones aplicables.",
          detalles: [
            "Establece régimen de infracciones y sanciones",
            "Aplicable a entidades que incumplen obligaciones",
            "Sanciones proporcionales a gravedad de infracción",
            "Procedimiento administrativo sancionador"
          ]
        },
        { 
          numero: "Artículo 33", 
          titulo: "Medidas correctivas", 
          contenido: "Procedimiento para aplicar medidas correctivas en caso de incumplimiento.",
          detalles: [
            "Procedimiento para aplicar medidas correctivas",
            "Plazos para subsanar incumplimientos",
            "Verificación de cumplimiento de medidas",
            "Sanciones por no cumplimiento de medidas correctivas"
          ]
        },
        { 
          numero: "Artículo 34", 
          titulo: "Registro de sistemas", 
          contenido: "Creación de registro nacional de sistemas de IA.",
          detalles: [
            "Creación de registro nacional de sistemas de IA",
            "Obligación de registro para sistemas de alto riesgo",
            "Información requerida para registro",
            "Actualización periódica de información"
          ]
        },
        { 
          numero: "Artículo 35", 
          titulo: "Reporte de incidentes", 
          contenido: "Obligación de reportar incidentes relacionados con sistemas de IA.",
          detalles: [
            "Obligación de reportar incidentes",
            "Plazos para reporte de incidentes",
            "Contenido mínimo del reporte",
            "Seguimiento y resolución de incidentes"
          ]
        },
        { 
          numero: "Artículo 36", 
          titulo: "Cooperación internacional", 
          contenido: "Promoción de la cooperación internacional en materia de IA.",
          detalles: [
            "Promover cooperación internacional en materia de IA",
            "Participación en foros internacionales",
            "Adopción de estándares internacionales",
            "Intercambio de buenas prácticas"
          ]
        }
      ]
    }
  ],

  principios: [
    { 
      nombre: "No discriminación", 
      icono: Scale, 
      descripcion: "Prevenir resultados discriminatorios o sesgados en sistemas de IA",
      aplicacion: "Implementar medidas para prevenir, mitigar y corregir generación o perpetuación de resultados discriminatorios o sesgados",
      ejemplos: [
        "Auditorías algorítmicas regulares",
        "Datasets diversos y representativos",
        "Mecanismos de corrección de sesgos",
        "Evaluaciones de impacto en grupos vulnerables"
      ]
    },
    { 
      nombre: "Privacidad de datos", 
      icono: Shield, 
      descripcion: "Respeto irrestricto a la privacidad y protección de datos personales",
      aplicacion: "Establecer medidas técnicas, organizativas y legales para preservar seguridad de datos personales",
      ejemplos: [
        "Anonimización y minimización de datos",
        "Consentimiento informado para recolección",
        "Cifrado de datos sensibles",
        "Cumplimiento de Ley N° 29733"
      ]
    },
    { 
      nombre: "Protección de derechos", 
      icono: Users, 
      descripcion: "Priorizar el bienestar humano y derechos fundamentales",
      aplicacion: "Garantizar respeto y protección de derechos fundamentales en desarrollo, implementación y uso",
      ejemplos: [
        "Evaluaciones de impacto en derechos humanos",
        "Mecanismos de supervisión humana",
        "Protección de grupos vulnerables",
        "Cumplimiento de Constitución y tratados internacionales"
      ]
    },
    { 
      nombre: "Supervisión humana", 
      icono: Eye, 
      descripcion: "Sujetos a supervisión humana para decisiones éticas y justas",
      aplicacion: "Sistemas deben estar sujetos a supervisión humana para asegurar decisiones éticas y justas",
      ejemplos: [
        "Personal capacitado para intervención",
        "Autoridad para detener o invalidar decisiones",
        "Procesos de validación humana",
        "Mecanismos de apelación y revisión"
      ]
    },
    { 
      nombre: "Transparencia", 
      icono: FileText, 
      descripcion: "Sistemas claros, explicables y accesibles",
      aplicacion: "Procesos, algoritmos y decisiones deben ser comprensibles para usuarios, implementadores y autoridades",
      ejemplos: [
        "Documentación técnica accesible",
        "Explicaciones de decisiones en lenguaje natural",
        "Etiquetado de sistemas de IA",
        "Información sobre datos y criterios utilizados"
      ]
    },
    { 
      nombre: "Rendición de cuentas", 
      icono: Award, 
      descripcion: "Responsabilidad por impactos generados por los sistemas de IA",
      aplicacion: "Actores involucrados asumen responsabilidad por acciones y decisiones de sistemas de IA",
      ejemplos: [
        "Mecanismos de identificación de impacto",
        "Procesos de evaluación y respuesta",
        "Reportes periódicos de desempeño",
        "Canales de reclamación y reparación"
      ]
    },
    { 
      nombre: "Sostenibilidad", 
      icono: Globe, 
      descripcion: "Análisis integral de repercusiones humanas, sociales y ambientales",
      aplicacion: "Analizar y evaluar repercusiones humanas, sociales, económicas, culturales y ambientales",
      ejemplos: [
        "Evaluaciones de impacto ambiental",
        "Análisis de consecuencias sociales",
        "Alineación con ODS de Naciones Unidas",
        "Optimización del consumo energético"
      ]
    },
    { 
      nombre: "Desarrollo ético", 
      icono: CheckCircle, 
      descripcion: "Respeto a la dignidad y bienestar colectivo",
      aplicacion: "Promover enfoque ético para garantizar respeto a derechos humanos, dignidad y bienestar colectivo",
      ejemplos: [
        "Comités de ética en desarrollo",
        "Evaluaciones éticas pre-implementación",
        "Códigos de conducta para desarrolladores",
        "Formación en ética de IA"
      ]
    }
  ]
};

export default function ReglamentoPage() {
  const [selectedTitulo, setSelectedTitulo] = useState(0);
  const [selectedArticulo, setSelectedArticulo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("contenido");
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch('/api/reglamento-pdf');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reglamento-ia-peru.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  const filteredContent = () => {
    if (!searchTerm) return decretoCompleto.titulos;
    
    return decretoCompleto.titulos.map(titulo => ({
      ...titulo,
      articulos: titulo.articulos.filter(articulo => 
        articulo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        articulo.contenido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        articulo.numero.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(titulo => titulo.articulos.length > 0);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-200 border-blue-500/30">
                <BookOpen className="w-4 h-4 mr-2" />
                Reglamento Oficial
              </Badge>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-blue-400 text-blue-200 hover:bg-blue-800/20"
                  onClick={handleDownloadPDF}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </Button>
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-200 hover:bg-blue-800/20">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {decretoCompleto.tituloGeneral}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl">
              {decretoCompleto.subtitulo}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">6</div>
                <div className="text-blue-200">Títulos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">36</div>
                <div className="text-blue-200">Artículos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-blue-200">Principios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">90</div>
                <div className="text-blue-200">Días de Vigencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-transparent">
              <TabsTrigger value="contenido" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <FileText className="w-4 h-4 mr-2" />
                Contenido
              </TabsTrigger>
              <TabsTrigger value="principios" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Scale className="w-4 h-4 mr-2" />
                Principios
              </TabsTrigger>
              <TabsTrigger value="busqueda" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Search className="w-4 h-4 mr-2" />
                Búsqueda
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container mx-auto px-4">
        <Tabs value={activeTab} className="w-full">
          {/* Contenido Tab */}
          <TabsContent value="contenido" className="mt-0">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <Card className="sticky top-32">
                  <CardHeader>
                    <CardTitle className="text-lg">Navegación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[500px]">
                      <div className="space-y-2">
                        {decretoCompleto.titulos.map((titulo, index) => (
                          <Button
                            key={index}
                            variant={selectedTitulo === index ? "default" : "ghost"}
                            className="w-full justify-start text-left h-auto p-3"
                            onClick={() => setSelectedTitulo(index)}
                          >
                            <div>
                              <div className="font-semibold text-sm">{titulo.numero}</div>
                              <div className="text-xs opacity-80">{titulo.nombre}</div>
                              <div className="text-xs opacity-60 mt-1">{titulo.articulos.length} artículos</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3">
                <motion.div
                  key={selectedTitulo}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl text-slate-900">
                            {decretoCompleto.titulos[selectedTitulo].numero}
                          </CardTitle>
                          <CardDescription className="text-lg mt-2">
                            {decretoCompleto.titulos[selectedTitulo].nombre}
                          </CardDescription>
                          <p className="text-slate-600 mt-2 text-sm">
                            {decretoCompleto.titulos[selectedTitulo].resumen}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {decretoCompleto.titulos[selectedTitulo].articulos.length} artículos
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {decretoCompleto.titulos[selectedTitulo].articulos.map((articulo, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Card 
                              className={`cursor-pointer transition-all duration-200 ${
                                selectedArticulo === index 
                                  ? 'ring-2 ring-blue-500 bg-blue-50/50' 
                                  : 'hover:shadow-md'
                              }`}
                              onClick={() => setSelectedArticulo(selectedArticulo === index ? null : index)}
                            >
                              <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                      <span className="text-xs font-bold text-blue-600">
                                        {articulo.numero.split(' ')[1]}
                                      </span>
                                    </div>
                                    <div>
                                      <CardTitle className="text-lg">{articulo.titulo}</CardTitle>
                                    </div>
                                  </div>
                                  <ChevronRight 
                                    className={`w-5 h-5 transition-transform ${
                                      selectedArticulo === index ? 'rotate-90' : ''
                                    }`}
                                  />
                                </div>
                              </CardHeader>
                              {selectedArticulo === index && (
                                <CardContent className="pt-0">
                                  <Separator className="mb-4" />
                                  <div className="space-y-4">
                                    <p className="text-slate-600 leading-relaxed">
                                      {articulo.contenido}
                                    </p>
                                    
                                    {articulo.detalles && (
                                      <div>
                                        <h4 className="font-semibold text-slate-900 mb-3">Detalles clave:</h4>
                                        <ul className="space-y-2">
                                          {articulo.detalles.map((detalle, i) => (
                                            <li key={i} className="text-sm text-slate-600 flex items-start">
                                              <CheckCircle className="w-4 h-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                              {detalle}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    
                                    <div className="flex gap-2 mt-4">
                                      <Button variant="outline" size="sm">
                                        <Bookmark className="w-4 h-4 mr-2" />
                                        Guardar
                                      </Button>
                                      <Button variant="outline" size="sm">
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Compartir
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              )}
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </TabsContent>

          {/* Principios Tab */}
          <TabsContent value="principios" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Principios Rectores de la IA en Perú
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Los 12 principios fundamentales que guían el desarrollo, implementación y uso de sistemas de IA en el país
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {decretoCompleto.principios.map((principio, index) => {
                  const IconComponent = principio.icono;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-lg">{principio.nombre}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <p className="text-sm text-slate-600 leading-relaxed text-center">
                              {principio.descripcion}
                            </p>
                            
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Aplicación:</h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {principio.aplicacion}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Ejemplos:</h4>
                              <ul className="space-y-1">
                                {principio.ejemplos.slice(0, 3).map((ejemplo, i) => (
                                  <li key={i} className="text-xs text-slate-600 flex items-start">
                                    <CheckCircle className="w-3 h-3 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                    {ejemplo}
                                  </li>
                                ))}
                              </ul>
                              {principio.ejemplos.length > 3 && (
                                <Button variant="link" className="p-0 h-auto text-xs text-blue-600 mt-2">
                                  Ver todos los ejemplos
                                  <ChevronRight className="w-3 h-3 ml-1" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </TabsContent>

          {/* Búsqueda Tab */}
          <TabsContent value="busqueda" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Búsqueda en el Reglamento</CardTitle>
                  <CardDescription>
                    Busque artículos, términos o conceptos específicos dentro del reglamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-8">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar en el reglamento..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {searchTerm && (
                    <div className="mb-6">
                      <p className="text-sm text-slate-600 mb-4">
                        Se encontraron {filteredContent().reduce((acc, titulo) => acc + titulo.articulos.length, 0)} resultados para "{searchTerm}"
                      </p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-l-4 border-blue-500">
                      <CardHeader>
                        <CardTitle className="text-lg">Búsquedas Populares</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchTerm("Riesgo Alto")}>Riesgo Alto</Badge>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchTerm("Supervisión Humana")}>Supervisión Humana</Badge>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchTerm("Transparencia")}>Transparencia</Badge>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchTerm("Sector Público")}>Sector Público</Badge>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchTerm("Plazos")}>Plazos</Badge>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100" onClick={() => setSearchTerm("Sanciones")}>Sanciones</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-green-500">
                      <CardHeader>
                        <CardTitle className="text-lg">Filtros Avanzados</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <label className="text-sm">Solo artículos con obligaciones</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <label className="text-sm">Sector Público</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <label className="text-sm">Sector Privado</label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" className="rounded" />
                            <label className="text-sm">Sistemas de Alto Riesgo</label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {searchTerm && (
                    <div className="mt-8 space-y-4">
                      {filteredContent().map((titulo, tituloIndex) => (
                        <div key={tituloIndex}>
                          <h3 className="text-lg font-semibold text-slate-900 mb-3">
                            {titulo.numero} - {titulo.nombre}
                          </h3>
                          <div className="space-y-3">
                            {titulo.articulos.map((articulo, articuloIndex) => (
                              <Card key={articuloIndex} className="border-l-4 border-l-amber-400">
                                <CardContent className="py-4">
                                  <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-xs font-bold text-amber-600">
                                        {articulo.numero.split(' ')[1]}
                                      </span>
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-slate-900">{articulo.titulo}</h4>
                                      <p className="text-sm text-slate-600 mt-1">{articulo.contenido}</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}