import { AGREGARCURSO, EDITARCURSO, ELIMINARCURSO } from './types'

export default {
  [AGREGARCURSO] (state, data) {
    state.cursos[data.id]=data.curso

  },
  [EDITARCURSO] (state, data) {
    state.cursos[data.id] = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      fechaInicio: data.fechaInicio,
      categoria: data.categoria
    }
  },
  [ELIMINARCURSO] (state, id) {
    delete state.cursos[id]
  }
}
