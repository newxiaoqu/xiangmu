<template>
    <el-container class="container">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .el-aside{
        background: aquamarine;
    }
    .el-header{
        border: 1px solid #ddd;
    }
}
</style>
