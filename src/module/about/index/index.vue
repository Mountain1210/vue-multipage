<template>
  <div id="app">
    <div id="searchContent">
      <Search>
        <span slot="fontxt">按机构统计</span>
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
      <TabList>


          <el-row  slot="btnslot">
                   <el-col :span="4">
                     <el-button-group>
                        <el-button type="primary">名细</el-button>
                        <el-button type="primary">合计</el-button>
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
   border
   height="250">
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

  </div>
</template>

<script>
  window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js')
  import Search from "../../../common/vue/search.vue"
  import TabList from "../../../common/vue/tablelist.vue"
  // require('materialize-css')
export default {
  name: 'app',
  components:{Search,TabList}
  ,data () {
      return {
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
  /* .el-table--border td,.el-table td,.el-table th.is-leaf,.el-table th.is-leaf,.el-table--border th{border-right: 1px solid #ff0000;} */
</style>
