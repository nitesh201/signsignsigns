<template>
  <div id="app">
    <Layout>
      <GalleryView
        :galleryItems="signsPosts"
        @itemSelected="onItemSelected"
      />
    </Layout>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { defineComponent, ref, computed } from '@vue/composition-api';
import GalleryView from '@/components/GalleryView.vue';
import Layout from '@/components/Layout.vue';

export default defineComponent({
  components: {
    GalleryView,
    Layout,
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  setup(props, context) {
    const signsPosts = computed(() => context.root.$store.state.signsPosts)
    const onItemSelected = (index: number) => {
      context.root.$router.push(signsPosts.value[index].slug)
    }
    return {
      signsPosts,
      onItemSelected,
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
