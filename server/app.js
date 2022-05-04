//app.js 创建表 同步数据库

module.exports = app => {
    //beforeStart egg的生命周期函数
    app.beforeStart(async function() {
        // 应用会等待这个函数执行完成才启动
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表
        await app.model.sync({});
    });
};