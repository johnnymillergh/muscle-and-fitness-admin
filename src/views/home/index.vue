<template>
  <div class="home">
    <img alt="Muscle and fitness admin social image" src="@/assets/images/muscle-and-fitness-admin-social-image.png"
         style="height: 300px">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld/index.vue'
import { AppUtil } from '@/utils/app-util'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    msg () {
      return `WELCOME TO ${AppUtil.getCamelCaseName()}`
    }
  }
})
</script>
