<template>

    <el-container >
    <el-header style="height:auto" id="head">
      <el-row>
        <el-col :span="4"><div class="logo" style="float:left; padding:24px 16px 24px 42px; font-size:14px; color:#fff;">
          太平洋保险<br>CPIC
        </div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light"></div><ul class="topmenu">
        <!-- <li class="check"><span class="iconfont icon-category"></span>系统配置</li>
        <li><span class="iconfont icon-form"></span>信息统计</li>
        <li><span class="iconfont icon-text"></span>短信管理</li>
        <li><span class="iconfont icon-lights"></span>激活管理</li>
        <li><span class="iconfont icon-rfq"></span>UMP管理</li>
        <li><span class="iconfont icon-set"></span>系统管理</li> -->
        <router-link :to="item.subMenuu[0].url" tag="li" active-class="active" class="limenu iconfont" :class="item.icon" v-for="item in this.urlname" >
          <!-- <router-link :to="item.subMenuu[0].url" tag="li" active-class="active" class="limenu iconfont" :class="item.icon" v-for="item in this.urlname" > -->
            {{item.name}}
            <p class="topmenuxb iconfont icon-moreunfold"></p>
            <ul class="subbmenu">
              <li>111</li>
              <li>222</li>
              <li>333</li>
              <li>444</li>
            </ul>
          </router-link>
      </ul></el-col>
        <el-col :span="4">  <ul class="topmentu-right">

            <li><span class="iconfont icon-electronics"></span>首页</li>
            <li><span class="iconfont icon-account"></span>系统管理员</li>
          </ul></el-col>
      </el-row>
    </el-header>
    <el-header style="height:auto; overflow:hidden" id="menuContent">
      <div class="submenucontent" style="overflow:hidden; position:relative; padding:18px 0; z-index:10">
        <div class="othermenu"><i style="margin-top:-10px" class="el-icon-d-arrow-right"></i></div>

      <ul class="submenu">

        <!-- <li>参数配置<span class="iconfont icon-close"></span></li> -->
        <router-link :to="item.url" tag="li" v-for="item in getMenuArray" >
            <span class="txt" :title="item.name">{{item.name | capitalize}}</span><span class="iconfont icon-close"></span>
        </router-link>
      </ul>
    </div>
    </el-header>
     <router-view/>
    <!-- <el-container id="mainContent">
        <el-aside>
            <div class="subsmain" @click="clickOdd"> 现在的数字为：{{count}}</div>
        </el-aside>
        <el-main><router-view></router-view></el-main>
    </el-container> -->
  </el-container>

</template>
<style>


