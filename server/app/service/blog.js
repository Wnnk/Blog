const Service  = require('egg').Service;

class BlogService extends Service{
    //创建博客
    async create({img,mdText,htmlText,blogTitle}){
        try {
            await this.app.model.Blog.create({
                img:img,
                mdText:mdText,
                htmlText:htmlText,
                blogTitle,blogTitle,
            })
            return true;
        } catch (error) {
            return `${error}`;
        }
    }


    async getBlog(){
        try {
           let blogList = await this.app.model.Blog.findAll({
               limit:10
           })
            return blogList
        } catch (error) {
            return `${error}`
        }
    }

    async destroy(id){
        try {
            await this.app.model.Blog.destroy({
                where:{
                    id,
                }
            })
            return true
        } catch (error) {
            return `${error}`
        }
    }
}

module.exports = BlogService

