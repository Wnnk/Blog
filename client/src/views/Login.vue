<template>
    <div class="login">
         
        <div class="form">
            <h1>用户登录</h1>
                <el-form  label-width="80px">
            <el-form-item label="用户名">
                <el-input type="text" placeholder="admin" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" placeholder="123456" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
             <el-button type="primary" @click="login">立即登录</el-button>
            </el-form-item>
        </el-form>

        </div>
        
    </div>


</template>


<script>
import axios from "axios"
export default {
    data(){
        return{
            form: {
                username:"",
                password:"",
                
            }
        }
    },
    methods:{
        login(){
            axios.post("http://127.0.0.1:7001/login",this.form).then((res)=>{
                if(res.data.code === 201){
                    //将后端的token写入localStorage
                    localStorage.setItem("token",res.data.token);
                    //路由跳转首页
                    this.$router.push("/layout");
                }else{
                    this.login_error();
                }
            })
        },
        //登录失败
        login_error() {
        this.$message.error('错了哦，用户名不存在或密码错误');
      }
    }
    
}
</script>

<style >

.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height:500px;
}
.login h1{
    text-align: center;
}
</style>