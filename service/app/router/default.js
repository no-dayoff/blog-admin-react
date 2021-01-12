/*
 * @Author: lihuazheng
 * @Date: 2021-01-07 12:11:08
 * @LastEditTime: 2021-01-12 19:26:52
 * @FilePath: \myblog-admin\service\app\router\default.js
 */
module.exports=app=>{
  const{router,controller}=app
  router.get('/default/index',controller.default.home.index)
  router.get('/default/getArticleList',controller.default.home.getArticleList)
  router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
}