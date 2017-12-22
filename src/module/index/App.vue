<template>
  <div id="app">
    <m-header active-index="index"></m-header>
    <div class="pagebodywrap">
      <el-row class="clearboth">
        <el-col :span="4">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col :span="20">
          
        </el-col>
      </el-row>
      <el-row>
        
      </el-row>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import mHeader from '../../components/Mheader'
import mFooter from '../../components/footer'
import pageJson from '../../language/zh-cn.json'
export default {
  data () {
    return {
      activeIndex: 1,
      pageTextObj: {},
      value1: ''
    }
  },
  components: { mHeader, mFooter },
  created () {
    this.pageTextObj = pageJson.index
  },
  mounted () {}
}
</script>

<style>

</style>
