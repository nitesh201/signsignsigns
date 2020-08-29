<template>
  <div id="gallery">
    <div
      v-for="(galleryItem, index) in sortedItems"
      :key="index"
      class="galleryItem"
      @click="()=>clickHandler(index)"
    >
      <div
        class="galleryItemInner"
        :style="`background-image: url(${galleryItem.thumbnailUrl});`"
      />
    </div>
    <div id="galleryFooter" />
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
.galleryItem::before {
    content: ' ';
    display: block;
    width: 100%;
    padding-top: 100%;
}
.galleryItem {
    border: 2px solid blue;
    position: relative;
}
.galleryItem:hover {
    cursor: pointer;
    background-color: blue;
}
#galleryFooter {
    height: 10px;
}
.galleryItemInner {
    position: absolute;
    top: 30px;
    left: 30px;
    bottom: 30px;
    right: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
@media screen and (max-width: 1200px){
  #gallery {
    grid-template-columns: repeat(2, 1fr);
    overflow-y:inherit;
  }
}
@media screen and (max-width: 800px){
  #gallery {
    grid-template-columns: 1fr;
    overflow-y:inherit;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'
import { GalleryItem } from '../types/types'

export default defineComponent({
  name: 'Gallery',
  props: {
    galleryItems: {
      type: Array as PropType<GalleryItem[]>,
      default: []
    }
  },
  setup (props, context) {
    const clickHandler = (index: number) => {
      const id = sortedItems.value[index].index;
      context.emit('item-selected', id)
    }
    const sortedItems = computed(() => {
      const sorted = [...props.galleryItems]
      sorted.sort((a, b) => b.index - a.index)
      return sorted.filter(item => item.draft !== true)
    })
    return {
      clickHandler,
      sortedItems
    }
  }
})
</script>
