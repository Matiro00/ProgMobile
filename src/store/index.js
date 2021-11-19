import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import profesores from './profesores'
import cursos from './cursos'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      profesores,
      cursos
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
