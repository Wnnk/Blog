/* eslint valid-jsdoc: "off" */
const fs = require("fs");
const path = require("path");

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1569042874002_5024';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };


    config.jwt = {
        secret: "wangjianqiang"
    };
    config.sequelize = {
        dialect: 'mysql',
        database: 'adminsql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        timezone: '+08:00',
    }

    //设置上传文件
<<<<<<< HEAD
    // config.multipart = {
    //     fileSize: 300 * 1000 * 1000 //设置上传限制为300M
    // }
=======
    config.multipart = {
        fileSize: 300 * 1000 * 1000 //设置上传限制为300M
    }
>>>>>>> d6801fe (create and delete)


    config.security = {
        csrf: {
            enable: false, // 前后端分离，post请求不方便携带_csrf
        },
        domainWhiteList: [
            '*',
        ], //配置白名单
    };

    config.cors = {
        origin: "*", //允许所有跨域访问，注释掉则允许上面 白名单 访问
        credentials: true, // 允许跨域请求携带cookies
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    config.view = {
        defaultViewEngine: 'nunjucks'
    }

    //设置静态文件目录
<<<<<<< HEAD
    // config.static = {
    //     prefix: '/', //访问路径
    //     dir: path.join(appInfo.baseDir, 'app/public'), //设置静态文件目录
    // };
=======
    config.static = {
        prefix: '/', //访问路径
        dir: path.join(appInfo.baseDir, 'app/public'), //设置静态文件目录
    };
>>>>>>> d6801fe (create and delete)

    return {
        ...config,
        ...userConfig,
    };
};