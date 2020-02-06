<template lang="html">
<section class="nav1">
  <nav class="navbar navbar-expand-md navbar-light bg-light">
      <img class="navbar-brand" id="navIcon" src='../assets/icon.png' :class="[ pagina != 0 ? 'ocultar' : '' ]">
      <img class="navbar-brand" id="navIcon" src='../assets/logoNav.png' :class="[ pagina != 1 ? 'ocultar' : '' ]">
      <img class="navbar-brand" id="navIcon" src='../assets/noticiasIcon.png' :class="[ pagina != 2 ? 'ocultar' : '' ]">
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
          <ul class="navbar-nav mt-lg-0">
              <li class="nav-item" :class="[ pagina == 0 ? 'active' : '']" @click="cambiarPagina(0)">
                  <router-link class="nav-link" to="/olimpicos">Inicio<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Noticias</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Noticia 1</a>
                      <a class="dropdown-item" href="#">Noticia 2</a>
                  </div>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nosotros</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Nosotros 1</a>
                      <a class="dropdown-item" href="#">Nosotros 2</a>
                  </div>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item" :class="[ pagina == 1 ? 'active' : '']" @click="cambiarPagina(1)">
                  <router-link class="nav-link" to="/notas">TwoNotes</router-link>
              </li>
              <li class="nav-item" :class="[ pagina == 2 ? 'active' : '']" @click="cambiarPagina(2)">
                  <router-link class="nav-link" to="/noticias">Noticias</router-link>
              </li>
          </ul>
      </div>
      <div id="botones" class="nav-item">
          <button class="btn btn-outline-primary my-2 my-sm-0 sinLogear" @click="abrirModalLogin"  type="submit">Login</button>
          <button class="btn btn-outline-primary my-2 my-sm-0 sinLogear" @click="abrirModalRegis"  type="submit">Register</button>
          <button class="btn btn-outline-danger my-2 my-sm-0 logeado" @click="loggout" type="submit">Logout</button>
      </div>
  </nav>
  <!--Modal Registro-->
    <div class="modal" id="modalRegistro" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Registro</h5>
                <button type="button" class="close" id="cerrarRegistro" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="text" class="form-control" id="nombre1" placeholder="Introduce el nombre">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Apellidos</label>
                        <input type="text" class="form-control" id="apellidos1" placeholder="Introduce tus apellidos">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Mail</label>
                        <input type="email" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" id="mail1" placeholder="Introduce el mail">
                    </div>
                    <div id="genero" class="form-check row">
                        <div class="col-6">
                            <input class="form-check-input" type="radio" name="genero" id="hombre1" value="Hombre" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                Hombre
                            </label>
                        </div>
                        <div class="col-6">
                            <input class="form-check-input" type="radio" name="genero" id="mujer1" value="Mujer">
                            <label class="form-check-label" for="exampleRadios2">
                                Mujer
                            </label>
                        </div>
                    </div>
                    <p class="mb-0 mt-1">Redes Sociales</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="twitter1" value="twitter">
                        <label class="form-check-label" for="twitter1">Twitter</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="facebook1" value="facebook">
                        <label class="form-check-label" for="facebook1">Facebook</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="insta1" value="instagram">
                        <label class="form-check-label" for="insta1">Instagram</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="github1" value="github">
                        <label class="form-check-label" for="github1">GitHub</label>
                    </div>
                    <button type="submit" class="form-control mt-3 btn btn-primary">Submit</button>
                    </form>
            </div>
            <div class="modal-footer">
            </div>
            </div>
        </div>
    </div>
    <!--Modal Login-->
    <div class="modal" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Login</h5>
                <button type="button" class="close" id="cerrarLogin" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body container-fluid">
                <form target="/" class="row m-0">
                    <label class="col-12" for="usuario">Nombre</label>
                    <input class="col-12" type="text" id="usuario" name="usuario">
                    <label class="col-12" for="contrasena">Contraseña</label>
                    <input class="col-12" type="password" id="contrasena" name="contrasena"/>
                    <input class="col-12 btn btn-outline-primary mt-4" type="submit" name="login" value="Login"/>
                </form>
            </div>
            <div class="modal-footer">
            </div>
            </div>
        </div>
    </div>
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
    updated() {
      localStorage.pagina=JSON.stringify(this.pagina);
      if(firebase.auth().currentUser){
            $('.sinLogear').css('Display','none')
            $('.logeado').css('Display','')
      } else {
            $('.sinLogear').css('Display','')
            $('.logeado').css('Display','none')
      }
        this.logged=false;
    },
    mounted () {
        if (localStorage.pagina) {
          this.pagina = JSON.parse(localStorage.pagina);
        }
        $('#cerrarRegistro').on('click',function(){
            $('#modalRegistro').fadeOut();
        });
        $('#cerrarLogin').on('click',function(){
            $('#modalLogin').fadeOut();
        });
    },
    data () {
      return {
          logged: false,
          pagina:0
      }
    },
    methods: {
        abrirModalLogin:function (){
            $('#modalLogin').fadeIn();
        },
        abrirModalRegis:function (){
            $('#modalRegistro').fadeIn();
        },
        cambiarPagina: function(num){
            this.pagina=num;
        },
        loggout : function(){
            firebase.auth().signOut()
        }
    },
    computed: {
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
