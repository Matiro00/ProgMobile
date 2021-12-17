<template>
  <q-card  bordered style="width:300px;">
    <q-card-section>
      <div class="text-center text-h5 text-orange-10 q-pb-md">{{ curso.nombre}}</div>
      <div class="text-center text-caption text-black q-pb-md">{{ curso.descripcion }}</div>
      <div class="text-center text-weight-bold text-caption text-black q-pb-md">Categoria: {{ curso.categoria }}</div>
  
      <div class="text-left text-caption text-grey q-pb-md">Fecha de inicio: {{ curso.fechaInicio }}</div>
    </q-card-section>
    <div class="div" style="text-align:center">
    <q-btn
      v-on:click="editarCurso=true"
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
    </div>
    <q-dialog v-model="editarCurso" persistent >
      <CursoEditar :cursoProp="{id,...curso}"
      @cerrarEditarCurso="editarCurso=false"/>
    </q-dialog>

  </q-card>
</template>

<script>
import CursoEditar from 'components/cursos/CursoEditar.vue'
import { ELIMINARCURSO } from 'src/store/cursos/types'
import { mapActions } from 'vuex'
export default {
  components:{
    CursoEditar
  },
  data () {
    return {
      editarCurso: false
    }
  },
  name: 'CursoCard',
  props: ['curso','id'],
  methods:{
    ...mapActions('cursos',[ELIMINARCURSO]),
    confirmEliminar(){
      this.$q.dialog({
        title: 'Confirmar eliminacion',
        message:'Esta seguro de eliminar al curso seleccionado?',
        cancel:true,
        persistent:true
      }).onOk(()=>{
        this.$q.notify({
        message: 'El curso se elimino con exito',
        color: 'positive'
      })
        this.eliminarCurso(this.id)
        
      })
      
    }
  }
}
</script>
