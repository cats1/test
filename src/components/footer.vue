<template>
	<div class="footerwrap">
      <p>{{pageJson.footer.ftext1}} 2015-{{getYear('', '', 4)}}{{pageJson.footer.ftext2}}
        <a target="_blank" href="http://www.miitbeian.gov.cn">{{pageJson.footer.flink}}</a>
      </p>
	</div>
</template>
<script>
import pageJson from '../language/zh-cn.json'
export default {
  data () {
    return {
      pageJson: {}
    }
  },
  created () {
    this.pageJson = pageJson
  }
}
</script>
<style></style>