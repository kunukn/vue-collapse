# Vue Collapse

Collapsible component with CSS transition for elements with variable and dynamic height.

[![npm version](https://img.shields.io/npm/v/@kunukn/vue-collapse.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/vue-collapse)
[![npm downloads](https://img.shields.io/npm/dm/@kunukn/vue-collapse.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/vue-collapse)
[![gzip](https://img.shields.io/bundlephobia/minzip/@kunukn/vue-collapse.svg)](https://bundlephobia.com/result?p=@kunukn/vue-collapse)
[![license](https://img.shields.io/github/license/kunukn/vue-collapse.svg)](https://github.com/kunukn/vue-collapse/blob/master/LICENSE)

vue-collapse

# Tiny library

```
vue-collapse.css  0.30 kB │ gzip: 0.18 kB
vue-collapse.umd.cjs  1.69 kB │ gzip: 0.86 kB
```

# CSS required

:warning: ️You need to add the CSS file.

```html
<link rel="stylesheet" href="<path-to>/dist/vue-collapse.css" />
```

## Supported versions

Vue 3

## Attribute options

There are four possible states: `collapsed`, `collapsing`, `expanded`, `expanding`.

| Attribute       | Type     | Default | About                                            |
| --------------- | -------- | ------- | ------------------------------------------------ |
| :when           | boolean  | falsy   | should component collapse?                       |
| :transition     | string   | falsy   | apply custom CSS transition                      |
| :as             | string   | div     | element type to render                           |
| @onCollapse()   | function |         | event emitted with component in this state       |
| @onCollapsing() | function |         | event emitted with component in this state       |
| @onExpanded()   | function |         | event emitted with component in this state       |
| @onExpanding()  | function |         | event emitted with component in this state       |
| @onEvent(state) | function |         | event emitted with one of the 4 states           |
| @onInit(state)  | function |         | component mount event emitted with current state |

<br>

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

# CDN

https://unpkg.com/@kunukn/vue-collapse/

# Supported browsers

Modern browsers

# Design goals

- let the browser handle the animation using CSS height transition
- minimal in file size
- minimalistic API
- flexible - provide your own markup, styling and easing
- interruptible - can be reversed during movement
- inert - when collapsed you should tab over the collapsed component
- availability - from CDN or npm install
- collapsible on height only