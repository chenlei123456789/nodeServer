<template>
  <div class="login-container">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px" class="demo-ruleForm">
          <h3 class="title">系统登录</h3>
          <el-form-item prop="email" >
              <!-- <span class="svg-container"><icon-svg icon-class="jiedianyoujian"></icon-svg></span> -->
              <el-input type="text" v-model="loginForm.email" auto-complete="off" placeholder="请输入您的邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="Pass">
              <!-- <span class="svg-container"><icon-svg icon-class="mima"></icon-svg></span> -->
              <el-input type="password" v-model="loginForm.Pass" auto-complete="off" placeholder="请输入您的密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { isWscnEmail } from 'utils/validate'
// import IconSvg from 'components/Icon-svg'

export default {
  name: 'login',
  data () {
    const validateEmail = (rule, value, callback) => {
      if (!isWscnEmail(value)) {
        callback(new Error('请输入正确的合法邮箱'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        console.log('error')
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: 'admin@wallstreetcn.com',
        Pass: ''
      },
      loginRules: {
        email: [
              { required: true, trigger: 'blur', validator: validateEmail }
        ],
        Pass: [
              { required: true, trigger: 'blur', validator: validatePass }
        ]
      },
      loading: false

    }
  },
  components: {
    // IconSvg
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
            this.loading = false
            const roles = this.$store.getters.roles
            console.log('roles::::', roles)
            // this.$store.dispatch('GenerateRoutes', {roles}).then(() => {
            this.$router.push({path: '/'})
            // })
          }).catch(err => {
            console.log(err)
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-container{
    /* height: 100vh;
    background-color: #2d3a4d */

  }
  .title{
      font-size: 26px;
      font-weight: 400;
      /* color: #eeeeee; */
      margin: 60px auto 20px auto;
      text-align: center;
      font-weight: bold;
  }
  input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eeeeee;
      height: 47px;
  }
  .el-input {
      display: inline-block;
      height: 47px;
      width: 30%;
  }
  .el-button{
    width:30%;
  }

</style>
