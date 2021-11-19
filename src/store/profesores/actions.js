import { AGREGARPROFESOR, EDITARPROFESOR, ELIMINARPROFESOR } from './types'

export default {
  [AGREGARPROFESOR]: ({ commit }, profesor) => {
    const nuevoProfesor = {
      id: profesor.dni,
      profesor
    }
    commit(AGREGARPROFESOR, nuevoProfesor)
  },
  [EDITARPROFESOR]: ({ commit }, profesor) => {
    commit(EDITARPROFESOR, profesor)
  },
  [ELIMINARPROFESOR]: ({ commit }, profesorId) => {
    commit(ELIMINARPROFESOR, profesorId)
  }
}
