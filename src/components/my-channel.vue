<template>
  <el-select clearable @change="changeChannel" v-model="channelId" placeholder="请选择">
    <el-option v-for="item in ChannelData" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  data () {
    return {
      // 选择后的频道ID
      channelId: null,
      // 频道的数据
      ChannelData: []
    }
  },
  created () {
    this.getChannelOptions()
  },
  methods: {
    // 获取频道的选项数据
    async getChannelOptions () {
      // 原始数据 res = {data: {message:'',data: {channels:[]}}}
      // 按照 结构 去解构赋值
      const { data: { data } } = await this.$http.get('channels')
      this.ChannelData = data.channels
    },
    // 频道选择处理函数
    changeChannel () {
      if (this.channelId === '') {
        this.channelId = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
