<template>
  <button :class="classes" class="btn">
    <i v-if="loading"></i>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    classes: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
