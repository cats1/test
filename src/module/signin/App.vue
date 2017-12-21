<template>
  <div id="app">  
    <div class="loginwrap">
      <h2 class="logintitle">{{options[value].label}}{{signinText.logintitleTip}}
      </h2>
      <div class="loginselectwrap">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="60px" class="demo-ruleForm" v-show="value === '0'">
        <el-form-item label="账号" prop="email">
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="60px" class="demo-ruleForm" v-show="value === '1'">
        <el-form-item label="账号2" prop="email">
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="60px" class="demo-ruleForm" v-show="value === '2'">
        <el-form-item label="账号" prop="email">
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="60px" class="demo-ruleForm" v-show="value === '3'">
        <el-form-item label="账号" prop="email">
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
        </el-form-item>
      </el-form>
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="60px" class="demo-ruleForm" v-show="value === '4'">
        <el-form-item label="账号" prop="email">
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import pageJson from '../../../static/zh-cn.json'
export default {
  data () {
    return {
      activeIndex: 1,
      signinText: {},
      ruleForm2: {
        pass: '',
        email: ''
      },
      options: [],
      value: '0'
    }
  },
  created () {
    this.signinText = pageJson.signin
    this.options = pageJson.accountList
  },
  methods: {
    doLogin () {
      window.location.href = 'index.html'
    }
  }
}
</script>

<style>

</style>
