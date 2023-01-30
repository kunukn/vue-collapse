<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  when: {
    type: Boolean,
    required: true,
  },
  as: {
    type: String,
    default: "div",
  },
  transition: {
    type: String,
  },
});

const root = ref(null);
const state = ref("");

const eventPropertyName = "grid-template-rows";

const expanding = "expanding";
const collapsing = "collapsing";
const expanded = "expanded";
const collapsed = "collapsed";
const transitionstart = "transitionstart";
const transitionend = "transitionend";

type emitEvents =
  | "init"
  | "event"
  | "expanding"
  | "collapsing"
  | "expanded"
  | "collapsed";

const emit = defineEmits([
  "init",
  "event",
  "expanding",
  "collapsing",
  "expanded",
  "collapsed",
]);

const onStart = (event) => {
  if (event.propertyName === eventPropertyName) {
    let value: emitEvents = props.when ? collapsing : expanding;
    state.value = value;
    emit("event", value);
    emit(value);
  }
};

const onEnd = (event) => {
  if (event.propertyName === eventPropertyName) {
    let value: emitEvents = props.when ? collapsed : expanded;
    state.value = value;
    emit("event", value);
    emit(value);
  }
};

onMounted(() => {
  let value = props.when ? collapsed : expanded;
  state.value = value;
  emit("init", value);

  root.value.addEventListener(transitionstart, onStart);
  root.value.addEventListener(transitionend, onEnd);
});

onBeforeUnmount(() => {
  root.value.removeEventListener(transitionstart, onStart);
  root.value.removeEventListener(transitionend, onEnd);
});
</script>

<template>
  <component
    :is="as"
    class="vue-collapse-2023"
    ref="root"
    :data-state="state"
    :data-is-collapsed="when ? '' : null"
    data-vue-collapse-2023
    :style="{
      transition: props.transition
        ? eventPropertyName + ' ' + props.transition
        : null,
    }"
  >
    <div class="vue-collapse-2023-content">
      <slot :state="state" />
    </div>
  </component>
</template>
