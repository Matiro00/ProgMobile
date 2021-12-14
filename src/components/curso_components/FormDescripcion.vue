<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Descripcion"
      ref="descripcion"
      :rules="[ descripcion => descripcion.length <= 300 || 'Limite de 300 caracteres' ]"
      :lazy-rules='true'
      :modelValue="descripcion"
      @update:modelValue="event => $emit('update:descripcion', event)"
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
  props: ['descripcion']
}
</script>
