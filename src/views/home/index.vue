<template>
  <el-container class="container">
    <el-aside width="200px">
      <!-- login区域 -->
      <div class="logo">
        <span>
          <img src="../../assets/aixinxin.jpg" class="img" alt />
        </span>
        <span class="wenben">用户名称</span>
      </div>
      <!-- 侧边栏导航菜单组件 -->
      <!-- default-active被选中导航的索引 -->
      <!-- background-color自定义的背景颜色 -->
      <!-- text-color文本颜色 -->
      <!-- active-text-color被激活菜单的文本颜色 -->
      <el-menu
        default-active="1"
        background-color="#6495ED"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- el-submenu有子菜单的导航组件 -->
        <!-- el-menu-item没有子菜单的一级导航组件 -->
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
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
    background: #6495ed;
    // img{
    //     width: 100%;
    //     height: 100%;
    // }
    .logo {
      width: 100%;
      height: 60px;
      line-height: 60px;
      //   background: oldlace url(../../assets/logo.png) no-repeat center/200px 60px;
      .img {
        width: 45px;
        height: 45px;
        vertical-align: middle;
        margin-left: 30px;
        padding-right: 10px;
        border-radius: 50%;
      }
      .wenben {
        color: #fff;
        font-weight: bold;
        vertical-align: middle;
      }
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    background: #6495ed;
    border: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
      //   color: palevioletred;
      color: #fff;
    }
    .text {
      //   color: palevioletred;
      font-size: 16px;
      vertical-align: middle;
      padding-left: 10px;
      color: #fff;
    }
    .dropdown {
      float: right;
      .img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        border-radius: 50%;
      }
      .wenben {
        font-weight: bolder;
        vertical-align: middle;
        padding-left: 10px;
        color: #fff;
      }
    }
  }
}
</style>
