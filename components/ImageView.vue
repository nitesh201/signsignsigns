<template>
  <div id="imageView">
    <div id="image">
      <img :src="image.url" />
    </div>
    <div id="downloadList">
      <div id="titleCard" class="card">
        <div id="title">{{image.title}}</div>
        <div>
          <div>{{image.artist}}</div>
          <div>{{image.year}}</div>
        </div>
      </div>
      <a class="card" @click="download(image.largeUrl, 'largePoster.pdf')">
        <div><b>Large Poster</b> 18 x 24"</div>
      </a>
      <a class="card" @click="download(image.smallUrl, 'smallPoster.pdf')">
        <div><b>Small Poster</b> 11 x 17"</div>
      </a>
      <a class="card" @click="download(image.tshirtUrl, 'tshirt.pdf')">
        <div><b>T-shirt</b> 6 x 8"</div>
      </a>
      <a class="card" @click="download(image.postcardUrl), 'postcard.pf'">
        <div><b>Postcard</b> 3.75 x 5"</div>
      </a>
    </div>
    <div id="text">
      <div v-html="$md.render(image.body)" />
    </div>
  </div>
</template>

<style scoped>
#imageView {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  column-gap: 15px;
  height: 100%;
}
#image {
  grid-area: 1 / 1 / 2 / 6;
  height: 100%;
}
#image img {
  width: 100%;
}
#downloadList {
  grid-area: 1/ 7/ 2/ 11;
  display: flex;
  flex-direction: column;
}
#titleCard {
  height: 170px;
  justify-content: space-between;
}
#title {
  font-size: 26px;
  font-weight: bold;
  line-height: 1;
}
.card {
  width: 100%;
  height: 75px;
  border: 2px solid blue;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
}
.card:not(#titleCard) {
  cursor: pointer;
  justify-content: center;
}
#text {
  grid-area: 1/ 11 / 2/ 17;
  text-align: left;
  white-space: pre-line;
  line-height: 1.3;
  overflow: scroll;
}
@media screen and (max-width: 1800px){
  #title {
    font-size: 20px;
  }
}
@media screen and (max-width: 1200px){
  #imageView { display: block; }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { GalleryItem } from '../types/types';

export default defineComponent({
  name: 'ImageView',
  props: {
    image: {
      type: Object as PropType<GalleryItem>,
      required: true,
    },
  },
  setup() {
    const toDataURL = (url: string) => {
      return fetch(url).then((response) => {
        return response.blob();
      }).then((blob) => {
        return URL.createObjectURL(blob);
      });
    }
    const download = async (url: string, fileName: string) => {
      const a = document.createElement("a");
      a.href = await toDataURL(url);
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    return {
      download,
    };
  },
});
</script>
