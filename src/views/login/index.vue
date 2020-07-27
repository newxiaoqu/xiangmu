<template>
  <div class="container-login">
    <el-card class="my-card">
      <div slot="header" class="clearfix">
        <span id="text">欢迎登录</span>
        <el-button style="float: right; padding: 3px 0" type="text">注册</el-button>
      </div>
      <!-- 表单 -->
      <el-form :model="form" status-icon :rules="RulesLogin" ref="form">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code" placeholder="请输入验证码" style="width:297px;margin-right:15px "></el-input>
          <el-button>请输入验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.checked">已经阅读和同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submitForm">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    // 校验手机号的函数
    const mobileyz = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式有误！'))
      }
      callback()
    }
    return {
      form: {
        mobile: '',
        code: '',
        checked: true
      },
      RulesLogin: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          //   { min: 7, max: 11, message: '请输入长度在 7 到 11 个之间的数字', trigger: 'blur' }
          { validator: mobileyz, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入长度在 6 位之间的数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
        //   alert('校验成功')
        // 进行登录
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.form).then(res => {
            // 登录成功
            // 直接跳转到首页
            // 存储用户信息
            store.setUser(res.data.data)
            this.$router.push('/')
          }).catch(e => {
            // 登录失败
            // 提示手机号或者验证码错误
            this.$message.error('手机号或者验证码错误')
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login {
  width: 100%;
  height: 100%;
  // 让百分百尺寸基于window计算
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/timg.jpg) no-repeat center / cover;
  .my-card {
    width: 480px;
    height: 340px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto;
    }
    #text {
      margin: 162px;
      color: skyblue;
      font-size: 21px;
      font-weight: 900;
    }
  }
}
</style>
