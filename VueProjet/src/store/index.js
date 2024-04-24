import { createStore } from 'vuex'

export default createStore({
  state: {
    uniColor: '#16c953',
    secondColor: '#FFDAA2',
    name: 'Nérys',
    fullName: 'Nérys Marie-Ellen',
    numberSession: 1,
    idScroll: ''
  },
  getters: {},
  mutations: {
    setUniColor(state, color) {
      state.uniColor = color
    },
    setSecondColor(state, color) {
      state.secondColor = color
    },
    setNumberSession(state, number) {
      state.numberSession = number
    },
    setIdScroll(state, id) {
      state.idScroll = id
    }
  },
  actions: {
    Color({ commit }, color) {
      commit('setUniColor', color)

      let newColor = '#FFDAA2'
      if (['#c0da17', 'pink', '#16c953'].includes(color)) {
        newColor = '#8c49b2'
      }

      commit('setSecondColor', newColor)
    }
  },
  modules: {}
})
