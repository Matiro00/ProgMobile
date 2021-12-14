<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="D.N.I."
      ref="dni"
      :rules="[ dni => dni.length == 8 || 'Introduzca un dni valido' ]"
      :lazy-rules='true'
      :modelValue="dni"
      @update:modelValue="event => $emit('update:dni', event)"
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
  props: ['dni']
}
</script>
