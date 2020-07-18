<template>
    <div>
        <Header />
        <div id="content">
            <GalleryView
                :galleryItems="signs"
                @itemSelected="(index)=>selectedIndex=index"
                v-if="selectedIndex === null"
            />
            <ImageView
                v-if="selectedIndex !== null"
                :image="signs[selectedIndex]"
            />
        </div>
    </div>
</template>

<style scoped>
#content {
    height: calc(100vh - 200px);
}

</style>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import Header from './Header.vue';
import GalleryView from './GalleryView.vue';
import ImageView from './ImageView.vue';
import signs from '../mock/signs';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    GalleryView,
    ImageView,
  },
  setup() {
    const forewordText = 'We are a collective of artists and designers working both to revive past '
    + 'political graphics and to encourage new visual responses to current events. Every graphic is '
    + 'available as a free print-ready download for use in political protests or mailing campaigns.';
    const selectedIndex = ref<number | null>(null);
    return {
      signs,
      forewordText,
      selectedIndex,
    };
  },
});
</script>
