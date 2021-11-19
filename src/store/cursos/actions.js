import { AGREGARCURSO, EDITARCURSO, ELIMINARCURSO } from './types'
let id=0
export default {
  [AGREGARCURSO]: ({ commit }, curso) => {
    const nuevoCurso = {
      id: id,
      curso
    }
    id++;
    commit(AGREGARCURSO, nuevoCurso)
  },
  [EDITARCURSO]: ({ commit }, curso) => {
    commit(EDITARCURSO, curso)
  },
  [ELIMINARCURSO]: ({ commit }, cursoId) => {
    commit(ELIMINARCURSO, cursoId)
  }
}
