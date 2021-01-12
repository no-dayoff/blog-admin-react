/*
 * @Author: lihuazheng
 * @Date: 2021-01-10 17:45:23
 * @LastEditTime: 2021-01-12 22:19:39
 * @FilePath: \myblog-admin\src\config\apiUrl.js
 */
let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
   checkLogin : ipUrl+'checkLogin', //登录
   getTypeInfo : ipUrl+'getTypeInfo',//获得文章类型
   addArticle:ipUrl + 'addArticle' ,  //  添加文章
   updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
   getArticleList:ipUrl + 'getArticleList' ,  //  文章列表
   delArticle:ipUrl + 'delArticle/' ,  //  删除文章
   getArticleById:ipUrl + 'getArticleById/' ,  //  根据ID获得文章详情
   addDraft:ipUrl + 'addDraft' ,  //  根据ID获得文章详情
   getList:ipUrl + 'getList' ,  //  获得草稿列表
   delDraft:ipUrl + 'delDraft/' ,  //删除草稿
   getDraftById:ipUrl + 'getDraftById/' ,  //  根据ID获得草稿详情

}
export default servicePath