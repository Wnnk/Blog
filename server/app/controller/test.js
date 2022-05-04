//测试 CURD页面
const { Controller } = require("egg");

class TestController extends Controller{
    async index(){
        let username = this.ctx.request.query.username
        let userList = await this.app.model.User.findAll({
            where:{
                username:username,
            }
        }
            
        );
        this.ctx.body = userList;
    }

    async create(){
        let username = this.ctx.request.body.username;
        await this.app.model.User.create({
            username:username
        })
        this.ctx.body = "添加成功"
    }

    async destroy(){

    }

    async update(){
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        let id = this.ctx.params.id;
        await this.app.model.User.update({username:username,password:password},{
            where:{
                id:id
            }
        })
        this.ctx.body ="更新成功"
    }
}
module.exports = TestController;