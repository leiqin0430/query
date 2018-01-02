<template>
  <section class="shine-tab-content">
    <el-form :inline="true" :model="dictFilter">
      <el-form-item label="快速查找">
        <el-input v-model="dictFilter.dTitle" placeholder="请输入类别中文名/英文名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <el-button type="primary" @click="addDictType">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" height="'auto'" border stripe style="height: calc((100% - 51px) - 32px)">
      <el-table-column label="行号" header-align="center" align="center"
        type="index" :index="indexMethod">
      </el-table-column>
      <el-table-column prop="name" label="中文名" header-align="center">
      </el-table-column>
      <el-table-column prop="id" label="英文名" header-align="center">
      </el-table-column>
      <el-table-column prop="addr" label="备注" header-align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button @click="updateDict(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="delDict(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="dictFilter.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="dictFilter.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableDataTotal">
    </el-pagination>
  </section>
</template>
<script>
  import { dictList } from '../../mockApi/dict'
  export default {
    data () {
      return {
        tableData: [],
        tableDataTotal: 0,
        dictFilter: {
          dTitle: '',
          currentPage: 1,
          pageSize: 10
        }
      }
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        dictList(null).then((res) => {
          this.tableData = res.data.dicts.slice((this.dictFilter.currentPage - 1) * this.dictFilter.pageSize, this.dictFilter.currentPage * this.dictFilter.pageSize)
          this.tableDataTotal = res.data.dicts.length
        })
      },
      handleSizeChange (val) {
        this.dictFilter.pageSize = val
        this.fetchData()
      },
      handleCurrentChange (val) {
        this.dictFilter.currentPage = val
        this.fetchData()
      },
      indexMethod (index) {
        return index + 1 + (this.dictFilter.currentPage - 1) * this.dictFilter.pageSize
      },
      addDictType () {
        console.log('add')
      }
    }
  }
</script>
