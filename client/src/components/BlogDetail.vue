<template>
    <div class="blogDetail"> 

        <div class="cover">
             <span class="cover_cover">封面</span>
            <el-upload
                :action="getUploadUrl()"
                list-type="picture-card"
                :on-preview="handleSuccess"
                :on-remove="handleRemove"
                :limit=1
                :on-success="handleSuccess"
                :file-list="fileList"
            >
                <i class="el-icon-plus"></i>
            </el-upload>
            
        </div>


        <div class="title">
            <el-input v-model="blogTitle" placeholder="标题"></el-input>
        </div>
        <mavon-editor 
        style="height: 100%"
        v-model="mdText">
        </mavon-editor>
        <el-button type="success"  @click="save()">提交</el-button>
    </div>
</template>


<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
export default {
    components:{
        mavonEditor
    },
    data(){
        return{
            blogTitle:"",
            mdText:"",
            img:"",
            htmlText: "",
            fileList: [],
        }
    },
    methods:{
        getUploadUrl(){
            return `http://127.0.0.1:7001/api/upload`

        },
        save(){
            if(this.id){
                console.log("更新")
            }else{
                this.createBlog();
            }
        },
        createBlog(){
            axios.post("http://127.0.0.1:7001/api/blog",{data:{
                img:this.img,
                blogTitle:this.blogTitle,
                mdText:this.mdText,
                htmlText:this.htmlText,
                }}).then((res)=>{
                    this.$router.push("/blog");
                    console.log(res);
                })
        },
        handleRemove(file, fileList) {
            console.log(file);
            console.log(fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleSuccess(response, file, fileList) {
            console.log(file);
            console.log(fileList);
            this.img = response.data.file;
        }
        
        
    },
    created(){
        if(this.id){
            axios.get(`http://127.0.0.1:7001/api/blog/${this.id}`).then((res) =>{
                let blog = res.data.data;
                this.blogTitle = res.data.data.blogTitle;
                this.fileList =[{url:blog.img}];
                this.img = blog.img;
                this.md_text = blog.md_text;
                this.html_text = blog.html_text;
            })
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        }
        
    }
}
</script>



<style>

</style>