<template>
  <div id="galleryView">
    <div id="foreword">{{forewordText}}</div>
    <Gallery
      :galleryItems="galleryItems"
      @itemSelected="(index)=>$emit('itemSelected', index)"
    />
  </div>
</template>

<style scoped>
#galleryView {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  column-gap: 15px;
  height: 100%;
}
#foreword {
  grid-area: 1/ 1/ 2/ 4;
  text-align: left;
  hyphens: auto;
  font-size: 20px;
}
@media screen and (max-width: 1400px){
  #foreword { font-size: 14px; }
}
@media screen and (max-width: 1200px){
  #galleryView { display: block; }
  #foreword { margin-bottom: 20px; }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { GalleryItem } from '../types/types';
import Gallery from './Gallery.vue';

export default defineComponent({
  name: 'GalleryView',
  props: {
    galleryItems: {
      type: Array as PropType<GalleryItem[]>,
      default: [],
    },
  },
  components: {
    Gallery,
  },
  setup() {
    const forewordText = 'We are a collective of artists and designers working both to revive past '
        + 'political graphics and to encourage new visual responses to current events. Every graphic is '
        + 'available as a free print-ready download for use in political protests or mailing campaigns.';
    return {
      forewordText,
    };
  },
});
</script>
