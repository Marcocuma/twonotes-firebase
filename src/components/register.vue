<template lang="html">

  <section class="login">
    <div class="card m-5">
      <div class="form-group card-body">
        <input type="text"
          class="form-control" v-model="correo" aria-describedby="helpId" placeholder="Introduce el correo">
        <input type="password"
          class="form-control" v-model="contrasena" aria-describedby="helpId" placeholder="Introduce la contraseña">
          <input name="Registrase" @click="register" id="" class="btn btn-primary" type="button" value="Registrase">
          <router-link class="nav-link" to="/login">Logueate Aqui</router-link>
      </div>
      <div class="card-footer">
        <p>{{error}}</p>
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
        errores:'',
      }
    },
    updated() {
    },
    methods: {
        register(){
          firebase.auth().createUserWithEmailAndPassword(this.correo,this.contrasena).catch(function(error) {
            // Handle Errors here.
            this.errores = error.code;
            // ...
          });
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
