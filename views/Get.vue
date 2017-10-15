<template>
  <div>
    <h2>Get your style</h2>
    <button v-on:click="clear">Clear all CSS rules</button>
    <button v-on:click="createDownloadButton">Download as file</button>
    <textarea class="_full" v-model="fullStyle"></textarea>
    <div id="download"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['fullStyle']),
  },
  methods: {
    clear() {
      this.$store.commit('CLEAR_STYLES')
    },
    createDownloadButton() {
      let a = document.createElement('a')
      a.style = 'display: none'
      let data = new window.Blob([this.fullStyle], { type: 'text/css' })
      let url = window.URL.createObjectURL(data)
      a.href = url
      a.download =
        'style-' +
        Math.random()
          .toString(36)
          .slice(2)
      document.getElementById('download').appendChild(a)
      a.click()
      setTimeout(function() {
        document.getElementById('download').removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 100)
    },
  },
}
</script>

<style>
  ._full {
    width: 580px !important;
    height: 350px;
  }
</style>
