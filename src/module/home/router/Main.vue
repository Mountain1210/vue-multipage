<template>
  <el-container id="mainContent">
            <router-link to="/demo"> eee111 </router-link>
      <el-main style="background-color:#fff;padding:0px; margin:0px;">

        <!-- <router-view></router-view> -->
      </el-main>
  </el-container>

</template>

<script>
import {mapGetters,mapActions} from "vuex"
  export default {
    name: 'Main'
    ,data () {
      return {
        urlname:[],
        //缓存页面路径
        // page_path: 'home/index/index.html',
        // //页面容器,用于存放需要跳转页面的路径
        // page_list: {
        //   //index
        //   'index': 'index.html',
        //   //home
        //   'home@index':'home/index.html',
        //   //about
        //   'about@index': 'about/index.html',
        //   'about@aaa': 'about/aaa.html',
        //   'about@bbb': 'about/bbb.html',
        //
        //   //commodity
        //   'commodity@commodity_info': 'commodity/commodity_info.html',
        //   'commodity@commodity_time': 'commodity/commodity_time.html',
        //   'commodity@commodity_type': 'commodity/commodity_type.html',
        //   //sale
        //   'sale@sale_info': 'sale/sale_info.html',
        //   'sale@sale_time': 'sale/sale_time.html',
        //   'sale@sale_type': 'sale/sale_type.html',
        //   //environment
        //   'environment@area_info': 'environment/area_info.html',
        //   'environment@area_sale_time': 'environment/area_sale_time.html',
        //   'environment@area_trends': 'environment/area_trends.html',
        //   //user
        //   'user@user_info': 'user/user_info.html',
        //   'user@user_spending': 'user/user_spending.html',
        //   'user@user_stay': 'user/user_stay.html',
        //   'user@user_trends': 'user/user_trends.html',
        //   'user@user_usetime': 'user/user_usetime.html',
        //   //management
        //   'management@management_area': 'management/management_area.html',
        //   'management@management_commodity': 'management/management_commodity.html',
        //   'management@management_staff': 'management/management_staff.html',
        //   //baidu
        //   'baidu': 'http://www.baidu.com'
        // }
      }
    }
    ,created(){
        // alert("8888899999")
        // var _self=this;
        // $.get("./static/url.html").then((datas)=>{
        //   _self.urlname=[...jQuery.parseJSON(datas)];
        // });
        // console.log(this.$router)
    }
    ,mounted(){

    }
    // ,methods:{
    //     ...mapActions(["clickOdd"]),
    //     handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    //   }
    ,computed: {
      // ...mapGetters(['count']),
        //获取页面路径
        getPagePath (){
          alert(this.$route.params.page_path)
          // if (this.page_list[this.$route.params.page_path]) {
          //   this.page_path = this.page_list[this.$route.params.page_path]
          // }
          // else if(this.$route.params.page_path == '!') {
          //   return this.page_path
          // }
          // else {
          //   this.page_path = this.page_list['home@index']
          // }
          // return this.page_path
        }
    }
    // ,mounted() {
    //   $('#mainContent').height($(window).height()-$('#menuContent').height()-$('#head').height());
    //   $(".leftmenu").delegate(".indexurl", "click", function(){
    //       $(this).parent('li').siblings().children('.subconetet').hide();
    //       $(this).siblings('.subconetet').show();
    //   });
    // }
    // ,beforeUpdate(){
    //   // console.log($('.indexurl').size());
    // }
    // ,updated(){
    //   let subname=this.$route.params.page_path.split('@')[0];
    //   $('.indexurl').each(function(){
    //     if($(this).html()==subname){
    //       $(this).parent('li').siblings().children('.subconetet').hide();
    //       $(this).siblings('.subconetet').show();
    //     }
    //   })
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
    padding: 3px;
  }
  .el-aside .leftmenu li{padding:0px; margin:0px 0px 8px; line-height: 100%; font-size: 16px; text-align: center; }
  .el-aside .leftmenu li .indexurl{background-color: rgb(67, 0, 120); color: #fff; padding:12px 0; cursor: pointer;}
    .el-aside .leftmenu li .subconetet{display: none;}
  .el-aside .leftmenu li .subconetet p{padding:0px; margin:0px; line-height:100%; color:#fff; font-size:14px; text-align: center; padding:8px 0px;cursor: pointer; border-bottom:1px solid #111}
</style>
