<template>
    <el-form @submit.native.prevent=" saveAppointment" :model="appointment"  label-width="80px">
        <el-row>
        <el-col>
        <el-form-item class="input-container">
            <el-input  v-model="appointment.firstName" placeholder="First name"></el-input>
            <el-input  v-model="appointment.lastName" placeholder="Last name"></el-input>
        </el-form-item>
        </el-col>
        <el-col>
        <el-form-item>
          <el-time-select
              v-model="appointment.time"
              :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
              }"
            placeholder="select time">
          </el-time-select>
        </el-form-item>
        </el-col>
        <el-form-item >
          <el-select v-model="appointment.kind">
            <el-option label=" New Patient" value="New Patient"></el-option>
            <el-option label=" Follow Up" value="Follow Up"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">Submit</el-button>
        </el-form-item>
        </el-row>
      </el-form>
</template>

<script>
export default {
    data(){
        return{
            appointment:{
               
            }
        }
    },
    methods: {
        saveAppointment(){
          this.$http.post('appointments',this.appointment).then( res=>{
            this.$message({
              message: "Successfully Add New Appointment ",
              type: 'success'
            });
            this.$router.push('/appointments/list');
            window.console.log(res.data)
          })       
        }
    }
    
}
</script>

<style>
  
</style>
