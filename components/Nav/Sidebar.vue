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
        <li v-for="(item, id) in menuOptions" :key="id">
          <nuxt-link
            :class="{ 'is-active': currentlyActive === item.activeName }"
            :to="item.route"
          >
            <sprite-icon class="mr-2" :name="item.icon" />
            {{ item.name }}
          </nuxt-link>
        </li>
        <li>
          <a href="#" @click="effectLogout">
            <sprite-icon class="mr-2" name="on-off" />
            Log out
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { admin, recycler, items } from '@/assets/js/nav'

export default {
  name: 'Sidebar',
  computed: {
    ...mapState(['currentPage', 'sidebarOpen']),
    ...mapGetters(['userRole']),
    menuOptions() {
      return this.userRole === 'admin' ? admin : recycler
    },
    currentlyActive() {
      const { name } = this.$route
      return items.find((t) => name.includes(t))
    }
  },
  methods: {
    ...mapActions(['ToggleSidebar', 'logout']),
    effectLogout() {
      this.logout()
      this.$router.push('/auth/login')
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
