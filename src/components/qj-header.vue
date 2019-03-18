<template>
  <div class="header">
    <div class="head">
      <el-row>
        <el-col :span="4"> 
          <div class="logo-left">vue-cli3 + elementui</div>
        </el-col>
        <el-col :span="20">  
          <div class="menu-right">
            <div>sdfsdf</div>
          </div>
        </el-col>
      </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.header {
  height: 60px;
  line-height: 60px;
  background: #20a0ff;
  color: #fff;
}
.head {
  padding:0 10px;
}
</style>
