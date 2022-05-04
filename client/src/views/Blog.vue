<template>
    <div class="blog">
          <el-button type="primary"  @click="createBlog">新建博客</el-button>

    
        <div class="list">
            <el-table
                :data="blogData"
                style="width: 100%">
                
                 <el-table-column label="封面">
                <template slot-scope="scope">
                    <img class="pic" :src="scope.row.img" alt="">
                </template>
                </el-table-column>



                 <el-table-column label="标题">
                <template slot-scope="scope">
                    <h1 class="title" >{{scope.row.blogTitle}}</h1>
                </template>
                </el-table-column>


                <el-table-column
                align="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="EditBlog(scope.row.id)">Edit</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="deleteBlog(scope.row)">Delete</el-button>
                </template>

                </el-table-column>
            </el-table>
        </div>
    
 


    </div>

</template>


<script>
import axios from 'axios';


export default {
   
    data(){
        return{
            blogData:[],
            
            
        }
    },
    methods:{
        createBlog() {
            this.$router.push("/blogdetail");
        },
        getBlog(){
            axios.get("http://127.0.0.1:7001/api/blog").then((res) =>{
                this.blogData = res.data.data;
            })
        },
        deleteBlog(row){
            this.$confirm(`确定删除${row.blogTitle}?`).then(() =>{
                axios.delete(`http://127.0.0.1:7001/api/blog/${row.id}`).then(()=>{
                    this.$message({
                        type:"success",
                        message:"删除完毕"
                    });
                    this.getBlog();
                })
            }).catch(()=>{
                this.$message({
                        type:"info",
                        message:"删除取消"
                    });
            })

            
        },
        EditBlog(id){
            this.$router.push(`/blogdetail/${id}`);
        }
    },
    created(){
       this.getBlog()
    }
}
</script>

<style>
 .list .pic{
    width: 100px;
    height: 100px;
 }
 .list .title{
    color: #404040;
    font-size: 18px;
 }
</style>