export const EMAIL = 'info@thehomebodygreyhound.com'
export const BRAND = 'The Homebody Greyhound'

export const content = {
  es: {
    nav: {
      links: [
        { href: '/#aplicaciones', label: 'Aplicaciones' },
        { href: '/#servicios', label: 'El estudio' },
        { href: '/#proceso', label: 'Cómo trabajo' },
        { href: '/#contacto', label: 'Contacto' },
      ],
      cta: 'Hablemos',
      langLabel: 'EN',
      langAria: 'Switch to English',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      tag: 'Estudio independiente de apps',
      titleLead: 'Apps sencillas, hechas con calma ',
      titleAccent: '(y un poco de IAyuda).',
      sub: 'Un estudio pequeño que diseña y desarrolla aplicaciones. Sin promesas grandilocuentes, sin métricas vacías. Solo software cuidado, terminado y agradable de usar.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Cómo trabajo',
      scroll: 'Desplázate',
    },
    showcase: {
      tag: 'Aplicaciones',
      title: 'Lo que hemos hecho.',
      sub: 'Apps cuidadas, pocas pero terminadas. Cada una vive en su propia página.',
      apps: [
        {
          name: 'Oficio',
          tagline: 'Tu agenda personal, montada a tu medida.',
          badge: 'Próximamente',
          href: '/oficio/',
          cta: 'Conocer Oficio',
        },
        {
          name: 'Woodshed',
          tagline: 'El cuarto de estudio del músico clásico.',
          badge: 'Android',
          href: '/woodshed/',
          cta: 'Conocer Woodshed',
        },
      ],
    },
    capabilities: {
      tag: 'El estudio',
      title: 'Hacer pocas cosas, y hacerlas bien.',
      sub: 'Sin equipo de marketing detrás de esta página, sin fórmulas mágicas. Si una app no aporta valor, no se lanza.',
      perf: {
        title: 'Software terminado',
        body: 'Nada de versiones a medias: pocas funciones, todas acabadas.',
      },
      stack: {
        title: 'Herramientas sólidas',
        body: 'Tecnología fiable y probada, elegida por solidez y no por moda.',
      },
      security: {
        title: 'Privacidad de verdad',
        body: 'Sin cuentas, sin analítica, sin publicidad. Tus datos viven en tu dispositivo.',
      },
      design: {
        title: 'Pocas cosas',
        body: 'Cada app hace una cosa y la hace bien. Nada de funciones de relleno.',
      },
      architecture: {
        title: 'Con tu propia IA',
        body: 'En Oficio puedes conectar tu propio agente por API para que te eche una mano.',
      },
      support: {
        title: 'Explicado con claridad',
        body: 'Manuales honestos y directos: lo que cuesta, lo que hace, sin letra pequeña.',
      },
    },
    process: {
      tag: 'Cómo trabajo',
      title: 'Tranquilo en casa, rápido cuando hace falta.',
      sub: 'Así es como nace cada app del estudio.',
      steps: [
        {
          num: '01',
          name: 'Con calma',
          body: 'Sin prisa innecesaria, pero sin perder el tiempo. Solo empiezo lo que de verdad aporta valor.',
        },
        {
          num: '02',
          name: 'Con cuidado',
          body: 'Cada app se construye despacio y bien: pocas funciones, todas terminadas.',
        },
        {
          num: '03',
          name: 'Con claridad',
          body: 'Y se explica de forma honesta: manuales directos, sin letra pequeña.',
        },
      ],
    },
    convictions: {
      tag: 'Principios',
      title: 'En lo que creo.',
      items: [
        { big: 'Un galgo casero.', line: 'Tranquilo en casa, rápido cuando hace falta.' },
        { big: 'Pocas cosas, bien hechas.', line: 'Si una app no aporta valor, no se lanza.' },
        { big: 'Sin humo.', line: 'Ni métricas vacías, ni promesas grandilocuentes.' },
      ],
    },
    contact: {
      tag: 'Contacto',
      title: 'Hablemos.',
      sub: 'La forma más directa es un correo. Respondo personalmente — y si lo que hago no encaja con lo que necesitas, no pasa nada.',
      cta: 'Escríbeme',
      mailSubject: 'Hola — The Homebody Greyhound',
    },
    oficio: {
      crumbHome: 'Inicio',
      crumbSelf: 'Oficio',
      badge: 'Próximamente',
      eyebrow: 'Aplicación',
      title: 'Oficio',
      tagline: 'Tu agenda personal, montada a tu medida.',
      intro:
        'Lo que necesites tener a mano —calendario, noticias, tiempo, diario, despensa, recetas, plan semanal, cultura— donde tú quieras verlo. Un panel que se monta a tu ritmo y vive en tu dispositivo.',
      featuresTag: 'Qué hace especial a Oficio',
      featuresTitle: 'Sencilla, modular y tuya.',
      features: [
        {
          title: 'Modular',
          body: 'Tú decides qué módulos activar y cómo ordenarlos. Tu panel, tu ritmo.',
        },
        {
          title: 'Privada de verdad',
          body: 'Tus datos viven en tu dispositivo y en los servicios que tú enlazas. No pasan por nuestros servidores.',
        },
        {
          title: 'Con tu IA, si quieres',
          body: 'Conecta tu propio agente por API para que te resuma el día o te eche una mano. Soporte experimental para IA local en preparación.',
        },
      ],
      modulesTag: 'Módulos',
      modulesTitle: 'Lo que quieras tener a mano.',
      modulesSub: 'Activa solo lo que uses. Cada módulo es independiente.',
      modules: [
        'Calendario',
        'Noticias',
        'Tiempo',
        'Diario',
        'Despensa',
        'Recetas',
        'Plan semanal',
        'Cultura',
      ],
      manualsTag: 'Manuales',
      manualsTitle: 'Guías de configuración.',
      manualsSub:
        'Cada integración —TMDb, IGDB, Last.fm, Open Library y el resto— tiene su propia guía: dónde sacar la API key, qué cuesta y los errores más comunes que conviene evitar.',
      manualsCard: {
        title: 'Manuales de Oficio',
        body: 'Todas las guías para configurar las integraciones de la app, paso a paso.',
        cta: 'Ver manuales',
        href: '/oficio/help/',
      },
      legalTag: 'Legal',
      legalTitle: 'Privacidad y términos.',
      legalSub:
        'Oficio funciona offline por diseño. Aquí tienes los documentos legales de la app: qué datos guarda y bajo qué condiciones puedes usarla.',
      legalCards: [
        {
          title: 'Política de privacidad',
          body: 'Qué datos guarda Oficio en tu dispositivo, qué permisos solicita y los servicios externos opcionales.',
          cta: 'Leer la política',
          href: '/oficio/privacy/',
        },
        {
          title: 'Términos y condiciones',
          body: 'Las condiciones de uso de la app Oficio.',
          cta: 'Leer los términos',
          href: '/oficio/terms/',
        },
      ],
    },
    woodshed: {
      crumbHome: 'Inicio',
      crumbSelf: 'Woodshed',
      badge: 'Android',
      eyebrow: 'Aplicación',
      title: 'Woodshed',
      tagline: 'El cuarto de estudio del músico clásico.',
      intro:
        'Una aplicación para el estudio individual de músicos clásicos. Reúne el repertorio, la planificación del trabajo, el seguimiento de la práctica y las herramientas de apoyo —metrónomo, afinador y nota pedal— para que todo lo necesario en una sesión esté a mano sin saltar entre apps. El nombre viene de woodshedding: el trabajo intenso y reservado con el instrumento.',
      featuresTag: 'Qué hace especial a Woodshed',
      featuresTitle: 'Biblioteca, plan y herramientas, en un solo sitio.',
      features: [
        {
          title: 'Tu repertorio organizado',
          body: 'Biblioteca con metadatos, partituras (PDF, MusicXML), audio, vídeo y notas. Todo lo que necesitas para una obra, en un solo sitio.',
        },
        {
          title: 'Plan y progreso',
          body: 'Programas con bloques y ejercicios; cronómetro, contador de repeticiones, mapa de calor y racha. Mides lo que practicas sin esfuerzo.',
        },
        {
          title: 'Herramientas a mano',
          body: 'Metrónomo, afinador cromático y nota pedal —también dentro del visor de partituras— sin saltar a otra app.',
        },
      ],
      modulesTag: 'Áreas',
      modulesTitle: 'Lo que vas a encontrar dentro.',
      modulesSub: 'Cada área cubre una parte del estudio. Se usan por separado o juntas.',
      modules: [
        'Biblioteca',
        'Programas',
        'Práctica',
        'Cuaderno',
        'Visor',
        'Metrónomo',
        'Afinador',
        'Nota pedal',
      ],
      downloadsTag: 'Descargas',
      downloadsTitle: 'Llévatela a tu plataforma.',
      downloadsSub: 'Empaquetada para móvil y escritorio. Elige tu sistema.',
      downloadsMobileTitle: 'Móvil',
      downloadsDesktopTitle: 'Escritorio',
      downloads: {
        mobile: [
          {
            key: 'play',
            platform: 'Google Play',
            detail: 'Android',
            href: 'https://play.google.com/store/apps/details?id=com.thehomebodygreyhound.woodshed',
            cta: 'Disponible en Google Play',
          },
          {
            key: 'appstore',
            platform: 'App Store',
            detail: 'iOS / iPadOS',
            href: null,
            cta: 'Próximamente',
            soon: true,
          },
        ],
        desktop: [
          {
            key: 'windows',
            platform: 'Windows',
            detail: 'Instalador MSIX',
            href: '/woodshed/downloads/woodshed.msix',
            cta: 'Descargar .msix',
          },
          {
            key: 'deb',
            platform: 'Linux',
            detail: 'Debian / Ubuntu · .deb 0.2.0',
            href: '/woodshed/downloads/woodshed_0.2.0_amd64.deb',
            cta: 'Descargar .deb',
          },
          {
            key: 'appimage',
            platform: 'Linux',
            detail: 'AppImage · 0.2.0 (x86_64)',
            href: '/woodshed/downloads/Woodshed-0.2.0-x86_64.AppImage',
            cta: 'Descargar AppImage',
          },
        ],
      },
      manualsTag: 'Manual',
      manualsTitle: 'Guía de uso.',
      manualsSub:
        'Cómo se usa Woodshed: desde montar tu biblioteca hasta planificar y seguir el estudio.',
      manualsCard: {
        title: 'Manual de Woodshed',
        body: 'La guía completa de la app, paso a paso.',
        cta: 'Leer el manual',
        href: '/woodshed/manual/',
      },
      legalTag: 'Legal',
      legalTitle: 'Privacidad.',
      legalSub:
        'Woodshed funciona sin conexión y guarda los datos en tu dispositivo. La política de privacidad detalla qué se guarda y qué servicios externos son opcionales.',
      legalCards: [
        {
          title: 'Política de privacidad',
          body: 'Qué datos guarda Woodshed, dónde vive cada cosa y qué servicios externos son opcionales.',
          cta: 'Leer la política',
          href: '/woodshed/privacy/',
        },
      ],
    },
    footer: {
      tagline: 'Apps sencillas, hechas con calma.',
      status: 'Estudio activo',
      cols: [
        {
          title: 'Navegación',
          links: [
            { label: 'Aplicaciones', href: '/#aplicaciones' },
            { label: 'El estudio', href: '/#servicios' },
            { label: 'Cómo trabajo', href: '/#proceso' },
            { label: 'Contacto', href: '/#contacto' },
          ],
        },
        {
          title: 'Aplicaciones',
          links: [
            { label: 'Oficio', href: '/oficio/' },
            { label: 'Woodshed', href: '/woodshed/' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacidad Oficio', href: '/oficio/privacy/' },
            { label: 'Términos Oficio', href: '/oficio/terms/' },
            { label: 'Privacidad Woodshed', href: '/woodshed/privacy/' },
          ],
        },
      ],
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      links: [
        { href: '/#aplicaciones', label: 'Apps' },
        { href: '/#servicios', label: 'The studio' },
        { href: '/#proceso', label: 'How I work' },
        { href: '/#contacto', label: 'Contact' },
      ],
      cta: "Let's talk",
      langLabel: 'ES',
      langAria: 'Cambiar a español',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      tag: 'Independent app studio',
      titleLead: 'Simple apps, built with calm ',
      titleAccent: '(and a little AId).',
      sub: "A small studio that designs and develops apps. No grand promises, no vanity metrics. Just careful, finished software that's nice to use.",
      ctaPrimary: "Let's talk",
      ctaSecondary: 'How I work',
      scroll: 'Scroll',
    },
    showcase: {
      tag: 'Apps',
      title: "What we've made.",
      sub: 'Careful apps — few, but finished. Each one lives on its own page.',
      apps: [
        {
          name: 'Oficio',
          tagline: 'Your personal dashboard, built your way.',
          badge: 'Coming soon',
          href: '/oficio/',
          cta: 'Explore Oficio',
        },
        {
          name: 'Woodshed',
          tagline: "The classical musician's practice room.",
          badge: 'Android',
          href: '/woodshed/',
          cta: 'Explore Woodshed',
        },
      ],
    },
    capabilities: {
      tag: 'The studio',
      title: 'Do few things, and do them well.',
      sub: "No marketing team behind this page, no magic formulas. If an app doesn't add value, it doesn't ship.",
      perf: {
        title: 'Finished software',
        body: 'No half-built versions: few features, all of them done.',
      },
      stack: {
        title: 'Solid tools',
        body: 'Reliable, proven technology, chosen for soundness rather than hype.',
      },
      security: {
        title: 'Real privacy',
        body: 'No accounts, no analytics, no ads. Your data lives on your device.',
      },
      design: {
        title: 'Few things',
        body: 'Each app does one thing and does it well. No filler features.',
      },
      architecture: {
        title: 'Bring your own AI',
        body: 'In Oficio you can plug in your own agent via API to lend you a hand.',
      },
      support: {
        title: 'Explained clearly',
        body: 'Honest, direct manuals: what it costs, what it does, no fine print.',
      },
    },
    process: {
      tag: 'How I work',
      title: 'Calm at home, fast when it counts.',
      sub: 'This is how every app from the studio comes to life.',
      steps: [
        {
          num: '01',
          name: 'With calm',
          body: 'No needless rush, but no wasted time. I only start what truly adds value.',
        },
        {
          num: '02',
          name: 'With care',
          body: 'Each app is built slowly and well: few features, all of them finished.',
        },
        {
          num: '03',
          name: 'With clarity',
          body: 'And it is explained honestly: direct manuals, no fine print.',
        },
      ],
    },
    convictions: {
      tag: 'Principles',
      title: 'What I believe.',
      items: [
        { big: 'A homebody greyhound.', line: 'Calm at home, fast when it counts.' },
        { big: 'Few things, done well.', line: "If an app doesn't add value, it doesn't ship." },
        { big: 'No smoke.', line: 'No vanity metrics, no grand promises.' },
      ],
    },
    contact: {
      tag: 'Contact',
      title: "Let's talk.",
      sub: "The most direct way is an email. I reply personally — and if what I do isn't a fit for what you need, no worries.",
      cta: 'Write to me',
      mailSubject: 'Hello — The Homebody Greyhound',
    },
    oficio: {
      crumbHome: 'Home',
      crumbSelf: 'Oficio',
      badge: 'Coming soon',
      eyebrow: 'App',
      title: 'Oficio',
      tagline: 'Your personal dashboard, built your way.',
      intro:
        'Whatever you need at hand — calendar, news, weather, journal, pantry, recipes, weekly plan, culture log — right where you want to see it. A dashboard built at your own pace that lives on your device.',
      featuresTag: 'What makes Oficio different',
      featuresTitle: 'Simple, modular and yours.',
      features: [
        {
          title: 'Modular',
          body: 'You decide which modules to enable and how to arrange them. Your dashboard, your pace.',
        },
        {
          title: 'Truly private',
          body: 'Your data lives on your device and in the services you connect. It never goes through our servers.',
        },
        {
          title: 'Bring your own AI',
          body: 'Plug in your own agent via API to summarise your day or lend a hand. Experimental local-AI support is in the works.',
        },
      ],
      modulesTag: 'Modules',
      modulesTitle: 'Whatever you want at hand.',
      modulesSub: 'Enable only what you use. Each module is independent.',
      modules: [
        'Calendar',
        'News',
        'Weather',
        'Journal',
        'Pantry',
        'Recipes',
        'Weekly plan',
        'Culture log',
      ],
      manualsTag: 'Manuals',
      manualsTitle: 'Setup guides.',
      manualsSub:
        'Each integration — TMDb, IGDB, Last.fm, Open Library and the rest — has its own guide: where to get the API key, what it costs and the most common mistakes to avoid.',
      manualsCard: {
        title: 'Oficio manuals',
        body: "All the guides for setting up the app's integrations, step by step.",
        cta: 'See manuals',
        href: '/oficio/help/',
      },
      legalTag: 'Legal',
      legalTitle: 'Privacy and terms.',
      legalSub:
        "Oficio works offline by design. Here are the app's legal documents: what data it stores and the conditions under which you can use it.",
      legalCards: [
        {
          title: 'Privacy policy',
          body: 'What data Oficio stores on your device, what permissions it requests and the optional external services.',
          cta: 'Read the policy',
          href: '/oficio/privacy/',
        },
        {
          title: 'Terms & conditions',
          body: 'The conditions of use for the Oficio app.',
          cta: 'Read the terms',
          href: '/oficio/terms/',
        },
      ],
    },
    woodshed: {
      crumbHome: 'Home',
      crumbSelf: 'Woodshed',
      badge: 'Android',
      eyebrow: 'App',
      title: 'Woodshed',
      tagline: "The classical musician's practice room.",
      intro:
        'An app for the individual practice of classical musicians. It brings together repertoire, practice planning, session tracking and supporting tools — metronome, tuner and drone — so everything you need in a session is on hand without jumping between apps. The name comes from woodshedding: intense, focused work with the instrument.',
      featuresTag: 'What makes Woodshed different',
      featuresTitle: 'Library, plan and tools, in one place.',
      features: [
        {
          title: 'Your repertoire, organised',
          body: 'A library with metadata, scores (PDF, MusicXML), audio, video and notes. Everything you need for a piece, in one place.',
        },
        {
          title: 'Plan and progress',
          body: 'Programmes with blocks and exercises; timer, rep counter, heatmap and streak. Measure what you practise without the friction.',
        },
        {
          title: 'Tools at hand',
          body: "Metronome, chromatic tuner and drone — also inside the score viewer — without jumping to another app.",
        },
      ],
      modulesTag: 'Areas',
      modulesTitle: "What you'll find inside.",
      modulesSub: 'Each area covers a part of practice. Use them separately or together.',
      modules: [
        'Library',
        'Programmes',
        'Practice',
        'Workbook',
        'Viewer',
        'Metronome',
        'Tuner',
        'Drone',
      ],
      downloadsTag: 'Downloads',
      downloadsTitle: 'Take it to your platform.',
      downloadsSub: 'Packaged for mobile and desktop. Pick your system.',
      downloadsMobileTitle: 'Mobile',
      downloadsDesktopTitle: 'Desktop',
      downloads: {
        mobile: [
          {
            key: 'play',
            platform: 'Google Play',
            detail: 'Android',
            href: 'https://play.google.com/store/apps/details?id=com.thehomebodygreyhound.woodshed',
            cta: 'Get it on Google Play',
          },
          {
            key: 'appstore',
            platform: 'App Store',
            detail: 'iOS / iPadOS',
            href: null,
            cta: 'Coming soon',
            soon: true,
          },
        ],
        desktop: [
          {
            key: 'windows',
            platform: 'Windows',
            detail: 'MSIX installer',
            href: '/woodshed/downloads/woodshed.msix',
            cta: 'Download .msix',
          },
          {
            key: 'deb',
            platform: 'Linux',
            detail: 'Debian / Ubuntu · .deb 0.2.0',
            href: '/woodshed/downloads/woodshed_0.2.0_amd64.deb',
            cta: 'Download .deb',
          },
          {
            key: 'appimage',
            platform: 'Linux',
            detail: 'AppImage · 0.2.0 (x86_64)',
            href: '/woodshed/downloads/Woodshed-0.2.0-x86_64.AppImage',
            cta: 'Download AppImage',
          },
        ],
      },
      manualsTag: 'Manual',
      manualsTitle: 'User guide.',
      manualsSub:
        'How to use Woodshed: from organising your library to planning and tracking practice.',
      manualsCard: {
        title: 'Woodshed manual',
        body: 'The complete app guide, step by step.',
        cta: 'Read the manual',
        href: '/woodshed/manual/',
      },
      legalTag: 'Legal',
      legalTitle: 'Privacy.',
      legalSub:
        'Woodshed works offline and stores data on your device. The privacy policy details what is stored and which external services are optional.',
      legalCards: [
        {
          title: 'Privacy policy',
          body: 'What data Woodshed stores, where each thing lives, and which external services are optional.',
          cta: 'Read the policy',
          href: '/woodshed/privacy/',
        },
      ],
    },
    footer: {
      tagline: 'Simple apps, built with calm.',
      status: 'Studio active',
      cols: [
        {
          title: 'Navigation',
          links: [
            { label: 'Apps', href: '/#aplicaciones' },
            { label: 'The studio', href: '/#servicios' },
            { label: 'How I work', href: '/#proceso' },
            { label: 'Contact', href: '/#contacto' },
          ],
        },
        {
          title: 'Apps',
          links: [
            { label: 'Oficio', href: '/oficio/' },
            { label: 'Woodshed', href: '/woodshed/' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Oficio privacy', href: '/oficio/privacy/' },
            { label: 'Oficio terms', href: '/oficio/terms/' },
            { label: 'Woodshed privacy', href: '/woodshed/privacy/' },
          ],
        },
      ],
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },
  },
}
