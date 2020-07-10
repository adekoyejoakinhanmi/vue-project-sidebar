<template>
  <div class="mb-4">
    <div class="row">
      <div class="col-md-9">
        <div class="r-card">
          <div class="chart-wrapper">
            <div class="with-body">
              <h5>Chart Data</h5>
            </div>
            <hr />
            <monthly-summary-chart />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="r-card h-100 with-body">
          Other Data here
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthlySummaryChart from '../Charts/MonthlySummary.vue'

export default {
  name: 'AppChartCard',
  components: {
    MonthlySummaryChart
  }
}
</script>

<style lang="scss">
.graph-stat {
  border-left: 1px solid #dfe0eb;
  width: 100%;
  &-item {
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #dfe0eb;

    p {
      color: #9fa2b4;
      margin-bottom: 0.2rem;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
}
</style>
