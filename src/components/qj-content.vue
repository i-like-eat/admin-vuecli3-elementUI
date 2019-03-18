<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>   
            <el-menu-item index="1-1">
              <router-link to="/grid">Table</router-link>
            </el-menu-item>   
            <el-menu-item index="1-2">
                 <router-link to="/form">Form</router-link>
            </el-menu-item> 
             <el-menu-item index="1-3">
                 <router-link to="/list">List</router-link>
            </el-menu-item>   
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>   
          </el-submenu>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" style="margin-top:10px">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      };
    },
    watch:{
      "$route":function(to,from){
        console.log(to)
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu {
  background-color: #eef1f6;
}
.el-menu li:hover{
  background-color:#D1DBE5
}
.el-menu a{
  text-decoration:none
}
</style>
