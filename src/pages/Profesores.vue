<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md">
      <q-btn
        v-on:click="agregarProfesor=true"
        icon="person_add"
        color="primary"
        class=" q-mx-lg on-left"
        label="Agregar Profesor"
      />
    </div>
    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <ProfesoresCard
        v-for="(profesor,id) in getProfesores"
        :profesor="profesor"
        :id="id"
        :key="id"
      />
    </div>
    <q-dialog v-model="agregarProfesor" persistent>
      <ProfesorAlta
      @cerrarAltaProfesor="agregarProfesor=false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import ProfesoresCard from '../components/profesores/ProfesorCard.vue'
import ProfesorAlta from '../components/profesores/ProfesorAlta.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    ProfesoresCard,
    ProfesorAlta
  },
  data () {
    return {
      agregarProfesor: false
    }
  },
  computed: {
    ...mapGetters('profesores',['getProfesores'])
  }
}
</script>
