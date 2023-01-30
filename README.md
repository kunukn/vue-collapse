# Vue Collapse

Collapsible component with CSS transition for elements with variable and dynamic height.

# Tiny library

```
vue-collapse.css  0.30 kB │ gzip: 0.18 kB
vue-collapse.umd.cjs  1.69 kB │ gzip: 0.86 kB
```

# CSS required

:warning: ️You need to add the CSS file. ``

```html
<link rel="stylesheet" href="<path-to>/dist/vue-collapse.css" />
```

## Supported versions

Vue 3

## Usage example

### Simple

```vue
<template>
  <div class="app">
    <button @click="isCollapsed = !isCollapsed">{{ display }}</button>

    <section class="section">
      <Collapse
        :when="isCollapsed"
        @init="onInit"
        @event="onEvent"
        @expanded="onExpanded"
        v-slot="{ state }"
      >
        <p class="long-text" :data-state="state">
          {{ state }} - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </Collapse>
    </section>
  </div>
</template>

<script setup>
import { VueCollapse as Collapse } from "@kunukn/vue-collapse";
import { ref } from "vue";

const isCollapsed = ref(false);
const display = ref("");

const onInit = (state) => {
  display.value = "init " + state;
};

const onEvent = (state) => {
  display.value = "event " + state;
};

const onExpanded = () => {
  console.log("onExpanded");
};
</script>

<style>
/* Custom easing */
.vue-collapse[data-vue-collapse-transition] {
  transition: grid-template-rows 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
```
