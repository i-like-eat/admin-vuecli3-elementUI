<template>
  <div class="container">
    {{msg}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg:"页面four"
      }
    },
    watch:{
      "$route":function(to,from){
        this.msg = '页面'+to.params.id
      }
    },
    methods: {
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
