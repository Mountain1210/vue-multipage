<template>
<el-container :style="correctheight">
  <el-aside width="174px" :style="correctheightel" style="background:linear-gradient(#005dad,#019cdc); overflow-x:hidden">
<Lmenu isblocks=1>
  <div slot="h2txt">太保集团</div>
  <ul class="rootmenu" :style="{height: correctheightul-85 + 'px' }">
    <!-- <ul class="rootmenu" style="width:180px" :style="correctheight"> -->
    <li><span class="iconfont icon-more"></span>集团公司
        <ul>
          <li><span class="iconfont icon-more"></span>产险总公司</li>
          <li><span class="iconfont icon-more"></span>产险总公司</li>
          <li><span class="iconfont icon-more"></span>产险总公司
            <ul>
              <li><span class="iconfont icon-more"></span>产险总公司1
                <ul>
                  <li><span class="iconfont icon-more"></span>产险总公司1a</li>
                  <li><span class="iconfont icon-more"></span>产险总公司2a</li>
                  <li><span class="iconfont icon-more"></span>产险总公司3a</li>
                </ul>
              </li>
              <li><span class="iconfont icon-more"></span>产险总公司2
                <ul>
                  <li><span class="iconfont icon-more"></span>产险总公司1b</li>
                  <li><span class="iconfont icon-more"></span>产险总公司2b</li>
                  <li><span class="iconfont icon-more"></span>产险总公司3b</li>
                </ul>
              </li>
              <li><span class="iconfont icon-more"></span>产险总公司3</li>
            </ul>
          </li>

          <li><span class="iconfont icon-more"></span>产险总公司XX
            <ul>
              <li><span class="iconfont icon-more"></span>产险总公司1
                <ul>
                  <li><span class="iconfont icon-more"></span>产险总公司1a</li>
                  <li><span class="iconfont icon-more"></span>产险总公司2a</li>
                  <li><span class="iconfont icon-more"></span>产险总公司3a</li>
                </ul>
              </li>
              <li><span class="iconfont icon-more"></span>产险总公司2
                <ul>
                  <li><span class="iconfont icon-more"></span>产险总公司1b</li>
                  <li><span class="iconfont icon-more"></span>产险总公司2b</li>
                  <li><span class="iconfont icon-more"></span>产险总公司3b</li>
                </ul>
              </li>
              <li><span class="iconfont icon-more"></span>产险总公司3</li>
            </ul>
          </li>


          <li><span class="iconfont icon-more"></span>产险总公司YY
            <ul>
              <li><span class="iconfont icon-more"></span>产险总公司1
                <ul>
                  <li><span class="iconfont icon-more"></span>产险总公司1a</li>
                  <li><span class="iconfont icon-more"></span>产险总公司2a</li>
                  <li><span class="iconfont icon-more"></span>产险总公司3a</li>
                </ul>
              </li>
              <li><span class="iconfont icon-more"></span>产险总公司2
                <ul>
                  <li><span class="iconfont icon-more"></span>产险总公司1b</li>
                  <li><span class="iconfont icon-more"></span>产险总公司2b</li>
                  <li><span class="iconfont icon-more"></span>产险总公司3b</li>
                </ul>
              </li>
              <li><span class="iconfont icon-more"></span>产险总公司3</li>
            </ul>
          </li>
        </ul>
    </li>
    <li><span class="iconfont icon-more"></span>寿险总公司</li>
    <li><span class="iconfont icon-more"></span>长江养老</li>
  </ul>
</Lmenu>
  </el-aside>
  <el-main style="padding:0 20px">
      <div id="searchContent">
      <Search>
        <span slot="fontxt">按机构统计</span>
        <div class="seactent">
        <el-row><el-col :span="12"  class="padt8"><span>包含下级：</span><el-radio v-model="radio" label="1">备选项</el-radio><el-radio v-model="radio" label="2">备选项</el-radio></el-col><el-col :span="12"><el-col :span="12"><span class="tit">开始日期</span>
    <el-date-picker
      v-model="value1"
      type="date"
      size="mini"
      class="input-class"
      placeholder="选择日期">
    </el-date-picker></el-col><el-col :span="12"><span class="tit">结束日期</span>
    <el-date-picker
      v-model="value2"
      type="date"
      size="mini"
      width="50%"
      class="input-class"
      placeholder="选择日期">
</el-date-picker></el-col></el-col></el-row>
        <el-row class="mart12">  <el-col :span="24"  class="padt8"><span>优先级别：</span><el-checkbox v-model="all">全部</el-checkbox><el-checkbox v-model="lt955">95500联通</el-checkbox><el-checkbox v-model="checked">集团MAS</el-checkbox><el-checkbox v-model="checked">产险联通</el-checkbox><el-checkbox v-model="checked">产险移动</el-checkbox><el-checkbox v-model="checked">产险电信</el-checkbox><el-checkbox v-model="checked">srrp移动</el-checkbox><el-checkbox v-model="checked">srrp电信联通</el-checkbox><el-checkbox v-model="checked">备选项</el-checkbox></el-col></el-row>
        </div>
      </Search>

    </div>

    <div id="maintabContent">
      <TabList>
          <el-row  slot="btnslot">
                   <el-col :span="4">
                     <el-button-group>
                       <el-button class="check defaultbtn">名细</el-button>
                       <el-button class="defaultbtn">合计</el-button>
                        <!-- <el-button type="primary">名细</el-button>
                        <el-button type="primary">合计</el-button> -->
                      </el-button-group>
                   </el-col>
                   <el-col :span="20">
                        <el-row justify="end" style="text-align:right"><el-button>导出</el-button></el-row>
                   </el-col>
          </el-row>
