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
      <el-table-column prop="cName" label="中文名" header-align="center">
      </el-table-column>
      <el-table-column prop="eName" label="英文名" header-align="center">
      </el-table-column>
      <el-table-column prop="remark" label="备注" header-align="center" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" header-align="center" align="center">
        <template slot-scope="scope">
          <el-button @click="updateDictType(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="delDictType(scope.row.id)" type="text" size="small">删除</el-button>
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
    <!--新增/修改字典类型dialog-->
    <el-dialog title="修改字典类型" :visible.sync="dictTypeDialogVisible" :close-on-click-modal="false" width="30%">
      <el-form :model="dictTypeForm" :rules="dictTypeRules" ref="dictTypeForm" label-width="80px">
        <el-form-item label="中文名" prop="cName">
          <el-input v-model="dictTypeForm.cName"></el-input>
        </el-form-item>
        <el-form-item label="英文名" prop="eName">
          <el-input v-model="dictTypeForm.eName"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="dictTypeForm.remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dictTypeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveDictType">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
  import { dictList } from '../../mockApi/dictType'
  export default {
    data () {
      return {
        tableData: [],
        tableDataTotal: 0,
        dictFilter: {
          dTitle: '',
          currentPage: 1,
          pageSize: 10
        },
        dictTypeDialogVisible: false,
        dictTypeForm: {
          id: null,
          cName: '',
          eName: '',
          remark: ''
        },
        dictTypeRules: {
          cName: [
            { required: true, message: '请输入中文名' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符' }
          ],
          eName: [
            { required: true, message: '请输入英文名' },
            { min: 1, max: 30, message: '长度在 1 到 30 个字符' }
          ],
          remark: [
            { min: 1, max: 40, message: '长度在 1 到 40 个字符' }
          ]
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
        this.dictTypeDialogVisible = true
        this.$nextTick(function () {
          this.$refs['dictTypeForm'].resetFields()
        })
      },
      updateDictType (row) {
        this.dictTypeDialogVisible = true
        this.$nextTick(function () {
          this.$refs['dictTypeForm'].resetFields()
          this.dictTypeForm = row
        })
      },
      saveDictType () {
        this.dictTypeDialogVisible = false
      },
      delDictType (id) {
        let me = this
        me.$confirm('你确定要删除该字典类型吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
//          api.delDict({id: id}, function (data) {
//            me.fetchData()
//            // 更新store中的字典数据
//            me.$store.commit('getAllDict')
//          })
        }).catch(() => {
          me.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
