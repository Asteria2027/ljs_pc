<template>
  <div id="main" class="app-main">
    <router-view />
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  import { getStore } from '@/libs/mUtils.js';

  export default {
    data () {
      return {

      }
    },
    mounted(){
      this.getUserInfo().catch((err)=>{
        console.log('AppGetUserInfo',err);
      });
    },
    methods: {
      ...mapActions(["getUserInfo"]),
    }
  }
</script>

<style>
@import url('./style/reset');
html,
body {
  width: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.app-main {
  width: 100%;
}
</style>