<template>
  <div id="app">
    <m-header></m-header>  
    <el-button>haha</el-button>
  </div>
</template>

<script>
import mHeader from '../../components/Mheader'
import pageJson from '../../../static/zh-cn.json'
export default {
  data () {
    return {
      activeIndex: 1,
      pageTextObj: {}
    }
  },
  components: { mHeader },
  mounted () {
    this.pageTextObj = pageJson.index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
