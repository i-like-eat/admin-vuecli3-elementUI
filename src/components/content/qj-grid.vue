<template>
  <div class="container">
    <div class="search">
      <el-input placeholder="请输入基站编码" v-model="basestation" size="mini">
        <template slot="prepend">基站编码</template>
        <el-button slot="append" @click="getGridData">search</el-button>
      </el-input>
    </div>
    <el-table
      ref="singleTable"
      :data="tableData" 
      class="table"
      highlight-current-row>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="basestation"
        label="基站编码">
      </el-table-column>
      <el-table-column
        property="trafficCurrent"
        label="当前小时流量">
      </el-table-column>
      <el-table-column
        property="traffic1h"
        label="预测1小时">
      </el-table-column>
      <el-table-column
        property="traffic2h"
        label="预测2小时">
      </el-table-column>
      <el-table-column
        property="traffic3h"
        label="预测3小时">
      </el-table-column>
      <el-table-column
        property="traffic4h"
        label="预测4小时">
      </el-table-column>
      <el-table-column
        property="traffic5h"
        label="预测5小时">
      </el-table-column>
    </el-table>
    <div>
      <span class="demonstration">总共:<i>{{total}}</i>条记录  共<i>{{Math.ceil(total/pageSize)}}</i>页</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="sizes, prev, pager, next"
        :total=total>
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        pageSize:10,
        pageNumber:1,
        basestation:'',
        total:0,   
      }
    },
    created(){
      this.getGridData()
    },
    methods: {
      //获取选中页
      handleCurrentChange(val) {
        this.pageNumber = val
        this.getGridData()
      },
      //获取每页显示条数
      handleSizeChange(val){
        this.pageSize = val
        this.getGridData()
      },
      //获取表格数据
      getGridData(){
        let searchVal = this.basestation?"&basestation="+this.basestation:''
        let url = 'http://129.204.33.35:8080/bt-server/tp/selectByFy?pageSize='+this.pageSize+'&pageNumber='+this.pageNumber+searchVal
        this.$ajax.get(url)
          .then((data)=> {
            let gridData = data.data
            this.tableData = gridData.rows
            this.total = gridData.total
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  width:100%;
}
.search {
  width:350px;
}
.demonstration{
  float:left;
  margin-top:7px;
}
.demonstration i {
 font-style:normal;
 color:#409EFF;
 margin-right:5px;
 margin-left:5px;
}
</style>
