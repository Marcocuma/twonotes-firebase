<template lang="html">

  <section class="login">
    <div class="form-group">
      <input type="text"
        class="form-control" v-model="correo" aria-describedby="helpId" placeholder="Introduce el correo">
      <input type="password"
        class="form-control" v-model="contrasena" aria-describedby="helpId" placeholder="Introduce la contraseña">
      <input name="Login" @click="login" id="" class="btn btn-primary" type="button" value="Login">
      <input name="Login" @click="googleLogin" id="" class="btn btn-primary" type="button" value="Login">
    </div>
    <section id="firebaseui-auth-container"></section>
  </section>

</template>

<script lang="js">
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
  export default  {
    name: 'login',
    props: [],
    mounted () {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.DVoqVH5zS1RiLg7YVE6JfUkf,
        ],
      });
      ui.start('#firebaseui-auth-container');

    },
    data () {
      return {
        correo:'',
        contrasena:''
      }
    },
    methods: {
        login:function() {
          firebase.auth().signInWithEmailAndPassword(this.correo,this.contrasena).then(
            ()=>{
              this.$router.replace('notas')
            },
            () => {
              alert("Vaia")
            }
          )
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
