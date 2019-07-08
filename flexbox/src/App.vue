<template>
  <div id="app">
    <html-css v-if="css" @getvalue="getvuetify"></html-css>
    <vue-tify v-if="vuetify" @getvalue="getcss"></vue-tify>
  </div>
</template>

<script>
import HtmlCss from './components/HtmlCss'
import VueTify from './components/VueTify'
export default {
  name: 'app',
  components: {
    HtmlCss,
    VueTify
  },
  data () {
    return {
      css: true,
      vuetify: false
    }
  },
  methods: {
    getvuetify () {
      this.css = false
      this.vuetify = true
    },
    getcss () {
      this.css = true
      this.vuetify = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
