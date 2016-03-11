<template>
  <div>
    <h2>{{ head }}</h2>
    <button v-on:click="getAll">Load again</button>
    <textarea class="_full" v-model="full"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Get',
    data () {
      return {
        head: 'Get your style',
        full: 'Your style: '
      }
    },
    ready () {
      this.getAll()
    },
    methods: {
      getAll () {
        this.full = 'Your style: '
        for (var i = 0; i < window.localStorage.length; i++) {
          let key = window.localStorage.key(i)
          let value = window.localStorage[key]
          this.full += '\n\n.' + key + ' {\n' + value + '\n}'
        }
      }
    }
  }
</script>

<style>
  ._full {
    width: 580px !important;
    height: 350px;
  }
</style>
