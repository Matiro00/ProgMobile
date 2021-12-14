<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      type="textarea"
      float-label="Textarea"
      rows="7"
      class="col"
      label="Respuesta"
      ref="respuesta"
      :rules="[
        (respuesta) => respuesta.length <= 300 || 'Limite de 300 caracteres',
      ]"
      :lazy-rules="true"
      :modelValue="respuesta"
      @update:modelValue="(event) => $emit('update:respuesta', event)"
    >
      <template v-slot:append>
        <q-icon name="close" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["respuesta"],
};
</script>