'use strict';

const Controller = require("egg").Controller;
const fs = require("fs");//读写模块
const path = require('path')//路径模块
const pump = require('mz-modules/pump')//目录操作

class UploadController extends Controller{
    async index(){
        //getFileStream上传单个文件语法糖
        const stream = await this.ctx.getFileStream();
        //path.extname 返回文件扩展名，若无扩展名则返回"."
        //命名储存的文件
        const filename = new Date().getTime() + path.extname(stream.filename).toLowerCase();
        //path.join接受参数，形成最终路径: baseDir路径:'app/public'
        //最终路径 "app/public/uploads"
        const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
        //写入文件
        const writeStream = fs.createWriteStream(target);
        // 读取文件 && 写入 && 销毁当前流
        await pump(stream, writeStream);
        this.ctx.body = {
            code: 201,
            data: {
                name: filename,
                 file: `http://127.0.0.1:7001/uploads/${filename}`  //临时服务器地址
            }
        }
        console.log(this.ctx.body)
    
    }
}


module.exports = UploadController