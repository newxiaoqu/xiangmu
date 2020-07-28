<template>
  <div class="container-welcome">
    <img src="../../assets/welcome.jpg" class="Welimg" alt="">
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('user/profile').then(res => console.log(res.data)).catch(err => console.log(err))
  }
}
</script>

<style lang="less" scoped>
.container-welcome {
  width: 100%;
  height: 100%;
  // background: chocolate;
  .Welimg{
    width: 100%;
    height: 100%;
  }
}
</style>
