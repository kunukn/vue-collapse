# Vue Collapse

Collapsible component with CSS transition for elements with variable and dynamic height.

[![npm version](https://img.shields.io/npm/v/@kunukn/vue-collapse.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/vue-collapse)
[![npm downloads](https://img.shields.io/npm/dm/@kunukn/vue-collapse.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/vue-collapse)
[![gzip](https://img.shields.io/bundlephobia/minzip/@kunukn/vue-collapse.svg)](https://bundlephobia.com/result?p=@kunukn/vue-collapse)
[![license](https://img.shields.io/github/license/kunukn/vue-collapse.svg)](https://github.com/kunukn/vue-collapse/blob/master/LICENSE)

vue-collapse

# Tiny library

| name                 | size    | gzip    |
| -------------------- | ------- | ------- |
| vue-collapse.css     | 0.37 kB | 0.20 kB |
| vue-collapse.js      | 2.11 kB | 0.91 kB |
| vue-collapse.umd.cjs | 1.72 kB | 0.88 kB |

# CSS required

:warning: ️You need to add the CSS file.

```vue
import "@kunukn/vue-collapse/dist/vue-collapse.css"
```

or CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@kunukn/vue-collapse/dist/vue-collapse.css"
/>
```

## Supported versions

Vue 3

## Install

```bash
npm install @kunukn/vue-collapse
```

## Import

```js
import "@kunukn/vue-collapse/dist/vue-collapse.css";
import { VueCollapse } from "@kunukn/vue-collapse";
```

## Attribute options

There are four possible states: `collapsed`, `collapsing`, `expanded`, `expanding`.

| Attribute     | Type     | Default | About                                            |
| ------------- | -------- | ------- | ------------------------------------------------ |
| :when         | boolean  | falsy   | should component collapse?                       |
| :transition   | string   | falsy   | apply custom CSS transition                      |
| :as           | string   | div     | element type to render                           |
| @collapse()   | function |         | event emitted with component in this state       |
| @collapsing() | function |         | event emitted with component in this state       |
| @expanded()   | function |         | event emitted with component in this state       |
| @expanding()  | function |         | event emitted with component in this state       |
| @event(state) | function |         | event emitted with one of the 4 states           |
| @init(state)  | function |         | component mount event emitted with current state |

<br>

## Demo

<table style="border-spacing: 16px;border-collapse: separate;">

<tr>
<td>Codesandbox simple Vue 3</td>
<td><img width="24" height="24" src="ui-library-logo/Vue-logo.svg"/></td>
<td><a href="https://s128s4.csb.app" target="_blank">View</a></td>
<td><a href="https://codesandbox.io/s/kunukn-vue-collapse-s128s4" target="_blank" >Edit</a></td>
</tr>

</table>

## Usage example

### Simple

```vue
<template>
  <div class="app">
    <button @click="isCollapsed = !isCollapsed">{{ display }}</button>

    <section class="section">
      <Collapse :when="isCollapsed" @event="onEvent" v-slot="{ state }">
        <p class="long-text">
          I know the state: {{ state }}. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
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

const onEvent = (state) => {
  display.value = "event " + state;
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

- Minimal in file size
- Let the browser handle the animation using CSS transition
- Minimalistic API
- Flexible - provide your own markup, styling and easing
- Interruptible - can be reversed during movement
- Inert - when collapsed you should tab over the collapsed component
- Availability - from CDN or npm install
- Collapsible on height only
