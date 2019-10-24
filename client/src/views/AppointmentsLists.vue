<template>
    <div>
        <el-table :data="appointments">
          <el-table-column prop="index" label="#" width="140">
          </el-table-column>
          <el-table-column prop="firstName" label="Name" width="140">
          </el-table-column>
          <el-table-column prop="time" label="Time" width="120">
          </el-table-column>
          <el-table-column prop="kind" label="Kind">
          
            <template slot-scope="scope">
              <el-button @click="edit(scope.row._id)" type="text" size="small"> Edit</el-button>
              <el-button @click="remove(scope.row._id)" type="text" size="small"> Delete</el-button>
            </template>
          </el-table-column>
        </el-table>

      <!-- <el-form class="demo-form-inline">
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
      </el-form> -->
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        appointments:[]
      }
    },
    methods:{
      fetch(){
        this.$http.get('appointments').then(res=>{
          this.appointments = res.data;
        })
      },
      edit(){

      },
      remove(id){
          this.$http.delete(`appointments/${id}`).then(res=>{
            this.$message({
              message:"Successlly delete",
              type:"success"
            });
            this.fetch();
            window.console.log(res.data)
          });
          
      }
    },
    created(){
      this.fetch()
    }
  };
</script>