<template>
  <div class="container-login">
    <el-card class="my-card">
      <div slot="header" class="clearfix">
        <span id="text">欢迎登录</span>
        <el-button style="float: right; padding: 3px 0" type="text">注册</el-button>
      </div>
      <!-- 表单 -->
    </el-card>
  </div>
</template>

<script>
export default {}
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
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    img {
      display: block;
      width: 200px;
      margin: 0 auto;
    }
    #text{
        margin: 162px;
        color: skyblue;
        font-size: 21px;
        font-weight: 900;
    }
  }
}
</style>
