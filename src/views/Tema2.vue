<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Alistamiento para elaboración de muestra física 1
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/cajong.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En primer lugar se abordarán las generalidades, aplicaciones e importancia de la fundamentación técnica básica en reconocimiento y manejo de máquinas de confección; conceptos básicos en puntadas, costuras, agujas, tejidos, entre otros criterios específicos de la relación aguja-hilo, aguja-tejido, hilo-tejido, preparación y puesta a punto de las máquinas, especificaciones técnicas y de calidad en las operaciones de confección. De igual manera se abordarán temas pertinentes al cuidado y seguridad de las diferentes máquinas de confección. 
    
    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.1 Tipos de máquinas
    
    p.mb-4 La identificación de máquinas y equipos en la industria de la confección es crucial para optimizar, facilitar y organizar los diversos procesos involucrados. Esta identificación define las características específicas de cada máquina, incluyendo sus usos en el proceso de confección, los tipos según las líneas de producción, las variedades de puntadas y aplicaciones, los tipos de tomadores de lazada, y los sistemas de alimentación o arrastre de tela.
    p.mb-4 Las máquinas se pueden clasificar según los procesos productivos en los que se utilizan, como la preparación, el ensamble y la terminación. Además, se agrupan según las líneas de producción, tales como prendas interiores, exteriores, jeans, artículos para el hogar, y ropa deportiva. También se pueden categorizar por tipos específicos de máquinas, como las de doble pespunte, cadeneta, sobrehilado y de ciclo.
    p.mb-4 Por tanto, la clasificación de las máquinas comienza por su capacidad en el proceso de confección. En función de la potencia que tienen para coser diferentes materiales y su velocidad, las máquinas se dividen en diversas categorías que reflejan su rendimiento y eficiencia en la producción.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Máquinas familiares o domésticas")
        .col-md-6
          img(src='@/assets/curso/temas/t2/maquina.png', alt='')
        .col-md-6.mb-4.mb-md-0
          p Máquinas que por su versatilidad poseen las siguientes características
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Muy baja velocidad (500 a 1000 rpm)
            li 
              i.lista-ul__vineta
              | Muy baja potencia
            li 
              i.lista-ul__vineta
              | Facilidad para desplazarlas (portátiles en su gran mayoría)
            li 
              i.lista-ul__vineta
              | Lubricación manual
            li 
              i.lista-ul__vineta
              | Materiales de sus elementos (en la gran mayoría de plástico)
            li 
              i.lista-ul__vineta
              | Diversas puntadas: costura recta, Zigzag 1 y 3 pasos, ojal recto, pegar botón, algunas pueden hacer puntadas decorativas.
      .row(titulo="Máquinas semi-industriales")
        .col-md-6
          img(src='@/assets/curso/temas/t2/maquina2.png', alt='')
        .col-md-6.mb-4.mb-md-0
          p Sus características se acercan más a la industria, pero todavía no alcanza el rendimiento productivo:
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Velocidad. (1725 rpm)
            li 
              i.lista-ul__vineta
              | Potencia media, permite coser mayores capas de material que las familiares.
            li 
              i.lista-ul__vineta
              | Lubricación manual en la gran mayoría de casos (en la actualidad vienen con bomba de lubricación).
            li 
              i.lista-ul__vineta
              | Diversidad de puntadas: costura recta, Zigzag sencillo, ojal recto, pegar botón, pegar apliques.
      .row(titulo="Máquinas industriales")
        .col-md-6
          img(src='@/assets/curso/temas/t2/maquina3.png', alt='')
        .col-md-6.mb-4.mb-md-0
          p Con estos tipos de máquinas, se inicia en el mundo de la productividad, calidad, optimización de recursos en la diversa actualidad del sistema moda, entre sus características están:
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Velocidad, llegan a alcanzar hasta 6,000 R.P.M.
            li 
              i.lista-ul__vineta
              | Potencia alta permite trabajar capas de material por su gran capacidad de penetración de los mecanismos de puntada.
            li 
              i.lista-ul__vineta
              | Lubricación automática.
            li 
              i.lista-ul__vineta
              | Existen maquina industriales como: zigzag sencillo, doble o triple, plana de una y dos agujas, de coser y cortar fileteadoras sencillas, de refuerzo/seguridad, recubridoras o collarín, pretinadora, multiagujas, cerradora de codo, Flatseamer, entre otras.
      .row(titulo="Máquinas de ciclo")
        .col-md-6
          img(src='@/assets/curso/temas/t2/maquina4.png', alt='')
        .col-md-6.mb-4.mb-md-0
          p Son aquellas que están construidas para cumplir una función específica en un ciclo como hacer un ojal, pegar un botón o un aplique, hacer una presilla entre otras. En este tipo de máquina, el operador solo tiene que ubicar el material, accionar un mando y la máquina en un ciclo realiza la operación. Entre las comunes están:
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Presilladora
            li 
              i.lista-ul__vineta
              | Botonadora
            li 
              i.lista-ul__vineta
              | Ojaladora de ojal recto
            li 
              i.lista-ul__vineta
              | Ojaladora de ojal de lagrima

    p.mb-4 Con base en los diferentes tipos de máquinas por estructura, tipo o trabajo, las partes del cabezote se dividen en cuatro y es importante describirlas porque es donde se aloja el conjunto de elementos mecánicos que dan origen a los mecanismos de las máquinas, estas partes se conocen como:
    //Listado horizontal
    p.mb-4 Y es, esta última, la que cobra vital importancia en el origen de las operaciones más relevantes de un producto a confeccionar, bien sea, por su dificultad, complejidad, tiempo de producción, calidad, entre otros. Algunos tipos de máquinas pueden modificar la cama e incluso el mueble de la máquina para adaptarse mejor a las condiciones del producto, es por ello por lo que si se trabaja con prendas de gran volumen podemos encontrar términos en máquinas como:
    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta.png' alt='')
          .tarjeta.bg12
            .p-4
              h5.text-center Máquina sumergida
              p.text-center Cuando la cama de la máquina queda al mismo nivel del mueble de la máquina.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta2.png' alt='')
          .tarjeta.bg7
            .p-4
              h5.text-center.text-white Máquina semi-sumergida
              p.text-white Son las máquinas más comunes, el cárter o depósito de aceite se encuentra dentro del mueble y la cama de la máquina más arriba del mueble, su principal beneficio es el contorno de todo el mueble para usos de prendas de talla grande.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta3.png' alt='')
          .tarjeta.bg12
            .p-4
              h5.text-center Máquina no sumergida
              p.text-center Este concepto refiere a que la máquina está totalmente montada en el mueble, por aspectos de terminación de las prendas.
    
    p.mb-4 Retomando el aspecto más importante sobre las camas de las máquinas, se clasifican en:
    
    .row.mb-5
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t2/tarjeta4.png', alt='')
          h4.text-center Plana
          p.text-small Este tipo de cama facilita la manipulación del material en costuras de cocido recto y materiales anchos.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t2/tarjeta5.png', alt='')
          h4.text-center Cilíndrica o de brazo
          p.text-small Permite coser partes cilíndricas en su perímetro, su estructura es especialmente adecuada para trabajar piezas tubulares tales como puños, mangas, materiales cerrados entre otros. Este tipo de cama también se emplea en la máquina de pegar botones
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t2/tarjeta6.png', alt='')
          h4.text-center Cilíndrica transversal o de codo
          p.text-small La zona cosida es transportada a lo largo del brazo hacia fuera. Permite coser partes cilíndricas o tubulares, operaciones tales como cerrar mangas, cerrar piernas de pantalón o Jean, entre otros.
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t2/tarjeta7.png', alt='')
          h4.text-center Poste
          p.text-small Se emplea en aplicaciones especiales que requieren el trabajo en tres dimensiones. La columna facilita el trabajo en zonas curvas y en esquina. Operaciones de marroquinería como confección de calzado y bolsos, entre otros. 
      .col-sm-6.col-lg-2.mb-4.mb-lg-0
        .tarjeta--boton.bg8.p-4
          .row.justify-content-center.mb-3
            .col-7
              img(src='@/assets/curso/temas/t2/tarjeta8.png', alt='')
          h4.text-center Tipo zócalo
          p.text-small Este tipo de máquina se especializa en coser sólo al canto de costura. Costuras elásticas y de sobrehilado. 
    
    .row.mb-5.justify-content-center
      .bloque-texto-b
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          h4.mb-0 Este tipo de cama facilita la manipulación del material en costuras de cocido recto y materiales anchos.
          i.fas.fa-quote-right
    
    p.mb-4 En este punto, teniendo clara la descripción de las camas de las máquinas y contemplando que pueden cambiar por varios factores, uno de ellos por sus aplicaciones, bien sea en confección de ropa, de calzado, en marroquinería o tapicería, se continuará con las partes de la máquina.

    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.2 Partes de la máquina
    
    p.mb-4 Durante el proceso de reconocimiento de las máquinas por su capacidad de confección, ahora entran aspectos generales y otros particulares sobre los diferentes tipos de máquinas que se trabajarán a continuación.
    
    SlyderF.mb-5(columnas="col-lg-10")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t2/slyder.png' alt='')
          .col-6
            h5.text-center Aspectos generales:
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Porta conos
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Cabezote o cabeza de la máquina  
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Mueble 
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Herraje
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Motor
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Interruptor
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | Pedal
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          h5.text-center Aspectos particulares
          p Algunas partes de las máquinas, se construyen con aspectos particulares, esto se debe a la posición, la forma y la función que cumple dentro de la máquina. Por ejemplo: el regulador de puntada en las máquinas planas y fileteadoras, cumple la misma función, pero no se mueve igual y no se encuentran en la misma posición; sin embargo, se hablará de algunos elementos importantes dentro de la formación de la puntada, tales como:
        .row.justify-content-center.mb-3
          .col-lg-2
            h5.texto1 Tensores
            p  este mecanismo tiene como función regular la tensión del hilo de la aguja y controlar la alimentación del hilo para la formación de la puntada.
          .col-lg-2
            h5.texto1 Guía hilos
            p  sirve para guiar el hilo durante todo su recorrido
          .col-lg-2
            h5.texto1 Palanca tira hilo
            p  es un dispositivo que tira la cantidad de hilo justa de la aguja desde su suministro. Suelta la cantidad necesaria para la formación de la puntada y saca el hilo sobrante para fijar las puntadas
          .col-lg-2
            h5.texto1 Regulador de puntada
            p  regula el tamaño de la puntada, mientras menos es él número más pequeña es la puntada
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-lg-2
            h5.texto1 Tornillo regulador presión prénsatelas
            p  este tornillo sirve para regular la presión que hay entre él prénsatelas y la alimentación.
          .col-lg-2
            h5.texto1 Barra de aguja
            p  su movimiento es rectilíneo vertical, sostiene la aguja en posición.
          .col-lg-2
            h5.texto1 Ajuste (diente, planchuela, prénsatela)
            p  elementos que se ajustan a cada tipo de material o tejido, bien sea liviano, semi pesado o pesado.
          .col-lg-2
            h5.texto1 Barra prénsatela
            p  barra que sujeta el prénsatela o pie de la máquina.           
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video        

    p.mb-4 En la industria de la confección, la diversidad de materiales como telas, hilos, agujas, y otros, junto con los diseños que evolucionan constantemente según las temporadas, requiere un conocimiento profundo y adaptativo. Los artículos varían desde ropa interior y de hogar hasta calzado, ropa exterior, carpas protectoras, velas de viento, maletas y estuches. Para cada uno de estos productos, es crucial selección
    p.mb-4 Este ajuste es fundamental para resolver problemas comunes como el deslizamiento de la tela y el fruncido de la costura. Entender los tipos y funciones de los alimentadores y prénsatelas es esencial para manejar adecuadamente el desplazamiento de los materiales y prevenir dificultades relacionadas con una elección en
    p.mb-4 Existen dos tipos principales de ajuste en la confección. El primero se aplica a máquinas de una sola aguja y a máquinas de dos o más agujas, permitiendo adaptar las máquinas al tipo de material que se va a trabajar, ya sea ligero (como lycras), semipesado (como dacrón) o pesado (como jean). El segundo tipo de ajuste regula la distancia entre las agujas, introduciendo así otro elemento crítico en el ensamblaje: el soporte de las agujas. Fundamentalmente, el ajuste influye en cómo el diente de la máquina agarra el tipo de tela, lo cual es decisivo para el rendimiento de la costura. A continuación, se detalla cada componente del ajuste para una comprensión más completa de su impacto en la confección.
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--blanca")
      .row(titulo="Ajuste de plana")
        img(src='@/assets/curso/temas/t2/acordion.png', alt='')

      .row(titulo="Ajuste de máquina dos agujas")
        img(src='@/assets/curso/temas/t2/acordion2.png', alt='')

      .row(titulo="Planchuelas fileteadoras")
        img(src='@/assets/curso/temas/t2/acordion3.png', alt='')

      .row(titulo="Ajuste recubridora en D")
        img(src='@/assets/curso/temas/t2/acordion4.png', alt='')

      .row(titulo="Ajuste recubridora en F")
        img(src='@/assets/curso/temas/t2/acordion5.png', alt='')
      
      .row(titulo="Diente")
        p.mb-4 Este dispositivo mecánico es el encargado de desplazar el material a coser; el diente para poder desplazar el material debe sujetarlo, esa función la realiza con la parte superior que hace contacto con la tela y en el momento que comienza a transportarlo por efecto de la fricción la tela se incrusta entre la separación de los dientes y es así como el diente desplaza el material.
        p.mb-4 Los dientes vienen de diferentes tamaños, para diferenciarlos se debe medir la cantidad de dientes que haya en una pulgada o la separación existente entre ellos, si se mide en mm (milímetros). Para seleccionar los dientes se debe tener en cuenta el material a confeccionar.
        .row.bg13.mb-4
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura.svg', alt='')
          .col-lg-6
            p Los dientes se identifican de, 16,18, 20 y 24 dientes por pulgada para telas tejidas normales, para materiales compactos como el cuero y lonas se identifican dientes hasta de 2.5mm de separación, también se identifican piramidales, cuando supera los 24 dientes por pulgada como en las familiares. Además, se debe tener en cuenta la cantidad de hileras del diente.
        .row.mb-4
          .col-lg-6
            p.mb-4 Cuando se selecciona el diente inadecuado puede suceder lo siguiente.
            p Si la separación del diente es grande y el material delgado, cuando el diente transporta la tela esta se incrusta entre el diente haciendo olas, dando como resultado una costura con recogido.
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura2.svg', alt='') 
        .row.bg13.mb-4
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura3.svg', alt='')
          .col-lg-6
            p Si la separación del diente es pequeña y el material grueso, cuando el diente transporta, la tela no es sujetada por el diente ocasionando pega y daños en el material.
      
      .row(titulo="Prénsatelas")
        p.mb-4 Es el encargado de apoyar el material contra el diente para que pueda ser transportado, la presión que se le debe dar al prénsatelas varía de acuerdo con el material, porque si la presión no es la adecuada la apariencia de la costura no es la requerida.
        p.mb-4 Se debe tener en cuenta que el prénsatelas solo hace contacto con la tela superior, problemas por una presión inadecuada en el prénsatelas:
        ul.lista-ul--color
          li
            i.lista-ul__vineta
            | Cuando la presión es demasiada el diente en su ascenso puede dañar la tela, o como la fricción con la tela superior es demasiada al terminar la costura la tela superior es más extensa que la inferior con una apariencia lisa por encima y recogida por debajo.
        ul.lista-ul--color
          li
            i.lista-ul__vineta
            | Cuando la presión es poca, la tela no alcanza a incrustarse en el diente ocasionando que esta se pegue y varía la cantidad de puntadas por pulgada. 
        p #[b Nota:] el ancho de la base del pie prénsatelas debe de ser igual al ancho del diente y cubrirlo en un 90% de su recorrido.
      
      .row(titulo="Planchuela")
        .row.bg13
          p Es el elemento que sirve de apoyo al material cuando el diente se encuentra regresando, además viene provista de un orificio que es el lugar de penetración de la aguja, este orificio varía de acuerdo al ajuste pues él debe de ser un 40% más amplio que la hoja de la aguja. La planchuela tiene carriles, estos deben ser iguales al número de carriles del diente además el diente debe de desplazarse en la totalidad del carril de la plancha.
      
      .row(titulo="Tomador de lanzada")
        p Es el elemento mecánico que junto con la aguja se encarga de formar la puntada. Estos elementos son auxiliados algunas veces en la formación de la puntada por otros elementos mecánicos. Los más reconocidos son:
        .row.bg13.mb-4
          h5.text-center Clases de tomadores de lazada
        .row.mb-4
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura4.svg', alt='')
          .col-lg-6
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | #[b Gancho rotatorio:] es un elemento mecánico que, junto con la aguja, sirve para formar las puntadas pertenecientes a la serie 300 (doble pespunte) dando revoluciones completas.
        .row.mb-4.bg14
          .col-lg-6
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | #[b Corchete:] este elemento es utilizado para producir la puntada de cadeneta a un hilo, siempre da revoluciones completas, si la máquina tiene alimentación, trabaja sólo con la aguja, pero si esto sólo tiene transporte, necesita de un elemento auxiliar llamado extensor, para compensar la falta del alzador en máquina. 
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura5.svg', alt='')
        .row.mb-4
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura6.svg', alt='')
          .col-lg-6
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | #[b Extensor:] este elemento mecánico es utilizado en la mayoría de las veces como auxiliar de los Looper, corchetes, para formar varios tipos de puntadas de diferentes series.
        .row.mb-4.bg14
          .col-lg-6
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | #[b Looper:] es un elemento que tiene hilo propio o sea se puede enhebrar como las agujas, es decir tiene ojo.  Se usa para la elaboración de las puntadas de las series 400, 500, 600. 
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura6.svg', alt='')
        
        .row.mb-4
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura7.svg', alt='')
          .col-lg-6
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | #[b Recubridor:] elemento mecánico que sin llevar ojo guía para el hilo, si lleva hilo, el cual extiende sobre la tela superior al formar la puntada de cadeneta con recubridor, dicho hilo es sostenido por el hilo de la aguja, cada que el material avance. Ejemplo: La puntada utilizada en algunas prendas interiores tanto para dama como para hombre, usada para unir el resorte con la tela.

        .row.mb-4.bg14
          .col-lg-6
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | #[b Lanzadera:] es un elemento mecánico que, junto con la aguja, sirve para formar las puntadas pertenecientes a la serie 300 (doble pespunte), su movimiento es oscilatorio. 
          .col-lg-6
            img(src='@/assets/curso/temas/t2/figura8.svg', alt='')
    
    Separador
    #t_2_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.3 Alimentación o transporte (arrastre)
    
    p.mb-4 La relación entre el ajuste y el sistema de alimentación o transporte es un factor clave en la diferenciación de maquinaria dentro del proceso productivo. Los distintos tipos de alimentación determinan la línea productiva específica del artículo a fabricar, influyendo también en la variedad de materiales utilizados en la industria, como tejidos, no tejidos, aglomerados, cueros, cuerinas y lonas.
    p En la maquinaria de confección, la alimentación se refiere al movimiento del material que se va a coser. Sin embargo, en ciertos casos, como en la fabricación de colchones donde el material es demasiado pesado, no se desplaza el material sino la misma máquina.

    SlyderF.mb-5(columnas="col-lg-4" data-aos="fade-down")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t2/circulo.svg' alt='')
        .tarjeta.color-acento-botones
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pasos.svg' alt='')
            p.mb-4 Este tipo de alimentación lo realiza el diente siguiendo cuatro pasos y solo la secuencia se invierte cuando se remata, los pasos son los siguientes.
            p.mb-0 #[b Paso 1:] el diente sube y aparecen justamente encima de la pancha de aguja.   
            p.mb-0 #[b Paso 2:] los dientes desplazan el material a coser.
            p.mb-0 #[b Paso 3:] los dientes decienten hasta la parte inferior de la plancha.
            p.mb-4 #[b Paso 4:] los dientes se regresan por la parte inferior de la plancha.
            p #[b Nota:] este tipo de alimentación lo utilizan la mayoría de las máquinas.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t2/circulo2.svg' alt='')
        .tarjeta.color-acento-botones
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pasos2.svg' alt='')
            p.mb-4 Este tipo de alimentación es realizada por el diente y la aguja, o sea que la barra de aguja también tiene cuatro pasos y se combinan con el diente para desplazar el material.
            p #[b Nota:] Este tipo de alimentación es más utilizado en las máquinas de dos agujas.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t2/circulo3.svg' alt='')
        .tarjeta.color-acento-botones
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pie.svg' alt='')
            p.mb-4 Las máquinas que tienen este tipo de alimentación, visualmente parece que tuvieran un prénsatelas dividido en dos partes, pero solo al accionarla se observa que la mitad del pie se levanta y hace un movimiento al unísono con el diente para desplazar el material a coser, este diente superior tiene cuatro pasos como lo hace la barra de aguja en la alimentación combinada, la diferencia es que el diente no penetra en el otro, sino que es por contacto con el material que este lo desplaza.
            p #[b Nota:] Este tipo de alimentación es muy utilizado en las máquinas de guarnecer.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t2/circulo4.svg' alt='')
        .tarjeta.color-acento-botones
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pie2.svg' alt='')
            p Es el tipo de alimentación más pesado que se conoce, son tres los encargados de desplazar el material a coser, y es la combinación de todas las anteriores. El material es desplazado por diente inferior, aguja y diente superior.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t2/circulo5.svg' alt='')
        .tarjeta.color-acento-botones
          .p-4
            p Este tipo alimentación como su nombre lo dice es constante, o sea que el material no se detiene siempre está siendo desplazado en el momento de costura, es empleado principalmente en algunas máquinas autómatas como la ojaladora sencilla y en máquinas automáticas como las ribeteadoras y pagadoras de bolsillo.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t2/circulo6.svg' alt='')
        .tarjeta.color-acento-botones
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/alimentacion.svg' alt='')
            p.mb-4 Aquel que está formado por un par de dientes independientes, con movimiento propio cada uno de ellos, su sincronización es idéntica oscilante sencillo, se utiliza para hacer que uno de los dientes tenga un mayor o igual recorrido que el otro de acuerdo con las necesidades, ya sea para recoger o estirar la tela.
    
    Separador
    #t_2_4.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.4 Generaciones de máquinas
    
    p.mb-4 En esa búsqueda de reconocer e identificar los diferentes tipos de máquinas, tipos de camas, ajustes, partes y funciones, se encuentran las generaciones tecnológicas dentro de las cuales presentan mejores alternativas al proceso de confección para poder aumentar o disminuir áreas de costura, tipos de puntadas, fruncidos de tela, entre otros. Actualmente las máquinas de coser se pueden clasificar en tres tipos según el nivel tecnológico:
    
    .row
      .col-lg-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag.png' alt='')
          .tarjeta.tarjeta--morado
            .p-4
              p #[b Máquinas de primera generación:] máquinas convencionales sin ningún tipo de ayudas, en este tipo de máquinas el operador realiza el 90% de las operaciones de la máquina como: levantar el prénsatelas, posicionar la aguja para retirar el material, cortar los hilos, hacer atraques y otras operaciones más.
    
    .row
      .col-lg-12  
        .tarjeta-avatar-b.mb-5
          .tarjeta.tarjeta--morado
            .p-4
              p #[b Máquinas de Segunda generación:] en este tipo de máquinas el operador realiza el 50% de las operaciones, debido a que las máquinas vienen provistas con ayudas de tipo electrónico, neumático o electroneumático. 
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | #[b Posicionador de aguja:] este tipo de ayuda electrónica posiciona a la barra de aguja en el momento en que el operador deja de accionar el pedal del motor, permitiendo que la aguja quede arriba o abajo según operación a realizar. Esto le permite al operador, tener las manos libres para realizar otras acciones de costura.
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | #[b Cortadores de hilo:] este tipo de ayuda, corta los hilos automáticamente una vez terminada la operación de costura, con esto se evitan el desperdicio de hilo y tiempos en la operación.
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | #[b Levantador de prénsatelas:] este tipo de ayuda, le permite al operador levantar el prénsatelas y/o puller en el momento que lo requiera, solamente llevando el pedal hacia atrás. Esto disminuye la fatiga del operador debido a que la máquina no necesita rodilleros ni pedales para realizar esta operación, la cual, en algunos casos requiere un gran esfuerzo por parte del operador para vencer la resistencia de los resortes de tensión del prénsatelas.
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | #[b Tableros de control:] estos tableros le permiten al operador programar la máquina para que realice algunas operaciones de costura en forma automática entre otras están: remate inicial, realizar costuras rectas automáticamente, remate final, corte de hilo automático al terminar la operación. Todo dependiendo del tipo de tablero con que esté equipada la máquina.
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | #[b Máquinas de tercera generación:] en este tipo de máquinas el operador realiza el 10% de las operaciones y puede incluso operar dos o tres máquinas a la vez. Estas vienen provistas con las ayudas de la generación anterior pero además cuentan con la ayuda de sensores que permiten que las máquinas trabajen casi solas.
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag2.png' alt='')

    .row
      .col-lg-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag3.png' alt='')
          .tarjeta.tarjeta--morado
            .p-4
              p #[b Máquinas de tercera generación:] en este tipo de máquinas el operador realiza el 10% de las operaciones y puede incluso operar dos o tres máquinas a la vez. Estas vienen provistas con las ayudas de la generación anterior pero además cuentan con la ayuda de sensores que permiten que las máquinas trabajen casi solas.      
    .row
      .col-lg-12  
        .tarjeta-avatar-b.mb-5
          .tarjeta.tarjeta--morado
            .p-4
              p #[b Máquinas de Ultrasonido:] este tipo de máquinas unen el material por ultrasonido las cuales incorporan un sistema de sonoroso que emite un ultrasonido de 60.000 ciclos contra una rueda transportadora que tiene la forma de una puntada. Podría decirse que produce una soldadura entre las telas y por medio un disco intercambiable puede imitar las puntadas de fileteo, cadeneta y doble pespunte. La única condición es que el material a coser debe estar compuesto de poliéster como mínimo en un 60% de su estructura física.
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag4.png' alt='')
    
    Separador
    #t_2_5.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.5 Clasificación, nomenclatura, puntas, calibres y usos.
    
    p.mb-0 En la industria de la confección existen relaciones entre los insumos y las maquinas, los cuales garantizan el óptimo desempeño de la producción en términos de calidad, optimización de recursos, productividad entre otras.
    p.mb-4 La relación de insumos genera unos eslabones que al romperse alguno de ellos ocasiona dificultades, en la tela, en la puntada, en la costura, al estar entrelazados.
    p.mb-4 Un segundo bloque o módulo de conocimiento, se relaciona directamente con las diferentes características de agujas, puntadas, pespuntes, costuras, entre otros. En confección y particularmente las diseñadoras deben tener los conocimientos de tejidos, hilos y agujas, generan unos eslabones que se conectan o entrelazan para darle a las puntadas, costuras, tejidos una mejor apariencia, terminación y calidad del producto. Por lo tanto, se debe tener conceptos claros sobre:    

    .row.bg15
      h4 La aguja
      p.mb-0 La aguja es un elemento mecánico que sirve para traspasar el material a coser y llevar el hilo hasta un tomador de lazada. Además, es uno de los elementos fundamentales para la invención de la máquina de coser, ya que es alrededor de la aguja, como nacen todas las ideas para su desarrollo.
      p.mb-4 De la aguja se deben considerar tres aspectos importantes:
      h5.mb-4 De la aguja se deben considerar tres aspectos importantes:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          img(src='@/assets/curso/temas/t2/imag5.svg' alt='')
    
    .row.justify-content-center.align-items-center.mb-5.bg16
      .col-lg-4
        h5 Calibre
        p El calibre de las agujas varía de acuerdo al grosor del material a coser, por ejemplo, para lycras 65 y 70, para tejidos de punto 70, 80 y 90, para driles y Jean 100, 110 y 125.
      .col-lg-7
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th Métrico
                th Inglés
                th Equivalencia mm
            tbody
              tr
                td 70
                td 10
                td 0.7
            tbody
              tr
                td 80
                td 12
                td 0.8
            tbody
              tr
                td 90
                td 14
                td 0.9
            tbody
              tr
                td 100
                td 16
                td 1
            tbody
              tr
                td 110
                td 18
                td 1.1
            tbody
              tr
                td 120
                td 20
                td 1.2
    .row.justify-content-center.align-items-center.mb-5.bg15
      .col-lg-4
        h5 Sistema o referencia
        p Indica la aguja que se necesita para el tipo de máquina.
      .col-lg-7
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th Métrico
                th Inglés
            tbody
              tr
                td Plana
                td 16 x 231 cabo delgado 135 x 15 cabo grueso
            tbody
              tr
                td Recubridora
                td B63
            tbody
              tr
                td Zig-zag
                td 135 x 5
            tbody
              tr
                td Dos agujas
                td 135 x 5
            tbody
              tr
                td Fileteadora
                td B27
    .row.justify-content-center.align-items-center.mb-5.bg16
      .col-lg-8
        h5 Punta de aguja
        p Determina el tipo de tejido a coser, desde el más fino hasta el más pesado.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6
            .tarjeta.color-primario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-small Recurso. Puntas de desplazamiento Groz-Beckert 
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
    Separador
    #t_2_6.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.6 Relación de elementos de costura: tela, aguja, puntada, hilo, ajuste.
    
    h4.mb-4 Tejidos
    p.mb-4 Un tejido es una estructura formada por fibras textiles. Esta estructura se puede lograr de tres formas diferentes que, de alguna manera, dividen los procedimientos de trabajo. Se identifican: tejido plano o de calada, tejido de punto y técnicas de aglutinamiento.
    
    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t2/imag6.png' alt='')
        h2.text-center.text-white Tejido plano
        p.text-center.text-white Es el que se lleva a cabo en una máquina llamada telar y que consiste en entrelazar dos hilos normalmente formando un ángulo recto. Uno de los hilos es la urdimbre y el otro es la trama. El tejido plano puede trabajarse al hilo, al través o al bies. Los ligamentos usados para la elaboración del tejido plano son los que dan origen a las diferentes telas (Sarga, Tafetán, Satén, Gasa, Crepé, Felpa.)
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t2/imag7.png' alt='')
        h2.text-center.text-white Tejido de punto
        p.text-center.text-white Está formado por mallas, bucles o puntos. Consiste en pasar una lazada de hilo sobre una aguja y luego pasarla a otra aguja. El caso más claro para entenderlo es el tejido de dos agujas que se hace de forma manual, que se entrelaza el mismo hilo formando una sola estructura, es importante entender que en este tipo de tejido hay un solo hilo largo. Los ligamentos básicos del tejido de punto son: Jersey, franela, franela perchada, el rib, interlock, pique. Las telas de tejido de punto son difíciles de manejar, resbalan al cortarlas y estiran fácilmente, y se adaptan muy bien al cuerpo.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t2/imag8.png' alt='')
        h2.text-center.text-white Por aglutinamiento de fibras
        p.text-center.text-white Son telas que se fabrican con fibras naturales o artificiales que no han pasado por procesos de hilatura y que se humedecen y se someten a presión y calor lo cual hace que las fibras se adhieran.
    
    .row.mb-5.bg17
      h4 Hilos
      p.mb-4 Representa un 2% del costo de la prenda, pero comparte un 50% de la durabilidad de las costuras.
      .row.mb-5
        .col-lg-6
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/temas/t2/hilos.png', alt='')
              h2.text-center.text-white Sistema de numeración tex
              ul.lista-ul--color
                li
                  i.lista-ul__vineta.text-white
                  | Basado en el hilo crudo.
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Usado para determinar el calibre del hilo.
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Sistema de numeración directo (entre más alto el número; más grueso es el hilo). Ejemplo: T-80 es más grueso que T-50.
        .col-lg-6
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-secundario.p-5
              .row.justify-content-center.mb-4
                .col-6
                  img(src='@/assets/curso/temas/t2/imag9.png', alt='')
              h2.text-center.text-white Sistema de numeración tex
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Tipo de tela y grueso
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Tipo de hilo y tamaño
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Puntada y tipo de costura    
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Puntadas por pulgada
              ul.lista-ul--color.text-white
                li
                  i.lista-ul__vineta
                  | Balance de la puntada (tensión)
      p.mb-4 El hilo se hace utilizando fibras naturales o sintéticas. El poliéster es uno de los hilos más utilizados. Es más fuerte que los hilos de algodón de un tamaño comparable, y está disponible en una amplia variedad de tamaños y colores
      .row.mb-4
        .col-lg-6
          p El hilo con núcleo más usado tiene una construcción de capa múltiple, con cada capa hecha de un centro de filamento de poliéster con fibras de algodón o poliéster recubierto alrededor del núcleo. En esta estructura de hilo influye la fortaleza del filamento poliéster y la facilidad de costura del recubrimiento de fibra de algodón o poliéster. El hilo con alma generalmente se usa en la costura a alta velocidad de muchos tipos de prenda, especialmente los que requieren alta fortaleza de costura. Los hilos de filamento son más fuertes que los hilos de fibra corta de la misma fibra y tamaño. Se usan comúnmente tres tipos de hilos de filamento.
        .col-lg-6
          img(src='@/assets/curso/temas/t2/imag10.svg', alt='')
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/icono.svg' alt='')
            .tarjeta.color-acento-botones
              .p-4
                h5.text-center Hilo monofilamento
                p.text-center Se hace de una sola fibra continua de un grosor especificado. Aunque el monofilamento es fuerte, uniforme y poco costoso de hacer, carece de flexibilidad y tiene una sensación tiesa y áspera. Como resultado, su uso normalmente se restringe a bastillas, cortinas, y muebles tapizados.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/icono2.svg' alt='')
            .tarjeta.color-acento-botones
              .p-4
                h5.text-center Hilo multifilamento suave
                p.text-center Se elabora comúnmente de nylon o poliéster y se usa donde el requisito primordial de la costura es la fortaleza. Consta de dos o más filamentos continuos torcidos juntos. Se usa comúnmente para coser zapatos, prendas de cuero, y productos industriales.
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/icono3.svg' alt='')
            .tarjeta.color-acento-botones
              .p-4
                h5.text-center Hilo de filamento texturizado
                p.text-center Se hace usualmente de poliéster y se usa primordialmente como el hilo de lanzadera para puntadas de cobertura. Los filamentos texturizados le dan más cobertura y extensibilidad a la fibra, pero hace que el hilo esté más sujeto a enredarse.
      ul.lista-ul--color
        li
          i.lista-ul__vineta
          | #[b Algodón:] es la parte del hilo que va a estar en contacto con la piel e impide que se produzcan irritaciones o incomodidades, ya que sus características son suavidad, absorbente y fresco.
      ul.lista-ul--color
        li
          i.lista-ul__vineta
          | #[b Poliéster:] la fibra que va por el centro o es el núcleo del hilo, aporta elasticidad, es decirla capacidad de aumentar considerablemente su dimensión sin romperse.
      ul.lista-ul--color
        li
          i.lista-ul__vineta
          | #[b Mercerizado:] es un acabado que le dan al hilo consistente en bañarlo en una solución de soda caustica, con la intensión de dotarlo de brillo, suavidad y resistencia.
      ul.lista-ul--color
        li
          i.lista-ul__vineta
          | #[b Lubricado:] es un acabado final que le deben dar al hilo para evitar su rotura al estar en contacto con la aguja.
    
    h4 Tamaño de hilo y aplicaciones 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th Tejido
                th TEX
                th Prenda
            tbody
              tr
                td Liviano
                td 24, 25, 27
                td Blusas, ropa interior
            tbody
              tr
                td Semipesado
                td 30, 35, 40
                td Pantalones, overol drill
            tbody
              tr
                td Pesado
                td 60, 70 hasta 120
                td Jeans, chaquetas

    p.mb-4 Cuando los conceptos están claros dentro del proceso de confección, se procede a fortalecer las relaciones o eslabones que van a permitir que la cadena de confección tenga la fortaleza suficiente de producción, confección y calidad. Con base en las premisas anteriores, existen combinaciones o relaciones entre los eslabones que nos permiten tener un panorama más apropiado a la hora de la confección de un producto; por lo tanto, presente un informe de las relaciones HILO –AGUJA e HILO – TEJIDO según sus conocimientos.

    .row.mb-5.justify-content-center
      .bloque-texto-b
        .bloque-texto-b__texto
          i.fas.fa-quote-left
          h4.mb-0 La relación hilo-agujas permite que se produzcan las puntadas con sus series y tipos respectivos, los tipos y usos de los pespuntes, las puntadas por pulgada y sus criterios de calidad según el proceso, entre otros.
          i.fas.fa-quote-right    
    
    p.mb-4 Puntadas: en las diferentes líneas de producción de hoy, las puntadas son fundamentales en el valor agregado que pueda tener un producto, tanto por su calidad, durabilidad, seguridad, elongación y sobre todo por su apariencia y decoración de un producto, con base en ello, las puntadas tienen unas características diferentes, aquí algunas más representativas. Por lo tanto, las características se definen según el tipo de puntada:
    
    h4 Puntadas
    p.mb-4 En las diferentes líneas de producción de hoy, las puntadas son fundamentales en el valor agregado que pueda tener un producto, tanto por su calidad, durabilidad, seguridad, elongación y sobre todo por su apariencia y decoración de un producto, con base en ello, las puntadas tienen unas características diferentes, aquí algunas más representativas. Por lo tanto, las características se definen según el tipo de puntada:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th Serie
                th Tipo
                th Características
            tbody
              tr
                td 100
                td 101 - 103
                td Cadeneta sencilla - 1 hilo
            tbody
              tr
                td 200
                td 
                td Ornamentales
            tbody
              tr
                td 300
                td 301 - 304 - 315
                td Doble despunte
            tbody
              tr
                td 400
                td 401 - 406 - 407
                td Cadeneta doble
            tbody
              tr
                td 500
                td 504 - 514 - 516
                td Sobrehilado
            tbody
              tr
                td 600
                td 602 - 605 - 609
                td Flatseamers
    
    h4 Reglas para la óptima resistencia de las costuras:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/icono4.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h5.text-center 301 puntada recta
              p.text-center Se debe utilizar el mismo tamaño de hilo en la aguja y en la bobina porque la cadena siempre se rompe por el eslabón más débil.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/icono4.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h5.text-center 401 puntada cadeneta
              p.text-center Se puede usar un hilo 40% más débil en el looper pues el hilo del looper no penetra el material y está doble en la formación de la cadena.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/icono4.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h5.text-center 504 puntada sobre hilado
              p.text-center Se puede usar un hilo un 40% más débil en el looper porque el hilo del looper no penetra el material y está doble en la formación de la cadena.
    p La relación hilo-tejido permite que se produzcan las costuras con sus tipos, características y usos respectivos, de acuerdo con criterios de calidad del proceso.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
