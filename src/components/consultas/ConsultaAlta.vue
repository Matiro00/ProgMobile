<template>
  <q-card>
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Agregar Consulta</div>
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
          @click="submitForm"
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
import { AGREGARCONSULTA } from 'src/store/consultas/types'
export default {
  name: 'ConsultaAlta',
  components: {
    FormNombre,
    FormEmail,
    FormAsunto,
    FormDescripcion
  },
  data () {
    return {
      consulta: {
        nombre: '',
        mail: '',
        asunto: '',
        descripcion: '',
        respuesta:''
        
      }
      
    }
  },
  methods: {
    ...mapActions('consultas',[AGREGARCONSULTA]),
    submitForm: function () {
      try {
      validar(this.consulta);
      this.consulta.respuesta=''
      this.agregarConsulta(this.consulta)
      this.$q.notify({
        message: 'Consulta agregado exitosamente',
        color: 'positive'
      })
      this.$emit('cerrarAltaConsulta')
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
  if(consulta.descripcion.length==0){
      throw new Error("Introduzca una descripcion")
  }
  if(consulta.mail.length==0){
    throw new Error("Introduzca un mail ")
  }
  if(consulta.asunto.length==0){
    throw new Error("Introduzca un asunto ")
  }
  
}

</script>
