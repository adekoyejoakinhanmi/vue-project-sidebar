<template>
  <nav class="top-nav">
    <div class="page-name">
      <div class="sidebar-toggle">
        <button class="btn btn-sm" @click="ToggleSidebar">
          <sprite-icon name="menu" />
        </button>
      </div>
      <h1 class="page-title-main mb-0">
        {{ currentPage }}
      </h1>
    </div>
    <div class="more-items">
      <slot />
      <div class="bar-item">
        <div class="avatar">
          <img src="/blankcomp.svg" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapState(['currentPage'])
  },
  methods: {
    ...mapActions(['ToggleSidebar'])
  }
}
</script>

<style>
.page-title-main {
  font-size: 1.4rem;
  margin-bottom: 0;
}
</style>