<el-table
   :data="tableData4"
   style="width: 100%"
   :span-method="objectSpanMethod"
   :header-cell-style="getRowClass"
   header-align="center"
   class="tab111"
   border
   height="auto">
   <el-table-column
     fixed
     prop="date"
     label="日期"
     align="left"
     width="150">
   </el-table-column>
   <el-table-column
     fixed
     prop="date"
     align="center"
     label="日期"
     width="150">
   </el-table-column>
   <el-table-column
     fixed
     prop="date"
     label="日期"
     align="center"
     width="150">
   </el-table-column>
   <el-table-column
     fixed
     prop="date"
     label="日期"
     align="center"
     width="150">
   </el-table-column>
   <el-table-column
     prop="name"
     label="姓名"
     align="center"
     width="120">
   </el-table-column>
   <el-table-column
     prop="province"
     label="省份"
     align="center"
     width="120">
   </el-table-column>
   <el-table-column
     prop="city"
     label="市区"
     align="center"
     width="120">
   </el-table-column>
   <el-table-column
     prop="address"
     label="地址"
     align="center"
     width="300">
   </el-table-column>
   <el-table-column
     prop="zip"
     align="center"
     label="邮编"
     width="120">
   </el-table-column>
 </el-table>
      </TabList>
    </div>
  </el-main>
</el-container>
</template>

<script>
  window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js')
  import Search from "../../../common/vue/search.vue"
  import Lmenu from "../../../common/vue/leftmenu.vue"
  import TabList from "../../../common/vue/tablelist.vue"
  import {mapGetters, mapActions} from "vuex"
  // require('materialize-css')
export default {
  name: 'app',
  components:{Search,TabList,Lmenu}
  ,data () {
      return {
        correctheight:{height:document.documentElement.clientHeight+'px'},
        correctheightel:{overflow: 'hidden',width:'174px'},
        correctheightul:document.documentElement.clientHeight,
        radio: '1',
        value1: '',
        value2: '',
        all: true,
        tableData4: [{
       date: '2016-05-03',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2016-05-02',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2016-05-04',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2016-05-01',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2016-05-08',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2016-05-06',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }, {
       date: '2016-05-07',
       name: '王小虎',
       province: '上海',
       city: '普陀区',
       address: '上海市普陀区金沙江路 1518 弄',
       zip: 200333
     }]
      };
    }
  //  页面加载之前
  ,created() {
      // console.log(this.$router)
  },
  //  页面加载后
  mounted() {
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      getRowClass({ row, column, rowIndex, columnIndex }) {
				if (rowIndex == 0) {
					return 'background:#ebf2fa'
				} else {
					return ''
				}
			}
      ,objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 3) {
          if (rowIndex % 4 === 0) {
            return {
              rowspan: 4,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
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
  .tab111{border:1px solid #d7d8da}
.tab111 table td{border-right:1px solid #d7d8da; border-bottom:1px solid #d7d8da}
.tab111 .el-table td, .el-table th.is-leaf{ border-bottom:1px solid #d7d8da; border-right:1px solid #d7d8da;}
button.check{background-color:#FFF; color:#005db1}
.defaultbtn{background-color: #fbfbfb;}
.el-radio__input.is-checked .el-radio__inner,.el-checkbox__input.is-checked .el-checkbox__inner{border-color:#005bac;background:#005bac;}
  /* .el-table--border td,.el-table td,.el-table th.is-leaf,.el-table th.is-leaf,.el-table--border th{border-right: 1px solid #ff0000;} */
.el-main{padding:0px; }
.rootmenu{padding-left: 10px; color: #fff; margin-top:4px; font-size: 14px; }
.rootmenu>li{margin-bottom:0px; line-height: 100%; cursor: pointer; padding:8px 0}
.rootmenu>li:last-child{margin-bottom:0px; padding:0px}
.rootmenu>li ul{margin-left:10px;margin-top:4px}
.rootmenu>li ul li{padding:8px 0}
.rootmenu>li ul>li:last-child{margin-bottom:0px; padding-bottom:0px}
.rootmenu>li ul{padding-bottom:0px}
/* .rootmenu>li ul li:last-child{margin:0px; padding:0px} */
.rootmenu .iconfont{font-size: 12px}
/*滚动条样式*/
                   .el-aside::-webkit-scrollbar {/*滚动条整体样式*/
                       width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
                       height: 4px;
                   }
                   .el-aside::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                       border-radius: 5px;
                       -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                       background: rgba(0,0,0,0.2);
                   }
                   .el-aside::-webkit-scrollbar-track {/*滚动条里面轨道*/
                       -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                       border-radius: 0;
                       background: rgba(0,0,0,0.1);
                   }
#searchContent .input-class{width:50%}
</style>
