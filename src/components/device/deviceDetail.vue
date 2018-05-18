<template>
    <div style="padding-top: 45px;">
        <h1>设备详情</h1>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                id:0,
                deviceInfo:{}
            }
        },
        created () {
            console.log(this.$route.params.id)
            this.id = this.$route.params.id;
            //this.getdeviceInfo();
        }
    }
</script>
<style>
</style>