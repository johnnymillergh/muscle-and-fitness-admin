<template>
  <div class="heading-container">
    <span :class="headingClass">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
      default: 'Heading'
    },
    type: {
      type: String,
      required: false,
      default: 'primary'
    },
    level: {
      type: Number,
      required: false,
      default: 1
    }
  },
  name: 'Heading',
  computed: {
    headingClass () {
      return `${this.type} level-${this.level}`
    }
  }
})
</script>

<style lang="scss" scoped>
.heading-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;

  .primary {
    color: $color-primary;
    border-left: 4px solid $color-primary;
  }

  .success {
    color: $color-success;
    border-left: 4px solid $color-success;
  }

  .warning {
    color: $color-warning;
    border-left: 4px solid $color-warning;
  }

  .danger {
    color: $color-danger;
    border-left: 4px solid $color-danger;
  }

  .info {
    color: $color-info;
    border-left: 4px solid $color-info;
  }

  .level-1 {
    font-size: 20px;
    line-height: 18px;
    font-weight: bolder;
    padding-left: 12px;
    margin: 8px 16px 8px 0;
  }

  .level-2 {
    font-size: 18px;
    line-height: 16px;
    font-weight: bolder;
    padding-left: 12px;
    margin: 6px 14px 6px 0;
  }

  .level-3 {
    font-size: 16px;
    line-height: 14px;
    font-weight: bolder;
    padding-left: 12px;
    margin: 4px 12px 4px 0;
  }
}
</style>
