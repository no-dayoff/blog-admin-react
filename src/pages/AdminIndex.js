/*
 * @Author: lihuazheng
 * @Date: 2021-01-07 20:29:40
 * @LastEditTime: 2021-01-12 23:22:52
 * @FilePath: \myblog-admin\src\pages\AdminIndex.js
 */
import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "../static/AdminIndex.css";
import { Route } from "react-router-dom";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import ArticleDraft from './ArticleDraft'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleClickArticle = (e) => {
    if (e.key === "addArticle") {
      props.history.push("/index/add");
    } else {
      props.history.push("/index/list");
    }
  };
  const handleArticleDraft=(e) =>{
    if(e.key === "articleDraft"){
      props.history.push("/index/draft");

    }
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />

            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <UserOutlined />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>

          <Menu.Item key="articleDraft" onClick={handleArticleDraft}>
            <FileOutlined />
            <span>草稿箱</span>
          </Menu.Item>
          <Menu.Item key="loginOut">
          <LogoutOutlined />
            <span>退出登录</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <div>
              <Route path="/index/" exact component={AddArticle} />
              <Route path="/index/add/" exact component={AddArticle} />
              <Route path="/index/add/:id"  component={AddArticle} />
              <Route path="/index/list/" component={ArticleList} />
              <Route path="/index/draft/" component={ArticleDraft} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>github.com/no-dayoff</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;
