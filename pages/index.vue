<template>
  <div id="app">
    <div>
      <Header />
      <div id="content">
          <GalleryView
              :galleryItems="signsPosts"
              @itemSelected="onItemSelected"
          />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { defineComponent, ref, computed } from '@vue/composition-api';
import Header from '@/components/Header.vue';
import GalleryView from '@/components/GalleryView.vue';

export default defineComponent({
  components: {
    Header,
    GalleryView,
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
      onItemSelected
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
