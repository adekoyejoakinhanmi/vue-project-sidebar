<template>
  <admin-dashboard v-if="true" />
  <recycler-dashboard v-else />
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    AdminDashboard: () => import('~/components/Dashboard/Admin.vue'),
    RecyclerDashboard: () => import('~/components/Dashboard/Recycler.vue')
  }
}
</script>

<style></style>
