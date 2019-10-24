<template>
    <el-main>
      <el-table :data="appointment">
        <el-table-column prop="date" label="#" width="140">
        </el-table-column>
        <el-table-column prop="date" label="Time" width="140">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="address" label="Kind">
        </el-table-column>
      </el-table>

      <el-form class="demo-form-inline">
        <el-form-item >
            <el-input  placeholder="First name"></el-input>
            <el-input  placeholder="First name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-time-select
              v-model="value"
              :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
              }"
            placeholder="select time">
          </el-time-select>
        </el-form-item>
        <el-form-item >
          <el-select>
            <el-option label=" New Patient" value="New Patient"></el-option>
            <el-option label=" Follow Up" value="Follow Up"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-main>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(5).fill(item),
      }
    }
  };
</script>