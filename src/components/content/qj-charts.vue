<template>
  <div >
    <el-row :gutter="20">
      <el-col :span="12">
        <div id="chartColumn" :style="{width: '100%', height: '400px'}"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartBar" :style="{width: '100%', height: '400px'}"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartLine" :style="{width: '100%', height: '400px'}"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartPie" :style="{width: '100%', height: '400px'}"></div>
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
    mounted(){
      this.getChartColumn()
      this.getChartBar()
      this.getChartLine()
      this.getChartPie()
    },
    methods:{
      getChartColumn(){
        var dom = document.getElementById('chartColumn')
        var chartColumn = this.echarts.init(dom)
        let option = 
            {
                title: { text: 'Column Chart' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                  }]
            }
          chartColumn.setOption(option);
      },
      getChartBar(){
        var dom = document.getElementById('chartBar')
        var chartBar = this.echarts.init(dom)
        let option = 
            {
                title: {
                    text: 'Bar Chart',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            }
          chartBar.setOption(option);
      },
      getChartLine(){
       var dom = document.getElementById('chartLine')
        var chartLine = this.echarts.init(dom)
        let option =
          {
            title: {
                text: 'Line Chart'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
             ]
            }
          chartLine.setOption(option);
      },
      getChartPie(){
        var dom = document.getElementById('chartPie')
        var chartPie = this.echarts.init(dom)
        let option =
          {
            title: {
                text: 'Pie Chart',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
          }
          chartPie.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>
