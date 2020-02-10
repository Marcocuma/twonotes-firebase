<template lang="html">
<section class="nav1">
  <nav class="navbar navbar-expand-md navbar-light bg-light">
      <img class="navbar-brand" id="navIcon" src='../assets/logoNav.png'>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
          <ul class="navbar-nav mt-lg-0">
              <li class="nav-item active">
                  <router-link class="nav-link" to="/notas">TwoNotes</router-link>
              </li>
          </ul>
      </div>
      <div>
          <a>{{usuario}}</a>
      </div>
      <div id="botones" class="nav-item">
          <router-link class="btn btn-outline-danger my-2 my-sm-0 " @click="loggout" to="/login" id='logout' type="submit">Logout</router-link>
      </div>
  </nav>
</section>

</template>

<script lang="js">
const $ = require('jquery')
import firebase from 'firebase'
// Lo declaramos globalmente
window.$ = $
  export default  {
    name: 'nav1',
    props: [],
    updated() {},
    mounted () {
        if (localStorage.pagina) {
          this.pagina = JSON.parse(localStorage.pagina);
        }
    },
    data () {
      return {
      }
    },
    methods: {
        loggout : function(){
            firebase.auth().signOut();
            this.logeado = false;
            this.$forceUpdate();
        }
    },
    computed: {
        usuario:() => {
            return firebase.auth().currentUser.email
        }
    }
}


</script>

<style scoped lang="css">
  .nav {

  }
  #navIcon{
    width: auto;
    height: 2.5em;
  }
  .ocultar{
      display:none;
  }
</style>
