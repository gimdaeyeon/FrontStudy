<template>
  <div>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);

onMounted(() => {
  const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
  if(!ctx) return;
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

});
</script>

<style scoped>

</style>