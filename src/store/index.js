import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS (state, payload) {
      state.users = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('login user')
        resolve(payload)  
      })
    },
    logout (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('logout user')
        localStorage.clear()
        resolve(payload)  
      })
    },
    setUsers (context, payload) {
      context.commit('SET_USERS', payload)
    }
  },
  modules: {
  }
})
