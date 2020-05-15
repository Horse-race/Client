import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    socket: null
  },
  mutations: {
    SET_USERNAME (state, payload) {
      state.username = payload
    },
    SET_SOCKET (state, payload){
      state.socket = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('login user')
        localStorage.setItem('username', payload)
        resolve(payload)
      })
    },
    logout (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('logout user')
        localStorage.clear()
        resolve(payload)
      })
    }
  },
  modules: {
  }
})
