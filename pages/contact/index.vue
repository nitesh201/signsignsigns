<template>
  <div id="app">
    <Layout>
      Contact Page
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { defineComponent } from '@vue/composition-api';
import Header from '@/components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
  setup(props, context) {
    return {
    };
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

<style scoped>
#content {
    height: calc(100vh - 200px);
}

</style>
