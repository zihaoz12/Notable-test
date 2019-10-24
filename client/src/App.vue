<template>
    <el-container style="border: 1px solid #eee">
      <el-aside>
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>
              <a style="text-transform: uppercase;">Physicians</a>
            </template>
              <el-menu-item-group :data="doctors">           
                <el-menu-item prop="firstName">
                  </el-menu-item>          
              </el-menu-item-group> 
              <el-menu-item-group >           
                <router-link to="/appointments/list"><el-menu-item>Lists</el-menu-item></router-link>
                <router-link to="/appointments/create"><el-menu-item>Create</el-menu-item></router-link>              
              </el-menu-item-group>        
          </el-submenu>         
        </el-menu>
         <el-button type="primary">Log Out</el-button>
      </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">  
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>



<style>
  html, body{
    padding: 0;
    margin: 0;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background-color: rgb(238, 241, 246);
    width:"200px";
  }
</style>

<script>
  export default {
    date(){
      return {
        doctors:[
          {
            firstName:'Julius',
            lastName:'Hibbert',
            email:'Hibbert@notablehealth.com'
          },
          {
            firstName:'Algernp',
            lastName:'Krieger',
            email:'Krieger@notablehealth.com'
          },
          {
            firstName:'Nick',
            lastName:'Riviera',
            email:'Riviera@notablehealth.com'
          },
        ]
      };
    },
  }
</script>
