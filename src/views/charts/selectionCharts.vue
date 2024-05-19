<template>
  <v-chart class="chart" :option="option"/>
</template>

<script>
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {BarChart} from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import {getSelectCharts} from "@/api/system/charts";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
]);

export default {
  name: "SelectionCharts",
  components: {
    VChart
  },
  data() {
    return {
      option: {
        title: {
          text: "选书统计",
          left: "center"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '被选次数',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
    };
  },
  created() {
    this.getSelectionChartsData();
  },
  methods: {
    getSelectionChartsData() {
      getSelectCharts().then(response => {
        this.option.xAxis[0].data = response.data.map((item) => item.bookName)
        this.option.series[0].data = response.data.map((item) => item.count)
      })
    },
  }
}

</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
