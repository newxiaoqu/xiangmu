<template>
  <el-container class="container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <!-- 左侧 字体图标和文本说明-->
        <span class="el-icon-s-unfold icon"></span>
        <span class="text">后台管理系统</span>
        <!-- 右侧 下拉菜单-->
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <img src="../../assets/aixinxin.jpg" class="img" alt />
            <span class="wenben">用户名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .el-aside {
    background: #424242;
  }
  .el-header {
    border: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
      //   color: palevioletred;
    }
    .text {
      //   color: palevioletred;
      font-size: 16px;
      vertical-align: middle;
      padding-left: 10px;
    }
    .dropdown {
      float: right;
      .img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .wenben {
        font-weight: bolder;
        vertical-align: middle;
        padding-left: 10px;
      }
    }
  }
}
</style>
