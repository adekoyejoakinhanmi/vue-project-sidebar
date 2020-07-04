<template>
  <div class="auth">
    <div class="auth-bg-img">
      <img src="/img/rc-fuzzy.svg" />
    </div>
    <div class="auth-details">
      <div class="auth-content">
        <div class="auth-logo">
          <img src="/img/base-logo.png" alt="" />
        </div>
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  middleware: 'unauthenticated'
}
</script>

<style></style>
