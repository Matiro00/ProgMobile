<template>
  <q-page class="q-pa-md">
    <div class="q-pa-md">
      <q-btn
        v-on:click="agregarConsulta=true"
        icon="add"
        color="primary"
        class=" q-mx-lg on-left"
        label="Hacer Consulta"
      />
    </div>
    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <ConsultaCard
        v-for="(consulta,id) in getConsultas"
        :consulta="consulta"
        :id="id"
        :key="id"
      />
      <br>
    </div>
    <q-dialog v-model="agregarConsulta" persistent>
      <ConsultaAlta
      @cerrarAltaConsulta="agregarConsulta=false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import ConsultaCard from '../components/consultas/ConsultaCard.vue'
import ConsultaAlta from '../components/consultas/ConsultaAlta.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    ConsultaCard,
    ConsultaAlta
  },
  data () {
    return {
      agregarConsulta: false
    }
  },
  computed: {
    ...mapGetters('consultas',['getConsultas'])
  }
}
</script>