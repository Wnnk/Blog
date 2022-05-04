'use strict';

// 判断用户是否拥有token，对前端的request请求返回信息

const Controller = require('egg').Controller;

class AdminController extends Controller {

    async login(){
        
        try {
            
            const body = this.ctx.request.body;
            
            //获取签发的token
            const token = await this.ctx.service.user.login(body.username,body.password);
            //console.log(body);
            //根据token判断用户是否已经登录
            if(token){
                this.ctx.body = {
                    code:201,
                    message:true,
                    token:token,
                }
            }else {
                this.ctx.body = {
                    code:301,
                    message:'token不存在',
                    
                }
            }
        } catch (error) {
            this.ctx.body ={
                code:501,
                message:`异常错误:${error}`,
            }
        }
    }

    async index(){   
        try {
            let list = await this.ctx.service.user.getUser();
            if(list){
                this.ctx.body = {
                    code:201,
                    data:list
                }
            }else{
                this.ctx.body ={
                    code:501,
                    msg:"获取数据失败",
                }
            }
        } catch (error) {
                this.ctx.body ={
                    code:501,
                    msg:`${error}`
                }  
        }
    }

    async update(){
        try {
            let body = this.ctx.request.body;
            let id = this.ctx.params.id;
            let updateUser = await this.ctx.service.user.update(id,body.username,body.password);
            if(updateUser){
                this.ctx.body ={
                    code:201,
                    msg:"更新成功"

                }
            }else{
                this.ctx.body ={
                    code:501,
                    msg:`更新用户失败`
                }
            }
        } catch (error) {
                this.ctx.body ={
                    code:501,
                    msg:`服务器异常:${error}`
                }
        }

    }

    async create(){
        try {
            let body = this.ctx.request.body;
            let createUser = await this.ctx.service.user.create(body.username,body.password);
            console.log(body);
            if(createUser){
                this.ctx.body = {
                    code:201,
                    msg:"创造新用户成功"
                }
            }else{
                this.ctx.body = {
                    code:501,
                    msg:"创造新用户失败"
                } 
            }
        } catch (error) {
                this.ctx.body ={
                    code:501,
                    msg:`服务器异常:${error}`
                }
        }
    }

    async destroy(){
        try {
            let id =this.ctx.params.id;
            let destroyUser = await this.ctx.service.user.destroy(id);
            if(destroyUser){
                this.ctx.body = {
                    code:201,
                    msg:"删除用户成功"
                }
            }else{
                this.ctx.body= {
                    code:501,
                    msg:`删除失败`
                }
            }
        } catch (error) {
            this.ctx.body= {
                code:501,
                msg:`服务器异常:${error}`
            }
        }
    }
}

module.exports = AdminController;
