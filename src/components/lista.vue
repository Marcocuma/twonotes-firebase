<template lang="html">

        <transition-group name='slide-fade' tag='ol' class="col-12">
            <nota @prioridad-cambiada="forzarUpdate" @borrarNota="borrarNota" v-for="(todo) in ordenarNotas" :key='todo' :index='todo.id' :todo='todo'></nota>
        </transition-group>


</template>

<script lang="js">
import nota from './nota.vue'
  export default  {
    name: 'lista',
    components: {
      nota
    },
    props: ['ordenarNotas'],
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {
      forzarUpdate: function(){
        this.$emit('prioridad-cambiada');
      },
      borrarNota: function(key){
        this.$emit('borrarNota',key);
      }
    },
    computed: {

    }
}


</script>

<style lang="css">
  .lista {

  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .slide-fade-move{
    transition: all .3s ease;
  }
</style>
