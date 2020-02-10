<template lang="html">

  <section class="main-nota row col-12">
      <nav1 class="col-12"></nav1>
        <div id="barraBusqueda" class="col-12 d-flex">
            <input type="text" class="w-75 m-4" required v-on:keypress="add" v-model="textoNota" placeholder="Texto Nota">
            <input type="file" class="w-25 m-4" required @change="anadirURL" placeholder="Subir Archivo">
        </div>
        <label class="col-12 col-sm-6 align-center"> {{snapshot}}</label>
        <label class="col-12 col-sm-6">{{error}}</label>
        <div id="barraFiltro" class="col-12 d-flex">
            <input type="text" class="w-100 m-4" v-on:keypress="add" v-model="textoFiltro" placeholder="Texto Filtro">
        </div>
        <div class="col-12 d-flex justify-content-around">
            <p class="mb-0"><a v-on:click="compTodas" href="#">{{ textoCompletar }}</a>| Tienes un total de {{ totalNotas }} | Completadas: {{ notasCompletadas }} <a v-on:click="delCompletadas" href="#">Borrar Completadas</a></p>
            <select v-model="orden">
                <option value="1">Alfabetico</option>
                <option value="2">Completadas</option>
                <option value="3">Incompletas</option>
                <option value="4">Prioridad</option>
                <option value="5">Nueva</option>
                <option value="6">Antigüa</option>
            </select>
        </div>
        <lista @prioridad-cambiada="forzarUpdate" @borrarNota="borrarNota" :ordenarNotas="ordenarNotas"></lista>
  </section>

</template>

<script lang="js">
import lista from './lista.vue'
import {db} from '../../db.js'
import firebase from 'firebase'
import nav1 from './nav1.vue'
  export default  {
    name: 'main-nota',
    components: {
      lista,
      nav1
    },
    props: [],
    mounted () {
    },
    updated() {
      if(firebase.auth().currentUser){
          this.$emit('logged',true)
      } else {
          this.$emit('logged',false)
      }
    },
    data () {
      return {
        notas: [
        ],
        prio:'-1',
        textoNota:'',
        textoFiltro:'',
        orden:"4",
        completadas:false,
        textoCompletar:'Completar todas',
        linkArchivo: '',
        nombreArchivo: '',
        urlArchivo: '',
        subiendo: false,
        snapshot: '',
        error:'',
      }
    },
    firestore: {
      notas: db.collection('notas'),
    },
    methods: {
        add(event){
            if(event.keyCode == 13 && !this.subiendo){
                //firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
                firebase.storage().ref(this.linkArchivo.name).put(this.linkArchivo).on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {this.snapshot ="Progreso = "+ parseInt((snapshot.bytesTransferred / snapshot.totalBytes) * 100)+"%"},
                (error) => {this.error = error},
                () => {
                    firebase.storage().ref().child(this.linkArchivo.name).getDownloadURL().then(
                        url =>{
                            this.urlArchivo = url
                            db.collection('notas').add({text:this.textoNota,marcada:false,tiempo:Date.now(),prioridad:-1, usuario: firebase.auth().currentUser.email, archivo: {nombre: this.nombreArchivo,url: this.urlArchivo}});
                            this.textoNota='';
                        }
                    ).catch()
                    this.completadas=false;
                    this.subiendo = false;
                 })
            }
        
        },
        delCompletadas: function(){
            /*this.notas=this.notas.filter(function(elemento){
                return !elemento.marcada;
            })*/
            this.notas.forEach((nota) => {
                if(nota.marcada)
                    db.collection('notas').doc(nota.id).delete();
            })
        },
        calculaTiempo: function(index){
            var tiempo=new Date(Date.now()-this.notas[index].tiempo);
            return tiempo.getMinutes()
        },
        forzarUpdate: function(){
          this.$forceUpdate();
        },
        compTodas: function(){
            if(!this.completadas){
                this.ordenarNotas.forEach((nota)=>{
                    nota.marcada=true;
                });
                this.completadas=true;
                this.textoCompletar="Descompletar todas"
            } else {
                this.ordenarNotas.forEach((nota)=>{
                    nota.marcada=false;
                });
                this.completadas=false;
                this.textoCompletar='Completar todas '
            }
        },
        borrarNota: function(todo){
                db.collection('notas').doc(todo).delete();
        },
        anadirURL(e){
            this.nombreArchivo = e.target.files[0].name;
            this.linkArchivo = e.target.files[0];
        }
    },
    computed: {
        totalNotas: function(){
            return this.notas.length
        },
        notasCompletadas: function(){
            var filtradas=this.notas.filter(function(elemento){
                return elemento.marcada==true;
            })
            return filtradas.length;
        },
        ordenarNotas: function(){
            if(this.orden=="2")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.marcada
                    var b=nota2.marcada
                    return a == false ? 1 : a==b ? 0 : -1
                });
            else if(this.orden=="3")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.marcada
                    var b=nota2.marcada
                    return a == true ? 1 : a==b ? 0 : -1
                });
            else if(this.orden=="4")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.prioridad
                    var b=nota2.prioridad
                    return a < b ? 1 : a == b ? 0 : -1
                });
            else if(this.orden=="5")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.tiempo
                    var b=nota2.tiempo
                    return a < b ? 1 : a == b ? 0 : -1
                });
            else if(this.orden=="5")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.tiempo
                    var b=nota2.tiempo
                    return a > b ? 1 : a == b ? 0 : -1
                });
            return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                var a=nota1.text.toLowerCase()
                var b=nota2.text.toLowerCase()
                return a > b ? 1 : a==b ? 0 : -1
            });
        }
    }
}


</script>

<style scoped lang="css">
  ol{
    list-style-type: none;
    padding:0
  }
  .fade-out-in-enter-active,
  .fade-out-in-leave-active {
    transition: opacity .3s;
  }
  .fade-out-in-enter-active {
    transition-delay: .3s;
  }

  .fade-out-in-enter,
  .fade-out-in-leave-to {
    opacity: 0;
  }
</style>
