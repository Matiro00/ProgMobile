<template>
  <q-card  bordered>
    <q-img
      v-if="profesor.imagen" v-bind:src="profesor.imagen"
    />
    <q-img
      v-else src='~assets/default-profile.jpg'
    />
    <q-card-section>
      <div class="text-h6 text-center q-pb-sm ">{{ profesor.nombre }} {{ profesor.apellido }}</div>
      <div class="text-overline text-orange-9 text-center q-pb-sm">{{ profesor.materia}}</div>
      <div class="text-caption text-grey q-pb-sm">{{ profesor.mail }}</div>
    </q-card-section>

    <q-btn
      v-on:click="editarProfesor=true"
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
    <q-dialog v-model="editarProfesor" persistent >
      <ProfesorEditar :profesorProp="{id,...profesor}"
      @cerrarEditarProfesor="editarProfesor=false"/>
    </q-dialog>

  </q-card>
</template>

<script>
import ProfesorEditar from 'components/profesores/ProfesorEditar.vue'
import { ELIMINARPROFESOR } from 'src/store/profesores/types'
import { mapActions } from 'vuex'
export default {
  components:{
    ProfesorEditar
  },
  data () {
    return {
      editarProfesor: false
    }
  },
  name: 'ProfesorCard',
  props: ['profesor','id'],
  methods:{
    ...mapActions('profesores',[ELIMINARPROFESOR]),
    confirmEliminar(){
      this.$q.dialog({
        title: 'Confirmar eliminacion',
        message:'Esta seguro de eliminar al profesor seleccionado?',
        cancel:true,
        persistent:true
      }).onOk(()=>{
        this.$q.notify({
        message: 'Profesor '+this.profesor.nombre +' se fue elimina2',
        color: 'positive'
      })
        this.eliminarProfesor(this.id)
        
      })
      
    }
  }
}
</script>
