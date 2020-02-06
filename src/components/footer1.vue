<template lang="html">

  <section class="footer-1 bg-light">
    <footer class="d-flex justify-content-center mt-3 col-12 row">
        <ul id="enlacesFooter" class="align-midle col-12 col-sm-6 order-sm-last d-flex justify-content-around">
            <a href="https://www.facebook.com/falloutboy/"><img class=" redes" src="../assets/face.svg"/></a>
            <a href="https://twitter.com/markknopfler?lang=es"><img class=" redes" src="../assets/twitter.svg"/></a>
            <a href="https://github.com/Marcocuma"><img class=" redes" src="../assets/github.png"/></a>
        </ul>
        <p class="col-12 col-sm-6 align-midle" id="textoFooter">Copyright <a href="#">Alumno</a></p>
    </footer>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'footer-1',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .footer-1 {

  }
  .redes{
      height: 2em;
      widows: auto;
  }
</style>
