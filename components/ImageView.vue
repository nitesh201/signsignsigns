<template>
  <div id="imageView">
    <div id="image">
      <img :src="image.url">
    </div>
    <div id="downloadList">
      <div id="titleCard" class="card">
        <div id="title">
          {{ image.title }}
        </div>
        <div>
          <div>{{ image.artist }}</div>
          <div>{{ image.year }}</div>
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
      <div v-for="figure in image.figures" :key="figure.url">
        <img :src="figure.image" style="width: 100%">
        <div v-html="$md.render(figure.caption)" class="figureCaption" />
      </div>
      <br/>
      <div v-if="image.sourceText" v-html="$md.render(image.sourceText)" id="sourceText" />
    </div>
  </div>
</template>

<style scoped>
#imageView {
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  column-gap: 15px;
}
#image {
  grid-area: 1 / 1 / 2 / 6;
  max-height: 100%;
}
#image img {
  max-height: 100%;
  max-width: 100%;
}
#downloadList {
  grid-area: 1/ 7/ 2/ 11;
  display: flex;
  flex-direction: column;
  height: 80%;
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
  height: 1.5vw;
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
  line-height: 1.34;
  overflow: scroll;
  height: calc(100vh - 180px);
}
@media screen and (max-width: 1800px){
  #title {
    font-size: 20px;
  }
}
@media screen and (max-width: 1200px){
  #imageView { display: block; }
  #text { overflow: inherit; }
}
</style>
<style>
#text blockquote {
  margin-top: 0px;
  margin-left: 1.5em;
  quotes: "\201C""\201D""\2018""\2019";
}
#text blockquote p {
  margin: 0;
  padding: 0;
}
#text .figureCaption {
  font-family: 'Arial Narrow';
  line-height: 1.15;
}
#text #sourceText {
  font-family: 'Arial Narrow';
}
</style>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { GalleryItem } from '../types/types'

export default defineComponent({
  name: 'ImageView',
  props: {
    image: {
      type: Object as PropType<GalleryItem>,
      required: true
    }
  },
  setup () {
    const toDataURL = (url: string) => {
      return fetch(url).then((response) => {
        return response.blob()
      }).then((blob) => {
        return URL.createObjectURL(blob)
      })
    }
    const download = async (url: string, fileName: string) => {
      const a = document.createElement('a')
      a.href = await toDataURL(url)
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    return {
      download
    }
  }
})
</script>
