/* eslint-disable */
// Lib imports
const Vue = window.Vue
import Vuex from 'vuex'

// Store functionality
import modules from './modules'

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  modules
})

export default store
