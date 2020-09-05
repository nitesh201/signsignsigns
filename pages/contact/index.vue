<template>
  <div id="app">
    <Layout>
      <p>info (at) signsignsigns (dot) com</p>
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
  head () {
    return {
      title: 'SIGNSIGNSIGNS',
    }
  },
  setup () {
    return {
    }
  }
})
</script>

<style scoped>
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
#content {
    height: calc(100vh - 200px);
}

</style>
