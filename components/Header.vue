<template>
    <div id="header">
        <div id="title">SIGNSIGNSIGNS</div>
        <div id="navLinks">
            <a v-for="navItem in navItems" class="navItem" :href="navItem.url" :key="navItem.text">
                {{navItem.text}}
            </a>
        </div>
    </div>
</template>

<style scoped>
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
    text-decoration: none;
    color: #0000FF;
    font-size: 22px;
    font-weight: bold;
}
.navItem:last-of-type {
    margin-right: 0px;
}
.navItem:visited { color: #0000FF }
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { NavItem } from '../types/types';

export default defineComponent({
  name: 'Header',
  setup() {
    const navItems: NavItem[] = [
      { text: 'Home', url: '/' },
      { text: 'About', url: '/about' },
      { text: 'Resources', url: '/resources' },
      { text: 'Contact', url: '/contact' },
    ];
    return {
      navItems,
    };
  },
});
</script>
