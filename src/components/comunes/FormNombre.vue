<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Nombre"
      :rules="[ nombre => nombre.length <= 30 || 'Limite de 30 caracteres' ]"
      :lazy-rules='true'
      ref="nombre"
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
