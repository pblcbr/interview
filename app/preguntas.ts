export type QA = { q: string; a: string };
export type Categoria = { titulo: string; preguntas: QA[] };

// Banco de 30 preguntas frecuentes de entrevista para el puesto de Event Manager
// en Eskisit Catering, con una respuesta modelo en primera persona pensada para
// el perfil real de Josune. Son guías para adaptar, no un guion a memorizar.
export const BANCO: Categoria[] = [
  {
    titulo: "Motivación y encaje",
    preguntas: [
      {
        q: "Cuéntame quién eres y por qué quieres entrar en Eskisit.",
        a: "Soy Josune, llevo más de diez años dedicándome a los eventos: empecé como wedding planner en Sitges Boutique Events, pasé por hotelería de lujo como Bahía del Duque y el Hotel Porta Fira, y ahora llevo eventos corporativos. Lo que siempre me ha enganchado es la parte de producción y la gastronomía, ver cómo un evento cobra vida y emociona a la gente. Quiero entrar en Eskisit porque sois un catering de bodas con una propuesta de alta cocina mediterránea de producto y hacéis destination weddings, justo el tipo de proyecto donde puedo aportar toda mi experiencia coordinando cliente y proveedores. Además conozco bien Sitges y el perfil de cliente de la zona.",
      },
      {
        q: "¿Por qué dar el paso del wedding planning y la hotelería al lado del catering?",
        a: "Porque el catering es el corazón de una boda y es donde más me llena trabajar: el producto, el equipo de cocina y sala, la ejecución en vivo. Como wedding planner ya trabajaba mano a mano con los caterings y presentaba propuestas gastronómicas, así que conozco bien esa relación desde el otro lado. Dar el paso a Eskisit es pasar a controlar directamente la parte que más me apasiona y de la que más orgullosa me siento cuando sale perfecta.",
      },
      {
        q: "¿Qué sabes de Eskisit y qué te atrae de nosotros?",
        a: "Sé que sois un catering familiar de Sitges, fundado en 2012 y con más de 25 años de trayectoria entre las dos generaciones. Trabajáis bodas y destination weddings de 40 hasta 500 invitados, eventos privados y corporativos, y tenéis repostería propia y finca propia, La Concertista. Vuestra cocina combina alta gastronomía con producto local y mediterráneo, muy cuidada visualmente, y tenéis una reputación altísima entre las parejas. Me atrae mucho ese equilibrio entre trato familiar y nivel gastronómico alto.",
      },
      {
        q: "¿Dónde te ves dentro de tres años?",
        a: "Me veo consolidada como Event Manager de referencia dentro de Eskisit, llevando bodas y eventos de principio a fin con autonomía y siendo una persona de confianza para vosotras y para los clientes. Me gustaría también haber aportado mejoras en procesos —coordinación con proveedores, plantillas de presupuesto, protocolos del día del evento— y, si tiene sentido para la empresa, ayudar a hacer crecer la parte de destination weddings, donde creo que puedo aportar mucho por mi experiencia internacional y el inglés.",
      },
      {
        q: "¿Por qué quieres dejar tu trabajo actual y cambiar?",
        a: "Estoy muy agradecida por lo aprendido en mi etapa actual y no me voy por ningún problema, me voy hacia un proyecto que me ilusiona de verdad. Busco volver a lo que más me apasiona —las bodas y la parte gastronómica—, donde el trabajo es más emocional, creativo y con contacto humano directo. Eskisit encaja exactamente con lo que quiero hacer los próximos años, y por eso doy el paso ahora.",
      },
      {
        q: "Ahora trabajas en eventos corporativos. ¿Qué es lo que no te termina de llenar del mundo corporativo?",
        a: "El mundo corporativo me ha aportado mucho —rigor, procesos, gestión de cliente B2B, comunicación—, pero echo en falta la parte emocional y creativa. Un evento corporativo suele ser más frío y estandarizado; una boda es única, tiene alma, y ves la emoción de la gente en directo. Disfruto cuidando cada detalle para que un día irrepetible salga perfecto, y eso lo encuentro mucho más en las bodas y en un catering como el vuestro. No es que el corporativo esté mal, es que mi vocación está en el otro lado.",
      },
      {
        q: "¿Por qué quieres volver al mundo de las bodas después de estar en el corporativo?",
        a: "Porque las bodas son mi verdadera vocación: empecé ahí como wedding planner y es donde más me he sentido yo misma. El paso por hotelería y por el corporativo me ha hecho más completa —venta, cotizaciones, procesos, clientes exigentes—, y ahora quiero volver a la emoción de una boda aportando toda esa experiencia extra. Es dar lo mejor de las dos partes: la sensibilidad de una wedding planner con la solidez de gestión que he ganado por el camino.",
      },
      {
        q: "En tu CV se ven varios cambios de empresa. ¿Cómo sabemos que te quedarás con nosotras?",
        a: "Entiendo la duda. Si miras mi trayectoria, cada cambio ha sido para crecer y sumar experiencia —wedding planning, hotelería de lujo, corporativo—, no por inestabilidad; de hecho llevo años compaginando proyectos de forma continuada. Ahora busco justo lo contrario: asentarme en un proyecto que me ilusione a largo plazo, y Eskisit es exactamente eso. Vengo a quedarme, a crecer con vosotras y a aportar estabilidad y experiencia al equipo.",
      },
    ],
  },
  {
    titulo: "Experiencia y base jurídica",
    preguntas: [
      {
        q: "¿Qué te llevas de tu etapa como wedding planner que te sirva aquí?",
        a: "Me llevo la visión de 360 grados de una boda: sé lo que preocupa a una pareja, cómo cuadrar estilo, presupuesto y logística, y cómo coordinar a todos los proveedores para que el día salga fluido. En Sitges Boutique Events gestionaba las bodas de principio a fin, seleccionaba venues, presentaba propuestas gastronómicas y supervisaba la operativa el día del evento. Esa experiencia me da mucha empatía con el cliente y capacidad de anticipación: veo venir los problemas antes de que ocurran.",
      },
      {
        q: "Tienes formación en Derecho, ¿en qué te ayuda para un puesto de Event Manager?",
        a: "El Derecho me dio rigor, capacidad de leer y negociar contratos y una cabeza muy analítica para los detalles y los riesgos. En eventos eso se traduce en revisar bien los contratos con proveedores y clientes, tener claras las condiciones y las cláusulas de cancelación, cuidar temas de permisos, seguros o protección de datos, y saber negociar con firmeza manteniendo la relación. Es un plus diferencial que no todo el mundo en el sector tiene.",
      },
      {
        q: "Cuéntame el evento o la boda más complejos que hayas coordinado.",
        a: "Una de las más complejas fue una boda internacional en Tenerife, en Bahía del Duque, con invitados de varios países y muchos proveedores coordinándose a la vez. Mi papel era coordinar la operativa y los grupos y supervisar contratos y cotizaciones. Hubo cambios de última hora en el número de invitados y en el timing, y lo saqué adelante manteniendo la calma, priorizando lo esencial y comunicándome constantemente con dirección y proveedores. El resultado fue una boda impecable y unos clientes encantados.",
      },
      {
        q: "Nunca has trabajado desde el lado del catering. ¿Cómo cubres esa falta de experiencia?",
        a: "Es cierto que no he trabajado dentro de un catering, pero sí he trabajado codo con codo con caterings en decenas de bodas, así que sé cómo funcionan y qué necesitan de un Event Manager. Tendré una curva de aprendizaje en la parte más operativa de cocina y de food cost, y la afronto con humildad: las primeras semanas quiero estar en eventos reales, aprender de vuestro equipo y de la cocina, y preguntar mucho. Mi experiencia coordinando y mi capacidad de aprender rápido harán que esa curva sea corta.",
      },
    ],
  },
  {
    titulo: "Operativa, proveedores y timings",
    preguntas: [
      {
        q: "Descríbeme cómo organizarías el timing del día de una boda de 150 invitados.",
        a: "Trabajaría hacia atrás desde la hora del banquete. Fijaría el timing con la pareja y la finca: llegada y montaje del equipo con margen suficiente, prueba de sonido y repaso de sala, recepción con aperitivo y cóctel, entrada al banquete, servicio de los platos coordinado con cocina, momentos clave (discursos, tarta, primer baile) y barra. Dejaría siempre colchones de tiempo entre bloques porque las bodas casi nunca van al minuto, y compartiría el timing por escrito con proveedores y equipo para que todos vayamos a una.",
      },
      {
        q: "¿Cómo coordinas al equipo de cocina y sala el día del evento?",
        a: "La clave es el briefing previo y una sola voz que coordine. Antes del evento repaso con cocina el menú, las alergias, el número de comensales y el timing de salida de cada plato, y con el maître el protocolo de servicio y la disposición de sala. Durante el evento soy el punto de enlace entre cocina, sala, la pareja y el resto de proveedores, resolviendo sobre la marcha y anticipándome. Vengo de supervisar equipos y proveedores el día del evento, así que ese rol de coordinación en vivo es donde me siento cómoda.",
      },
      {
        q: "¿Cómo gestionas a los proveedores externos (floristería, música, alquiler, fotografía)?",
        a: "Los trato como parte de un mismo equipo. Antes del evento confirmo por escrito con cada uno qué hacen, a qué hora llegan, qué necesitan y cómo encajan en el timing, con una checklist y un contacto directo por proveedor. El día del evento me aseguro de que todos tengan el timing y de que haya buena comunicación, porque una boda sale bien cuando todos los proveedores reman juntos. Mi base jurídica también ayuda a que los contratos y las condiciones estén claros desde el principio.",
      },
      {
        q: "¿Qué revisas en la visita técnica a una finca antes de una boda?",
        a: "Reviso todo lo que afecta al catering: accesos y espacio para montar cocina y office, puntos de luz y agua, potencia eléctrica, zonas de sala y plan B de interior por si llueve, ubicación de la barra, timing de montaje y desmontaje, y normativa o límites de la finca (horarios, ruido). Tomo notas y fotos y lo cruzo con las necesidades del menú y del equipo. Como wedding planner hacía justo estas visitas de selección de venues, así que sé qué mirar para que no haya sorpresas el día de la boda.",
      },
      {
        q: "¿Cómo te aseguras de que el montaje esté listo a tiempo?",
        a: "Planificando el montaje con margen y con un responsable claro por tarea. Fijo la hora de llegada del equipo con tiempo suficiente antes del evento, con una checklist de montaje por zonas y un orden lógico (cocina primero, luego sala y detalles). Hago un repaso final con tiempo de reacción por si falta algo, y coordino con la finca y proveedores para que sus montajes no se pisen. Prefiero ir sobrada de tiempo y estar lista antes que ir justa.",
      },
      {
        q: "Llevas varias bodas la misma semana. ¿Cómo te organizas para que ninguna se resienta?",
        a: "Con organización y priorización, que es una de mis fortalezas: en mi trabajo actual llevo varios proyectos y eventos en paralelo constantemente. Trabajo con un calendario y checklists por evento, tengo cada boda documentada (timing, menú, proveedores, contactos) para que nada dependa solo de mi memoria, y anticipo la semana identificando los momentos críticos de cada una. Si dos se solapan el mismo día, me aseguro de que haya un responsable claro en cada una y de dejar todo cerrado por adelantado.",
      },
    ],
  },
  {
    titulo: "Presupuestos y food cost",
    preguntas: [
      {
        q: "¿Sabes qué es el food cost y por qué es importante para un catering?",
        a: "Sí. El food cost es lo que cuesta la materia prima de cada plato respecto a lo que se cobra por él; es clave porque determina el margen del catering. En bodas, controlar el food cost —junto con el coste de personal y de logística— es lo que hace que un evento sea rentable sin bajar la calidad. Me interesa mucho aprender vuestros números concretos, pero entiendo bien el concepto por mi etapa haciendo cotizaciones y propuestas comerciales en hotelería.",
      },
      {
        q: "¿Cómo elaboras un presupuesto para una boda?",
        a: "Parto de lo que quiere la pareja (número de invitados, estilo, tipo de menú, formato) y construyo el presupuesto por partidas: menú y bebidas por cubierto, personal, alquiler de material si aplica, logística y extras. Aplico el margen que marque la empresa y presento un documento claro y desglosado, con opciones para que la pareja pueda ajustar sin perder calidad. En hotelería elaboraba propuestas comerciales y cotizaciones a diario, así que esta parte la tengo muy trabajada.",
      },
      {
        q: "Un cliente quiere bajar el precio por cubierto. ¿Cómo lo manejas?",
        a: "Primero entiendo su presupuesto real y qué es lo importante para ellos. En vez de bajar el precio sin más —que casi siempre significa bajar calidad—, busco ajustar: quizá un menú algo más sencillo, revisar el número de aperitivos o el formato de la barra, manteniendo lo que de verdad les emociona. Explico el valor de lo que ofrecemos (producto, equipo, ejecución) para que vean qué están pagando. El objetivo es cerrar la boda con un cliente contento y sin comprometer el margen ni la calidad de Eskisit.",
      },
      {
        q: "¿Cómo controlas que un evento no se salga del presupuesto o del margen?",
        a: "Cerrando bien el alcance desde el principio y dejando por escrito qué incluye y qué no, para evitar extras no previstos. Durante la preparación controlo las partidas frente al presupuesto aprobado y valido cualquier cambio del cliente actualizando el precio. El día del evento vigilo el consumo real (raciones, bebida, horas de personal) frente a lo previsto. Mi cabeza analítica del Derecho me ayuda mucho a llevar este control con rigor.",
      },
    ],
  },
  {
    titulo: "Imprevistos y crisis",
    preguntas: [
      {
        q: "Es una boda al aire libre y empieza a llover. ¿Qué haces?",
        a: "Activo el plan B, que tiene que estar previsto desde antes: en la visita técnica y en la planificación siempre dejo definido un espacio de interior o carpa y el punto de decisión (a qué hora y quién decide mover el evento dentro). Si empieza a llover, mantengo la calma, hablo con la finca y el equipo, y ejecuto el cambio con la mayor discreción posible para que la pareja lo viva lo mejor posible. Lo importante es haberlo anticipado: una buena Event Manager no improvisa la lluvia, la tiene contemplada.",
      },
      {
        q: "Un invitado tiene una alergia grave que no se había comunicado. ¿Cómo actúas?",
        a: "La seguridad del invitado es lo primero. Aviso de inmediato a cocina para verificar qué puede comer sin riesgo y preparar una alternativa segura, evitando la contaminación cruzada. Si la alergia es grave, me aseguro de saber si lleva medicación y tengo localizado el protocolo de emergencia y cómo avisar a los servicios médicos. Y de cara al futuro, refuerzo que en la hoja de la boda siempre se recojan las alergias e intolerancias por escrito para que esto no vuelva a pasar por sorpresa.",
      },
      {
        q: "Un proveedor clave falla el mismo día del evento. ¿Qué haces?",
        a: "Actúo rápido y con red. Lo primero, valorar el impacto real y buscar solución: tirar de mi agenda de proveedores de confianza para cubrir el hueco, o reorganizar internamente lo posible. Mantengo informado a quien deba estarlo sin alarmar a la pareja, y me centro en que el invitado no note el problema. Tener buena relación con una red de proveedores y contratos claros —con sus responsabilidades— es justo lo que evita o resuelve estas situaciones, y ahí mi experiencia y mi parte jurídica ayudan mucho.",
      },
      {
        q: "Llegan 30 invitados más de los confirmados. ¿Cómo lo resuelves?",
        a: "Lo primero es confirmar el dato cuanto antes y hablar con cocina y sala para ver hasta dónde podemos absorber: raciones disponibles, espacio y personal. Busco la solución que menos afecte a la experiencia —ampliar raciones, ajustar la disposición de mesas, reforzar servicio— y traslado a la pareja con transparencia cualquier implicación, incluida la económica, porque son cubiertos extra. La clave es reaccionar con calma y coordinación; en grupos y bodas ya he vivido cambios de números de última hora.",
      },
      {
        q: "La novia está muy nerviosa y algo se ha torcido. ¿Cómo la gestionas?",
        a: "Con cercanía y seguridad. En esos momentos la pareja necesita sentir que hay alguien al mando que lo tiene todo controlado, así que le transmito calma, la escucho, le quito de encima los problemas operativos y le devuelvo el foco a disfrutar de su día. Resuelvo lo que se haya torcido entre bastidores sin que ella tenga que gestionarlo. Ser el paraguas de la pareja el día de la boda es parte esencial del trabajo, y se me da bien por mi trato y mi sangre fría.",
      },
    ],
  },
  {
    titulo: "Cliente y venta",
    preguntas: [
      {
        q: "¿Cómo llevarías una degustación con una pareja?",
        a: "La preparo como un momento especial, no como un trámite. Antes reviso sus gustos, su estilo de boda y cualquier restricción, y coordino con cocina una propuesta pensada para ellos. Durante la degustación les explico cada plato, el producto y el porqué, escucho sus reacciones y tomo nota de los ajustes. Es también un momento de venta y de generar confianza: que salgan de ahí enamorados de la cocina de Eskisit y seguros de haber elegido bien.",
      },
      {
        q: "¿Cómo presentas y cierras un presupuesto?",
        a: "Presento el presupuesto de forma clara y visual, ligándolo a lo que la pareja nos ha contado que quiere, para que vean que es una propuesta a su medida y no una tarifa genérica. Explico el valor de cada partida, resuelvo dudas y les doy opciones. Para cerrar, acompaño sin presionar: marco los siguientes pasos, la disponibilidad de fecha y las condiciones de reserva. En hotelería mi trabajo era justo elaborar propuestas y hacer el seguimiento comercial hasta el cierre, así que me siento cómoda vendiendo.",
      },
      {
        q: "Una pareja duda entre nosotros y otro catering más barato. ¿Cómo los convences?",
        a: "No entro en guerra de precios, entro en valor. Les ayudo a comparar lo que de verdad importa: calidad y origen del producto, el equipo, la experiencia el día del evento, la personalización y la tranquilidad de trabajar con un catering con la reputación de Eskisit. Muchas veces lo barato sale caro en una boda, que es un día irrepetible. Les transmito el trato cercano y familiar que nos diferencia y, con una degustación redonda, la balanza suele inclinarse hacia nosotros.",
      },
      {
        q: "¿Cómo gestionas a un cliente muy exigente o difícil?",
        a: "Un cliente exigente me parece una oportunidad, no un problema: quiere que su día salga perfecto, igual que yo. Lo gestiono con escucha, comunicación constante y expectativas claras: acuerdo qué es viable y qué no desde el principio y lo dejo por escrito para evitar malentendidos. Mantengo la calma y la profesionalidad aunque la situación se tense, y cumplo lo que prometo. Vengo de fidelizar clientes corporativos exigentes, y he aprendido que la clave es que sientan que estás de su lado.",
      },
    ],
  },
  {
    titulo: "Destination weddings e internacional",
    preguntas: [
      {
        q: "Hacemos muchas destination weddings. ¿Cómo gestionas una boda con clientes internacionales?",
        a: "Con anticipación y una comunicación muy cuidada. Con clientes internacionales trabajo en inglés, me adapto a la diferencia horaria para las reuniones y presto atención a particularidades culturales y gastronómicas. Coordino más por adelantado porque suelen estar fuera hasta poco antes, y les doy mucha información y seguridad para compensar la distancia. Ya he trabajado con clientes internacionales en Bahía del Duque y en ferias, así que este perfil de boda me resulta natural y me motiva especialmente.",
      },
      {
        q: "¿Cómo te desenvuelves en inglés en el trabajo?",
        a: "Tengo un nivel profesional de inglés y lo he usado con clientes y proveedores internacionales, tanto en hotelería como en eventos corporativos. Me desenvuelvo con soltura en reuniones, en la presentación de propuestas y en la coordinación durante el evento. Para una empresa que hace destination weddings creo que es un valor importante que aporto.",
      },
    ],
  },
  {
    titulo: "Fortalezas, debilidades y equipo",
    preguntas: [
      {
        q: "¿Cuáles son tus puntos fuertes y débiles, y cómo encajarías en un equipo familiar como el nuestro?",
        a: "Mis fortalezas son la organización, la orientación al detalle, la capacidad de llevar varios proyectos a la vez y el trato con el cliente; me mantengo tranquila bajo presión y coordino bien a equipos y proveedores. Como debilidad, tiendo a ser muy perfeccionista y a querer controlarlo todo, algo que trabajo delegando y confiando en el equipo. Y precisamente por eso me atrae Eskisit: sois un equipo familiar, y yo funciono muy bien en entornos cercanos donde se cuida el detalle y se rema junto. Me haría mucha ilusión aportar mi experiencia y crecer con vosotras.",
      },
    ],
  },
];

export const BANCO_TOTAL = BANCO.reduce((n, c) => n + c.preguntas.length, 0);
