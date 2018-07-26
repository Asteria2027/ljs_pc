<template>
  <div class="main">
    <short-cut></short-cut>
    <router-view />
    <ljs-footer></ljs-footer>
  </div>
</template>

<script>

  import shortCut from './main-components/shortcut/shortcut.vue'
  import ljsFooter from './main-components/ljs_footer/ljs_footer.vue'

  export default {
    components: {
      shortCut,
      ljsFooter
    },
    data () {
      return {

      }
    },
   
  }
</script>

<style lang='less' scope>

 
</style>
