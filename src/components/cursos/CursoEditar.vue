<template>
  <q-card>
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Editar Curso</div>
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
        <FormNombre v-model:nombre="curso.nombre" ref="nombre" />
        <FormDescripcion v-model:descripcion="curso.descripcion" ref="descripcion" />
        <q-select
          options-cover
          standout="bg-primary text-white"
          transition-show="scale"
          transition-hide="scale"
          :rules="[ categoria => categoria.length!=0 || 'Elija una categoria' ]"
          :lazy-rules='true'
          v-model="curso.categoria"
          v-bind:options="getCategorias"
          label="Materia"
        />
        <FormFecha v-model:fecha="curso.fechaInicio" label="Fecha Inicio" ref="fechainicio" />
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
import FormDescripcion from '../curso_components/FormDescripcion.vue'
import FormFecha from '../curso_components/FormFecha.vue'
import { mapActions, mapGetters } from 'vuex'
import { EDITARCURSO } from 'src/store/cursos/types'
import moment from 'moment'
export default {
  props: ['cursoProp'],
  name: 'CursoEditar',
  components: {
    FormNombre,
    FormDescripcion,
    FormFecha
  },
  data () {
    return {
      curso: {
        id:this.cursoProp.id,
        nombre: this.cursoProp.nombre,
        descripcion: this.cursoProp.descripcion,
        fechaInicio: this.cursoProp.fecha,
        categoria:this.cursoProp.categoria
      }
      
    }
  },
  computed: {
    ...mapGetters('cursos',['getCategorias']),
  },
  methods: {
    ...mapActions('cursos',[EDITARCURSO]),
    editForm: function () {
      try{
      validar(this.curso);
      this.editarCurso(this.curso)
      this.$q.notify({
        message: 'Curso modificado exitosamente',
        color: 'positive'
      })
      this.$emit('cerrarEditarCurso')
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
function validar(curso){
  if(curso.nombre.length==0){
    throw new Error("Introduzca un nombre para el curso")
  }
  if(curso.nombre.length>=60){
    throw new Error("Introduzca un nombre para el curso no mayor a 60 caracteres")
  }
  if(curso.descripcion.length>=300){
      throw new Error("La descripcion no tiene que ser mayor a 300 caracteres")
  }
  if(curso.categoria.length==0){
    throw new Error("Seleccione una categoria")
  }
  if(curso.fechaInicio==undefined){
    throw new Error("Introduzca una fecha para el curso")
  }
  let date=moment(curso.fechaInicio);
  if(date.isValid()){
    throw new Error("Introduzca una fecha valida para el curso")
  }
  
}
</script>