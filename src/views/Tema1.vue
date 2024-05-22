<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos de pre-patronaje
    
    p.mb-4(data-aos="fade") El cuerpo humano es una estructura base que se debe entender para poder interpretar su comportamiento y sus necesidades vestimentales. Para lo cual es fundamental tener en cuenta los siguientes conceptos:
    
    .bg20.p-4.mb-5
      .row.justify-content-center
        .col-lg-9
          ImagenInfografica.color-primario.mb-5(data-aos="fade-down")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/imag01.svg', alt='')

            .tarjeta.bg13.p-3(x="5.5%" y="9%" numero="+")
              p Prendas #[b superiores - TOP].
              p.mb-0 Cabeza – Tronco - Miembros superiores.
            .tarjeta.bg13.p-3(x="71%" y="64%" numero="+")
              p Prendas #[b inferiores - BOTTOM].
              p.mb-0 Extremidades - Miembros inferiores.
        .col-lg-7
          .bg21.p-4   
            .row.justify-content-center.align-items-center
              .col-md-6
                img.mb-3.w-50(src='@/assets/curso/temas/t1/deco1.svg', alt='')
                h5 Arquitectura del cuerpo
                p Conocimiento e interpretación corporal.
              .col-md-5 
                p.mb-0 Anatomía #[span.texto2 =] Estructura
                p.mb-0 Biomecánica #[span.texto2 =] Movimiento
                p.mb-0 Morfología #[span.texto2 =] Geometría
                p.mb-0 Ergonomía #[span.texto2 =] Postura
                p.mb-0 Antropometría #[span.texto2 =] Medidas

    
    h4(data-aos="fade") Anatomía
    p.mb-4(data-aos="fade") Es la estructura o disposición de los órganos y las partes del cuerpo. Es entonces que la anatomía descriptiva considera el cuerpo humano dividido en:

    SlyderF(columnas="col-lg-3 col-md-6" data-aos="fade-down")
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Cabeza
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/t1/slyder01.svg' alt='')
        p.text-center.mb-0 Cara - cráneo. 
        p.text-center Cuello: esternocleidomastoideo - anterior, lateral, posterior.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Tronco 
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/temas/t1/slyder02.svg' alt='')
        p.text-center Dorsal - pectoral -abdominal - perineal.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Extremidades superiores
        .row.justify-content-center.mb-3        
          .col-9
            img(src='@/assets/curso/temas/t1/slyder03.svg' alt='')
        p.text-center.mb-0 Hombro, brazo, codo, antebrazo y mano. 
        p.text-center Mano: dorso y palma. Carpo, metacarpo y dedos.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Extremidades inferiores
        .row.justify-content-center.mb-3        
          .col-9
            img(src='@/assets/curso/temas/t1/slyder04.svg' alt='')
        p.text-center.mb-0 Cadera, muslo, rodilla, pierna y pie. 
        p.text-center Pie: dorso y palma, Tarso, metatarso y dedos.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Sistema óseo
        .row.justify-content-center.mb-3        
          .col-8
            img(src='@/assets/curso/temas/t1/slyder05.svg' alt='')
        p.text-center Es la estructura viva de huesos duros cuya función principal es la protección y apoyo a los órganos vitales y la generación de movimiento.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Articulaciones
        .row.justify-content-center.mb-3        
          .col-9
            img(src='@/assets/curso/temas/t1/slyder06.svg' alt='')
        p.text-center Son puntos de unión entre los componentes del sistema óseo (hueso, cartílagos), y facilitar movimientos mecánicos, proporcionándole elasticidad y plasticidad al cuerpo.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Sistema muscular
        .row.justify-content-center.mb-3        
          .col-10
            img(src='@/assets/curso/temas/t1/slyder07.svg' alt='')
        p.text-center Es el conjunto de los más de 650 músculos del cuerpo, cuya función principal es generar movimiento, ya sea voluntario o involuntario.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Tejido conectivo        
        .row.justify-content-center.mb-3        
          .col-10
            img(src='@/assets/curso/temas/t1/slyder08.svg' alt='')
        p.text-center Es el conjuntivo, adiposo, cartilaginoso, óseo, linfoide, la sangre.
    

    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.1 Análisis e identificación de la estructura
    
    p.mb-4(data-aos="fade") Es importante precisar las características de la estructura humana a través de los siguientes aspectos:
    
    .row.mb-4
      .col-lg-6.pe-lg-0(data-aos="fade-right")
        .tarjeta.bg3.h-100.p-4
          .row.align-items-center
            .col-lg-5.col-md-5.col-8.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/imag06.svg' alt='')
            .col-lg-7
              h4.text-white Posición anatómica
              p.text-white Es aquella que se considera adecuada para el estudio anatómico del cuerpo humano. consiste en:
              ul.lista-ul.fa-ul.text-white.mb-0.ps-3
                li.mb-0 
                  i.fas.fa-plus
                  | Cuerpo de pie. 
                li.mb-0 
                  i.fas.fa-plus
                  | Cabeza y cuello rectos.
                li.mb-0 
                  i.fas.fa-plus
                  | Brazos extendidos hacia abajo.
                li.mb-0 
                  i.fas.fa-plus
                  | Palma de las manos vueltas hacia adelante.
                li.mb-0 
                  i.fas.fa-plus
                  | Punta de los dedos mirando la frente.
                li.mb-0 
                  i.fas.fa-plus
                  | Piernas extendidas, levemente separadas.
                li.mb-0 
                  i.fas.fa-plus
                  | Tobillos y pies extendidos señalando hacia el frente con la punta de los dedos.
      .col-lg-6.ps-lg-0(data-aos="fade-left")
        .tarjeta.bg4.h-100.d-flex.align-items-center.p-4
          .row
            .col-lg-5.col-md-5.col-8.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/imag07.svg' alt='')
            .col-lg-7
              h4 Posición neutra
              p.mb-0 Es la posición natural de la columna cuando se mantienen sus 3 curvas fisiológicas. A diferencia de la anatómica las palmas de las manos descansan sobre el cuerpo en los laterales del muslo.
            
    .division

    .row.mb-5(data-aos="fade-down")
      .col-lg-9
        .cajon.color-primario.bg1.p-4.p-lg-5.h-100
          h4 Planos y ejes anatómicos
          p.mb-0 Son las referencias espaciales que sirven para describir la disposición de los diferentes tejidos, órganos y sistemas, así como las relaciones que existen entre ellos.
      .col-lg-3.col-md-7
        img(src='@/assets/curso/temas/t1/imag02.svg', alt='')
    
    h4(data-aos="fade") Planos del cuerpo humano
    p.mb-4(data-aos="fade") Son las formas de división del cuerpo humano, los cuales se describen a continuación:

    .row.align-items-end.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-6
        img.mb-4(src='@/assets/curso/temas/t1/imag03.svg' alt='')
        h5 Plano frontal (coronal)
        p Divide a nuestro cuerpo en la parte de mitad delantero posterior.
      .col-lg-4.col-md-6
        img.mb-4(src='@/assets/curso/temas/t1/imag04.svg' alt='')
        h5 Plano frontal (coronal)
        p Divide a nuestro cuerpo en la parte de mitad delantero posterior.
      .col-lg-4.col-md-6
        img.mb-4(src='@/assets/curso/temas/t1/imag05.svg' alt='')
        h5 Plano frontal (coronal)
        p Divide a nuestro cuerpo en la parte de mitad delantero posterior.
    
    .division


    PasosA.color-primario.mb-5(tipo="n")
      .row.align-items-center.justify-content-around        
        .col-md-6
          h4 Antropometría
          p Estudio de las proporciones y las medidas del cuerpo humano.
        .col-md-5.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/imag08.svg', alt='')
      .row.align-items-center.justify-content-around 
        .col-md-5.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/imag09.svg', alt='')
        .col-md-6
          h4.text-left Ergonomía
          p.text-left Es el estudio de las condiciones de adaptación de un lugar de trabajo, una máquina, un vehículo, una prenda y cualquier otro producto de uso humano, a las características físicas del trabajador o el usuario.
      .row.align-items-center.justify-content-around 
        .col-md-5
          h4 Biomecánica
          p Es un área de conocimiento que estudia la actividad física de nuestro cuerpo en circunstancias y condiciones diferentes; analiza las consecuencias mecánicas que se derivan de esas actividades en nuestra vida cotidiana, en el trabajo, haciendo deporte, etc.
        .col-md-7
          img(src='@/assets/curso/temas/t1/imag10.png', alt='')
        

    h4(data-aos="fade") Somatotipos
    p.mb-4(data-aos="fade") Es un sistema diseñado para clasificar el tipo corporal ó físico; es utilizado para estimar la forma corporal y su composición. Se clasifican en:
    
    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2.text-center Ectomorfo - estructura ligera
              p se caracteriza por tener estructura delgada y huesos largo, poca grasa y poco músculo. 
              p Complexión delgada, estructura fina, fibroso, no gana peso con facilidad, metabolismo rápido, pecho plano, hombros pequeños.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-slide1.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2.text-center Mesomorfo - estructura mediana
              p se distingue por tener una musculatura natural y poca grasa. Los huesos son largos y semi-gruesos. Se dice que es el ideal para el físico constructivo. 
              p Complexión atlética, cuerpo duro con músculos definidos,  es fuerte de forma natura, gana músculo fácilmente, engorda con más facilidad que los ectomorfos, hombros anchos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-slide2.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2.text-center Endomorfo - estructura pesada
              p se distingue por tener un cuerpo grande de huesos gruesos, con mucha grasa y con gran facilidad para obtener más de ésta. 
              p Complexión blanda y redonda, suele ser bajo y fornido, gana músculo fácilmente,  engorda fácilmente, le cuesta perder grasa, metabolismo lento, hombros anchos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-slide3.svg')})`}")
    
    .bg5.mb-5(data-aos="fade-down") 
      .row.align-items-center
        .col-lg-8.pe-lg-0
          .cajon.color-primario.bg1.p-4.mrn-3
            p.mb-0 La gran mayoría de nosotros somos una combinación de dos somatotipos, las más comunes son: mesoectomorfo y mesoendomorfo.
        .col-lg-4.col-md-7.ps-lg-0
          .bg3.p-4
            img(src='@/assets/curso/temas/t1/imag15.svg', alt='')
    
    h4(data-aos="fade") Tipologías corporales - siluetas.
    p(data-aos="fade") Son las características físicas generales de contorno y forma corporal – morfología de superficie.
    .row.fondo-t1.align-items-center.py-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-7
            img(src='@/assets/curso/temas/t1/imag16.svg', alt='')

    h4(data-aos="fade") ¿Cuál es mi tipo de cuerpo?
    .row.fondo-t1.align-items-center.py-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-10
            img(src='@/assets/curso/temas/t1/imag17.svg', alt='')
    
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .bloque-texto-b
          .bloque-texto-b__texto.text-center
            i.fas.fa-quote-left.color-primario
            h4.mb-0 Las formas del cuerpo no se pueden clasificar en buena o mala, ni bella, ni fea, simplemente presenta diferentes características y particularidades.
            i.fas.fa-quote-right.color-primario
    
    
    h4.linea(data-aos="fade") Evaluación de aplomos - postura

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p Asociado a la correlación entre las extremidades y el tronco y a las posiciones de las articulaciones.
      .col-lg-5(data-aos="fade-left")
        ul.lista-ul--color.fa-ul.color-acento-botones
          li.bg6.br-7.p-1.ps-2
            i.fas.fa-plus
            | Equilibrio postural: muscular esquelético 
          li.bg6.br-7.p-1.ps-2
            i.fas.fa-plus
            | Apoyo bipedestal
          li.bg6.br-7.p-1.ps-2
            i.fas.fa-plus
            | Distribución de pesos
          li.bg6.br-7.p-1.ps-2
            i.fas.fa-plus
            | Centros de gravedad
    
    .bg6.mb-5.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-6
          p El análisis de las extremidades anteriores y frontales, es lo que permite determinar si el caballo tiene buena postura o si por el contrario es defectuosa. Este análisis se hace bajo especificaciones ya estipuladas las cuales permite revisar la composición de todos los términos anteriormente mencionados con el fin de identificar la postura.
          p La postura es un punto clave en el análisis de la estructura corporal; es lo que corresponde a la distribución de pesos frente a la gravedad. En la imagen se identifica lo que esta categorizado como postura correcta o incorrecta.
        .col-lg-6
          img(src='@/assets/curso/temas/t1/imag18.svg', alt='')
    
    .row.mb-5
      .col-md-6.pe-md-0(data-aos="fade-right")
        .tarjeta.bg4.p-4.h-100
          h4 Análisis de diferentes posturas sobre un mismo cuerpo
          p Cada postura da una medida diferente, siendo el mismo cuerpo o la misma persona, eso depende de las hiperextensiones o flexiones que toma el cuerpo en cada una de sus divisiones.
          img.mh-290.m-auto(src='@/assets/curso/temas/t1/imag19.svg' alt='')  
      .col-md-6.ps-md-0(data-aos="fade-left")
        .tarjeta.bg7.p-4.h-100
          h4.text-white Análisis de punto de equilibrio
          p.text-white Cada cuerpo tiene un tipo de equilibrio. Dependiendo del género se identifican pequeñas variaciones tanto en el sistema óseo, como muscular los cuales varían o afectan el punto de equilibrio.
          img.mh-290.m-auto(src='@/assets/curso/temas/t1/imag20.svg' alt='')  
        
    h4.linea(data-aos="fade") Diferentes tipos de posturas
    p.mb-4(data-aos="fade") Buena postura - postura defectuosa relajada - alineamiento de cifosis y lordosis - espalda inclinada - espalda plana - espalda redonda.
    
    .tarjeta.tarjeta--morado.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-md-6.col-lg-5.mb-4.mb-md-0
            img.mb-4(src='@/assets/curso/temas/t1/slyder09.svg', alt='')
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal. 
              li.mb-0
                span b. 
                | Largas. 
              li.mb-0
                span c. 
                | Moderadas. 
              li.mb-0
                span d. 
                | Cortas. 
              li.mb-0
                span e. 
                | Muy cortas.
          .col-md-6.col-lg-5
            img.mb-4(src='@/assets/curso/temas/t1/slyder10.svg', alt='')
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal. 
              li.mb-0
                span b. 
                | Cuadrada. 
              li.mb-0
                span c. 
                | Alta. 
              li.mb-0
                span d. 
                | Baja. 
              li.mb-0
                span e. 
                | Muy ancha.
        .row.justify-content-around
          .col-md-6.col-lg-5.mb-4.mb-md-0
            img.mb-4(src='@/assets/curso/temas/t1/slyder11.svg', alt='')
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal.  
              li.mb-0
                span b. 
                | Quebrado con rodillas separadas. 
              li.mb-0
                span c. 
                | Quebrado con rodillas y tobillos separados.  
              li.mb-0
                span d. 
                |  Quebrado con tobillos separados.
              li.mb-0
                span e. 
                | Muy quebrado - cadera, rodillas y tobillos separados.
          .col-md-6.col-lg-5
            img.mb-4(src='@/assets/curso/temas/t1/slyder12.svg', alt='')
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal. 
              li.mb-0
                span b. 
                | Quebrado con la cadera hacia atrás. 
              li.mb-0
                span c. 
                | Quebrado con la cadera hacia adelante.
              li.mb-0
                span d. 
                | Doblemente quebrado. 
              li.mb-0
                span e. 
                | Completamente quebrado
        .row.justify-content-around
          .col-md-6.col-lg-5.mb-4.mb-md-0
            img.mb-4(src='@/assets/curso/temas/t1/slyder13.svg', alt='')
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal.  
              li.mb-0
                span b. 
                | Un poco grandes.
              li.mb-0
                span c. 
                | Cadera baja amplia y glúteos puntiagudos.
              li.mb-0
                span d. 
                | Cadera muy amplia y glúteos redondos.
              li.mb-0
                span e. 
                | Cadera alta amplia y glúteos chatos.
          .col-md-6.col-lg-5
            img.mb-4(src='@/assets/curso/temas/t1/slyder14.svg', alt='')
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal. 
              li.mb-0
                span b. 
                | Vientre alto abultado glúteos redondos y grandes. 
              li.mb-0
                span c. 
                | Vientre y glúteos planos y puntiagudos.
              li.mb-0
                span d. 
                | Vientre plano con pubis saliente y glúteos chatos. 
              li.mb-0
                span e. 
                | Vientre chato con pubis muy saliente con glúteos planos y entrantes.
        .row.justify-content-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            img.mb-4(src='@/assets/curso/temas/t1/slyder14.svg', alt='')
          .col-md-6
            ol.lista-ol.fa-ul
              li.mb-0
                span a. 
                | Normal (trapecio regular). 
              li.mb-0
                span b. 
                | Paralela de cadera y senos pequeños. 
              li.mb-0
                span c. 
                | Paralela de cadera cuadrada, torso y cintura ancha, senos amplios. 
              li.mb-0
                span d. 
                | Trapecio abierto. 
              li.mb-0
                span e. 
                | Trapecio invertido.
  
    p(data-aos="fade") Otras características y particularidades que generan diferencias corporales son: género, edad, masa corporal, tejido adiposo, lenguaje propioceptivo y patologías.


    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.2 Clasificación de las medidas
    
    p.mb-4(data-aos="fade") A continuación se describen los sistemas de medidas, su clasificación, características, usos e implementación.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Sistemas de medidas de longitud

    p.mb-0(data-aos="fade") La longitud es la distancia que hay entre un punto y otro. Los dos sistemas utilizados para determinar esa distancia:
    p(data-aos="fade") Sistema inglés y Sistema internacional o métrico decimal.
    p.mb-4(data-aos="fade") En el sistema inglés la unidad básica de medida es la pulgada, se aplica principalmente en Estados Unidos Inglaterra y Australia. En el sistema internacional o métrico decimal que tiene como unidad principal el metro, Se usa en el resto del mundo.
    
    .cajon.color-primario.bg1.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg-6
          p Sin embargo, los dos tipos de sistemas son utilizados en diferentes áreas y cadenas productivas teniendo en cuenta que algunos estándares están trabajados en medidas diferentes a las que usa oficialmente el país.
        .col-lg-3.col-md-6.mb-4.mb-md-0
          h5.text-center.text-small Sistema inglés
          img(src='@/assets/curso/temas/t1/imag21.svg', alt='Sistema inglés')
        .col-lg-3.col-md-6.mb-4.mb-md-0
          h5.text-center.text-small Sistema internacional o métrico decimal
          img(src='@/assets/curso/temas/t1/imag22.svg', alt='Sistema internacional o métrico decimal')
    
    .row.align-items-center.mb-4
      .col-lg-9(data-aos="fade-right")
        h4 Sistema métrico inglés 
        p Como todo número fraccionario, se representa A/B. Donde A es el numerador y B el denominador. El numerador indica el número de partes que se toman de la unidad y el denominador en cuántas partes iguales se divide esa unidad.
      .col-lg-3.col-md-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/imag23.svg', alt='')
    
    p.mb-4(data-aos="fade") En confección: Se utiliza la pulgada para como medida de estandarización que mide el número de puntadas por pulgada PPP:
    ul.lista-ul--color.fa-ul.color-secundario.ps-2.ps-md-5.mb-4(data-aos="fade")
      li.mb-1
        i.fas.fa-plus
        | Ancho de la puntada (se utiliza un calibrador para facilitar el proceso).
      li.mb-1
        i.fas.fa-plus
        | La planchuela de la maquina puede tener las medidas para guiarse.
      li.mb-0
        i.fas.fa-plus
        | Pies de las maquinas (se miden por pulgadas y de acuerdo con el ancho de las costuras).
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .cajon.color-primario.bg1.p-4
          p.mb-0.text-center #[b En patronaje la denominación de tallas europeas y también unos cuadros de tallas especialmente los masculinos se trabajan en pulgadas.]
    
    h4(data-aos="fade") Sistema métrico decimal o universal
    p.mb-4(data-aos="fade") Es un sistema de unidades en el cual los múltiplos o submúltiplos de las unidades de una misma naturaleza siguen una escala decimal (10).
    p(data-aos="fade") En confección: se utiliza para verificar medidas finales de la prenda. Los rangos de tolerancia de una costura se miden en milímetros.
    
    ul.lista-ul--color.fa-ul.color-secundario.ps-2.ps-md-5.mb-4(data-aos="fade")
      li.mb-1
        i.fas.fa-plus
        | Algunos Insumos de confección, se caracterizan por centímetros.
      li
        i.fas.fa-plus
        | El ancho de los materiales textiles se mide en centímetros. Los textiles al detal se venden por metros.
    
    p.mb-4(data-aos="fade") En patronaje: la mayoría de los cuadros de tallas anatómicas e industriales, en todas las líneas, están construidos en centímetros que es el sistema métrico estandarizado para el proceso de toma de medidas, patronaje y corte de las prendas. Las reducciones o ampliaciones para el confort de la prenda se realizan en centímetros.
    
    .row.align-items-center.mb-4
      .col-lg-10.mnr-1(data-aos="fade-right")
        .bg8.p-4
          p.mb-0 Como se utilizan los centímetros:
          p.mb-4 1 metro = 10 Decímetros, 1 Decímetro = 10 Centímetros, 1 Centímetro = 10 Milímetros - Imagen de referencia
          p.mb-0 Fracciones - ½ = Decimales - .5
          p.mb-4 Conversión de 1/2 Pulgada = 1,27 Centímetros = 12,700 Milímetros.
          p.mb-0 ¼ de Fracción = .25 Decimales = .33 Milímetros
      .col-lg-3.col-md-7
        img(src='@/assets/curso/temas/t1/imag24.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Anexo 1. Tabla de Equivalencias
                  p.text-small.mb-0 Revisa el documento para aprender más sobre tabla de equivalencias
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Las medidas
    
    p Son unidades numéricas que representan el tamaño de las figuras, personas y/o objetos. Por lo general se trabaja con un sistema de medida (Cinta métrica) de manera lineal, para medir las diferentes partes del cuerpo. 
    p.mb-5 Las medidas por lo general se toman sobre los puntos de anclaje del cuerpo teniendo en cuenta los parámetros antropométricos y anatómicos, pasando por los volúmenes (contornos) protuberantes. Se clasifican en tres grupos:
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Clasificación de las medidas

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/t1/chica1.svg', alt='')   
        h5 Contornos:
        p Se toman alrededor de la parte a medir, cerrando el metro.
        ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-4.mb-0
          li.mb-1
            i.fas.fa-plus
            | Contorno de cuello
          li.mb-1
            i.fas.fa-plus
            | Contorno de pecho/busto
          li.mb-1
            i.fas.fa-plus
            | Contorno de cintura
          li.mb-1
            i.fas.fa-plus
            | Contorno de codo
          li.mb-1
            i.fas.fa-plus
            | Contorno de puño  
          li.mb-1
            i.fas.fa-plus
            | Contorno de brazo
          li.mb-1
            i.fas.fa-plus
            | Contorno de cadera
          li.mb-1
            i.fas.fa-plus
            | Contorno de rodilla
          li.mb-0
            i.fas.fa-plus
            | Contorno de bota
      .col-md-6.col-lg.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/t1/chica2.svg', alt='')   
        h5.text-white Anchos:
        p.text-white Se toman horizontalmente y corresponden a los anchos.
        ul.lista-ul--color.fa-ul.text-white.ps-2.ps-md-4.mb-0
          li.mb-1
            i.fas.fa-plus
            | Ancho de pecho.
          li.mb-1
            i.fas.fa-plus
            | Ancho de espalda.
          li.mb-0
            i.fas.fa-plus
            | Separación de busto.
      .col-md-6.col-lg.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/t1/chica3.svg', alt='')   
        h5.text-white Largos:
        p.text-white Se toman verticalmente y corresponden a largos y talles.
        ul.lista-ul--color.fa-ul.text-white.ps-2.ps-md-4.mb-0
          li.mb-1
            i.fas.fa-plus
            | Talle frente.
          li.mb-1
            i.fas.fa-plus
            | Talle atrás.
          li.mb-1
            i.fas.fa-plus
            | Centro frente.
          li.mb-1
            i.fas.fa-plus
            | Centro atrás.
          li.mb-1
            i.fas.fa-plus
            | Costado.
          li.mb-1
            i.fas.fa-plus
            | Hombro.
          li.mb-1
            i.fas.fa-plus
            | Altura de busto.
          li.mb-1
            i.fas.fa-plus
            | Altura de cadera.
          li.mb-1
            i.fas.fa-plus
            |  Altura de tiro.
          li.mb-1
            i.fas.fa-plus
            | Largo de falda.
          li.mb-1
            i.fas.fa-plus
            | Largo de pantalón.
          li.mb-0
            i.fas.fa-plus
            | Largo de manga.
    
    p.mb-5(data-aos="fade") Información de desarrollo del producto para ficha técnicas materiales, medidas, tallas, acabados, etc.
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Tipos de medida
    
    TabsC.color-primario.mb-5(data-aos="fade-down")
      .py-4.py-md-5.p-4.bg9(titulo="Sobre medidas")
        .row.justify-content-around
          .col-md-8
            p Son las medidas que se toman directamente sobre el cuerpo de la persona. Estas medidas se deben tomar teniendo en cuenta los ejes de movimiento. 
            p La cantidad de medidas a tomar dependerá del tipo de prenda a construir. En este caso es fundamental la observación y análisis de la estructura corporal para interpretar los ajustes que deben darse al trazo de patrones.
          .col-md-4.col-lg-3
            img(src='@/assets/curso/temas/t1/figuras1.svg', alt='')
      .py-4.py-md-5.p-4.bg9(titulo="Deducidas")
        .row.justify-content-around
          .col-md-3.col-lg-2.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/figuras2.svg', alt='')
          .col-md-9
            p Se deducen o se sacan de otra medida, aplicando fórmulas ya estudiadas y comprobadas con anterioridad. Se basan esencialmente en una medida horizontal, que se toma al contorno del cuerpo más prominente y en una medida vertical que es tomada a lo largo del cuerpo de arriba hacia abajo. Con estas medidas se deducen las otras, por eso se toman exactas y no deben mezclarse con otras medidas al construir el cuadro de tallas.
      .py-4.py-md-5.p-4.bg9(titulo="Estandarizadas o normalizadas")
        .row.justify-content-around
          .col-md-8
            p Son el resultado de estudios antropométricos, que establecen un rango de medidas que corresponden a las principales medidas corporales– Tallas. Estas medidas son definidas y adoptada por norma. 
          .col-md-4.col-lg-3
            img(src='@/assets/curso/temas/t1/figuras3.svg', alt='')
      .py-4.py-md-5.p-4.bg9(titulo="Medidas de prenda")
        .row.justify-content-around
          .col-lg-2.col-md-3.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/figuras4.svg', alt='')
          .col-md-9
            h5.mb-2 Medidas de prenda
            p.mb-4 Estas incluyen medidas de holgura, teniendo en cuenta el uso de la prenda. Por lo general se construyen cuadros de tallas de prendas que ya tienen incluidos esos centímetros de más en las diferentes medidas.
            h5.mb-2 Medidas anatómicas
            p Son las medidas tomadas justas sobre el cuerpo teniendo en cuenta los puntos antropométricos y ejes de movimiento. No tienen desahogos ni flojos 
    
    h4(data-aos="fade") Medidas anatómicas estandarizadas o normalizadas
    p.mb-4(data-aos="fade") Son el resultado de la toma de medidas directas o de estudios antropométricos. Estas medidas se toman exactas sobre la estructura, es decir no tiene aumentos ni ajustes. De la toma correcta de las medidas depende el resultado del patrón. Estas medidas son utilizadas para la construcción y elaboración de los básicos, superiores e inferiores. A continuación ver el video  "clasificación de medidas" 
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


    Separador
    #t_1_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.3 Análisis de cuadros de tallas
    
    p.mb-4(data-aos="fade") Este proceso está definido por los siguientes conceptos:

    SlyderA.t1-3.mb-4( data-aos="fade-down")
      .row.justify-content-center
        .col-lg-11
          .tarjeta--container.row    
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-6.col-6
                  img(src='@/assets/curso/temas/t1/slide1-3-1.png', alt='')              
              h4.text-center Canon
              p.text-center Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales
            .col-md.tarjeta.color-acento-botones.p-5
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-6.col-6
                  img(src='@/assets/curso/temas/t1/slide1-3-2.png', alt='')        
              h4.text-center Proporción
              p.text-center Relación de correspondencia, equilibrio o simetría que existe entre los componentes de un todo, como la Secuencia Fibonacci que presenta una serie numérica: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc; y es  una serie infinita en la que la suma de dos números consecutivos siempre da como resultado el siguiente número (Tratado de las proporciones D´Vincí o el hombre de Vitrubio).
      .row.justify-content-center
        .col-lg-11
          .tarjeta--container.row    
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-6.col-6
                  img(src='@/assets/curso/temas/t1/slide1-3-3.png', alt='')              
              h4.text-center Proporciones corporales
              p.text-center Modelo o prototipo que reúne las características que se  consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
              ul.lista-ul--color.color-acento-botones.fa-ul
                li
                  i.fas.fa-plus
                  | Griegos Policleto y Lisipo canon de 7 y 7 ½ cabezas.
                li
                  i.fas.fa-plus
                  | Leonardo da Vinci nos muestra una proporción de 8 cabezas en su Tratado de proporciones
            .col-md.tarjeta.color-acento-botones.p-5
              .row.justify-content-center.mb-4
                .col-lg-4.col-md-6.col-6
                  img(src='@/assets/curso/temas/t1/slide1-3-4.png', alt='')        
              h4.text-center Medidas deducidas
              p.text-center Para calcular un cuadro de tallas completo se utiliza generalmente dos medidas anatómicas:
              ul.lista-ul--color.color-primario.fa-ul
                li
                  i.fas.fa-plus
                  | La altura o estatura tota
                li
                  i.fas.fa-plus
                  | El contorno superior más prominente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Recurso. Análisis de tallas y medidas
                  p.text-small.mb-0 Revisa el documento para aprender más sobre análisis de tallas y medidas
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Fórmulas

    p.mb-4(data-aos="fade") Expresión breve y precisa del modo de hacer, resolver o conseguir algo. Calculo estandarizado para obtener un resultado.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-7
        .tabla-a.sin-borde
          table
            thead
              tr
                th.bg4 Tórax máximo
                th.bg1 Talla
            tbody.text-center
              tr
                td.bg4 Pecho
                td.bg1 Tórax máximo - 2 cm
              tr
                td.bg4 Cadera
                td.bg1 Tórax máximo + 4 cm            
              tr
                td.bg4 Cintura
                td.bg1 Cadera - 14 cm
              tr
                td.bg4 Estatura 7a
                td.bg1 Estatura total - 20 cm
              tr
                td.bg4 Talle
                td.bg1 3/10 de la estatura 7aC
              tr
                td.bg4 Cintura/Suelo
                td.bg1 7/10 de la estatura 7aC
              tr
                td.bg4 Largo de brazo
                td.bg1 4/10 de la estatura 7aC
              tr
                td.bg4 Estatura total
                td.bg1 Estatura 7aC + 20 cm
              tr
                td.bg4 Base
                td.bg1 Pecho + desahogo (4 cm)  + costura (2 cm)

    .row.mb-4(data-aos="fade-down")
      .col-lg-12
        .cajon.color-primario.bg1.p-4.px-md-5
          p #[b Ejemplo:] Para deducir la medida de 7a cervical, se toma la medida total de una persona y se le resta 20 cm. ¿Por qué 20cms?.  En la estandarización de medidas, se establece que 20cms corresponde a la medida aprox. de la cabeza.
          p.mb-0 #[b Fórmula:] 7a cervical o largo útil = largo total - 20 cm   
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-10
        img(src="@/assets/curso/temas/t1/formulas.svg")
    
    .bg6.mb-4.p-4.px-lg-5.mb-5(data-aos="fade-down")
      .row
        .col-lg-5
          h5 ¿Cómo obtener medidas deducidas?
          p Desarrollando fórmulas.
        .col-lg-7
          .tabla-a.tabla-peque.color-1
            table.text-center
              thead
                tr.bg12
                  th Medida
                  th Fórmula
                  th Resultado
              tbody
                tr.p-1
                  td Estatura total
                  td N/A
                  td 1.70 cm
                tr.p-1
                  td Tórax máximo
                  td N/A
                  td 90 cm
                tr.p-1
                  td Cadera
                  td Tórax máximo +8 cm
                  td 98 cm
                tr.p-1
                  td Pecho
                  td Tórax máximo -4 cm
                  td 86 cm
                tr.p-1
                  td Cintura
                  td Cadera -28 cm
                  td 70 cm
                tr.p-1
                  td Estatura 7a cervical útil
                  td Altura total -20 cm
                  td 1.50 cm
                tr.p-1
                  td Largo de brazo
                  td 4/10 de estatura 7aC
                  td 60 cm
      
    h4(data-aos="fade-right") Construyendo tallas y cuadros
    p.mb-4(data-aos="fade") Grupo de magnitudes estandarizadas qué definen las medidas de una prenda de vestir. Los cuadros contienen grupos de tallas.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        img(src="@/assets/curso/temas/t1/tallas.svg")

    .row.mb-5(data-aos="fade-down")
      .col-lg-12
        .cajon.color-primario.bg1.p-4.px-md-5
          h5 Errores más comunes
          p.mb-0 Combinación de medidas: cuando se trabaja con medidas deducidas, se debe ir trabajando con las medidas obtenidas de cada formula de manera progresiva; usted debe tener en cuenta que el resultado cambia si en vez de aplicar únicamente las medidas obtenidas por deducción, adicionamos una medida anatómica.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Cuadros de tallas
    p.mb-4(data-aos="fade") Expresión breve y precisa del modo de hacer, resolver o conseguir algo. Calculo estandarizado para obtener un resultado.
    
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg6.p-4
          ul.lista-ul--color.color-primario.fa-ul.mb-5
            li.mb-1 
              i.fas.fa-plus
              | Anatómicos y deducidos: de acuerdo con la obtención de medidas.
            li.mb-1 
              i.fas.fa-plus
              | Proporcionales: existe una secuencia numérica en el crecimiento de la talla.
            li.mb-1 
              i.fas.fa-plus
              | No proporcionales: no existe una secuencia numérica en el crecimiento de la talla.
            li.mb-1 
              i.fas.fa-plus
              | Completos: incluyen todas las medidas requeridas para la construcción de patrones de prendas.
            li.mb-1 
              i.fas.fa-plus
              | Según prenda: que incluyen en algunos casos desahogos y costuras.
            li 
              i.fas.fa-plus
              | Normatividad: que incluyen en algunos casos desahogos y costuras.          
          h5 Ejemplos:
          ul.lista-ul--color.color-primario.fa-ul.mb-5
            li.mb-1 
              i.fas.fa-plus
              | ANTC-ISO 8559. Fabricación de Vestuario y Estudios Antropométricos. Dimensiones Corporales - Icontec.
            li 
              i.fas.fa-plus
              | Norma UNE-EN 13402-3 Armoniza y simplifica el etiquetado de tallas de prendas de vestir para el beneficio del consumidor y de la industria en general.          
          h5 Para el análisis de cuadros de tallas se determinan: 
          p.mb-0 #[b Límites:] la más pequeña y la más grande.  
          p.mb-0 #[b Frecuencia:] aumento de medida Talla a talla (secuencial y no secuencial -constantes y variables).  
          p.mb-4 #[b Incremento:] magnitud de crecimiento de la medida talla por talla
          p.mb-0 El análisis de los anteriores dará como resultado: valores, proporciones, rupturas de talla (para una, dos o hasta tres tallas base), valores: imágenes de referencia.
    
    
    h4(data-aos="fade") Proporciones
    p(data-aos="fade") Aumento secuencial estandarizado para el crecimiento o disminución de tallas, se encuentra identificando la diferencia en unidades de medida de talla a talla en cada línea de medida del cuerpo.
    p.mb-0(data-aos="fade") La fórmula estandarizada para hallar la proporción es: diferencia del Contorno mayor dividido en 4, de allí se encuentran las fracciones de la proporción. Ejemplo:
    ul.lista-ul--color.fa-ul.color-primario.ps-3.ps-md-4(data-aos="fade")
      li.mb-1 
        i.fas.fa-plus
        | 1 proporción será 1 cm.
      li.mb-1 
        i.fas.fa-plus
        | ½ proporción será 0,5 cm. 
      li 
        i.fas.fa-plus
        | ¼ proporción será 0,25 cm 1.5 proporción será 1,5 cm.
    p.mb-4(data-aos="fade") Permitiendo analizar el crecimiento vertical de las medidas de una talla.
    p.mb-0(data-aos="fade") Esta información es fundamental para el escalado de tallas y ajuste de los mismos sobre medidas:
    ul.lista-ul--color.fa-ul.color-primario.ps-3.ps-md-4(data-aos="fade")
      li.mb-1 
        i.fas.fa-plus
        | Cuadros de tallas
      li.mb-1 
        i.fas.fa-plus
        | Comparación de medidas
      li.mb-1 
        i.fas.fa-plus
        | Incremento entre talla y talla - tomar medida por medida y revisar el incremento que hay entre talla y talla.
      li 
        i.fas.fa-plus
        | Ruptura de talla - Identificar ruptura del cuadro de tallas, por medida y talla.
    p.mb-5 En el ejemplo, la ruptura esta entre la talla 14 y 16, porque se incrementa 6cms, rompiendo con los 4cms de las demás medidas.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Drop
    p.mb-4(data-aos="fade") Palabra técnica que indica la diferencia en centímetros entre dos medidas del cuerpo que nos permiten determinar la morfología de este: 

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/t1/imag25.svg', alt='')   
        h5.text-white Drop femenino
        p.text-white.mb-0 Diferencia entre cadera y contorno de Busto para la mujer.
        p.text-whiteContorno de cadera - Contorno de busto = DROP
        p.text-white Con el Drop se establecen las diferentes contexturas de una misma talla. En las mujeres, el Drop es la diferencia entre las medidas de Contorno de Cadera y Contorno de Busto. En las tallas femeninas predomina un Drop Positivo Generalmente una talla se considera normal cuando el Drop es positivo entre +2 cms y + 4cm. El Drop estándar Usado en Colombia es + 4cm. En las tallas extremas y altas el Drop se vuelve negativo. 
        h5.text-white.mb-0 Ejemplos:
        p.text-white.mb-0 Drop + 2 indica la medida de Cadera 2cms mayor que el Contorno de Busto.
        p.text-white.mb-0 El Drop 0 indica que la medida de Cadera es igual a la medida de Contorno de Busto.
        p.text-white.mb-0 El Drop - 4 indica que la medida de Cadera tiene 4 cms menos que el Contorno de Busto.         
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/t1/imag26.svg', alt='')   
        h5 Drop masculino
        p.mb-0 Diferencia entre la cintura y el pecho, para el hombre.
        p Contorno de cintura - Contorno de pecho = DROP
        p Diferencia entre la cintura y el pecho, para el hombre. Generalmente en tallas Masculinas predomina el Drop negativo, (más pecho que cintura), aunque al realizar una tabla de tallas (a mayor talle menos Drop) llegando en tallas extremas a ser positivo o sea un cuerpo con más cintura que pecho. 
        h5.mb-0 Ejemplos:
        p.mb-0 Un Drop -4 indica, una cintura con 4 pulgadas menos que la medida de pecho.
        p.mb-0 Un Drop O indica una cintura igual al pecho.
        p.mb-0 El Drop + 2 indica una cintura con 2 pulgadas que el pecho.

    p.mb-4(data-aos="fade") Acorde a cada tipo de silueta hay un Drop característico. 


    Separador
    #t_1_4.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.4 Patronaje
    
    p.mb-4(data-aos="fade") El patronaje es la representación en 2D (bidimensional) de un volumen en 3D (tridimensional) a través de la elaboración de planos, moldes o patrones de prendas de vestir para el cuerpo.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        img(src='@/assets/curso/temas/t1/caja.svg', alt='') 
    
    p.mb-4(data-aos="fade") El patronaje sirve para transferir la información de la estructura corporal en planos que luego se convierten en moldes
    img.mb-5(src='@/assets/curso/temas/t1/estructura.svg', alt='' data-aos="fade-down") 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Procedimientos del patronaje
    p.mb-4(data-aos="fade") Este proceso está compuesto por los siguientes pasos:
    
    AcordionA.t2-1.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row.justify-content-center(titulo="Paso 1: construcción de básicos")
        .col-md-3.col-8.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/acordion.svg', alt='')        
        .col-md-8.mb-4.mb-md-0
          p Los básicos se dividen en dos grupos: superior (básico superior + Manga) e inferior (básico de falda (alrededor de cadera desde cintura hasta rodilla), básico de pantalón (alrededor de cadera, y la base genital, desde cintura hasta el tobillo).
          p Los básicos son moldes anatómicos del cuerpo, es decir no son una prenda, son el punto de partida para hacerla. El básico superior en metodología SENA es un solo básico superior es decir cualquier tipo de prenda superior. En otras metodologías hay varios básicos: un solo tipo de prenda, básico de blusa/camisa, básico de chaleco, básico de chaqueta, básico de abrigo, básico de vestido, entre otros. 
          .row
            .col-lg-7
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/t1/icono.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.mb-0 #[b Recurso.] Básicos
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download      
      .row.justify-content-center.align-items-center(titulo="Paso 2: definición del diseño")
        .col-md-8.mb-4.mb-md-0
          p Por lo general la definición del diseño no está a cargo del patronista, sin embargo, es la base para definir que se va a desarrollar, es decir, poder hacer el análisis del tipo de prenda a patronar.
        .col-md-3.col-8
          img(src='@/assets/curso/temas/t1/acordion2.png', alt='')      
      .row.justify-content-center.align-items-center(titulo="Paso 3: análisis de la prenda (talla, básico, horma, material e insumos)")
        .col-md-3.col-8
          img(src='@/assets/curso/temas/t1/acordion3.png', alt='')        
        .col-md-8.mb-4.mb-md-0
          p Se analizan los factores necesarios para el desarrollo de la prenda, después de los básicos son el punto de partida para dar inicio al trazo del plano.
          .row
            .col-lg-9
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img.px-md-2(src="@/assets/curso/temas/t1/icono.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.mb-0 #[b Recurso.] Talla - Básico - Horma - Material.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download           
      .row.justify-content-center.align-items-center(titulo="Paso 4: construcción de planos")
        .col-md-4.mb-4
          img(src='@/assets/curso/temas/t1/acordion4.svg', alt='')        
        .col-md-7.mb-4
          p Según las características de la prenda y sus componentes los básicos deben organizarse para facilitar la comprensión de la prenda y simplificar su construcción. La recomendación de la metodología SENA es trabajar planos unidos. Estos se clasifican en:
          ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-4
            li.mb-1 
              i.fas.fa-plus
              | Plano separado.
            li.mb-1 
              i.fas.fa-plus
              | Plano sencillo
            li.mb-1 
              i.fas.fa-plus
              | Plano abierto completo.
            li.mb-1 
              i.fas.fa-plus
              | Plano abierto delantero o posterior.
            li.mb-1 
              i.fas.fa-plus
              | Plano montado (centro frente, sobre centro atrás).
            li 
              i.fas.fa-plus
              | Plano con unión de hombros.
        .row.justify-content-center.mb-5
          .col-lg-5
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 #[b Recurso.] Trazo de planos
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download            
        .bg11.p-5.mb-5
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h5 Ajuste al plano
              p Desahogos: son aumentos que se dan en algunas medidas de construcción para cumplir con los requerimientos de biomecánica del cuerpo de acuerdo con el tipo y uso de la prenda.
              p También conocidos como holgura, amplitud, flojo. Son medidas que se adicionan al básico para la construcción del plano, interpretación o desarrollo de la prenda. Los desahogos permiten la funcionalidad de las prendas sobre prendas.
              img.w-75(src='@/assets/curso/temas/t1/texto.svg', alt='') 
            .col-md-4
              img(src='@/assets/curso/temas/t1/acordion5.svg', alt='') 
        .row
          h5 Ejemplo de desahogos:
          ul.lista-ul--color.fa-ul.color-primario
            li 
              i.fas.fa-plus
              | Sistema de ajuste: permiten la horma final de la prenda sobre el cuerpo con pinzas y cortes. Son procedimientos de patronaje o complementos en la prenda, que permiten junto al material elegido, la horma final de la prenda sobre el cuerpo.
            li 
              i.fas.fa-plus
              | Sistema de cierre: mecanismos utilizados para facilitar el uso de la prenda, también llamados sistemas de acceso a la prenda permiten vestir y desvestir el cuerpo. Compuesto por: cremalleras, botones, broches y gafetes, cauchos, cintas y cordones, pasamanería, galones flecos y borlas, herrajes.
          .row.justify-content-center.align-items-center
            .col-lg-5
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/t1/icono.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.mb-0 #[b Recurso.] Desahogos
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download     
      .row(titulo="Paso 5: transformación de la base o interpretación del diseño")
        .col-lg-12
          .bg7
            p.text-center.text-white.mb-0 Se desarrolla de acuerdo a los siguientes niveles:
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.bg12.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/paso5-1.svg', alt='')
              p.text-center.mb-0 Análisis básico de prendas de vestir, sin ningún tipo de complejidad en el desarrollo.
            .col-md.tarjeta.bg22.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/paso5-2.svg', alt='')
              p.text-center.mb-0 Análisis intermedio de prendas de vestir, complejidad desde cortes, ajustes, complementos.
            .col-md.tarjeta.bg8.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/paso5-3.svg', alt='')
              p.text-center.mb-0 Análisis avanzado para la construcción de prendas de vestir, traslados, volúmenes, tridimensiones.             
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 #[b Recurso.] Diferencias Básicos
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download 
        .bg11.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-10.mb-4.mb-md-0
              h4.text-center Tipos de modificaciones y trazos
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  | Sencillo: Se traza en el patrón, los cortes, pinzas y complementos que hacen parte del diseño.
                li 
                  i.fas.fa-plus
                  | Cruzado: Las líneas de las amplitudes y cortes se cruzan dentro del patrón y se separan en el momento del despiece.
                li.mb-0
                  i.fas.fa-plus
                  | Cortando y ampliando: Se trazan los cortes y se da amplitud en el momento del despiece. La pieza se abre y se vuelve a trazar para un nuevo despiece. Trazo de planos (ejemplos visuales).
        .row.justify-content-center.align-items-center
          .col-lg-5
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 #[b Recurso.] Trazo de planos
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download 
      .row(titulo="Paso 6: despieces")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            ul.lista-ul--color.fa-ul.color-primario
              li.mb-1
                i.fas.fa-plus
                | El plano nunca se corta: este debe quedar archivado para hacer sobre las correcciones y ajustes cada pieza es 
              li.mb-0 
                i.fas.fa-plus
                | calcada y recortada separadamente.
            p.mb-5 En cada pieza se marcan: Señalización + Costuras + Complementos.
            h5 Despiece del plano
            ul.lista-ul--color.fa-ul.color-primario.mb-4
              li.mb-1 
                i.fas.fa-plus
                span.mb-0 #[b Señalización:] información de corte y producción, que debe marcarse en cada patrón 
              li.mb-1 
                i.fas.fa-plus
                span.mb-0 #[b Costuras:] medida que se adiciona al borde de las piezas que se ensamblan; varía de acuerdo con la maquinaria o acabado
              li.mb-0 
                i.fas.fa-plus
                span.mb-0 #[b Complementos:] plantillas, información y/o medidas que se adiciona para sistemas de ajuste, cierre o acabados.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/acordion6.png', alt='')
          .col-lg-11  
            p #[b Señalización:]   Hilo de tela
            p.mb-0 Hilo de la tela" o "sentido del hilo" corresponde a la dirección que siguen los moldes sobre el material textil.
            p Los tejidos planos se forman por hilos longitudinales (urdimbre) que se cruzan con hilos transversales (trama) formando un perfecto ángulo de 90°.
            ul.lista-ul--color.fa-ul.color-primario.mb-5
              li.mb-1 
                i.fas.fa-plus
                | Tipos de hilos: De acuerdo con las cualidades del textil y necesidades de aprovechamiento se elige el hilo a trabajar.
              li.mb-0 
                i.fas.fa-plus
                | Márgenes de costura: De acuerdo con las cualidades del textil y necesidades de aprovechamiento se elige el hilo a trabajar..bg12        
        .row.mb-4
          .col-lg-6.pe-md-0
            .bg12.p-4.h-100
              .row
                .col-md-5.col-9.mb-3.mb-md-0
                  img(src='@/assets/curso/temas/t1/hilos.png', alt='')
                .col-md-6 
                  h5 Hilos de tela:
                  ul.lista-ul--color.fa-ul.color-primario.mb-0
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela al hilo.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela por trama.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela al bies.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela una cabeza hacia arriba.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela una cabeza hacia abajo.
                    li.mb-0 
                      i.fas.fa-plus
                      | Hilo de tela cabeza doble.
          .col-lg-6.ps-md-0
            .bg8.p-4.h-100
              .row
                .col-md-5.col-9.mb-3.mb-md-0
                  img(src='@/assets/curso/temas/t1/parche.svg', alt='')
                .col-md-6 
                  h5 Ubicación de hilos de tela:
                  ul.lista-ul--color.fa-ul.color-primario.mb-0
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilos de urdimbre - Hilos de trama.   
                    li.mb-1 
                      i.fas.fa-plus
                      | Una cabeza hacia arriba 
                    li.mb-1 
                      i.fas.fa-plus
                      | Una cabeza hacia abajo.  
                    li.mb-1 
                      i.fas.fa-plus
                      | Una cabeza doble.  
                    li.mb-0 
                      i.fas.fa-plus
                      | Doblez de tela.  
        .row
          .col-lg-5.mb-3.mb-lg-0
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 #[b Recurso.] Hilos de tela
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download 
          .col-lg-7
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.px-lg-3(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 #[b Recurso.] Almohada de corazón. Ref: Código 001. Diseño de corazón. 
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download 
      .row.justify-content-center.align-items-center(titulo="Paso 7: trazo y corte")
        .col-md-9
          p Se marcan las piezas sobre el material teniendo en cuenta las indicaciones y se procede a cortar las piezas teniendo en cuenta los márgenes de costura. De acuerdo con el tipo de material, se marca el textil o se sujetan con alfileres los patrones o transfiere la marca con la rodaja. Se corta la muestra en el textil elegido.
        .col-md-2.col-8
          img(src='@/assets/curso/temas/t1/acordion7.svg', alt='')        
      .row.justify-content-center.align-items-center(titulo="Paso 8: confección de muestra física")
        .col-md-9
          p Se ensambla la muestra física o primer prototipo del diseño.
        .col-md-2.col-8
          img(src='@/assets/curso/temas/t1/acordion8.png', alt='')        
      .row.justify-content-center.align-items-center(titulo="Paso 9: verificación de muestra física")
        .col-md-3.col-8.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/acordion9.svg', alt='')
        .col-md-8
          p Se verifica que la muestra coincida con lo proyectado en el diseño inicial.      
      .row.justify-content-center.align-items-center(titulo="Paso 10: corrección y/o ajustes de la muestra física sobre el plano")
        .col-md-8
          p Se realizan los ajustes al patrón, de acuerdo con lo verificado en la muestra física. Es posible que se requieran ajustes complejos que incluyan de pinzas, desahogos, cortes, reubicación de líneas, etc. O en otros casos pequeños ajustes para lograr el fit ideal proyectado en el diseño inicial.
        .col-md-3.col-8
          img(src='@/assets/curso/temas/t1/acordion10.png', alt='')      
      .row.justify-content-center.align-items-center(titulo="Paso 11: verificación del nuevo despiece")
        .col-md-3.col-8.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/acordion11.png', alt='')
        .col-md-8
          p Se realiza el nuevo despiece del diseño de acuerdo con los ajustes y correcciones.      
      .row.justify-content-center.align-items-center(titulo="Paso 12 y 13: contramuestra o prototipo final - Validación de la prenda")
        .col-md-8
          p Se realiza este paso y los anteriores todas las veces necesarias hasta obtener el producto exacto que fue proyectado.
        .col-md-3.col-8
          img(src='@/assets/curso/temas/t1/acordion12.png', alt='')      
      .row.justify-content-center.align-items-center(titulo="Paso 14: industrialización del patrón")
        .col-md-3.col-8.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/acordion14.png', alt='')
        .col-md-8
          p En los procesos industrializados, es en este paso donde se proyectan las escalas de tallas y se digitalizan los patrones ya probados para su reproducción en serie.
      .row.justify-content-center.align-items-center(titulo="Paso 15: documentación técnica")
        p.text-center Información de desarrollo del producto para ficha técnicas materiales, medidas, tallas, acabados, etc.
        .col-lg-6
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.px-lg-2(src="@/assets/curso/temas/t1/icono.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0 #[b Recurso.] Documentación Técnica
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download 
          

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Metodología - Presentación del manual de patronaje SENA  

    p.mb-4(data-aos="fade") Es necesario conocer y manejar las diferentes simbologías, que facilitan los procesos técnicos de patronaje y corte. Algunos de estos símbolos permiten entender fácilmente las gráficas de construcción, eliminando el uso de textos y referencias alfanuméricas. Otros indican de qué manera están aplomados los patrones despiezados para su corte. Es importante anotar que, en el momento de despiezar el patrón, para su identificación, cada pieza debe estar marcada así:
    ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-4(data-aos="fade")
      li.mb-1 
        i.fas.fa-plus
        | Nombre de la pieza
      li.mb-1 
        i.fas.fa-plus
        | Referencia
      li.mb-1 
        i.fas.fa-plus
        | Talla
      li.mb-1 
        i.fas.fa-plus
        | Nombre del patronista
      li.mb-1 
        i.fas.fa-plus
        | Simbología para corte
      li.mb-1 
        i.fas.fa-plus
        | Número de veces a cortar
      li.mb-1 
        i.fas.fa-plus
        | Piquetes de confección
      li 
        i.fas.fa-plus
        | Líneas de aplome

    p(data-aos="fade") Otras especificaciones: se pueden anexar datos de estampación, cambios de color o material, acabados especiales, ubicación de bolsillos, etc. en la siguiente página, encontrara claves geométricas de indispensable compresión en el trazo de patrones.
    p.mb-4(data-aos="fade") Para profundizar en esta temática realice la lectura del Manual de patronaje SENA.
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Manual de Patronaje SENA
                  p.text-small.mb-0 Revisa el documento para aprender más sobre manual de Patronaje SENA
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador
    #t_1_5.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.5 Elaboración de básicos infantil

    p.mb-4(data-aos="fade") Este proceso está diseñado para iniciar siempre desde los básicos en la metodología SENA, desarrollado de la siguiente forma:

    SlyderF.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10.text-white
          .p-4
            h5.text-center Tipo de plano
            p  Identificar qué tipo de plano se va a trabajar, si es un plano unido, separado o montado.      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10.text-white
          .p-4
            h5.text-center Rectángulo
            p Todo básico inicia siempre desde un rectángulo, el cual se traza con la medida de contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10.text-white
          .p-4
            h5.text-center Medida más larga a trabajar
            p El largo inicial del rectángulo se trabaja con la medida más larga de la parte del cuerpo a trabajar, por ejemplo en el pantalón es: largo de pantalón, en la falda: altura de rodilla, en el superior: largo de talle posterior.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10.text-white
          .p-4
            h5.text-center Medida en el trazo
            p Las medidas que se trabajan en la metodología en algunos casos únicamente se saca del cuadro de talla, la medida de contorno y largo, no se trabajan medidas como hombro, anchos, cuello y demás. Dichas medidas salen por formula o como se trabaja en temas anteriores por medidas deducidas.
            p.mb-0 En infantil la medida de cuello posterior equivale a:
            p.mb-0 B/20+2.5 = B (Contorno de pecho) / 20 + 2.5
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10.text-white 
          .p-4
            h5.text-center Manejo del papel
            p Por lo general el trazo de moldes se suele hacer con papel trazo o manifold, dicho papel tiene dos caras, una cara que al tacto es liso y visualmente brillante; otra que al tacto es corrugada y visualmente opaca. Por lo general se recomienda trabajar por la parte corrugada con el fin de tener una mejor adhesión del grafito (lápiz) y de no permitir que rebote la luz, es recomendable trabajar en papel blanco con el fin de no cansar la vista y descansar la me
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10.text-white
          .p-4
            h5.text-center Medida más protuberante a trabajar
            p Por lo general el manual trabaja con fórmulas o convenciones, en la mayoría de los casos la medida más protuberante es sustituida por una letra, por ejemplo, en infantil, contorno de pecho (medida más protuberante de la cintura para arriba) equivale o es igual a la letra “B”.
            p.mb-0 B = Contorno de pecho de la talla a trabajar.
            p.mb-0 Talla 6: B = 68Cm (Contorno de pecho del cuadro de tallas correspondiente a la talla 6).

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base superior infantil
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar el patrón básico de niño paso a paso.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Base superior infantil 
                  p.text-small.mb-0 Revisa el documento para aprender más sobre base superior infantil 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior falda infantil
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar el patrón de una falda paso a paso.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Patrón falda paso a paso
                  p.text-small.mb-0 Revisa el documento para aprender más sobre patrón falda paso a paso
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior pantalón infantil
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar el patrón de base de pantalón:

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Pantalón infantil
                  p.text-small.mb-0 Revisa el documento para aprender más sobre pantalón infantil
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    
    Separador
    #t_1_6.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.6 Elaboración de básicos masculinos

    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar la elaboración de básicos masculinos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Básicos masculinos
                  p.text-small.mb-0 Revisa el documento para aprender más sobre básicos masculinos
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base superior masculina Slim-fit
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar la elaboración de básicos superiores masculinos Slim-Fit

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Básicos superiores masculinos Slim-fit
                  p.text-small.mb-0 Revisa el documento para aprender más sobre básicos superiores masculinos Slim-fit
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior pantalón masculino
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar la elaboración de base inferior de pantalón masculino:

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Base inferior pantalón masculino
                  p.text-small.mb-0 Revisa el documento para aprender más sobre base inferior pantalón masculino
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    
    Separador
    #t_1_7.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.7 Elaboración de básicos femeninos
    
    p.mb-4(data-aos="fade") Cómo se referencia en temas anteriores, se debe iniciar revisando y analizando el cuadro de tallas para identificar: la talla, las medidas, incrementos y diferencias que se va a trabajar. El desarrollo de básicos funciona de la siguiente forma:
    
    ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-4.mb-5(data-aos="fade")
      li 
        i.fas.fa-plus
        span.mb-0 #[b Tipo de plano:] identificar qué tipo de plano se va a trabajar, si es un plano unido, separado o montado.
      li 
        i.fas.fa-plus
        span.mb-0 #[b Rectángulo:] todo básico inicia siempre desde un rectángulo, el cual se traza con la medida de contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
      li 
        i.fas.fa-plus
        span.mb-0 #[b Cuadro de tallas:] en el caso de femenino, para la elaboración de los básicos se trabaja con las medidas del cuadro de tallas, es decir cada punto de referencia sobre el cuerpo es trabajado del cuadro de tallas, a diferencia de lo anterior, este desarrollo hace necesario identificar todo el listado de las medidas que se van a implementar para hacer el desarrollo.
      li 
        i.fas.fa-plus
        span.mb-0 #[b Manejo del papel:] por lo general el trazo de moldes se suele hacer con papel trazo o manifold, dicho papel tiene dos caras, una cara que al tacto es liso y visualmente brillante y otra que al tacto es corrugada y visualmente opaca, por lo general se recomienda trabajar por la parte corrugada con el fin de tener una mejor adhesión del grafito (lápiz) y de no permitir que rebote la luz, es recomendable trabajar en papel blanco con el fin de no cansar la vista y descansar la mente.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base superior femenina
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar el patrón base espalda:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Patrón base espalda
                  p.text-small.mb-0 Revisa el documento para aprender más sobre patrón base espalda
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior falda femenina
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar el patrón base de falda una pinza:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Patrón base de falda una pinza
                  p.text-small.mb-0 Revisa el documento para aprender más sobre patrón base de falda una pinza
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior pantalón femenino
    p.mb-4(data-aos="fade") Para conocer acerca de este proceso visualiza el siguiente video:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4(data-aos="fade") A continuación puede consultar el patrón base de pantalón:

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo. Patrón base de pantalón
                  p.text-small.mb-0 Revisa el documento para aprender más sobre patrón base de pantalón
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

           
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
