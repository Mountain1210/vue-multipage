<template>
  <div id="leftmenutxt">
    <h2><slot name="h2txt"></slot></h2>
    <div class="inputxt" v-if="isblock==1">
      <el-input
        placeholder="搜索"
        v-model="input23" size="mini">
        <i slot="prefix" class="el-input__icon el-icon-search" ></i>
      </el-input>
    </div>
    <slot></slot>
  </div>
</template>
<style scoped>
#leftmenutxt h2{padding:8px 0px 6px 15px; color: #fff; font-size:14px; background-color: #03549C}
#leftmenutxt .inputxt{padding:8px 10px}
#leftmenutxt .inputxt input.el-input__inner{background-color: rgba(0,157,220,0.5)!important}
</style>
<script>
  export default {
    data(){
      return {
                isblock: this.isblocks
                ,input23: ''
            }
    }
    ,props:['isblocks']
    ,methods:{

    }
  }
</script>
