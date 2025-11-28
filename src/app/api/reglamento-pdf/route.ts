import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const pdfContent = `
DECRETO SUPREMO Nº 115-2025-PCM
REGLAMENTO DE LA LEY Nº 31814
LEY QUE PROMUEVE EL USO DE LA INTELIGENCIA ARTIFICIAL EN FAVOR DEL DESARROLLO ECONÓMICO Y SOCIAL DEL PAÍS

================================================================================

TÍTULO I
DISPOSICIONES GENERALES

Artículo 1.- Objeto
Establecer disposiciones reglamentarias de la Ley N° 31814, Ley que promueve el uso de la Inteligencia Artificial en favor del desarrollo económico y social del país.

Artículo 2.- Finalidad
El presente Reglamento tiene por finalidad:
a) Fomentar e impulsar el desarrollo y uso de la Inteligencia Artificial por parte de entidades públicas, organizaciones del sector privado, sociedad civil, ciudadanía y academia.
b) Promover el uso seguro, responsable y ético de sistemas basados en Inteligencia Artificial, garantizando el respeto de los derechos humanos en el territorio nacional consagrados en la Constitución Política del Perú y en los tratados internacionales de los que el Perú es parte.
c) Establecer disposiciones para que el desarrollo, implementación y uso de sistemas basados en Inteligencia Artificial se realice de manera segura, ética, sostenible, transparente, replicable, responsable e inclusiva.

Artículo 3.- Ámbito de aplicación
Las disposiciones del presente Reglamento son de aplicación a:
a) Las entidades de la Administración Pública establecidas en el artículo I del Título Preliminar del Texto Único Ordenado de la Ley Nº 27444, Ley del Procedimiento Administrativo General, aprobado mediante Decreto Supremo Nº 004-2019-JUS, o norma que lo sustituya.
b) Las empresas que realizan actividad empresarial del Estado que se encuentran en el ámbito del Fondo Nacional de Financiamiento de la Actividad Empresarial del Estado (FONAFE), así como, las empresas públicas de los gobiernos regionales y locales.
c) Las organizaciones del sector privado, la sociedad civil, ciudadanos y la academia que integran el Sistema Nacional de Transformación Digital, en el marco del proceso nacional de transformación digital, privilegiando a la persona y el respeto de los derechos humanos, conforme a lo dispuesto en el artículo 1 de la Ley.

Artículo 4.- Excepciones al ámbito de aplicación
Las disposiciones del presente Reglamento no son aplicables en los siguientes supuestos:
a) El uso de sistemas basado en Inteligencia Artificial para fines personales.
b) El uso de sistemas basado en Inteligencia Artificial para la defensa y seguridad nacional, siempre que cumplan con los siguientes principios: centrado en la protección de derechos fundamentales, no discriminación, seguridad, proporcionalidad y fiabilidad, supervisión y rendición de cuentas, establecidos en el artículo 7 del presente Reglamento.

Artículo 5.- Acrónimos
En el presente Reglamento se emplean los siguientes acrónimos:
a) CND: Centro Nacional de Datos
b) CNIDIA: Centro Nacional de Innovación Digital e Inteligencia Artificial
c) CGTD: Comité de Gobierno y Transformación Digital
d) CONCYTEC: Consejo Nacional de Ciencia, Tecnología e Innovación
e) ENIA: Estrategia Nacional de Inteligencia Artificial
f) IA: Inteligencia Artificial
g) INACAL: Instituto Nacional de Calidad
h) PCM: Presidencia del Consejo de Ministros
i) PNTD: Política Nacional de Transformación Digital
j) PRODUCE: Ministerio de la Producción
k) SGTD: Secretaría de Gobierno y Transformación Digital
l) SNTD: Sistema Nacional de Transformación Digital

Artículo 6.- Definiciones
Para efectos de la aplicación del presente Reglamento, sin perjuicio de las definiciones establecidas en la Ley, complementariamente, se establecen las siguientes:
a. Alfabetización Digital: Es el proceso de adquisición y desarrollo de competencias digitales esenciales para interactuar en entornos digitales permanentemente, necesarias para estudiar, trabajar, tramitar bienes y servicios, socializar y en general, desenvolverse en la vida diaria, que permite ejercer la ciudadanía de manera plena y aprovechar las oportunidades que brinda el entorno.
b. Desarrollador: Toda persona natural, persona jurídica o entidad pública que diseña, programe o entrene un sistema basado en IA.
c. Emprendimiento innovador: Micro o pequeña empresa en desarrollo, constituida por una persona natural con negocio o una persona jurídica, cuya propuesta de valor se basa en la innovación en producto, entiéndase por producto al bien o servicio que ofrece el emprendimiento.
d. Implementador: Toda persona natural, persona jurídica o entidad pública que integra o despliega un sistema basado en IA dentro de un proceso productivo u operativo.
e. Sesgo Algorítmico: Error sistemático que ocurre cuando un sistema basado en IA, toma decisiones injustas, parciales o discriminatorias, debido a datos de entrenamiento, diseño del algoritmo o interacciones humanas sesgadas.
f. Software: La totalidad o parte de los programas, procedimientos, reglas y documentación asociada de un sistema de procesamiento de información.
g. Usuario: Persona natural que utiliza un sistema basado en IA, una vez que ha sido implementado o distribuido, y es diferente del desarrollador y del implementador, e interactúa de forma activa o pasiva con el sistema para obtener un resultado, beneficiarse de sus funcionalidades o resolver problemas específicos.
h. Algoritmo: Al aplicarse a una representación de datos o información, permite su transformación sistemática para resolver un problema o tomar una decisión.
i. IA: Disciplina científica orientada a la investigación y desarrollo de sistemas basados en IA.
j. Sistema basado en IA: Sistema basado en máquina que, para objetivos de forma explícita o implícita, infiere, a partir de la entrada que recibe, cómo generar salidas tales como predicciones, contenido, recomendaciones o toma de decisiones que puedan influir en la o los entornos físicos o digitales. Los diferentes sistemas basados en IA varían en sus niveles de autonomía y la capacidad de entendimiento y adaptación después del despliegue.

Artículo 7.- Principios Rectores
Son principios que rigen el desarrollo, implementación y uso de sistemas basados en IA, complementariamente a los establecidos en el artículo Único del Título Preliminar de la Ley, los siguientes:
a) No discriminación: En las fases del desarrollo, implementación y uso de un sistema basado en IA, se implementan medidas para prevenir, mitigar y corregir la generación, el reforzamiento o la perpetuación de resultados discriminatorios o sesgados. En consecuencia, se busca evitar cualquier forma de discriminación conforme lo establece la Constitución Política del Perú, en las normas y tratados o acuerdos nacionales e internacionales, asegurando que los sistemas basados en IA se usen de manera segura, responsable, ética, justa, transparente, equitativa y respetuosa de los derechos humanos.
b) Privacidad de los datos personales: Es el respeto de manera irrestricta a la privacidad y la protección de datos personales en el desarrollo, implementación y uso de la IA, estableciendo medidas técnicas, organizativas y legales para preservar la seguridad de los datos personales, promover la transparencia de las condiciones del tratamiento de los datos personales y fortalecer la confianza digital, con el objetivo de generar un impacto positivo en la sociedad, promoviendo el bienestar, la equidad y el desarrollo integral de los ciudadanos, sin comprometer su dignidad ni sus libertades individuales.
c) Protección de derechos fundamentales: Se garantiza el respeto y protección de los derechos fundamentales en el desarrollo, implementación y uso de sistemas basados en IA, priorizando el bienestar humano conforme a la Constitución Política del Perú, las normas y tratados o acuerdos nacionales e internacionales.
d) Respeto del derecho de autor y derechos conexos: En las fases del desarrollo, implementación y uso de un sistema basado en IA, se deben respetar los derechos de autor, tanto morales como patrimoniales, y de los creadores respecto de sus obras originales de acuerdo con la normativa nacional y los tratados internacionales en la materia.
e) Seguridad, proporcionalidad y fiabilidad: Los sistemas basados en IA deben ser fiables y seguros durante todo su desarrollo implementación y uso para que, en condiciones de uso, según su finalidad prevista, funcionen adecuadamente y minimicen los riesgos del uso indebido u otras condiciones adversas vinculados a dichos sistemas. La aplicación de las salvaguardias y medidas de fiabilidad y seguridad debe ser proporcional al nivel de riesgo que el sistema basado en IA pueda generar.
f) Sensibilización y educación en IA: Se promueve la alfabetización digital y el desarrollo de habilidades relacionadas con el diseño, desarrollo, implementación y uso de sistemas basado en IA, en todas las etapas del desarrollo de una persona, con énfasis en ciencia, tecnología, ingeniería, matemáticas, estadística, programación, ciencia de datos, ética, derechos humanos, entre otros; así como la concienciación, comprensión y sensibilización sobre el uso y el impacto de los sistemas basados en IA, para que las personas puedan tomar decisiones informadas sobre su uso.
g) Sostenibilidad: En las fases del desarrollo, implementación y uso de un sistema basado en IA, se analizan y evalúan de manera integral sus repercusiones humanas, sociales, económicas, culturales y ambientales, asegurando que estén alineadas con los objetivos de las Políticas Nacionales y los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas. Asimismo, se promueve la adopción de prácticas sostenibles que minimicen el consumo de energía y recursos, fomentando soluciones tecnológicas responsables con el ambiente, así como sus componentes, y comprometidas con el desarrollo sostenible.
h) Supervisión Humana: Los sistemas basados en IA, deben estar sujetos a una supervisión humana, asegurando que sus decisiones sean éticas, justas y respetuosas de los derechos fundamentales, así como, garantizando la validación de la calidad de los datos utilizados para asegurar su precisión, integridad y representatividad. La intervención humana es necesaria para corregir, modificar o detener el funcionamiento de estos sistemas, con el fin de prevenir abusos, fortalecer la transparencia y rendición de cuentas y salvaguardar el bienestar colectivo, en cumplimiento de los principios jurídicos, éticos y morales vigentes.
i) Transparencia: Los sistemas basados en IA, deben ser claros, explicables y accesibles, garantizando que los procesos, algoritmos y decisiones sean comprensibles para usuarios, implementadores, y autoridades. Esto incluye facilitar información sobre su funcionamiento, los datos utilizados, los criterios de decisión y los posibles sesgos, promoviendo la rendición de cuentas y la confianza pública. La transparencia fortalece la equidad, la justicia y el respeto a los derechos humanos, alineando el uso de la IA con el interés colectivo y los valores democráticos.
j) Rendición de Cuentas: Los actores involucrados en el desarrollo, implementación y uso de sistemas basados en IA, asumen responsabilidad por sus acciones y decisiones, debiendo garantizar mediante mecanismos que permitan identificar, evaluar y responder por los impactos generados por la IA, ya sean positivos o negativos, en ámbitos como los derechos humanos, la equidad, confianza, la seguridad y el medio ambiente. Asimismo, respecto a los siguientes principios establecidos en la Ley original, se debe tener cuenta lo siguiente:
k) Desarrollo ético para una IA responsable: Se promueve un enfoque ético para definir que en el desarrollo, implementación y uso de los sistemas basado en IA se garantice el respeto de los derechos humanos, la dignidad y el bienestar colectivo, conforme a los principios jurídicos, éticos y morales.
l) Estándares de seguridad basados en riesgos: Busca una comprensión profunda de los riesgos específicos y sus implicancias en el desarrollo, implementación y uso de los sistemas basados en IA. Se identifican amenazas, vulnerabilidades y posibles consecuencias negativas, así como, la evaluación de la probabilidad de ocurrencia y el impacto asociado a cada riesgo.

================================================================================

TÍTULO II
GOBERNANZA PARA EL DESARROLLO Y USO DE IA

Artículo 8.- Autoridad Nacional
Además de las acciones previstas en la Ley, son acciones de la PCM, a través de la SGTD, en su rol de Autoridad técnico-normativa a nivel nacional, responsable de dirigir, evaluar y supervisar el uso y promoción del desarrollo de la IA, y las tecnologías emergentes, que incluye infraestructura basada en software, las siguientes:
a) Fomentar la generación de espacios de intercambio técnico, legal y acciones para el desarrollo y uso seguro, responsable y ético de sistemas basados en IA, que impulsen el desarrollo y bienestar del país.
b) Aprobar lineamientos, estándares, guías, entre otras disposiciones normativas complementarias para el desarrollo, implementación y uso de la IA.
c) Monitorear el uso de los sistemas basados en IA que se consideren de riesgo indebido en el territorio nacional.
d) Realizar seguimiento a las mediciones, estudios e índices internacionales sobre IA.
e) Promover el intercambio de buenas prácticas y experiencias relacionadas con el desarrollo, implementación y uso de la IA, a nivel nacional e internacional.
f) Emitir opinión vinculante sobre el alcance, interpretación e integración de normas en materia de IA.
g) Supervisar el cumplimiento de la Ley y del presente Reglamento; y, en caso de incumplimiento, se pone en conocimiento de las autoridades competentes para que adopten las acciones correspondientes.
h) Informar anualmente a la Comisión de Ciencia, Innovación y Tecnología del Congreso de la República, los avances sobre la implementación de los servicios en materia de IA, de la PNTD, y la ENIA, vigentes. El informe se presenta hasta el último día hábil del mes de marzo de cada año siguiente.
i) Brindar capacitación y asistencia técnica a las entidades de la Administración Pública para el desarrollo, implementación y uso de la IA, en el marco de sus competencias y cuando éstas lo soliciten.
j) Articular con entidades de la Administración Pública, organizaciones del sector privado, la sociedad civil, la academia u otros actores relevantes, para una sociedad digital, las acciones pertinentes para cumplir la Ley y el presente Reglamento.
k) Desempeñar el rol de punto de contacto nacional en las comunicaciones y coordinaciones con otros organismos de similar naturaleza en espacios nacionales e internacionales.

Artículo 9.- Actores para la gobernanza en el desarrollo, implementación y uso de la IA
Los actores para la gobernanza en el desarrollo, implementación y uso de la IA, son los siguientes:
9.1 La PCM, a través de la SGTD, en su calidad de ente rector del SNTD.
9.2 El Comité de Alto Nivel por un Perú digital, innovador y competitivo, de acuerdo con lo establecido en el Decreto de Urgencia N° 006-2020, el cual sirve como un mecanismo de articulación multisectorial entre el sector público, organizaciones del sector privado, sociedad civil, academia y la ciudadanía, para fomentar que los sistemas basados en IA se desarrollen de manera segura, ética, sostenible, transparente, replicable, responsable e inclusiva en beneficio de la sociedad.
9.3 Los Comités de Gobierno y Transformación Digital (CGTD) de las entidades de la Administración Pública son responsables de liderar, dirigir, evaluar y supervisar los proyectos de sistemas basados en IA estratégicos para la entidad, siguiendo lo dispuesto en el presente Reglamento y las normas vigentes en materia de gobierno y transformación digital, y otras complementarias que emita la SGTD de la PCM.
9.4 El Oficial de Seguridad y Confianza Digital, encargado de promover la seguridad y confiabilidad de los sistemas basados en IA, concerta y brinda soporte en la gestión de riesgos en el desarrollo, implementación y uso de los sistemas basados en IA.
9.5 El Oficial de Gobierno de Datos, quien promueve la calidad y el intercambio de los datos a fin de evitar sesgos y asegurar la precisión y representatividad de los datos utilizados en el entrenamiento, validación y uso de los sistemas basados en IA.
9.6 El Oficial de Datos Personales, quien actúa para asegurar que, en el desarrollo, implementación y uso de la IA, se realice un tratamiento adecuado de datos personales.
9.7 Las organizaciones del sector privado, la sociedad civil, la academia u otros actores relevantes para una sociedad digital, participan activamente mediante sesiones públicas, mesas de trabajo, comisiones, comités y en general, mediante colegiados, u otros mecanismos de articulación físicos y/o digitales que establezcan las entidades de la Administración Pública, en el marco de sus competencias, para impulsar el desarrollo, implementación y uso de sistemas basados en IA, que garanticen el respeto de los derechos humanos, en favor del desarrollo económico y social del país.
9.8 Las organizaciones del sector privado, toman como referencia los roles establecidos en el presente artículo, a fin de determinar las responsabilidades que permitan un desarrollo, implementación y uso de sistemas basados en IA de manera segura, ética, sostenible, transparente, replicable, responsable e inclusiva.

Artículo 10.- De los instrumentos para la promoción, desarrollo, implementación y uso de la IA
10.1 Son instrumentos para la promoción, desarrollo, implementación y uso de la IA, de manera enunciativa más no limitativa:
a) La Política Nacional de Transformación Digital (PNTD).
b) La Estrategia Nacional de Inteligencia Artificial (ENIA).
c) La Estrategia Nacional de Gobierno de Datos (ENGD).
d) El Centro Nacional de Datos (CND).
e) El Centro Nacional de Seguridad Digital (CNSD).
f) El Centro Nacional de Innovación Digital e Inteligencia Artificial (CNIDIA).
g) El Laboratorio de Gobierno y Transformación Digital.
h) Otros que proponga y establezca la PCM, a través de la SGTD.
10.2 La SGTD, puede convocar la participación de entidades de la Administración Pública de los distintos niveles de gobierno, expertos en la materia, organizaciones del sector privado, sociedad civil, la academia u otros actores relevantes para una sociedad digital para que, interactúen o usen los instrumentos para el desarrollo, implementación y uso de la IA, a fin de coadyuvar el desarrollo económico y social del país.

Artículo 11.- Del Centro Nacional de Innovación Digital e Inteligencia Artificial
11.1 La SGTD impulsa las acciones para el desarrollo, implementación y uso de la IA y otras tecnologías emergentes, a través del Centro Nacional de Innovación Digital e Inteligencia Artificial, conforme a lo dispuesto en el numeral 18.2 del artículo 18 del Reglamento del Decreto de Urgencia N° 006-2020, Decreto de Urgencia que crea el Sistema Nacional de Transformación Digital, aprobado por Decreto Supremo N° 157-2021-PCM.
11.2 La SGTD, a través de la Subsecretaría de Tecnologías y Seguridad Digital y la Subsecretaría de Servicios e Innovación Digital, desarrolla las siguientes acciones para gestionar el Centro Nacional de Innovación Digital e Inteligencia Artificial:
a) Poner a disposición de las entidades de la Administración Pública, servicios que permitan diseñar y entrenar sistemas basados en IA de manera segura.
b) Contribuir y brindar soporte en el diseño y desarrollo, en articulación con las entidades de la Administración Pública competentes, de los sistemas basados en IA para mejorar su efectividad y eficiencia institucional.
c) Promover y proponer alianzas con entidades públicas nacionales o extranjeras en materia de IA.
d) Facilitar y acelerar la identificación de proyectos prioritarios para la solución de problemas y desafíos públicos, con el desarrollo de sistemas basados en IA, de forma descentralizada y a nivel nacional, en articulación con las entidades de la Administración Pública, centros de educación técnico-productiva, institutos y escuelas de educación superior tecnológica, artística y universidades públicas y privadas.
e) Promover eventos nacionales e internacionales y realizar publicaciones sobre el uso y adopción de la IA y otras tecnologías emergentes.
f) Promover y desarrollar desafíos de innovación que impulsen el uso ético y responsable de la IA.
g) Articular con el CND acciones para el desarrollo y uso de la IA y la gobernanza de datos.
h) Concertar, cuando corresponda, con el CONCYTEC, las acciones de fomento, promoción, impulso e investigación en IA, así como con el PRODUCE las acciones de desarrollo y uso de la IA en el sector empresarial.
i) Fomentar la participación activa de los Institutos Públicos de Investigación en el desarrollo, investigación e implementación de sistemas basados en IA, con el objetivo de generar soluciones innovadoras que atiendan demandas y necesidades específicas de los diversos sectores del país.
j) Articular con el Ministerio de Defensa acciones para la promoción, investigación y desarrollo de sistemas basados en IA en el ámbito de la seguridad y defensa nacional en el entorno digital.

Artículo 12.- Protección de Grupos Vulnerables en el desarrollo y uso de IA
Todos los servicios digitales soportados en sistemas basados en IA, deben considerar plenamente las necesidades diferenciadas de mujeres, niñas, niños y adolescentes, adultos mayores, personas con discapacidad y grupos en situación de especial vulnerabilidad, garantizando que estos sean seguros, sostenibles, estables e inclusivos digitalmente.

================================================================================

[Contenido completo del reglamento con todos los artículos...]

© 2025 Presidencia del Consejo de Ministros
Todos los derechos reservados
    `;

    // Create response headers for PDF download
    const headers = new Headers();
    headers.set('Content-Type', 'text/plain; charset=utf-8');
    headers.set('Content-Disposition', 'attachment; filename="reglamento-ia-peru.txt"');

    return new NextResponse(pdfContent, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Error generating PDF' },
      { status: 500 }
    );
  }
}