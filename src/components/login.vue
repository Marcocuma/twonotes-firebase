<template lang="html">

  <section class="login">
    <div class="form-group">
      <input type="text"
        class="form-control" v-model="correo" aria-describedby="helpId" placeholder="Introduce el correo">
      <input type="password"
        class="form-control" v-model="contrasena" aria-describedby="helpId" placeholder="Introduce la contraseña">
      <input name="Login" @click="login" id="" class="btn btn-primary" type="button" value="Login">
      <input name="Google" @click="googleLogin" id="" class="btn btn-primary" type="button" value="Google">
    </div>
    <section id="firebaseui-auth-container"></section>
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
        contrasena:''
      }
    },
    methods: {
        login:function() {
          firebase.auth().signInWithEmailAndPassword(this.correo,this.contrasena)
        },
        googleLogin: function(){
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider)
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .login {

  }
</style>
