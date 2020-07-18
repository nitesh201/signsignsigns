<template>
  <div id="app">
    <div>
      <Header />
      <div id="content">
          <ImageView
              :image="signsPost"
          />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  async asyncData({ params, payload }) {
    if (payload) return { signsPost: payload };
    else
      return {
        signsPost: await require(`~/assets/content/signs/${params.signs}.json`),
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