<template>

  <el-row>
    <el-col :span="24" class="card-box"  style="width: 50%">
      <el-card>
        <SelectionCharts/>
      </el-card>
    </el-col >
    <el-col :span="24" class="card-box" style="width: 50%">
      <el-card>
        <PlanCharts/>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>

import SelectionCharts from "@/views/charts/selectionCharts.vue";
import PlanCharts from "@/views/charts/planCharts.vue";

export default {
  name: "Index",
  components: {PlanCharts, SelectionCharts}
}
</script>

<style scoped>
</style>
