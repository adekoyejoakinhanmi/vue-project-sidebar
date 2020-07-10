<template>
  <admin-dashboard v-if="true" />
  <user-dashboard v-else />
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    AdminDashboard: () => import('~/components/Dashboard/Admin.vue'),
    UserDashboard: () => import('~/components/Dashboard/User.vue')
  }
}
</script>

<style></style>
