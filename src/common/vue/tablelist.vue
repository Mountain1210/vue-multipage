<template>
    <div class="tablewrapper">
           <div id="btnContent">
            <slot name="btnslot"></slot>
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
.tablewrapper{margin-top:20px}
#btnContent{margin-bottom:12px}

</style>
