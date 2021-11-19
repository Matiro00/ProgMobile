<template>
  <q-card>
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Editar Profesor</div>
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
        <FormNombre v-model:nombre="profesor.nombre" ref="nombre" />
        <FormApellido v-model:apellido="profesor.apellido" ref="apellido" />
        <FormEmail v-model:mail="profesor.mail" ref="mail"/>
        <q-select
          options-cover
          standout="bg-primary text-white"
          transition-show="scale"
          transition-hide="scale"
          :rules="[ materia => materia.length!=0|| 'Elija una materia' ]"
          :lazy-rules='true'
          v-model="profesor.materia"
          v-bind:options="getMaterias"
          label="Materia"
        />
        <FormImagen v-model:imagen="profesor.imagen" ref="imagen"/>
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
import FormApellido from '../comunes/FormApellido.vue'
import FormEmail from '../comunes/FormEmail.vue'
import FormImagen from '../comunes/FormImagen.vue'
import { mapActions, mapGetters } from 'vuex'
import { EDITARPROFESOR } from 'src/store/profesores/types'
export default {
  props: ['profesorProp'],
  name: 'ProfesorAlta',
  components: {
    FormApellido,
    FormNombre,
    FormEmail,
    FormImagen
  },
  data () {
    return {
      profesor: {
        apellido:  this.profesorProp.apellido,
        nombre: this.profesorProp.nombre,
        dni: this.profesorProp.id,
        mail: this.profesorProp.mail,
        imagen: this.profesorProp.imagen,
        materia: this.profesorProp.materia
      }
      
    }
  },
  computed: {
    ...mapGetters('profesores',['getMaterias']),
  },
  methods: {
    ...mapActions('profesores',[EDITARPROFESOR]),
    editForm: function () {
      try{
      validar(this.profesor)
      this.editarProfesor(this.profesor)
      this.$q.notify({
        message: 'Profesor modificado exitosamente',
        color: 'positive'
      })
      this.$emit('cerrarEditarProfesor')
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
function validar(profesor){
  if(profesor.nombre.length==0){
    throw new Error("Introduzca un nombre")
  }
  if(profesor.apellido.length==0){
    throw new Error("Introduzca el apellido")
  }
  if(profesor.apellido.length>=40){
    throw new Error("Introduzca un apellido no mayor a 40 caracteres")
  }
  if(profesor.nombre.length>=30){
    throw new Error("Introduzca un nombre no mayor a 30 caracteres")
  }
  if(profesor.dni.length==0){
      throw new Error("Introduzca un dni")
  }
  if(profesor.mail.length==0){
      throw new Error("Introduzca un mail")
  }
  if(profesor.dni.length!=8){
      throw new Error("El dni debe tener 8 caracteres")
  }
  if(profesor.materia.length==0){
    throw new Error("Introduzca la materia que se especializa el profe")
  }
  
}

</script>