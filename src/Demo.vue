<script setup lang="ts">
import Collapse from "./components/VueCollapse.vue";
import { ref } from "vue";

const isCollapsed1 = ref(false);
const display1 = ref("");

const isCollapsed2 = ref(true);
const display2 = ref("");

const onInit1 = (state) => {
  display1.value = "init 1 " + state;
};
const onEvent1 = (state) => {
  display1.value = "event 1 " + state;
};

const onInit2 = (state) => {
  display2.value = "init 2 " + state;
};
const onEvent2 = (state) => {
  display2.value = "event 2 " + state;
};

const onExpanded = () => {
  console.log("onExpanded");
};
</script>

<template>
  <div class="app">
    <button class="toggle" @click="isCollapsed1 = !isCollapsed1">{{ display1 }}</button>

    <section class="section">
      <Collapse
        :when="isCollapsed1"
        @init="onInit1"
        @event="onEvent1"
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
        <button>dummy button</button>
        <div class="spacer"></div>
      </Collapse>
    </section>

    <button class="toggle" @click="isCollapsed2 = !isCollapsed2">{{ display2 }}</button>
    <section class="section">
      <Collapse
        :when="isCollapsed2"
        @init="onInit2"
        @event="onEvent2"
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
        <button>dummy button</button>
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

/* Custom easing */
.vue-collapse[data-vue-collapse-transition] {
  transition: grid-template-rows 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
