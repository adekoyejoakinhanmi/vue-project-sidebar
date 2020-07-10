<template>
  <auth-layout-base>
    <form @submit.prevent="onSubmitted">
      <h1 class="h3 font-weight-bold text-center mb-5">Forgot Password</h1>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Email"
          required
        />
      </div>
      <button type="submit" class="btn btn-lg btn-block btn-primary">
        Reset
      </button>
    </form>
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
      email: ''
    }
  },
  methods: {
    async onSubmitted() {
      if (this.loading) return
      this.loading = true
      try {
        await this.$api.auth.forgotPassword({ email: this.email })
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
