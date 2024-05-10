<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-9
        .cajon.color-primario.bg1.p-4
          p.mb-0 En la interpretación y análisis de la estructura corporal se manejan términos de reconocimiento anatómico los cuales hacen parte de la base fundamental para la comprensión y desarrollo de moldes, la contextualización en terminología técnica y las diferentes formas corpóreas, son la base para la proyección en el análisis, trazo y desarrollo de prendas. A su vez el patronista debe conocer e identificar los procesos operativos para el ensamble y producción, fusionando o articulando las operaciones con el desarrollo del producto, esta articulación se da de la base fundamental del qué y cómo funciona. 
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/imag01.png', alt='')
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
