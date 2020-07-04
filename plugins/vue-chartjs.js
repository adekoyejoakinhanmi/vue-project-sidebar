import Vue from 'vue'
import { Bar } from 'vue-chartjs'

const defaultChartOptions = (xAxis = {}, yAxis = {}, otherProps = {}) => {
  if (!xAxis) xAxis = {}
  if (!yAxis) yAxis = {}

  const xAxes = [
    Object.assign(
      {
        scaleLabel: {
          display: false,
          labelString: 'Date'
        },
        barThickness: 30,
        ticks: {
          fontColor: 'rgba(223, 224, 235, 0.5)'
        },
        stacked: true,
        gridLines: {
          drawBorder: false,
          display: false
        }
      },
      xAxis
    )
  ]

  const yAxes = [
    Object.assign(
      {
        stacked: true,
        fontFamily: 'Helveltica Neue, Arial',
        scaleLabel: {
          display: false,
          labelString: 'Payroll Burden'
        },
        ticks: {
          display: false,
          fontColor: 'rgba(223, 224, 235, 0.5)'
        },
        gridLines: {
          color: 'rgba(223, 224, 235, 0.5)',
          drawBorder: false
        }
      },
      yAxis
    )
  ]

  return {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: 'index',
      position: 'nearest',
      backgroundColor: 'rgba(255,255, 255, 1)',
      borderColor: 'rgba(0, 0, 0, 0.5)',
      titleFontColor: 'rgba(0, 0, 0, 0.9)',
      bodyFontColor: 'rgba(0, 0, 0, 0.9)'
    },
    legend: {
      display: false
    },
    hover: {
      animationDuration: 1
    },
    scales: {
      xAxes,
      yAxes
    },
    ...otherProps
  }
}

const chartProps = {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    chartOptions: {
      type: Object,
      default: () => {}
    },
    otherOpts: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      options: {}
    }
  }
}

Vue.component('BarChart', {
  extends: Bar,
  ...chartProps,
  mounted() {
    Object.assign(
      this.options,
      this.chartOptions,
      defaultChartOptions(null, null, {})
    )
    this.renderChart(this.data, this.options)
  }
})
