import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)
// eslint-disable-next-line
/* eslint-disable */
export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          // const newUser = {
          //   id: user.uid
          // }
          // commit('setUser', newUser)
          alert('Account was created for ${user.email}');
          this.$router.push('/');
        }
      )
      .catch (
        error => {
          console.log(error)
        }
      )
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
})
