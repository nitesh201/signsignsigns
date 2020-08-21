<template>
  <div id="galleryView">
    <div id="foreword">
      {{ forewordText }}
      <a id="instagramIconWeb" href="https://www.instagram.com/_signsignsigns_/" target="_blank">
        <img style="height: 30px;" src="../static/icons/IG.svg">
      </a>
    </div>
    <Gallery
      :gallery-items="galleryItems"
      @item-selected="(id)=>$emit('item-selected', id)"
    />
    <a id="instagramIconMobile" href="https://www.instagram.com/_signsignsigns_/" target="_blank">
      <img style="height: 30px;" src="../static/icons/IG.svg">
    </a>
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
  position: relative;
}
#instagramIconWeb {
  position: absolute;
  left: 0;
  bottom: 30px;
  display: initial;
}
#instagramIconMobile {
  display: none;
}
@media screen and (max-width: 1400px){
  #foreword {
    font-size: 14px;
  }
}
@media screen and (max-width: 1200px){
  #galleryView { display: block; }
  #foreword { margin-bottom: 20px; }
  #instagramIconWeb { display: none; }
  #instagramIconMobile {
    display: initial;
    padding-bottom: 30px;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GalleryItem } from '../types/types'
import Gallery from './Gallery.vue'

export default defineComponent({
  name: 'GalleryView',
  props: {
    galleryItems: {
      type: Array as PropType<GalleryItem[]>,
      default: []
    }
  },
  components: {
    Gallery
  },
  setup () {
    const forewordText = 'We are a collective of artists and designers working both to revive past ' +
        'political graphics and to encourage new visual responses to current events. Every graphic is ' +
        'available as a free print-ready download for use in political protests or mailing campaigns.'
    return {
      forewordText
    }
  }
})
</script>
