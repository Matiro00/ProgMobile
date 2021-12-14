<template>
  <q-card style="width:1200px"> 
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Responder Consulta</div>
      <q-space />
      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close" />
    </q-card-section>
    <form v-on:submit="submitForm">
      <q-card-section class="q-mx-md q-gutter-md">
        <FormRespuesta v-model:respuesta="consulta.respuesta" ref="respuesta" />
      </q-card-section>
      <q-card-actions align="right" class="  q-mb-sm q-px-md text-primary">
        <q-btn
          icon="cancel"
          flat
          color="negative"
          label="Cancelar"
          v-close-popup
        />
        <q-btn
          icon="check"
          flat
          color="positive"
          label="Aceptar"
          @click="answerForm"
       />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import FormRespuesta from '../consulta_components/FormRespuesta.vue'
import { mapActions, mapGetters } from 'vuex'
import { EDITARCONSULTA } from 'src/store/consultas/types'
export default {
  props: ['consultaProp'],
  name: 'ConsultaEditar',
  components: {
    FormRespuesta
  },
  data () {
    return {
      consulta: {
        id:this.consultaProp.id,
        nombre: this.consultaProp.nombre,
        descripcion: this.consultaProp.descripcion,
        mail: this.consultaProp.mail,
        asunto:this.consultaProp.asunto,
        respuesta: this.consultaProp.respuesta
      }
      
    }
  },
  methods: {
    ...mapActions('consultas',[EDITARCONSULTA]),
    answerForm: function () {
      try{
      validar(this.consulta);
      this.editarConsulta(this.consulta)
      this.$q.notify({
        message: 'Consulta modificada exitosamente',
        color: 'positive'
      })
      this.$emit('cerrarAltaRespuesta')
      }
      catch (Error) {
        this.$q.notify({
        message: Error.message,
        color: 'negative'
      })
      }
    }
  }
}
function validar(consulta){
  if(consulta.respuesta.length==0){
    throw new Error("Introduzca una respuesta ")
  }
  if(consulta.respuesta.length>300){
    throw new Error("Introduzca una respuesta menor a 300 caracteres")
  }
  
}
</script>