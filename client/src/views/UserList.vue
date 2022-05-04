<template>
  <div class="UserList">
          <el-button type="primary" @click="createUser()">添加用户</el-button>
          
    <el-table
      :data="userList"
      border
      style="width: 100%"
      
    >
      <el-table-column
        prop="id"
        label="ID"
        >
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        >
      </el-table-column>

      <el-table-column
        prop="password"
        label="密码"
        >
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button @click="restUser(scope.row.id,scope.row.username,scope.row.password)" type="text" size="small">重新设置用户</el-button>
          <el-button type="text" size="small" @click="delUser(scope.row.id,scope.row.username)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

      <!--重设框-->
      <!--:visible 惯用vue的对话框的属性绑定，sync是同步双向动态，采用vue的双向绑定原理-->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"   
        width="30%"
      >
        <!--添加与更新用户表格-->
        <el-form>
          <el-form-item label="用户名">
          <el-input v-model="newUsername"></el-input>
          </el-form-item>

          <el-form-item label="密码">
          <el-input v-model="newPassword"></el-input>
          </el-form-item>
        </el-form>  
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="Save()">确 定</el-button>
        </span>
      </el-dialog>

  </div>
</template>

<script>
import axios from 'axios'
export default {
     data() {
      return {
          userList:[],
          dialogVisible: false,  //对话框绑定
          newUsername:"",
          newPassword:"",
          updateId:0, 
          isEdit:false, //！！！用于区分用户的添加与更改操作
          
          

      }
    },
    methods:{
        //获取用户列表
        getUserList(){
            axios.get("http://127.0.0.1:7001/user").then((res) =>{
                this.userList = res.data.data;
            });
<<<<<<< HEAD
=======
            
>>>>>>> d6801fe (create and delete)
        },
        //重新设置用户对话框
         restUser(id,username,password){
           if(id === 1 || username === "admin"){
              this.$alert("根用户无法重新设置");
           }else{
              this.dialogVisible =true;
              this.updateId = id;
              this.isEdit = true;
              //显示用户旧名字与密码
              this.newUsername =username;
              this.newPassword = password;

           }
        },
        //确定重新设置用户
        Save(){
          if(this.isEdit){
            //更改操作
            axios.put(`http://127.0.0.1:7001/user/${this.updateId}`,{
              username:this.newUsername,
              password:this.newPassword,
            }).then(()=>{
              this.getUserList();
              this.dialogVisible = false;
            })
          }else{
            //添加用户操作
            axios.post(`http://127.0.0.1:7001/user`,{
              username:this.newUsername,
              password:this.newPassword,
            }).then(() =>{
              this.getUserList();
              this.dialogVisible = false;
            })

          }
            
        },
        //添加用户
        createUser(){
          this.dialogVisible = true;
          this.newUsername = "";
          this.newPassword = "";
          this.isEdit = false;
        },
        //删除用户*
        delUser(id,username){
          if(id === 1 || username === "admin"){
            this.$alert("根用户无法删除");
          }else{
            this.$confirm("用户将永久删除,无法撤回，是否继续?", "提示",{
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning",
            }).then(()=>{
              //删除请求
              axios.delete(`http://127.0.0.1:7001/user/${id}`).then(()=>{
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
                this.getUserList();
              });
            }).catch(()=>{
               this.$message({
                  type: "info",
                  message: "删除取消!",
                });
            })
          }
          
        }
    },
      created(){
        //初始化数据库用户列表
        this.getUserList();
<<<<<<< HEAD
        
=======
        console.log(this.userList);
>>>>>>> d6801fe (create and delete)
    },
}
</script>

<style>

</style>