/*
 * @Author: lihuazheng
 * @Date: 2021-01-08 19:38:03
 * @LastEditTime: 2021-01-12 22:22:38
 * @FilePath: \myblog-admin\service\app\controller\admin\main.js
 */
"use strict";

const Controller = require("egg").Controller;

class MainController extends Controller {
  async index() {
    //首页的文章列表数据
    this.ctx.body = "hi api";
  }

  async checkLogin() {
    let userName = this.ctx.request.body.userName;
    let password = this.ctx.request.body.password;
    const sql =
      " SELECT userName FROM admin WHERE userName = '" +
      userName +
      "' AND password = '" +
      password +
      "'";

    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      let openId = new Date().getTime();
      this.ctx.session.openId = { openId: openId };
      this.ctx.body = { data: 200, openId: openId };
    } else {
      this.ctx.body = { data: "登录失败" };
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.select("type");
    this.ctx.body = { data: resType };
  }
  async addArticle() {
    let tmpArticle = this.ctx.request.body;
    // tmpArticle.
    const result = await this.app.mysql.insert("article", tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId: insertId,
    };
  }
  async updateArticle() {
    let tmpArticle = this.ctx.request.body;

    const result = await this.app.mysql.update("article", tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    this.ctx.body = {
      isScuccess: updateSuccess,
    };
  }
  //获得文章列表
  async getArticleList() {
    let sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.addTime as addTime," +
      "article.lastEditTime as lastEditTime," +
      "article.view_count as view_count," +
      "type.typeName as typeName " +
      "FROM article LEFT JOIN type ON article.type_id = type.Id " +
      "ORDER BY article.id DESC ";

    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }
  async delArticle() {
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete("article", { id: id });
    this.ctx.body = { data: res };
  }
  async getArticleById() {
    let id = this.ctx.params.id;

    let sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.article_content as article_content," +
      "article.addTime as addTime," +
      "article.view_count as view_count ," +
      "type.typeName as typeName ," +
      "type.id as typeId " +
      "FROM article LEFT JOIN type ON article.type_id = type.Id " +
      "WHERE article.id=" +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
  async addDraft() {
    let tmpDraft = this.ctx.request.body;
    const result = await this.app.mysql.insert("draft", tmpDraft);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId: insertId,
    };
  }
  async getList() {
    let sql =
      "SELECT draft.id as id," +
      "draft.title as title," +
      "draft.article_content as article_content," +
      "draft.introduce as introduce," +
      "draft.editTime as editTime," +
      "type.typeName as typeName " +
      "FROM draft LEFT JOIN type ON draft.type_id = type.Id " +
      "ORDER BY draft.id DESC ";

    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }
  async delDraft() {
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete("draft", { id: id });
    this.ctx.body = { data: res };
  }
  async getDraftById() {
    let id = this.ctx.params.id;

    let sql =
      "SELECT draft.id as id," +
      "draft.title as title," +
      "draft.introduce as introduce," +
      "draft.article_content as article_content," +
      "draft.editTime as addTime," +
      "type.typeName as typeName ," +
      "type.id as typeId " +
      "FROM draft LEFT JOIN type ON draft.type_id = type.Id " +
      "WHERE draft.id=" +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
