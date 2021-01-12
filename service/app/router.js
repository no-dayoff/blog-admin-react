/*
 * @Author: lihuazheng
 * @Date: 2021-01-07 10:19:16
 * @LastEditTime: 2021-01-07 12:15:17
 * @FilePath: \blog-react\blog\service\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/list', controller.home.list);
  require('./router/default')(app)
  require('./router/admin')(app)
};
