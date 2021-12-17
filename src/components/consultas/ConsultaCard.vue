<template>
  <q-card  bordered style="width:100%; height:100%">
    <q-card-section>
      <div class="text-left text-h5 text-black-10 q-pb-md">Nombre: {{ consulta.nombre}}</div>
      <div class="text-left text-h7 text-grey-5 q-pb-md">{{ consulta.mail}}</div>
      <div class="text-left text-h5 text-orange-10 q-pb-md">Asunto: {{ consulta.asunto}}</div>
      <div class="text-left text-caption text-black q-pb-md">{{ consulta.descripcion }}</div>
      <hr>
      <div class="text-left text-h5 text-black-10 q-pb-md">Respuesta:</div>
      <div class="text-left text-caption text-black q-pb-md ">{{ consulta.respuesta }}</div>
    </q-card-section>
    <div class="div" style="text-align:center">
    <q-btn
      v-on:click="editarConsulta=true"
      icon="settings"
      flat
      color="positive"
      label="Editar"
    />
    <q-btn
      icon="delete"
      flat
      color="negative"
      label="Eliminar"
      @click="confirmEliminar"
    />
    <q-btn
      v-on:click="altaRespuesta=true"
      icon="question_answer"
      flat
      color="info"
      label="Responder"
    />
    </div>
    <q-dialog v-model="editarConsulta" persistent >
      <ConsultaEditar :consultaProp="{id,...consulta}"
      @cerrarEditarConsulta="editarConsulta=false"/>
    </q-dialog>
    <q-dialog v-model="altaRespuesta" persistent >
      <ConsultaRespuesta :consultaProp="{id,...consulta}"
      @cerrarAltaRespuesta="altaRespuesta=false"/>
    </q-dialog>


  </q-card>
</template>

<script>
import ConsultaEditar from 'components/consultas/ConsultaEditar.vue'
import ConsultaRespuesta from 'components/consultas/ConsultaRespuesta.vue'
import { ELIMINARCONSULTA } from 'src/store/consultas/types'
import { mapActions } from 'vuex'
export default {
  components:{
    ConsultaEditar,
    ConsultaRespuesta
  },
  data () {
    return {
      altaRespuesta: false,
      editarConsulta: false
    }
  },
  name: 'ConsultaCard',
  props: ['consulta','id'],
  methods:{
    ...mapActions('consultas',[ELIMINARCONSULTA]),
    confirmEliminar(){
      this.$q.dialog({
        title: 'Confirmar eliminacion',
        message:'Esta seguro de eliminar la consulta seleccionada?',
        cancel:true,
        persistent:true
      }).onOk(()=>{
        this.$q.notify({
        message: 'La consulta se elimino con exito',
        color: 'positive'
      })
        this.eliminarConsulta(this.id)
        
      })
      
    }
  }
}
</script>
