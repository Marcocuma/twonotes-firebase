<template lang="html">

  <section class="olimpicos col-12">
    <!--Hero image-->
        <div class="jumbotron jumbotron-fluid card d-flex align-items-center justify-content-center">
            <div class="container">
                <div id="content" class="card-body">
                    <h1 class="display-3">トップスペイン</h1>
                    <p class="lead">Descrube el mañana</p>
                </div>
            </div>
        </div>
        <!--Main-->
        <main id="main" class="row">
            <div id="sedes" class="col-12 col-md-9 d-flex justify-content-center row">
                <div id="sede1" class="col-12 row">
                    <img id="imgSede1" class="col-sm-4" src="../assets/sede1.jpg"/>
                    <div id="conenidoSede1" class="col-sm-8">
                        <h1 class="tituloContenido">Titulo Sede</h1>
                        <p class="textoSedes" id="contenidoSede2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Similique repellat cumque blanditiis,
                            quam et rem fugiat quae perferendis reiciendis at! 
                            A placeat suscipit eaque velit ad possimus natus dolorem aliquid.
                        </p>
                    </div>
                </div>
                <div id="sede2" class="col-12 row">
                    <img id="imgSede1" class="col-sm-4 order-sm-last" src="../assets/sede2.jpg"/>
                    <div id="conenidoSede2" class="col-sm-8">
                        <h1 class="tituloContenido">Titulo Sede</h1>
                        <p class="textoSedes" id="contenidoSede2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Similique repellat cumque blanditiis,
                            quam et rem fugiat quae perferendis reiciendis at! 
                            A placeat suscipit eaque velit ad possimus natus dolorem aliquid.
                        </p>
                    </div>
                </div>
            </div>
            <div id="lista" class="col-12 col-md-3">
                <h2>Grandes atletas de la historia</h2>
                <ul id="listaAtletas">
                    <li><a href="#">Johnny Weissmuller</a></li>
                    <li><a href="#">Jesse Owens</a></li>
                    <li><a href="#">Nadia Comaneci</a></li>
                    <li><a href="#">Michael Phelps</a></li>
                    <li><a href="#">Usain Bolts</a></li>
                    <li><a href="#">Simone Biles</a></li>
                </ul>
            </div>
            <!--Carousel-->
            <div id="carouselId" class="carousel slide col-12" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselId" data-slide-to="1"></li>
                    <li data-target="#carouselId" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src="../assets/slide1.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slide2.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slide3.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </main>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'olimpicos',
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
  .olimpicos {

  }
  .jumbotron{
    background: linear-gradient(rgb(0, 0, 0,0.1),rgb(0, 0, 0,0.7)),url('../assets/hero.jpg');
    height: 88vh;
	background-size: cover, cover;
    background-repeat: no-repeat;
    background-position: center, center;
    background-attachment: fixed,fixed;
    background-repeat: no-repeat ,no-repeat;
  }
  #sedes{
      margin-bottom: 1em;
  }
  #sedes img{
      height: auto;
  }
  #listaAtletas{
      list-style-type: none;
      padding: 0em;
  }
  #listaAtletas li{
      padding: 0.5em 0em;
  }
  #listaAtletas li:nth-child(odd){
      background-color: rgb(219, 212, 212);
  }
  .textoSedes{
      text-align: justify;
  }
  .tituloContenido{
      text-align: center;
  }
  #navIcon{
      width: auto;
      height: 2.5em;
  }
  #content *{
      text-align: center;
      color: white;
  }
  .carousel-inner{
      height: 47vw ;
      background-color: black;
  }
  .carousel-item img,.carousel-item{
      height: 100%;
      width: 100%;
  }
  #textoFooter{
      margin: 0;
  }
  
</style>
