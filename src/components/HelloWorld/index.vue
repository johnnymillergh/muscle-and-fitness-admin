<template>
  <div class="hello">
    <el-button type="primary" v-debounced-click="handleClickButton" v-click-control>Get App Info</el-button>
    <heading :text="msg" type="primary" :level="1"/>
    <heading :text="msg" type="primary" :level="2"/>
    <heading :text="msg" type="primary" :level="3"/>
    <heading :text="msg" type="success" :level="3"/>
    <heading :text="msg" type="warning" :level="3"/>
    <heading :text="msg" type="danger" :level="3"/>
    <heading :text="msg" type="info" :level="3"/>
    <el-table :data="tableData" v-loading="loadingAppInfo">
      <el-table-column label="Name" prop="name"/>
      <el-table-column label="Value" prop="value"/>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { gatewayApi } from '@/apis/gateway'
import Heading from '@/components/Heading/index.vue'

@Component({
  components: { Heading }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  private appInfo: string = ''
  private loadingAppInfo: boolean = false
  private tableData: any[] = []

  private async handleClickButton (): Promise<any> {
    this.loadingAppInfo = true
    try {
      const response = await gatewayApi.appInfo()
      this.appInfo = response.data
      this.tableData = []
      // @ts-ignore
      for (const key in this.appInfo) {
        // noinspection JSUnfilteredForInLoop
        const item = {
          name: key,
          value: this.appInfo[key]
        }
        this.tableData.push(item)
      }
    } catch (error) {
      console.error('Error occurred when getting app info!', error)
      this.$message.error(error.message)
    } finally {
      this.loadingAppInfo = false
    }
  }

  mounted () {
    this.handleClickButton()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
