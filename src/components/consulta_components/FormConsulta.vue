<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Asunto"
      ref="asunto"
      :rules="[ asunto => asunto.length <= 300 || 'Limite de 300 caracteres' ]"
      :lazy-rules='true'
      :modelValue="asunto"
      @update:modelValue="event => $emit('update:asunto', event)"
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
  props: ['asunto']
}
</script>