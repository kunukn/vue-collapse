<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  when: {
    type: Boolean,
    required: true,
  },
  as: {
    type: String,
    default: 'div',
  },
  transition: {
    type: String,
  },
})

const root = ref(null)
const state = ref('')

const eventPropertyName = 'grid-template-rows'

const expanding = 'expanding'
const collapsing = 'collapsing'
const expanded = 'expanded'
const collapsed = 'collapsed'
const transitionstart = 'transitionstart'
const transitionend = 'transitionend'

type emitEvents =
  | 'init'
  | 'event'
  | 'expanding'
  | 'collapsing'
  | 'expanded'
  | 'collapsed'

const emit = defineEmits([
  'init',
  'event',
  'expanding',
  'collapsing',
  'expanded',
  'collapsed',
] as emitEvents[])

const onStart = (event) => {
  if (event.propertyName === eventPropertyName) {
    let value: emitEvents = props.when ? collapsing : expanding
    state.value = value
    emit('event', value)
    emit(value)
  }
}

const onEnd = (event) => {
  if (event.propertyName === eventPropertyName) {
    let value: emitEvents = props.when ? collapsed : expanded
    state.value = value
    emit('event', value)
    emit(value)
  }
}

onMounted(() => {
  let value = props.when ? collapsed : expanded
  state.value = value
  emit('init', value)

  if (root.value) root.value.addEventListener(transitionstart, onStart)
  if (root.value) root.value.addEventListener(transitionend, onEnd)
})

onBeforeUnmount(() => {
  if (root.value) root.value.removeEventListener(transitionstart, onStart)
  if (root.value) root.value.removeEventListener(transitionend, onEnd)
})
</script>

<template>
  <component
    :is="as"
    class="vue-collapse"
    ref="root"
    :data-state="state"
    :data-is-collapsed="when ? '' : null"
    data-vue-collapse-transition
    :inert="state !== expanded ? '' : null"
    :style="{
      transition: props.transition
        ? eventPropertyName + ' ' + props.transition
        : null,
    }"
  >
    <div class="vue-collapse-content">
      <slot :state="state" />
    </div>
  </component>
</template>

<style>
[data-vue-collapse-transition] {
  transition: grid-template-rows 290ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

<style scoped>
.vue-collapse {
  display: grid;
  grid-template-rows: 1fr;
}

.vue-collapse:not([data-state='expanded']) {
  overflow-y: hidden;
}

.vue-collapse[data-state='collapsed'] {
  visibility: hidden; /* inert */
}

.vue-collapse-content {
  min-height: 0;
}

.vue-collapse[data-is-collapsed] {
  grid-template-rows: 0fr;
}
</style>
