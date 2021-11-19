<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md">
      <q-btn
        v-on:click="agregarCurso=true"
        icon="add"
        color="primary"
        class=" q-mx-lg on-left"
        label="Agregar Curso"
      />
    </div>
    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <CursoCard
        v-for="(curso,id) in getCursos"
        :curso="curso"
        :id="id"
        :key="id"
      />
    </div>
    <q-dialog v-model="agregarCurso" persistent>
      <CursoAlta
      @cerrarAltaCurso="agregarCurso=false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import CursoCard from '../components/cursos/CursoCard.vue'
import CursoAlta from '../components/cursos/CursoAlta.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    CursoCard,
    CursoAlta
  },
  data () {
    return {
      agregarCurso: false
    }
  },
  computed: {
    ...mapGetters('cursos',['getCursos'])
  }
}
</script>