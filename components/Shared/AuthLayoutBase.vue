<template>
  <div class="auth">
    <div class="auth-bg-img">
      <img src="/img/login-bg.svg" />
    </div>
    <div class="auth-details">
      <div class="auth-content">
        <div class="auth-logo">
          App Logo Here
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayoutBase'
}
</script>

<style></style>
