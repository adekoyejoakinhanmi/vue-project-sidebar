<template>
  <svg :class="klass" :viewBox="`0 0 ${width} ${height}`">
    <use :xlink:href="`/img/sprite.svg#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'SVGIcon',
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    klass: {
      type: String,
      default: 'svg'
    },
    width: {
      type: Number,
      default: 15
    },
    height: {
      type: Number,
      default: 15
    }
  }
}
</script>

<style></style>
