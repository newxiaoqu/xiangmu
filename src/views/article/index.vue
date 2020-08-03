<template>
  <div class="container-article">
    <!-- 筛选条件区域 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <!-- 头部区域 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
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
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>根据筛选条件共查询到55074条结果：</span>
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
      // 日期选择后的数据[起始日期，结束日期]
      value1: [],
      // 频道的数据
      ChannelData: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ]
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
</style>
