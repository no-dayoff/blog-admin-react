/*
 * @Author: lihuazheng
 * @Date: 2021-01-08 20:25:01
 * @LastEditTime: 2021-01-12 23:17:10
 * @FilePath: \myblog-admin\service\app\middleware\adminauth.js
 */
module.exports = options =>{
  return async function adminauth(ctx,next){
    //   console.log(ctx.session.openId)
      if(ctx.session.openId){
          await next()
      }else{
          ctx.body={data:"没有登录"}
      }
  }
}