<template>
  <div id="app">
    <Layout>
      <p>
        Signsignsigns is a curated collection of historical and contemporary political design. 
        The images on this site are drawn from different periods and contexts, but all remain 
        alarmingly relevant today. By vectorizing graphics previously available only as low-resolution 
        photographs, we hope to preserve critical works of protest art and make them accessible to new 
        users. It is our goal not only to recirculate these historical signs and posters but also to 
        offer them to artists and designers practicing today as inspiration for new work. In this way, 
        we hope to cultivate an ongoing archive of images that can grow and change in response to 
        current events.
      </p>
      <br />
      <p>
        We invite you to download images in a variety of formats. Posters are available at two 
        print-ready sizes (11×17″ or 18×24″), sheets of four 3.75×5″ graphics are available for 
        efficiently printing postcards, and 6×8″ downloads are available for protestors printing 
        on T-shirts.
      </p>
      <br />
      <p>
        We do not claim the rights to any images on our site, and we do not gain any profit from 
        image downloads. We intend only to make images available for use in political demonstrations 
        and mailing campaigns, and we hope that you use these images respectfully.
      </p>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/Header.vue'

export default defineComponent({
  components: {
    Header
  },
  setup () {
    return {
    }
  }
})
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
