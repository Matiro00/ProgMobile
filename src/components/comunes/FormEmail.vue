<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Mail"
      type="email"
      ref="mail"
      :rules="[ mail => mail.length != 0 || 'Introduzca un mail' ]"
      :lazy-rules='true'
      :modelValue="mail"
      @update:modelValue="event => $emit('update:mail', event)"
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
  props: ['mail']
}
</script>
