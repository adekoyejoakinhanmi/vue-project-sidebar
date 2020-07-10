<template>
  <auth-layout-base>
    <form @submit.prevent="onSubmitted">
      <h1 class="h3 font-weight-bold text-center mb-4">Login</h1>
      <div class="form-group">
        <input
          id="email"
          v-model="loginDetails.email"
          type="email"
          class="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <input
          id="password"
          v-model="loginDetails.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <div class="mb-5">
        <nuxt-link to="/auth/forgot-password">
          Forgot password?
        </nuxt-link>
      </div>
      <button type="submit" class="btn btn-block btn-primary">
        Login
      </button>
    </form>
  </auth-layout-base>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  layout: 'auth',
  middleware: 'unauthenticated',
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
