<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Imagen (URL)"
      type="url"
      ref="imagen"
      :modelValue="imagen"
      @update:modelValue="event => $emit('update:imagen', event)"
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
  props: ['imagen']
}
</script>