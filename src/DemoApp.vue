<script lang="ts">
import { defineComponent } from 'vue'
import Collapse from './components/VueCollapse.vue'

export default defineComponent({
  components: {
    Collapse,
  },
  data() {
    return {
      isCollapsed1: false,
      isCollapsed2: true,
      isCollapsed3: true,
      isCollapsed4: true,
      display1: '',
      display2: '',
      display3: '',
      display4: '',
    }
  },
  methods: {
    onExpanded() {
      console.log('onExpanded')
    },
  },
})
</script>

<template>
  <div class="app">
    <button class="toggle" @click="isCollapsed1 = !isCollapsed1">
      {{ display1 }}
    </button>
    <section class="section">
      <Collapse
        :when="isCollapsed1"
        @init="(state) => (display1 = 'init ' + state)"
        @event="(state) => (display1 = 'event ' + state)"
        @expanded="onExpanded"
        as="div"
        v-slot="{ state }"
      >
        <div class="spacer"></div>
        <p class="long-text">
          {{ state }} - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button class="tooltip-hover" @click="isCollapsed1 = !isCollapsed1">
          dummy button
        </button>
        <p class="tooltip">Collapse?</p>
        <div class="spacer"></div>
      </Collapse>
    </section>

    <button class="toggle" @click="isCollapsed2 = !isCollapsed2">
      {{ display2 }}
    </button>
    <section class="section">
      <Collapse
        :when="isCollapsed2"
        @init="(state) => (display2 = 'init ' + state)"
        @event="(state) => (display2 = 'event ' + state)"
        @expanded="onExpanded"
        as="div"
        transition="400ms cubic-bezier(0, 1, 0, 1)"
        v-slot="{ state }"
      >
        <div class="spacer"></div>
        <p class="long-text">
          {{ state }} - Where does it come from? Contrary to popular belief,
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </p>
        <button @click="isCollapsed2 = !isCollapsed2">dummy button</button>
        <div class="spacer"></div>
      </Collapse>
    </section>

    <button class="toggle" @click="isCollapsed3 = !isCollapsed3">
      {{ display3 }}
    </button>
    <section class="section">
      <Collapse
        :when="isCollapsed3"
        @init="(state) => (display3 = 'init ' + state)"
        @event="(state) => (display3 = 'event ' + state)"
        @expanded="onExpanded"
      >
        <div class="spacer"></div>
        <p class="long-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button @click="isCollapsed3 = !isCollapsed3">dummy button</button>
        <div class="spacer"></div>
      </Collapse>
    </section>

    <button class="toggle" @click="isCollapsed4 = !isCollapsed4">
      {{ display4 }}
    </button>
    <section class="section">
      <Collapse
        :when="isCollapsed4"
        @init="(state) => (display4 = 'init ' + state)"
        @event="(state) => (display4 = 'event ' + state)"
        @expanded="onExpanded"
      >
        <div class="spacer"></div>
        <p class="long-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button @click="isCollapsed4 = !isCollapsed4">dummy button</button>
        <div class="spacer"></div>
      </Collapse>
    </section>
  </div>
</template>

<style>
*,
::before,
::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  position: relative;
}

html {
  font-size: 100%;
  height: 100%;
  overflow-y: scroll;
}

body {
  font-family: sans-serif;
  font-size: 16px;
  min-height: 100%;
  padding: 1rem;
}
</style>

<style scoped>
.app {
  max-width: 800px;
  margin-inline: auto;
}

.toggle {
  border: 2px solid;
  padding: 0.5rem 1rem;
  min-width: 12rem;
  background: white;
  z-index: 1;
  text-align: left;
  border-radius: 1rem;
}

.section {
  flex: 1;
  flex-direction: column;
  margin-bottom: 1rem;
}

.long-text {
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 0.5rem;
  background: #eee;
}

.spacer {
  padding-top: 1rem;
}

.tooltip {
  display: none;
  position: absolute;
  top: calc(100% - 8px);
  left: 0;
  border: 1px solid;
  pointer-events: none;
  background-color: ghostwhite;
  z-index: 2;
  padding: 16px;
}

.tooltip-hover:hover ~ .tooltip {
  display: block;
}

/* Custom easing */
.vue-collapse[data-vue-collapse-transition] {
  transition: grid-template-rows 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
