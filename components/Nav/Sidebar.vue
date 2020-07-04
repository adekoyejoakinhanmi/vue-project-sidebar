<template>
  <aside :class="{ open: sidebarOpen }" class="sidebar">
    <div class="overlay" @click="ToggleSidebar"></div>
    <nav class="sidenav">
      <div class="logo-area">
        <span class="logoimg">
          <img src="/img/base-logo.png" />
        </span>
        <span class="logo-text">
          Admin
        </span>
      </div>
      <ul class="menu-area">
        <!-- <li class="apps-nav">
          <div class="app open">
            <ul class="app-links"> -->
        <li>
          <nuxt-link to="/">
            <span class="mr-2"></span>
            Overview
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/users">
            <span class="mr-2"></span>
            Users
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/transactions">
            <span class="mr-2"></span>
            Transactions
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">
            <span class="mr-2"></span>
            Settings
          </nuxt-link>
        </li>
        <li>
          <a href="#">
            <sprite-icon class="mr-2" name="on-off" />
            Log out
          </a>
        </li>
      </ul>
      <!-- </div>
        </li>
      </ul> -->
    </nav>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapState(['currentPage', 'sidebarOpen'])
  },
  methods: {
    ...mapActions(['ToggleSidebar']),
    setOpenItem(id) {
      if (this.openItem === id) {
        this.openItem = ''
        return false
      }
      this.openItem = id
    }
  }
}
</script>

<style lang="scss">
.fake-nav {
  padding: 20px 24px 0;
  &-items {
    width: 100%;
    height: 8px;
    border-radius: 3rem;
    background: rgba($color: #fff, $alpha: 0.25);
    margin-bottom: 15px;

    &:nth-child(2) {
      width: 85%;
      background: rgba($color: #fff, $alpha: 0.15);
    }
    &:nth-child(3) {
      width: 60%;
      background: rgba($color: #fff, $alpha: 0.07);
    }
    &:nth-child(4) {
      width: 95%;
      background: rgba($color: #fff, $alpha: 0.15);
    }
  }
}
</style>
