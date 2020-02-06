<template lang="html">

  <section class="noticias p-2">
    <h1 class="text-center">Noticias</h1>
    <div id="carouselId" class="carousel slide m-md-3" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
            <li data-target="#carouselId" data-slide-to="3"></li>
            <li data-target="#carouselId" data-slide-to="4"></li>
            <li data-target="#carouselId" data-slide-to="5"></li>
            <li data-target="#carouselId" data-slide-to="6"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item" :class="[ index == 0 ? 'active' : '' ]" v-for="(contenido,index) in importantes" :key='index'>
                <img :src='contenido.urlToImage' alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>{{ contenido.title }}</h5>
                  <p>{{ contenido.description }}</p>
                  <a name="readMore" id="leerMas" target="_blank" class="btn btn-primary" :href='contenido.url' role="button">Leer más</a>
                </div>
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
    <div class="row m-0">
      <label for="filtro" class="m-0 col-12 col-md-2">Filtro: </label>
      <input id="filtro" class="col-12 col-md-10" v-on:keypress="aplicarFiltro" v-model="textoFiltro" placeholder="Pulsa intro para filtrar"/>
    </div>
    <div class="row m-0">
      <noticia v-for="contenido in noticias" :key='contenido.url' :contenido='contenido' :clases='"card col-12 col-md-6 col-lg-4 col-xl-3 p-0 mt-3"'></noticia>
    </div>
  </section>

</template>

<script lang="js">
  import noticia from './noticia.vue'
  const axios = require('axios')
  import JQuery from 'jquery'
  let $ = JQuery
  export default  {
    name: 'noticias',
    props: [],
    components: {
      noticia,
    },
    updated () {
      this.bloqueo=false;
    },
    mounted () {
      axios.get('https://newsapi.org/v2/everything?languaje=es&domains=elpais.com,elmundo.es,elcortodigital.es,ideal.es&page=1&apiKey=e859accb681646698b5ba6f1e8b23ba8')
      .then(response =>{
        this.importantes = response.data.articles.slice(0,7)
        this.noticias = response.data.articles.slice(7,response.data.articles.length-1)
      })
      $(window).scroll(this.comprobarBloqueo);
    },
    data () {
      return {
        importantes:[],
        noticias:[],
        bloqueo:false,
        page:2,
        textoFiltro:''
      }
    },
    methods: {
      comprobarBloqueo:function(){
          if(!this.bloqueo&&this.page<6)
              this.cargarNoticias();
      },
      cargarNoticias: function(){
        if(($(window).scrollTop() + $(window).height() >= $(document).height()-100)){
          this.bloqueo=true;
          var link;
          if(this.textoFiltro)
            link='https://newsapi.org/v2/everything?languaje=es&qInTitle='+this.textoFiltro
          else
            link='https://newsapi.org/v2/everything?languaje=es'
          link+='&domains=elpais.com,elmundo.es,ideal.es&page='+this.page+'&apiKey=e859accb681646698b5ba6f1e8b23ba8'
          axios.get(link)
          .then(response =>{
            this.noticias=this.noticias.concat(response.data.articles)
          })
          this.page++;
        }
      },
      aplicarFiltro: function(event){
        if(event.keyCode == 13){
          this.page=1
          var link;
          if(this.textoFiltro)
            link='https://newsapi.org/v2/everything?languaje=es&qInTitle='+this.textoFiltro
          else
            link='https://newsapi.org/v2/everything?languaje=es'
          link+='&domains=elpais.com,elmundo.es,ideal.es&page='+this.page+'&apiKey=e859accb681646698b5ba6f1e8b23ba8'
          axios.get(link)
            .then(response =>{
              this.noticias=response.data.articles.slice(7,response.data.articles.length-1)
            })
          this.page++
        }
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css?family=Tinos&display=swap');
  .noticias {
    font-family: 'Tinos', serif;
  }
  .carousel-inner{
      height: 40vw ;
  }
  .carousel-item img,.carousel-item{
      height: 100%;
      width: 100%;
  }
  .carousel-caption{
    background-color: rgba(128, 128, 128, 0.596);
  }
  .carousel-caption p{
    font-size: 0.7em;
  }
  .carousel-control-next:hover{
    background: rgb(200,200,200);
    background: linear-gradient(90deg, rgba(200,200,200,0) 0%, rgba(190,190,190,0.5) 100%);
  }
  .carousel-control-prev:hover{
    background: rgb(200,200,200);
    background: linear-gradient(90deg, rgba(200,200,200,0.5) 0%, rgba(190,190,190,0) 100%);
  }
  .slide-fade-enter-active {
    transition: all .9s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
