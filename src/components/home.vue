<template>
  <div>
    <qj-header></qj-header>
    <router-view></router-view>
  </div>
</template>

<script>
import qjHeader from './qj-header'
  export default {
    components:{
      qjHeader
    },
    data() {
      return {
       
      }
    },
    created(){
     
    },
    methods: {
      
    }
  }
</script>

<style scoped>
</style>
