<template>
  <div>
    <h1>chart.js</h1>
    <BarChart/>
    <LineChart/>
  </div>
</template>

<script>

import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components:{
    BarChart,
    LineChart
  }
}
</script>

<style lang="scss" scoped>

</style>