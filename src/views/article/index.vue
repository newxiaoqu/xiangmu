<template>
  <div class="container-article">
    <!-- 筛选条件区域 -->
    <el-card class="box-card">
      <div slot="header">
        <!-- 头部区域 面包屑 -->
        <!-- 使用面包屑组件 -->
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 表单区域 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model="FilterData.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="FilterData.channel_id" placeholder="请选择">
            <el-option
              v-for="item in ChannelData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果区域 -->
    <el-card>
      <div slot="header">
        根据筛选条件共查询到 0 条结果：
        <!-- 使用表格 -->
        <el-table :data="articles">
          <el-table-column label="封面"></el-table-column>
          <el-table-column label="标题"></el-table-column>
          <el-table-column label="状态"></el-table-column>
          <el-table-column label="发布时间"></el-table-column>
          <el-table-column label="操作"></el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination style="margin-top:20px;text-align:center" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 筛选条件对象
      FilterData: {
        status: null,
        channel_id: null,
        // 起始时间
        begin_pubdate: null,
        // 结束时间
        end_pubdate: null
      },
      // 文章列表
      articles: [],
      // 日期选择后的数据[起始日期，结束日期]
      value1: [],
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
      const { data: { data } } = await this.$http.get('channels')
      this.ChannelData = data.channels
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  width: 98%;
  margin-top: 20px;
  margin-left: 10px;
}
.box-card{
  margin-bottom: 20px;
}
</style>
