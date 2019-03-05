import Vue from 'vue'
import './plugins/vuetify'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
// eslint-disable-next-line
/* eslint-disable */
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD3Z7O3EQTrYpNMoEWsogXKa_dy6qQQP_g',
    authDomain: 'finalyear-projec.firebaseapp.com',
    databaseURL: 'https://finalyear-projec.firebaseio.com',
    projectId: 'finalyear-projec',
    storageBucket: 'finalyear-projec.appspot.com',
    messagingSenderId: '692192329928'
    })
  },
}).$mount('#app')
