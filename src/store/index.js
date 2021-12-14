import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import profesores from './profesores'
import cursos from './cursos'
import consultas from './consultas'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      profesores,
      cursos,
      consultas,

    },

    strict: process.env.DEBUGGING
  })

  return Store
})
