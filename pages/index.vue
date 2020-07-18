<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Home from '../components/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0000FF;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 40px;
}
</style>
