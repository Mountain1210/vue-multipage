<template>
    <div class="dialog-wrapper">
           <div class="titxt">
              <slot name="fontxt"></slot><i style="font-size:18px" class="el-icon-question"></i>
           </div>
           <slot></slot>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                is_open: false
            }
        },
        methods: {

        }
    }
</script>
<style>
  .titxt{font-size:18px; color:#000;margin-bottom:20px; font-size: 21px; }
  .titxt .el-icon-question{margin-left:12px}
  .tt{padding-right:8px}
</style>
