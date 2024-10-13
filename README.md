# Vue Collapse

Collapsible component with CSS transition for elements with variable and dynamic height.

[![npm version](https://img.shields.io/npm/v/@kunukn/vue-collapse.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/vue-collapse)
[![npm downloads](https://img.shields.io/npm/dm/@kunukn/vue-collapse.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/vue-collapse)
[![gzip](https://img.shields.io/bundlephobia/minzip/@kunukn/vue-collapse.svg)](https://bundlephobia.com/result?p=@kunukn/vue-collapse)
[![license](https://img.shields.io/github/license/kunukn/vue-collapse.svg)](https://github.com/kunukn/vue-collapse/blob/master/LICENSE)

vue-collapse

![logo](logo/collapsible.svg 'logo')

# Demo

<table style="border-spacing: 16px;border-collapse: separate;">

<tr>
<td>Codesandbox simple Vue 3</td>
<td><img width="24" height="24" src="ui-library-logo/Vue-logo.svg"/></td>
<td><a href="https://s128s4.csb.app" target="_blank">View</a></td>
<td><a href="https://codesandbox.io/s/kunukn-vue-collapse-s128s4" target="_blank" >Edit</a></td>
</tr>

</table>

# Tiny library

| name                 | size    | gzip    |
| -------------------- | ------- | ------- |
| vue-collapse.css     | 0.37 kB | 0.20 kB |
| vue-collapse.js      | 2.11 kB | 0.91 kB |
| vue-collapse.umd.cjs | 1.72 kB | 0.88 kB |

# CSS required

:warning: ️You need to add the CSS file.

```js
import '@kunukn/vue-collapse/style' // this imports the vue-collapse.css file.
```

or CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@kunukn/vue-collapse/dist/vue-collapse.css"
/>
```

or manually copy the content from the `vue-collapse.css` file to your app.

To alter the timing, you can use the `transition` prop. or add a custom CSS.

```HTML
<style>
[data-vue-collapse-transition] {
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
```

## Supported versions

Vue 3

## Install

```bash
npm install @kunukn/vue-collapse
```

## Import

```js
import '@kunukn/vue-collapse/style'
import { VueCollapse } from '@kunukn/vue-collapse'
```

## Attribute options

There are four possible states: `collapsed`, `collapsing`, `expanded`, `expanding`.

<details>
  <summary>Click: to see the attributes</summary>

| Attribute     | Type     | Default | About                                               |
| ------------- | -------- | ------- | --------------------------------------------------- |
| :when         | boolean  | falsy   | should component collapse?                          |
| :as           | string   | div     | element type to render                              |
| transition    | string   | falsy   | apply custom CSS transition, see demo example below |
| @collapse()   | function |         | event emitted with component in this state          |
| @collapsing() | function |         | event emitted with component in this state          |
| @expanded()   | function |         | event emitted with component in this state          |
| @expanding()  | function |         | event emitted with component in this state          |
| @event(state) | function |         | event emitted with one of the 4 states              |
| @init(state)  | function |         | component mount event emitted with current state    |

</details>

<br>

## Usage examples

<details>
  <summary>Click: Simple version using ARIA</summary>

```vue
<template>
  <div class="app">
    <button
      @click="isCollapsed = !isCollapsed"
      :aria-expanded="!isCollapsed"
      aria-controls="my-description"
    >
      {{ display }}
    </button>

    <VueCollapse
      id="my-description"
      :when="isCollapsed"
      @event="onEvent"
      v-slot="{ state }"
    >
      <p class="long-text">
        I know the state: {{ state }}. Lorem Ipsum is simply dummy text of the
        printing and typesetting industry.
      </p>
    </VueCollapse>
  </div>
</template>

<script setup>
import { VueCollapse } from '@kunukn/vue-collapse'
import { ref } from 'vue'

const isCollapsed = ref(false)
const display = ref('')

const onEvent = (state) => {
  display.value = 'event ' + state
}
</script>

<style>
/* Custom easing */
.vue-collapse[data-vue-collapse-transition] {
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
```

</details>
<br>
<br>

# CDN

https://unpkg.com/@kunukn/vue-collapse/

# Supported browsers

Modern browsers that can CSS transition on `grid-template-rows`.

# Design goals

<details>
  <summary>Click: to see design goals</summary>

- Minimal in file size
- Let the browser handle the animation using CSS transition
- Minimalistic API
- Flexible - provide your own markup, styling and easing
- Interruptible - can be reversed during movement
- Inert - when collapsed you should tab over the collapsed component
- Availability - from CDN or npm install
- Collapsible on height only

</details>
