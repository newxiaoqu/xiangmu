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
          <el-select
            clearable
            @change="changeChannel"
            v-model="FilterData.channel_id"
            placeholder="请选择"
          >
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
            @change="changeDate"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果区域 -->
    <el-card>
      <div slot="header">
        根据筛选条件共查询到 {{ total }} 条结果：
        <!-- 使用表格 -->
        <el-table :data="articles">
          <el-table-column label="封面">
            <template slot-scope="scope">
              <el-image :src="scope.row.cover.images[0]" style="width:150px;height:100px">
                <div slot="error" class="image-slot">
                  <img src="../../assets/load.jpg" style="width:150px;height:100px" />
                </div>
              </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status===0" type="info">草稿</el-tag>
              <el-tag v-if="scope.row.status===1">待审核</el-tag>
              <el-tag v-if="scope.row.status===2" type="success">审核通过</el-tag>
              <el-tag v-if="scope.row.status===3" type="warning">审核失败</el-tag>
              <el-tag v-if="scope.row.status===4" type="danger">已删除</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="pubdate" label="发布时间"></el-table-column>
          <el-table-column label="操作" width="120px">
            <template slot-scope="scope">
              <!-- 修改 -->
              <el-button plain type="primary" icon="el-icon-edit" circle></el-button>
              <!-- 删除 -->
              <el-button plain type="danger" icon="el-icon-delete" @click="delArticle(scope.row.id)" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          style="margin-top:20px;text-align:center"
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="FilterData.per_page"
          :current-page="FilterData.page"
          @current-change="changePager"
        ></el-pagination>
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
        end_pubdate: null,
        // 页数
        page: 1,
        // 每页数量
        per_page: 20
      },
      // 文章列表
      articles: [],
      // 日期选择后的数据[起始日期，结束日期]
      value1: [],
      // 频道的数据
      ChannelData: [],
      // 总条数
      total: 0
    }
  },
  created () {
    this.getChannelOptions()
    this.getArticles()
  },
  methods: {
    // 获取频道的选项数据
    async getChannelOptions () {
      // 原始数据 res = {data: {message:'',data: {channels:[]}}}
      // 按照 结构 去解构赋值
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.ChannelData = data.channels
    },
    // 获取文章的数据
    async getArticles () {
      const {
        data: { data }
      } = await this.$http.get('articles', { params: this.FilterData })
      this.articles = data.results
      // 总条数
      this.total = data.total_count
    },
    // 改变分页
    changePager (newPage) {
      this.FilterData.page = newPage
      this.getArticles()
    },
    // 筛选
    search () {
      // 每次进行搜索的时候，页码都应该改为1
      this.FilterData.page = 1
      this.getArticles()
    },
    // 日期选择处理函数
    changeDate (value) {
      // value的值和value1: []的值一致
      if (value) {
        this.FilterData.begin_pubdate = value[0]
        this.FilterData.end_pubdate = value[1]
      } else {
        this.FilterData.begin_pubdate = null
        this.FilterData.end_pubdate = null
      }
    },
    // 频道选择处理函数
    changeChannel () {
      if (this.FilterData.channel_id === '') { this.FilterData.channel_id = null }
    },
    // 删除文章
    async delArticle (articleId) {
      try {
        await this.$http.delete(`articles/${articleId}`)
        this.$message.success('删除成功')
        this.getArticles()
      } catch (error) {
        console.log(error)
        this.$message.error('删除失败')
      }
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
.box-card {
  margin-bottom: 20px;
}
</style>
