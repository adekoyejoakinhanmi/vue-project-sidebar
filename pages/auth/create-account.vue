<template>
  <auth-layout-base>
    <form @submit.prevent="onSubmitted">
      <h1 class="h3 font-weight-bold text-center mb-4">Forgot Password</h1>
      <div class="mb-5 text-center">
        Fill the following form to register
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">First Name</label>
            <input
              id="firstname"
              v-model="credentials.firstName"
              type="text"
              class="form-control"
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              id="lastname"
              v-model="credentials.lastName"
              type="text"
              class="form-control"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="credentials.email"
          type="email"
          class="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Numer</label>
        <input
          id="phoneNumber"
          v-model="credentials.phoneNumber"
          type="text"
          class="form-control"
          placeholder="Phone Number"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="credentials.password"
          type="text"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="btn btn-lg btn-block btn-primary">
        Next
      </button>
    </form>
    <div class="text-center mt-3">
      Already have an account? <nuxt-link to="/auth/login">Login</nuxt-link>
    </div>
  </auth-layout-base>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  middleware: 'unauthenticated',
  data() {
    return {
      loading: false,
      credentials: {}
    }
  },
  methods: {
    async onSubmitted() {
      if (this.loading) return
      this.loading = true
      try {
        await this.$api.auth.register(this.credentials)
        // this.$toast.success('Password reset sent')
        this.$router.push('/auth/login')
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
