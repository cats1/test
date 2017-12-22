<template>
	<div>
		<h2>主题设置</h2>
		<el-row>
			<el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.dirName"
			      :label="item.name"
			      :value="item.dirName">
			    </el-option>
			</el-select>
		</el-row>
	</div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    options: function () {
      return this.getPageJson().account.language
    }
  },
  mounted () {
    console.log(this.getPageJson().account)
  }
}
</script>
<style></style>
