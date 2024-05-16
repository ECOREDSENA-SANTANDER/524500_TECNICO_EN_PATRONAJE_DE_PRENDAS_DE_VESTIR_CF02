export default {
  global: {
    componenteFormativo: 'Reconocimiento de la estructura corporal',
    descripcionCurso:
      'El programa Técnico en Patronaje Industrial de Prendas de Vestir, a través de diferentes componentes como “Reconocimiento de la estructura corporal”, da respuesta a necesidades de la región, del sector empresarial y sus trabajadores, frente a la capacitación de mano de obra calificada en el desarrollo y escalado de patrones de prendas de vestir de manera manual y sistematizada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principaal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principaal.png'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos de Pre-Patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de las medidas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis de cuadros de tallas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Concepto de Patronaje - Pasos del patronaje',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Patronaje',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Elaboración de básicos Infantil',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alistamiento para elaboración de muestra física 1.',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de máquinas.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Partes de la máquina',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Alimentación o transporte',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Generaciones de máquinas',
            hash: 't_1_4',
          },
          {
            numero: '2.5',
            titulo: 'Clasificación, nomenclatura, Puntas, Calibres y usos.',
            hash: 't_1_5',
          },
          {
            numero: '2.6',
            titulo:
              'Relación de elementos de costura: Tela, Aguja, puntada, hilo, ajuste.',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Calibrar.',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Desarrollo de operaciones básico para ensamble de piezas.',
            hash: 't_2_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Estándar',
      significado:
        'Que sirve de patrón, modelo o punto de referencia para medir o valorar cosas de la misma especie.',
    },
    {
      termino: 'Talla',
      significado:
        'Expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2020.',
      link: '',
    },
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA Programa Tecnólogo en Desarrollo de Colecciones para la Industria de la Moda, 2020.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, L. y Moncayo, A. (2011). Manual de patronaje básico e interpretación de diseños. Bogotá: SENA, Japan Inernational Cooperation Agency "jica", 2011.',
      link: '',
    },
    {
      referencia:
        'Pulgarín, B. y Ulloa, J. (1998). La evolución de las máquinas y su aplicación en la industria de la confección Colombiana.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000009660',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