.topmenu li,.topmentu-right li{display: inline-block; padding:28px 16px; font-size: 14px; color: #fff;}
.topmentu-right li.check{ background-color:#04549d;}
.topmenu li span,.topmentu-right span{padding:0 4px 0 0}
.submenu li{display: inline-block;}
.el-header, .el-footer {
   background-color: #B3C0D1;
   color: #333;
   text-align: center;
   /* line-height: 60px; */
 }
 .topmentu-right{float:right}
.el-header{background-color: #0168b7}
.el-header:nth-child(2){background-color: #e4e4e4; text-align: left; padding:0px;line-height: 100%; border-bottom:1px solid #ccc}
.el-header:nth-child(2) li{padding:12px 16px; border-right:1px solid #ccc; font-size: 14px}
.el-header:nth-child(2) li span{cursor: pointer; margin-left:12px; }
  .el-header:nth-child(2) li .icon-close:before{margin-top:2px}
 .el-aside {
   background:linear-gradient(#005dad,#019cdc);
   color: #333;
   text-align: center;
   line-height: 200px;

 }

 .el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   line-height: 160px;
 }

 body > .el-container {
   margin-bottom: 40px;
 }
.othermenu{background-color:#eee; font-size: 16px; color:#000; position:absolute; z-index: 999;right:0px; line-height:10%; width:40px; padding:18px 0; top:-1px; text-align:center}
 .el-container:nth-child(5) .el-aside,
 .el-container:nth-child(6) .el-aside {
   line-height: 260px;
 }

 .el-container:nth-child(7) .el-aside {
   line-height: 320px;
 }
 .submenu{position:absolute; top:0px; left:0px; white-space:nowrap; display: block;}
 .logo{background: url('./assets/img/logo.png') left center no-repeat; text-align:left; font-size:14px; background-size:48px; line-height: 100%}
 .topmenuxb{position: absolute; top:60px; width:100%;left:0px; font-size:9px; display: none;}
.subbmenu{background-color: rgba(0,91,172,0.6);width:100%; position: absolute; z-index:9999; left:0px; top:75px; display: none;}
.topmenu li .subbmenu li{padding:8px 0px; width:100%}
.limenu{position:relative;}
 .limenu:hover{background-color: rgba(0,91,172,0.6) }
  .limenu:hover .topmenuxb{display: block}

/*.limenu:hover .subbmenu{display:block} */
</style>
<script>
import Vue from 'vue'
  window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
  import {
    mapGetters, mapActions
}
from "vuex"
export default {
  name: 'app',
  data () {
    return {
      urlname:[]
    }
  }
  ,computed: {...mapGetters(['historymenu']),
    getMenuArray(){
      let windowidth=$(window).width();
      var num=Math.floor(windowidth/130);
      if(this.historymenu.length<1) return false;
      return this.historymenu.slice(0, num);
    }
  }
  //  页面加载之前
  ,created() {
    var _self=this;
    $.get("./static/majorurl.html").then((datas)=>{
      _self.urlname=[...jQuery.parseJSON(datas)];
    });
  }
  ,filters: {
      capitalize: function (value) {
        value=$.trim(value);
        if (!value) return '';
        value =value.length>5 ? value.substr(0, 3)+"..." :  value
        return value
      }
      // ,arrurlsubstr: function (arrobj) {
      //   let windowidth=$(window).width();
      //   var num=Math.floor(windowidth/130);
      //   console.log(num)
      //   arrobj =arrobj.substr(0, num);
      //   return arrobj;
      // }
    }
  ,methods:{
    addhistory(event){
      console.log(event);
        const a = {};
        Object.assign(a, { "name": event.target.innerText,"url": this.$route.path});
        this.$store.dispatch("addhistory",a);
  },
  dele(){
    alert(333)
  }
  }
  //  页面加载后
  ,mounted(){
    let _self=this;
    $('.submenu').delegate('.txt','click',function(){
      alert($(this).text())
    })
    $('.submenu').delegate('.icon-close','click',function(){
      let inx=$(this).parent().index();
      _self.$store.dispatch("delhistory",inx);
    });
    var timer=null;
    $('.topmenu').delegate(".limenu,.subbmenu","mouseover",function(){
      var _this=$(this);
      clearInterval(timer);
      if($(this).hasClass("subbmenu")){
        // $('.subbmenu').not(_this).hide()

    		timer=setTimeout(function (){
    			_this.show();
    		}, 300);
      }else{
        _this.siblings().children('.subbmenu').hide()
        timer=setTimeout(function (){
    			_this.children('.subbmenu').show()
    		}, 300);
      }
    })
    $('.topmenu').delegate(".limenu,.subbmenu","mouseout",function(){
      var _this=$(this);
      clearInterval(timer);
      if($(this).hasClass("subbmenu")){
        timer=setTimeout(function (){
          _this.hide();
        }, 300);
      }else{

        timer=setTimeout(function (){
          _this.children('.subbmenu').hide()
        }, 300);
      }
    })

    // addhistory(){
    // alert(123)
    // }


    // alert($('.submenu').width());
    // alert($(window).width())
    // alert($('#head').height());
    // alert($('#menuContent').height());
    // $('#mainContent').height($(window).height()-$('#menuContent').height()-$('#head').height())
    //注册菜单和侧边栏分级事件
    // $(".button-collapse").sideNav();
    // $('.collapsible').collapsible();
    //
    // //菜单列表点击隐藏
    // $('.menu-item').click(function () {
    //   $('#menu-list').sideNav('hide');
    // })
    $('.othermenu').click(function(){
      alert(23)
    })
    // alert(3333)
  }
  ,updated(){

  }
}
</script>
