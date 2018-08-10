<template>
  <div id="app">
    <span @click="ff">BBBBBB</span>
  </div>
</template>

<script>
// import Vue from 'vue'
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
import {mapGetters, mapActions} from "vuex"
export default {
  name: 'demo',
  //  页面加载之前
  created() {
    console.log(2222222222222222)
    console.log(this.$route.params.page_path)
  },
  //  页面加载后
  mounted() {
  },
  methods:{
    ff(event){
      console.log(this.$route.params.page_path)
      // console.log(event);
      // this.ischeck=true;
        const a = {};
        Object.assign(a, { "name": event.target.innerText,"url": "aaa"});
        alert(event.target.innerText)
        this.$store.dispatch("addhistory",a);
  }
  }
}
</script>

<style>
  /* @import "../../../node_modules/materialize-css/bin/materialize.css"; */
</style>
