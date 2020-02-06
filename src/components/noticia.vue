<template lang="html">

  <div :class='clases'>
    <div id="divImg"></div>
    <img class="card-img-top" :src="contenido.urlToImage" alt="">
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">{{ contenido.publishedAt.replace('T',' ').replace('Z',' ')}} - {{ contenido.author }}</h6>
      <h4 class="card-title">{{ contenido.title }}</h4>
      <p class="card-text">{{ contenido.content.slice(0,100)+"..." }}</p>
    </div>
    <div class="card-footer">
      <a name="readMore" id="leerMas" class="btn btn-primary" :href='contenido.url' target="_blank" role="button">Leer más</a>
    </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'noticia',
    props: ['contenido','clases'],
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
  .noticia {

  }
  .card-img-top{
    height: 16em;
  }
  .card-body{
    /*-webkit-box-shadow: 1px -24px 24px -8px rgba(0,0,0,0.60);
-moz-box-shadow: 1px -24px 24px -8px rgba(0,0,0,0.60);
box-shadow: 1px -24px 24px -8px rgba(0,0,0,0.60);*/
  }
  #divImg{
    transition: 0.5s;
    position: absolute;
		top: 0;
		left: 0;
		right:0;
    bottom: 0;
    height: 16em;
  }
  #divImg:hover{
    transition: 0.5s;
    -webkit-box-shadow: inset 10px 10px 70px 47px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 10px 10px 70px 47px rgba(0,0,0,0.75);
    box-shadow: inset 10px 10px 70px 47px rgba(0,0,0,0.75);
  }
</style>
