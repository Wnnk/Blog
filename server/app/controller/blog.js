'use strict';
const Controller = require("egg").Controller

class BlogController extends Controller{
    async create(){
        try {
            const body = await this.ctx.request.body.data;
            
            const createblog = await this.ctx.service.blog.create(body);
            if(createblog){
                this.ctx.body ={
                    code:201,
                    msg:"创建博客成功",         
                }
            }else{
                this.ctx.body={
                    code:401,
                    msg:"创建失败",
                }
            }
            
        } catch (error) {
            this.ctx.body ={
                code:501,
                msg:`错误信息:${error}`
            }
        }
    }



    async index(){
        try {
           let blogList = await this.ctx.service.blog.getBlog();
           if(blogList){
            this.ctx.body ={
                code:201,
                msg:"获取成功",
                data:blogList,       
            }
           }else{
            this.ctx.body ={
                code:301,
                msg:"获取失败",     
            } 
           }  
        } catch (error) {
            this.ctx.body ={
                code:501,
                msg:`错误信息:${error}`
            }
        }
    }


    async destroy(){
        try {
            let id =this.ctx.params.id;
            console.log(id)
            let destroyBlog = this.ctx.service.blog.destroy(id);
            if(destroyBlog){
                this.ctx.body ={
                    code:201,
                    msg:"删除成功",       
                }
               }else{
                this.ctx.body ={
                    code:301,
                    msg:"删除失败",     
                } 
                
            }
        } catch (error) {
                this.ctx.body ={
                    code:501,
                    msg:`错误信息:${error}`
                }
        }
    }
}

module.exports =  BlogController;