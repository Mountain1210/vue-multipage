<template>
  <div id="app">
    <div id="searchContent">
      <!-- <Search> -->
        <span slot="fontxt" style="font-size: 21px; margin-right:12px">按机构统计</span><i style="font-size:18px" class="el-icon-question"></i>
        <div class="seactent">
        <el-row><el-col :span="12"  class="padt8"><span>包含下级：</span><el-radio v-model="radio" label="1">备选项</el-radio><el-radio v-model="radio" label="2">备选项</el-radio></el-col><el-col :span="12"><el-col :span="12"><span class="tit">开始日期</span><el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker></el-col><el-col :span="12"><span class="tit">结束日期</span><el-date-picker
v-model="value2"
type="date"
placeholder="选择日期">
</el-date-picker></el-col></el-col></el-row>
        <el-row class="mart12">  <el-col :span="24"  class="padt8"><span>优先级别：</span><el-checkbox v-model="all">全部</el-checkbox><el-checkbox v-model="lt955">95500联通</el-checkbox><el-checkbox v-model="checked">集团MAS</el-checkbox><el-checkbox v-model="checked">产险联通</el-checkbox><el-checkbox v-model="checked">产险移动</el-checkbox><el-checkbox v-model="checked">产险电信</el-checkbox><el-checkbox v-model="checked">srrp移动</el-checkbox><el-checkbox v-model="checked">srrp电信联通</el-checkbox><el-checkbox v-model="checked">备选项</el-checkbox></el-col></el-row>
        </div>
      </Search>
    </div>

    <div id="maintabContent">

    </div>

  </div>
</template>

<script>
  window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js')
  import Search from "../../../common/vue/search.vue"
  // require('materialize-css')
export default {
  name: 'app',
  components:{Search}
  ,data () {
      return {
        radio: '1',
        value1: '',
        value2: '',
        all: true
      };
    }
  //  页面加载之前
  ,created() {
      // console.log(this.$router)
  },
  //  页面加载后
  mounted() {
  }
}
</script>

<style>
  /* @import "../../../node_modules/materialize-css/bin/materialize.css"; */
  #searchContent{font-size: 14px;}
  .seactent{border:1px solid #dcdce8; font-size:14px; margin-top:20px; padding:13px 40px; position:relative; background-color: #fbfbfb; border-radius: 8px;}
.seactent .tt{font-size: 21px}
  .tit{padding-right:12px}
  .padt8{padding-top:8px}
  .mart12{margin-top:12px}
</style>
