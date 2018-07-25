<template>
  <div id="app">
    AAAAAAAAA
  </div>
</template>

<script>
  // window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js')
  // require('materialize-css')
export default {
  name: 'app',
  //  页面加载之前
  created() {
      console.log(this.$router)
  },
  //  页面加载后
  mounted() {
  }
}
</script>

<style>
  /* @import "../../../node_modules/materialize-css/bin/materialize.css"; */
</style>
