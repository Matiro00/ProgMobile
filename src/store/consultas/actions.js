import { AGREGARCONSULTA, EDITARCONSULTA, ELIMINARCONSULTA } from './types'
let id=0
export default {
  [AGREGARCONSULTA]: ({ commit }, consulta) => {
    const nuevaConsulta = {
      id: id,
      consulta
    }
    id++;
    commit(AGREGARCONSULTA, nuevaConsulta)
  },
  [EDITARCONSULTA]: ({ commit }, consulta) => {
    commit(EDITARCONSULTA, consulta)
  },
  [ELIMINARCONSULTA]: ({ commit }, consultaId) => {
    commit(ELIMINARCONSULTA, consultaId)
  }
}

