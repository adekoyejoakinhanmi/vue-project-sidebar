<template>
  <div class="chart-container with-body">
    <bar-chart
      v-if="showChart"
      :data="chartData"
      :styles="{
        position: 'relative',
        maxHeight: '350px',
        maxWidth: '860px',
        width: '100%'
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'MonthlySummaryChart',
  data() {
    return {
      showChart: false
    }
  },
  computed: {
    chartData() {
      const labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      const data = [
        10000,
        45000,
        21000,
        40000,
        70000,
        23000,
        50000,
        43000,
        33000,
        29000,
        87000,
        70000
      ]
      return {
        labels,
        datasets: [
          {
            label: 'Moneth',
            backgroundColor: '#219F21',
            borderColor: '#3751FF',
            data
          }
        ]
      }
    }
  },
  mounted() {
    this.showChart = true
  }
}
</script>

<style lang="scss">
.chart-container {
  position: relative;
}
</style>
