<template>
  <div>
    <el-card>
      <!-- 头部面包屑 -->
      <div slot="header">
        <my-bread>素材管理</my-bread>
      </div>
      <!-- 按钮区域 -->
      <div class="btn_box">
        <el-radio-group @change="changeCollect" v-model="filterParams.collect" size="small">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>
        <el-button @click="addDialog()" style="float:right" type="success" size="small">添加素材</el-button>
      </div>
      <!-- 对话框组件 -->
      <el-dialog title="上传素材" :visible.sync="dialogVisible" width="300px">
        <!-- 上传组件 -->
        <el-upload
          class="avatar-uploader"
          action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
          :headers="headers"
          :show-file-list="false"
          :on-success="uploadSuccess"
          name="image"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
        </span>
      </el-dialog>
      <!-- 图片列表 -->
      <div class="img_list">
        <div class="img_item" v-for="item in images" :key="item.id">
          <img :src="item.url" alt />
          <!-- 图片底部操作栏 -->
          <div class="option" v-if="!filterParams.collect">
            <!-- 收藏素材 -->
            <span
              @click="toogleStatus(item)"
              class="el-icon-star-off"
              :class="{red:item.is_collected}"
            ></span>
            <!-- 删除素材 -->
            <span @click="deImages(item.id)" class="el-icon-delete"></span>
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
import store from '@/store'
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
      total: 0,
      // 控制对话框显示隐藏
      dialogVisible: false,
      // 预览图
      imageUrl: null,
      // 上传素材时请求头携带的token
      headers: {
        Authorization: `Bearer ${store.getUser().token}`
      }
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
    },
    // 点击切换 全部与收藏按钮来获取数据
    changeCollect () {
      this.filterParams.page = 1
      this.getImages()
    },
    // 切换收藏状态
    async toogleStatus (item) {
      try {
        const {
          data: { data }
        } = await this.$http.put(`user/images/${item.id}`, {
          collect: !item.is_collected
        })
        // 提示
        this.$message.success(data.collect ? '添加收藏成功' : '取消收藏成功')
        // 修改星星样式
        // 修改当前图片的数据，is_collected 值改成后台返回的值即可
        item.is_collected = data.collect
      } catch (error) {
        this.$message.error('操作失败')
      }
    },
    // 删除素材
    async deImages (id) {
      try {
        await this.$http.delete(`/user/images/${id}`)
        this.$message.success('删除素材成功')
        this.getImages()
      } catch (error) {
        this.$message.error('删除素材失败')
      }
    },
    // 打开对话框
    addDialog () {
      this.dialogVisible = true
    },
    // 上传成功的回调函数
    uploadSuccess (res) {
      // 预览图片
      this.imageUrl = res.data.url
      // 上传成功后的提示
      this.$message.success('上传素材成功')
      // 2s后关闭对话框，更新列表
      window.setTimeout(() => {
        // 关闭对话框
        this.dialogVisible = false
        // 更新列表
        this.getImages()
      }, 2000)
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
