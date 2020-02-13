<template lang="html">

  <section class="login">
    <div class="card m-5">
      <div class="form-group card-body">
        <input type="text"
          class="form-control" v-model="correo" aria-describedby="helpId" placeholder="Introduce el correo">
        <input type="password"
          class="form-control" v-model="contrasena" aria-describedby="helpId" placeholder="Introduce la contraseña">
          <input name="Login" @click="login" id="" class="btn btn-primary" type="button" value="Login">
          <router-link class="nav-link" to="/register">Registrate Aqui</router-link>
        <div class="card-footer d-flex">
          <button name="Google" @click="googleLogin" id="" class="btn btn-primary" type="button" value="Google"><img src="./../assets/google.png" class="iconoBoton"></button>
        </div>
      </div>
      <section id="firebaseui-auth-container"></section>
    </div>
  </section>

</template>

<script lang="js">
import firebase from 'firebase'
  export default  {
    name: 'login',
    props: [],
    mounted () {
    },
    data () {
      return {
        correo:'',
        contrasena:'',
      }
    },
    updated() {
    },
    methods: {
        login:function() {
          firebase.auth().signInWithEmailAndPassword(this.correo,this.contrasena)
          this.logged = true
        },
        googleLogin: function(){
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({
              prompt: 'select_account'
            });
            firebase.auth().signInWithRedirect(provider)
        },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .login {

  }
  .iconoBoton{
    width: 2em;
    height: auto;
  }
</style>
