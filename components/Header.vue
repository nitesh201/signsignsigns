<template>
  <div id="header">
    <div id="title">
      <a href="/">SIGNSIGNSIGNS</a>
      <span id="hamburger" @click="toggleOverlay" />
    </div>
    <div id="navLinks">
      <a v-for="navItem in navItems" :key="navItem.text" class="navItem" :href="navItem.url">
        {{ navItem.text }}
      </a>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #0000FF;
}
a:visited {
  color: #0000FF;
}
#header {
    display: flex;
    justify-content: space-between;
    height: 140px;
}
#title {
    font-weight: bold;
    font-size: 26px;
}
#navLinks {
    display: flex;
    justify-content: space-between;
}
.navItem {
    margin-left: 50px;
    margin-right: 50px;
    font-size: 22px;
    font-weight: bold;
}
.navItem:last-of-type {
    margin-right: 0px;
}
@media screen and (max-width: 1400px){
  .navItem {
    font-size: 16px;
  }
  #title {
    font-size: 20px;
  }
}
@media screen and (max-width: 1200px){
  #navLinks { display: none; }
  #hamburger {
    position: absolute;
    top: 40px;
    right: 50px;
    cursor: pointer;
  }
  #hamburger:after { content: '\2630'; }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { NavItem } from '../types/types'

export default defineComponent({
  name: 'Header',
  props: {
    navItems: {
      type: Array as PropType<NavItem[]>,
      default: []
    }
  },
  setup (_props, context) {
    const toggleOverlay = () => {
      context.emit('toggleOverlay')
    }
    return {
      toggleOverlay
    }
  }
})
</script>
