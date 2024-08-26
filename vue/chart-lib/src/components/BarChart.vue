<template>
  <div>
    <canvas id="myChart" width="400" height="400"></canvas>

  </div>
</template>

<script>
import {Chart} from "chart.js/auto";

export default {
  mounted() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>

</style>