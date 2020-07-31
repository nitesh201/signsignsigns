<template>
  <div>
    <Header
      :nav-items="navItems"
      @toggleOverlay="() => overlayVisible = !overlayVisible"
    />
    <div v-if="!overlayVisible" id="content">
      <slot />
    </div>
    <div v-if="overlayVisible" id="overlay">
      <span id="close" @click="() => overlayVisible = !overlayVisible">X</span>
      <div id="navLinks">
        <a v-for="navItem in navItems" :key="navItem.text" class="navItem" :href="navItem.url">
          {{ navItem.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Header from '@/components/Header.vue'
import { NavItem } from '@/types/types'

export default defineComponent({
  components: {
    Header
  },
  setup () {
    const overlayVisible = ref<Boolean>(false)
    const navItems: NavItem[] = [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      { text: 'Resources', url: '/resources' },
      { text: 'Contact', url: '/contact' }
    ]
    return {
      overlayVisible,
      navItems
    }
  }
})
</script>

<style scoped>
#close {
  position: absolute;
  top: 35px;
  right: 50px;
  cursor: pointer;
  color: white;
  font-size: 30px;
}

#overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  background-color: blue;
  z-index: 1000;
}

#navLinks {
  position: relative;
  top: 135px;
}

.navItem {
  margin: 10px;
  display: block;
  color: white;
  font-size: 30px;
}
</style>
