<template>
  <div class="main-layout">
    <sidebar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import { Sidebar } from '@/components/Nav'

export default {
  name: 'DefaultLayout',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss"></style>
