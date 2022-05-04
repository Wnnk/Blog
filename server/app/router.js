'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //admin登录
  router.post("/login",controller.admin.login);
  //查找user列表
  router.resources("user","/user",controller.admin);
  //测试
  router.resources("test","/test",controller.test);
<<<<<<< HEAD
=======
  //blog功能
  router.resources("blog","/api/blog",controller.blog);
  //上传图片
  router.post("/api/upload",controller.upload.index);
>>>>>>> d6801fe (create and delete)
};
