import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    increment ({scores}, {amount = 1, index = 0}) {
      let metric = scores[index]
      metric.value = Math.max(Math.min(metric.value + amount, metric.max), 0)
    }
  },
  actions: {
    asyncIncrement ({commit}, {amount = 1, index, delay}) {
      setTimeout(() => {
        commit('increment', {amount, index})
      }, delay)
    }
  }
})
