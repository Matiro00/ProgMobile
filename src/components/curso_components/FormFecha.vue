<template>
  <div class="row q-mb-none">
    <q-input
      filled
      disable=true
      v-bind="fecha"
      mask="##/##/####"
      ref="fecha"
      :label="label"
      :modelValue="fecha"
      @update:modelValue="event => $emit('update:fecha', event)"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date
              :modelValue="fecha"
              mask="DD/MM/YYYY"
              @update:modelValue="event => $emit('update:fecha', event)"
              >
              <div>
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['fecha', 'label']
}
</script>
