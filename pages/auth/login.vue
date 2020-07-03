<template>
  <form @submit.prevent="onSubmitted">
    <h1 class="h3 font-weight-bold text-center mb-4">Login</h1>
    <div class="form-group">
      <input
        id="email"
        v-model="loginDetails.email"
        type="email"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <input
        id="password"
        v-model="loginDetails.password"
        type="password"
        class="form-control"
        required
      />
    </div>
    <div class="mb-5">
      <a href="#">Forgot password?</a>
    </div>
    <button type="submit" class="btn btn-lg btn-block btn-primary">
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data() {
    return {
      loginDetails: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmitted() {
      // implement logic here
    }
  }
}
</script>

<style></style>
