import { AGREGARCONSULTA, EDITARCONSULTA, ELIMINARCONSULTA } from './types'

export default {
  [AGREGARCONSULTA] (state, data) {
    state.consultas[data.id]=data.consulta

  },
  [EDITARCONSULTA] (state, data) {
    state.consultas[data.id] = {
      mail: data.mail,
      nombre: data.nombre,
      asunto: data.asunto,
      descripcion: data.descripcion,
      respuesta: data.respuesta
      
    }
  },
  [ELIMINARCONSULTA] (state, id) {
    delete state.consultas[id]
  }
}
