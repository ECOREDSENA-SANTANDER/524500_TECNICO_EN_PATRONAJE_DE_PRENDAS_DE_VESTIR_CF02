<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo:

    .row.mb-5
      .col-lg-10.mb-5
        .row
          .col-lg-6
            figure
              img(src="@/assets/curso/temas/sintesis.svg", alt="La imagen muestra un esquema relacionado con el reconocimiento de la estructura corporal, dividido en varios apartados: conceptos de pre-patronaje (incluyendo sistemas de medida de longitud, clasificación de las medidas y tipos de medidas), pasos del patronaje (cuadros de tallas, drop, patronaje y procedimiento de patronaje), elaboración de básicos infantiles (bases superiores e inferiores, incluyendo pantalones), elaboración de básicos masculinos (bases superiores slim-fit y pantalones), elaboración de básicos femeninos (bases superiores e inferiores, incluyendo faldas y pantalones), y tipos de máquinas (partes de la máquina y generaciones de máquinas).")
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
