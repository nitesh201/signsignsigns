<template>
  <div id="app">
    <Layout>
      <div id="resources">
        <p id="title">
          Resources
        </p>
        <br>
        <div class="section">
          <div class="sectionHeader">
            Archives
          </div>
          <a v-for="archive in urls.Archives" :key="archive.url" :href="archive.url">
            {{ archive.text }}
          </a>
        </div>
        <div class="section">
          <div class="sectionHeader">
            Collectives
          </div>
          <a v-for="collective in urls.Collectives" :key="collective.url" :href="collective.url">
            {{ collective.text }}
          </a>
        </div>
        <div class="section">
          <div class="sectionHeader">
            Publications
          </div>
          <a v-for="publication in urls.Publications" :key="publication.url" :href="publication.url">
            {{ publication.text }}
          </a>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/Header.vue'

export default defineComponent({
  components: {
    Header
  },
  head () {
    return {
      title: 'SIGNSIGNSIGNS',
    }
  },
  setup () {
    const urls = {
      Archives: [
        {
          url: 'http://www.politicalgraphics.org/',
          text: 'Center for the Study of Political Graphics'
        },
        {
          url: 'http://interferencearchive.org/',
          text: 'Interference Archive'
        },
        {
          url: 'http://collections.museumca.org/?q=category/2011-schema/history/political-posters',
          text: 'OMCA Collections: “All Of Us Or None” (AOUON) Archive'
        },
        {
          url: 'http://bancroft.berkeley.edu/collections/socialprotest.html',
          text: 'University of California, Berkeley, Social Protest Collection'
        },
        {
          url: 'http://www.lesbianherstoryarchives.org/',
          text: 'Lesbian Herstory Archives'
        },
        {
          url: 'https://digitalcollections.nypl.org/collections/gran-fury-collection#/?tab=navigation',
          text: 'New York Public Library, Gran Fury Collection'
        },
        {
          url: 'http://digitalcollections.sjlibrary.org/cdm/landingpage/collection/sjsupro',
          text: 'San Jose Peace and Justice Collective, Art of Protest Collection'
        },
        {
          url: 'http://www.docspopuli.org/Archives.html',
          text: 'Docs Populi'
        },
        {
          url: 'http://www.docspopuli.org/IWwebcat/gallery-01.html',
          text: 'Inkworks Press Archive'
        },
        {
          url: 'http://ospaaal.com/',
          text: 'OSPAAAL'
        },
        {
          url: 'https://www.cwluherstory.org/',
          text: "Chicago Women's Liberation Union Herstory Project"
        }
      ],
      Collectives: [
        {
          url: 'https://www.cwluherstory.org/chicago-womens-graphics-collective-1/',
          text: "Chicago Women's Graphics Collective"
        },
        {
          url: 'https://seeredwomensworkshop.wordpress.com/',
          text: "See Red Women's Workshop"
        },
        {
          url: 'http://www.fireworksgraphics.org/FireworksPosters/Home.html',
          text: 'Fireworks Graphics Collective'
        },
        {
          url: 'https://hyperallergic.com/272933/the-urgent-protest-art-of-the-berkeley-political-poster-workshop/?utm_source=twitter&utm_medium=social',
          text: 'Berkeley Political Poster Workshop'
        },
        {
          url: 'http://www.fiercepussy.org/www.fiercepussy.org/about_us.html',
          text: 'Fierce Pussy'
        },
        {
          url: 'http://www.queerculturalcenter.org/Pages/GranFury/GFGllry.html',
          text: 'Gran Fury'
        },
        {
          url: 'http://groundworkbooks.wixsite.com/collective/collective-c18bc',
          text: 'Groundwork Books Collective'
        },
        {
          url: 'http://www.lttr.org/',
          text: 'LTTR'
        },
        {
          url: 'http://feministartworkers.com/',
          text: 'Feminist Art Workers'
        },
        {
          url: 'https://www.againstviolence.art/',
          text: 'Ariadne: A Social Art Network'
        },
        {
          url: 'http://www.posterworkshop.co.uk/',
          text: 'Poster Workshop'
        }
      ],
      Publications: [
        {
          url: 'http://s1gnal.org/',
          text: 'Signal: A Journal of International Political Graphics & Culture'
        },
        {
          url: 'https://www.lars-mueller-publishers.com/protest',
          text: 'Protest. The Aesthetics of Resistance'
        },
        {
          url: 'https://www.fourcornersbooks.co.uk/books/see-red-womens-workshops/',
          text: "See Red Women's Workshop: Feminist Posters 1974–1990"
        },
        {
          url: 'https://www.fourcornersbooks.co.uk/books/poster-workshop-1968-1971/',
          text: 'Poster Workshop 1968–1971'
        },
        {
          url: 'https://www.publishersweekly.com/978-0-941920-16-2',
          text: 'AIDS Demo Graphics'
        },
        {
          url: 'https://www.publishersweekly.com/978-1-59253-117-2',
          text: 'The Design of Dissent'
        },
        {
          url: 'http://www.halfletterpress.com/revolution-as-an-eternal-dream-the-exemplary-failure-of-the-madame-binh-graphics-collective-247/',
          text: 'Revolution as an Eternal Dream: The Exemplary Failure of the Madame Binh Graphics Collective'
        },
        {
          url: 'http://www.phaidon.com/store/design/graphic-agitation-9780714834580/',
          text: 'Graphic Agitation'
        },
        {
          url: 'http://press.uchicago.edu/ucp/books/book/chicago/P/bo6177974.html',
          text: 'Power to the People: The Graphic Design of the Radical Press and the Rise of the Counter-Culture, 1964–1974'
        },
        {
          url: 'http://www.cornellpress.cornell.edu/book/?GCOI=80140100952520',
          text: 'Agitate! Educate! Organize!'
        },
        {
          url: 'https://www.afterall.org/books/one.work/general-idea-imagevirus',
          text: 'General Idea: Imagevirus'
        },
        {
          url: 'https://www.abebooks.com/servlet/BookDetailsPL?bi=22585166755&searchurl=tn%3Dfeminist%2Bart%2Bworkers%2Bhistory%26sortby%3D17%26an%3Dcheri%2Bgaulke%2Blaurel%2Bklick&cm_sp=snippet-_-srp1-_-title1',
          text: 'Feminist Art Workers: A History'
        },
        {
          url: 'https://www.abebooks.com/9781138687189/Art-Protest-Putins-Russia-Routledge-1138687189/plp',
          text: "Art and Protest in Putin's Russia"
        },
        {
          url: 'http://www.rizzoliusa.com/book.php?isbn=9780847841899',
          text: 'Black Panther: The Revolutionary Art of Emory Douglas'
        }
      ]
    }
    return {
      urls
    }
  }
})
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0000FF;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 40px;
}
#content {
  height: calc(100vh - 200px);
}
#resources {
  text-align: left;
  margin-left: 25%;
  margin-right: 25%;
}
a {
  display: block;
}
.section {
  margin-bottom: 20px;
}
.sectionHeader {
  font-weight: bold;
}
@media screen and (max-width: 1200px) {
  #resources {
    margin-left: 0;
    margin-right: 0;
  }
}
#title {
  font-weight: bold;
}
</style>
