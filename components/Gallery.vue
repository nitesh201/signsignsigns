<template>
    <div id="gallery">
        <div class="galleryItem"
        v-for="(galleryItem, index) in galleryItems"
        :key="index"
        :style="`background-image: url(${galleryItem.url});`"
        @click="()=>clickHandler(index)"
        >
        </div>
    </div>
</template>

<style scoped>
#gallery {
    display: grid;
    grid-area: 1 / 5 / 2 / 17;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;  /* Firefox */
}
#gallery::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
.galleryItem {
    padding-bottom: 100%;
    border: 1px solid blue;
    background-repeat: no-repeat;
    background-position: center;
}
.galleryItem:hover {
    cursor: pointer;
    background-color: blue;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { GalleryItem } from '../types/types';

export default defineComponent({
  name: 'Gallery',
  props: {
    galleryItems: {
      type: Array as PropType<GalleryItem[]>,
      default: [],
    },
  },
  setup(props, context) {
    const clickHandler = (index: number) => context.emit('itemSelected', index);
    return {
      clickHandler,
    };
  },
});
</script>
