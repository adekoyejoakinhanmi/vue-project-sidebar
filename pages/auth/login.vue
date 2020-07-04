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
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  layout: 'auth',
  data() {
    return {
      loading: false,
      loginDetails: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async onSubmitted() {
      if (this.loading) return
      this.loading = true
      try {
        await this.login(this.loginDetails)
        this.$router.push('/')
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
