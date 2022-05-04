//操作SQL 创建数据库表


module.exports = app =>{
    //const 数据的类型 
    const {STRING} = app.Sequelize;
    //创建table，table名会自动+s，且id会 auto
    const User = app.model.define("usertable",{
        username:STRING,
        password:STRING,
    });
    return User;
}