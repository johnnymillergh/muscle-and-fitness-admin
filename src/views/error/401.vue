<template>
  <div class="error-401-container">
    <el-button class="go-back-button" @click="handleClickGoBack" icon="el-icon-arrow-left">Go Back</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2 class="error-message">Error 401: Permission Denied</h2>
        <p>Contact your leader if you wanna access the page.</p>
        <p>Or you could go to:</p>
        <ul class="option-list">
          <li class="link-type">
            <router-link to="/dashboard">Home</router-link>
          </li>
          <li class="link-type">
            <a href="https://github.com/johnnymillergh">Johnny's GitHub</a>
          </li>
          <li class="link-type">
            <a href="#" @click.prevent="dialogVisible=true">View picture</a>
          </li>
        </ul>
        <span>Gif by <a href="https://airbnb.com/" target="_blank">Airbnb</a></span>
      </el-col>
      <el-col :span="12">
        <img src="@/assets/images/401.gif" class="error-401-gif" width="313" height="428"
             alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" title="Picture">
      <img :src="ewizardClap" class="other-picture" alt="clap picture">
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Page401'
})
export default class extends Vue {
  private ewizardClap = 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646'
  private dialogVisible = false

  private handleClickGoBack () {
    if (this.$route.query.noGoBack) {
      this.$router.push({ path: '/dashboard' })
    } else {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.error-401-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;

  .go-back-button {
    background: #008489;
    color: #fff;
    border: none !important;
  }

  .error-401-gif {
    margin: 0 auto;
    display: block;
  }

  .other-picture {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }

  .error-message {
    color: $color-danger;
  }

  .option-list {
    font-size: 14px;

    li {
      padding-bottom: 5px;
    }

    a {
      color: #008489;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
