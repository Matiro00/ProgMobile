<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Nombre Curso"
      model-value=required!
      :rules="[ nombre => nombre.length <= 60 || 'Limite de 60 caracteres' ]"
      :lazy-rules='true'
      ref="nombrecurso"
      :modelValue="nombre"
      @update:modelValue="event => $emit('update:nombre', event)"
    >
      <template v-slot:append>
        <q-icon
        name="close"
        class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['nombre']
}
</script>
