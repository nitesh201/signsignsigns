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
      <div v-for="figure in image.figures" :key="figure.url" class="figure">
        <img :src="figure.image">
        <div class="figureCaption" v-html="$md.render(figure.caption)" />
      </div>
      <div v-if="image.sourceText" id="sourceText" v-html="$md.render(image.sourceText)" />
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
  min-height: 500px;
  height: calc(100vh - 210px);
  text-align: left;
}
#image img {
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
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
.card:not(#titleCard):hover {
  background-color: blue;
  color: white;
}
#text {
  grid-area: 1/ 11 / 2/ 17;
  text-align: left;
  white-space: pre-line;
  line-height: 1.34;
  overflow: scroll;
  min-height: 500px;
  height: calc(100vh - 210px);
  max-width: 100%;
}
.figure img {
  width: 60%;
}
@media screen and (max-width: 1800px){
  #title {
    font-size: 20px;
  }
}
@media screen and (max-width: 1200px){
  #imageView { grid-template-rows: repeat(2, 1fr);}
  #image { grid-area: 1/ 1/ 2/ 12; height: 100%;}
  #downloadList { grid-area: 1/ 12/ 2/ 17; }
  #text {
    grid-area: 2/ 1/ 3/ 17;
    overflow: inherit;
    margin-top: 10px;
  }
}
@media screen and (max-width: 800px){
  #imageView { display: block; }
  #text {
    overflow: inherit;
    margin-top: 10px;
  }
  #image {
    height: 50%;
    margin-bottom: 20px;
  }
  .figure img {
    width: 100%;
  }
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
  width: 40%;
  margin-left: 10px;
}
#text #sourceText {
  font-family: 'Arial Narrow';
}
#text .figure {
  display: flex;
  padding-bottom: 40px;
}
@media screen and (max-width: 800px){
  #text .figure { display: block; }
  #text .figureCaption {
    margin-left: 0px;
    width: initial;
  }
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
