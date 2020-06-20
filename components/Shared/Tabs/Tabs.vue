<template>
  <div :class="classes" class="v-tabs-wrapper">
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'is-active': tab.isActive }"
        >
          <div @click="selectTab(tab)">
            <span class="tab-name">{{ tab.name }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    classes: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
      this.$emit('currentTab', selectedTab.name)
    }
  }
}
</script>

<style lang="scss">
.v-tabs-wrapper {
  .tabs {
    overflow-x: scroll;
    position: relative;
    z-index: 22;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tabs ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1rem;
    white-space: nowrap;
    li {
      display: inline-flex;
      margin-right: 3rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    li div {
      display: flex;
      align-items: center;

      span {
        display: block;
      }
      svg.icon {
        width: 28px;
        margin-right: 0.5rem;
      }
    }
  }
}

.fade-transition {
  transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
