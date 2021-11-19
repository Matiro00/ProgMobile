<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Apellido"
      ref="apellido"
      :rules="[ apellido => apellido.length <= 40 || 'Limite de 40 caracteres' ]"
      :lazy-rules='true'
      :modelValue="apellido"
      @update:modelValue="event => $emit('update:apellido', event)"
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
  props: ['apellido']
}
</script>
