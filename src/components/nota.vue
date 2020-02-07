<template lang="html">

  <li class="m-4">
      <div class="card">
          <div class="card-header">
            <label>{{ todo.usuario }}</label>
          </div>
          <div class="card-body row d-flex align-items-center justify-content-between">
            <input type="checkbox" :id=index v-model='todo.marcada'/><label class="mb-0 col-2" :for=index ></label>
            <p class="col-8 mb-0" v-bind:class='{terminada : todo.marcada}'> {{ todo.text }} </p>
            <div class="col-2 d-flex justify-content-end">
              <img src="../assets/trash.png"  @click="eliminarNota(index)"/>
            </div>
          </div>
          <div class="card-footer">
            <div id="tiempo"><span>Fecha: {{ calculaTiempo(todo.tiempo) }}</span></div>
            <div class="btn-group btn-group-toggle" >
                <label class="btn btn-outline-success " v-bind:class="[ todo.prioridad == -1 ? 'active' : '']">
                    <input type="radio" @click="cambiarPrioridad(todo,-1)" id="option1">Baja
                </label>
                <label class="btn btn-outline-primary" v-bind:class="[ todo.prioridad == 0 ? 'active' : '']">
                    <input type="radio" @click="cambiarPrioridad(todo,0)" id="option2">Media
                </label>
                <label class="btn btn-outline-danger" v-bind:class="[ todo.prioridad == 1 ? 'active' : '']">
                    <input type="radio" @click="cambiarPrioridad(todo,1)" id="option3">Alta
                </label>
            </div>
            <div><a v-bind:href="todo.archivo.url"> {{ todo.archivo.nombre }}</a></div>
          </div>
      </div>
    </li>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['todo','index'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
       calculaTiempo: function(ti){
            var tiempo=new Date(ti);
            return (tiempo.getDate() + "/" + (tiempo.getMonth() +1) + "/" + tiempo.getFullYear()+'  '+tiempo.getHours()+':'+tiempo.getMinutes()+':'+tiempo.getSeconds())
        },
        cambiarPrioridad: function(todo,number){
          todo.prioridad=number
          this.$emit('prioridad-cambiada');
        },
        eliminarNota: function(key){
          this.$emit('borrarNota',key);
        },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .nota {

  }
  .card-body img{
    height:5em;
    border-radius: 20%;
  }
  .card-body img:hover{
    transition: all 1s ease;
    background-image: linear-gradient(rgba(63,94,251,1) 17%, rgba(0,255,255,1) 100%);
  }
  .card-body p{
    font-size: 2em;
  }
  .terminada{
    text-decoration-line: line-through;
    color: rgb(0, 255, 255);
  }
  input[type=checkbox] {
    display:none;
  }
  
  input[type=checkbox] + label
  {
    background: url("../assets/unchecked_checkbox.png") no-repeat;
    background-size:contain;
    height: 3em;
    max-width: 3em;
    display:inline-block;
    padding: 0 0 0 0px;
  }
  input[type=checkbox]:checked + label
  {
    background: url("../assets/checked_checkbox.png") no-repeat;
    background-size:contain;
    height: 3em;
    max-width: 3em;
    display:inline-block;
    padding: 0 0 0 0px;
  }
</style>
