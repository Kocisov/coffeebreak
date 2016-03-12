<template>
  <div>
    <h2>{{ head }}</h2>
    <button v-on:click="clearLocalStorage">Clear all CSS rules</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        head: 'Settings'
      }
    },
    methods: {
      clearLocalStorage () {
        window.localStorage.clear()
      }
    }
  }
</script>
