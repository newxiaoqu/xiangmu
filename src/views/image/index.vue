<template>
  <div>
    <el-card>
      <!-- 头部面包屑 -->
      <div slot="header">
        <my-bread>素材管理</my-bread>
      </div>
      <!-- 按钮区域 -->
      <div class="btn_box">
        <el-radio-group v-model="filterParams.collect" size="small">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>
        <el-button style="float:right" type="success" size="small">添加素材</el-button>
      </div>
      <!-- 图片列表 -->
      <div class="img_list">
        <div class="img_item" v-for="item in images" :key="item.id">
          <img :src="item.url" alt />
          <div class="option">
            <span class="el-icon-star-off" :class="{red:item.is_collected}"></span>
            <span class="el-icon-delete"></span>
          </div>
        </div>
      </div>
      <!-- 分页区域 -->
      <el-pagination
        style="margin-top:20px;text-align:center"
        background
        layout="prev, pager, next"
        :total="total"
        :current-page="filterParams.page"
        :page-size="filterParams.per_page"
        @current-change="changePager"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 筛选参数
      filterParams: {
        // false全部 true 收藏
        collect: false,
        // 页数
        page: 1,
        // 每页数量
        per_page: 10
      },
      // 图片列表数据
      images: [],
      // 图片总数
      total: 0
    }
  },
  // 组件初始化的时候获取数据，给列表数据赋值
  created () {
    this.getImages()
  },
  methods: {
    // 获取图片数据
    async getImages () {
      const {
        data: { data }
      } = await this.$http.get('user/images', { params: this.filterParams })
      this.images = data.results
      this.total = data.total_count
    },
    // 处理页码改变
    changePager (newPage) {
      this.filterParams.page = newPage
      this.getImages()
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
.btn_box {
  margin-bottom: 20px;
}
.img_list {
  .img_item {
    width: 180px;
    height: 180px;
    border: 1px dashed #ddd;
    position: relative;
    display: inline-block;
    margin: 0 50px 20px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .option {
      height: 30px;
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0;
      bottom: 0;
      text-align: center;
      line-height: 30px;
      span {
        color: #fff;
        margin: 0 30px;
      }
      .red {
        color: red;
      }
    }
  }
}
</style>
