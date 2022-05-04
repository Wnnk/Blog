const Service = require('egg').Service;




class UserService extends Service {
    async getUser(){
        try {
            let userList = await this.app.model.User.findAll({
            });
            return userList;
        } catch (error) {
            return null;
        }
        
    }

//数据库对比用户名，密码，签发token
    async login(username,password){
        try {
            //findOne 返回找到的第一个对象
            //findAll 返回一个数组，包含符合条件的多个对象
            //this.app.model.xxx    model下的文件不可大写与return的service重名
            const checkUser =  await this.app.model.User.findOne({
                where:{
                    username:username
                }
            })
            
            
            if(checkUser.username === username && checkUser.password === password){
                const token = this.app.jwt.sign({
                    username:username
                },this.app.config.jwt.secret);
                return token;
            }
            return token
        } catch (error) {
            return false;
        } 
    }
    
    
// 更新用户名与密码
    async update(id,username,password){
        try {
            await this.app.model.User.update({username:username,password:password},{
                where:{
                    id:id
                }
            });
            return true;
        } catch (error) {
            return false;
        }
    }

// 创建新用户
    async create(username,password){
        try {
            await this.app.model.User.create({
                username:username,
                password:password,
            })
            return true;
        } catch (error){
            return false;
        }
    }    

//删除用户
    async destroy(id){
        try {
            await this.app.model.User.destroy({
                where:{
                    id:id,
                }
            })
            return true;
        } catch (error) {
            return false;
        }
    }

   /* 测试使用
   async login(username,password){
        if(username ==="admin" && password != null){
            const token = this.app.jwt.sign({
                username:username,
            },this.app.config.jwt.secret);
            return token;
        }else{
            return false;
        }
    }   */

}
module.exports = UserService;