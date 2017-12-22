<template>
  <div id="app">
  <div class="pagebodywrap">
     <div class="loginwrap">
        <h2 class="logintitle">{{options[value].label}}{{signinText.logintitleTip}}
        </h2>
        <div class="loginselectwrap">
          <el-select v-model="value" :placeholder="signinText.selectHolder">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      <el-form :model="loginForm" status-icon ref="loginForm" :rules="rules" label-width="60px" class="demo-ruleForm" >
        <template v-if="value === '0'">
            <el-form-item label="" prop="email">
              <el-input type="email" :placeholder="options[0].form.placeholder1" v-model="loginForm.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input type="password" :placeholder="options[0].form.placeholder2" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
            </el-form-item>
        </template>
        <template v-else-if="value === '1'">
            <el-form-item label="" prop="superaccount">
              <el-input type="text" :placeholder="options[1].form.placeholder1" v-model="loginForm.superaccount" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input type="password" :placeholder="options[1].form.placeholder2" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
            </el-form-item>
        </template>
        <template v-else-if="value === '2'">
            <el-form-item label="" prop="email">
              <el-input type="email" :placeholder="options[2].form.placeholder1" v-model="loginForm.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input type="password" :placeholder="options[2].form.placeholder2" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
            </el-form-item>
        </template>
        <template v-else-if="value === '3'">
            <el-form-item label="" prop="phone">
              <el-input type="text" :placeholder="options[3].form.placeholder1" v-model="loginForm.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input type="password" :placeholder="options[3].form.placeholder2" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
            </el-form-item>
        </template>
        <template v-else-if="value === '4'">
            <el-form-item label="" prop="stageaccount">
              <el-input type="text" :placeholder="options[4].form.placeholder1" v-model="loginForm.stageaccount" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pass">
              <el-input type="password" :placeholder="options[4].form.placeholder2" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">{{signinText.loginBtnText}}</el-button>
            </el-form-item>
        </template>
      </el-form>
    </div>
    </div>
    <m-footer></m-footer>      
  </div>
</template>

<script>
import mFooter from '../../components/footer'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.getPageJson().formNullTip.passName.nullTip))
      } else {
        callback()
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.getPageJson().formNullTip.passName.nullTip))
      } else {
        if (!this.checkEmail(value)) {
          callback(new Error(this.getPageJson().formNullTip.passName.errorTip))
        } else {
          callback()
        }
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.getPageJson().formNullTip.phone.nullTip))
      } else {
        if (!this.checkPhone(value)) {
          callback(new Error(this.getPageJson().formNullTip.phone.errorTip))
        } else {
          callback()
        }
      }
    }
    var validateSuperAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.getPageJson().formNullTip.superaccount.nullTip))
      } else {
        if (!this.checkSuperAccount(value)) {
          callback(new Error(this.getPageJson().formNullTip.superaccount.errorTip))
        } else {
          callback()
        }
      }
    }
    var validateStageAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.getPageJson().formNullTip.stageaccount.nullTip))
      } else {
        callback()
      }
    }
    return {
      activeIndex: 1,
      loginForm: {
        pass: '',
        email: '',
        phone: '',
        superaccount: ''
      },
      value: '0',
      rules: {
        email: [
          { required: true, message: this.getPageJson().formNullTip.email.nullTip, trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        pass: [
          { required: true, message: this.getPageJson().formNullTip.passName.nullTip, trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.getPageJson().formNullTip.phone.nullTip, trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        superaccount: [
          { required: true, message: this.getPageJson().formNullTip.superaccount.nullTip, trigger: 'blur' },
          { validator: validateSuperAccount, trigger: 'blur' }
        ],
        stageaccount: [
          { required: true, message: this.getPageJson().formNullTip.superaccount.nullTip, trigger: 'blur' },
          { validator: validateStageAccount, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    pageJson: function () {
      return this.getPageJson()
    },
    signinText: function () {
      return this.getPageJson().signin
    },
    options: function () {
      return this.getPageJson().accountList
    }
  },
  components: { mFooter },
  created () {},
  mounted () {},
  methods: {
    doLogin () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          alert('submit!')
          window.location.href = 'index.html'
        } else {
          alert('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>

</style>
