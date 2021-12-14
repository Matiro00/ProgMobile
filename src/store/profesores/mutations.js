import { AGREGARPROFESOR, EDITARPROFESOR, ELIMINARPROFESOR } from './types'

export default {
  [AGREGARPROFESOR] (state, data) {
    state.profesores[data.id]=data.profesor
  },
  [EDITARPROFESOR] (state, data) {
    state.profesores[data.dni] = {
      nombre: data.nombre,
      apellido: data.apellido,
      mail: data.mail,
      materia: data.materia,
      imagen: data.imagen
    }
  },
  [ELIMINARPROFESOR] (state, id) {
    delete state.profesores[id]
  }
}
