<template>
  <form @submit.prevent="onSubmitted">
    <h1 class="h4">Login in to your dashboard</h1>
    <p class="grey-darker mb-4">
      Please enter your email to login to your dashboard
    </p>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        id="email"
        v-model="loginDetails.email"
        type="email"
        class="form-control"
        required
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="loginDetails.password"
        type="password"
        class="form-control"
        required
      />
    </div>

    <button type="submit" class="btn btn-block text-uppercase btn-primary">
      Login
    </button>
    <div class="text-center pt-4">
      <nuxt-link to="/auth/signup">Create Account</nuxt-link> |
      <a href="#">Forgot password?</a>
    </div>
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
