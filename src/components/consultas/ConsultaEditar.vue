<template>
  <q-card>
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Editar Consulta</div>
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
        <FormEmail v-model:mail="consulta.mail" ref="mail" />
        <FormNombre v-model:nombre="consulta.nombre" ref="nombre" />
        <FormAsunto v-model:asunto="consulta.asunto" ref="descripcion" />
        <FormDescripcion v-model:descripcion="consulta.descripcion" ref="descripcion" />
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
          @click="editForm"
       />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import FormNombre from '../comunes/FormNombre.vue'
import FormEmail from '../comunes/FormEmail.vue'
import FormAsunto from '../consulta_components/FormConsulta.vue'
import FormDescripcion from '../curso_components/FormDescripcion.vue'
import { mapActions, mapGetters } from 'vuex'
import { EDITARCONSULTA } from 'src/store/consultas/types'
export default {
  props: ['consultaProp'],
  name: 'ConsultaEditar',
  components: {
    FormNombre,
    FormEmail,
    FormAsunto,
    FormDescripcion
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
    editForm: function () {
      try{
      validar(this.consulta);
      this.editarConsulta(this.consulta)
      this.$q.notify({
        message: 'Consulta modificada exitosamente',
        color: 'positive'
      })
      this.$emit('cerrarEditarConsulta')
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
  if(consulta.nombre.length==0){
    throw new Error("Introduzca un nombre")
  }
  if(consulta.nombre.length>=60){
    throw new Error("Introduzca un nombre no mayor a 60 caracteres")
  }
  if(consulta.descripcion.length>=300){
      throw new Error("La descripcion no tiene que ser mayor a 300 caracteres")
  }
  if(consulta.mail.length==0){
    throw new Error("Introduzca un mail ")
  }
  if(consulta.asunto.length==0){
    throw new Error("Introduzca un asunto ")
  }
  
}
</script>