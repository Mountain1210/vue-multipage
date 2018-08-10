<template>
  <div id="app">
    <span @click="ff">AAAAAAAAA</span>
    <router-link to="/Demo">AAAAAAAAA</router-link>
    <Demo></Demo>
    <router-view></router-view>
  </div>
</template>

<script>
// import Vue from 'vue'
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
import {mapGetters, mapActions} from "vuex"
import Demo from "./demo.vue"
export default {
  name: 'app',
  //  页面加载之前
  created() {
    console.log(2222222222222222)
    console.log(this.$route.params.page_path)
  },
  //  页面加载后
  mounted() {
  },
  components:{
       Demo
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
