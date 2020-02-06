import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import nota from "./components/mainNota.vue"
import login from "./components/login.vue"
import noticias from "./components/noticias.vue"
import olimpicos from "./components/olimpicos.vue"
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'

Vue.use(firestorePlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/notas', component: nota ,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/noticias', component: noticias },
  { path: '/olimpicos', component: olimpicos },
  { path: '/login', component: login },
  { path: "/*" , component: olimpicos }
]

const router = new VueRouter({
  routes 
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    router.replace("notas")
  } else {
    router.replace("login")
  }
});


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(!currentUser && requiresAuth) next('login')
  else next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
