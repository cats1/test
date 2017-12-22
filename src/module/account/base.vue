<template>
	<div>
		<h2>基本资料</h2>
		<el-row>
			<el-col :span="11" class="base-wrap">
				<el-form :model="baseForm" status-icon ref="baseForm" label-width="80px" class="demo-ruleForm">
					<el-form-item label="邮箱" >
						<p class="form-p">test@qq.com
							<el-checkbox class="right" v-model="checked">订阅邮件</el-checkbox></p>
					</el-form-item>
					<el-form-item label="姓名" prop="name">
						<el-input type="text" v-model="baseForm.name" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="手机号" prop="phone">
						<el-input type="text" v-model="baseForm.phone" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="公司名称" prop="phone">
						<el-input type="text" v-model="baseForm.phone" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="公司简称" prop="phone">
						<el-input type="text" v-model="baseForm.phone" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item>
		              <el-button type="primary" >保存</el-button>
		            </el-form-item>
				</el-form>	
			</el-col>
			<el-col :span="9" class="base-v-wrap">
				<h3>工厂版</h3>
				<p class>2018年12月30日到期</p>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
  data () {
    return {
      baseForm: {
        name: '',
        phone: ''
      },
      checked: true
    }
  }
}
</script>
<style></style>