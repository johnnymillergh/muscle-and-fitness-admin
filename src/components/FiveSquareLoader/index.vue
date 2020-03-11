<template>
  <div class="five-square-loader-container">
    <div id="loader">
      <div class="square"/>
      <div class="square"/>
      <div class="square"/>
      <div class="square"/>
      <div class="square"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FiveSquareLoader',
  mounted (): void {
    // Vue.prototype.$loading({
    //   lock: false,
    //   text: 'Loading…',
    //   spinner: 'el-icon-loading'
    // })
  }
})
</script>

<style lang="scss" scoped>
.five-square-loader-container {
  background: #121212;
}

#loader {
  width: 500px;
  position: absolute;
  text-align: center;
  left: calc(50% - 250px);
  top: calc(50% - 10px)
}

#loader .square {
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 10px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, .3);
  animation: bouncer cubic-bezier(.455, .03, .515, .955) .75s infinite alternate
}

#loader .square:nth-child(5n+1) {
  background: $color-success;
  animation-delay: 0s
}

#loader .square:nth-child(5n+2) {
  background: $color-primary;
  animation-delay: calc(0s + (.1s * 1))
}

#loader .square:nth-child(5n+3) {
  background: $color-info;
  animation-delay: calc(0s + (.1s * 2))
}

#loader .square:nth-child(5n+4) {
  background: $color-danger;
  animation-delay: calc(0s + (.1s * 3))
}

#loader .square:nth-child(5n+5) {
  background: $color-warning;
  animation-delay: calc(0s + (.1s * 4))
}

@keyframes bouncer {
  to {
    transform: scale(1.75) translateY(-20px)
  }
}
</style>
