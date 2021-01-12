/*
 * @Author: lihuazheng
 * @Date: 2021-01-11 14:32:25
 * @LastEditTime: 2021-01-12 22:38:26
 * @FilePath: \myblog-admin\src\pages\ArticleDraft.js
 */
import React,{useEffect,useState} from 'react';
import { Table, Tag, Space,Button ,message,Modal} from 'antd';
import axios from 'axios'
import servicePath from '../config/apiUrl'
const { confirm } = Modal;
function ArticleDraft(props){
  const [List, setList] = useState([]); 
  useEffect(()=>{
      getDraft()
  },[])
  const getDraft=()=>{
    axios({
      url:servicePath.getList,
      method:"get",
      header: { "Access-Control-Allow-Origin": "*" },
      withCredentials:true,
    }).then(res=>{
      let arr=res.data.list
      arr.forEach((value , index) => {
        value['key'] = index
      })
      //防止出现警告 给他们加一个唯一的KEY值
      setList(arr)
    })
  }
  const updateArticle = (id) => {
    props.history.push("/index/add/" + id);
  };
  const delDraft = (id) => {
    confirm({
      title: "确定要删除这篇草稿吗?",
      content: "删除后草稿无法恢复，请谨慎选择",
      onOk() {
        axios(servicePath.delDraft + id, { withCredentials: true }).then(
          (res) => {
            message.success("草稿删除成功");
            getDraft()
          }
        );
      },
      onCancel() {
        message.success("没有任何改变");
      },
    });
  };
  const columns = [
    {
      title: '文章标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '上次编辑时间',
      dataIndex: 'editTime',
      key: 'editTime',
      render: typeName => <span>{new Date(typeName).toLocaleString()} </span>
    },
    {
      title: '文章类型',
      key: 'typeName',
      dataIndex: 'typeName',
      render: tag =><Tag color={'volcano'}  key={tag}>{tag} </Tag>
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
       

        <Space size="middle">
          <Button
                  type="primary"
                  onClick={() => {
                    updateArticle(text.id);
                  }}
                  >
                  编辑
                </Button>
          
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    delDraft(text.id);
                  }}
                  >
                  删除
                </Button>
        </Space>
                  
        
      ),
    },
  ];

    return (
      <div>
        <Table columns={columns} dataSource={List} />
      </div>
    )
 
}
export default ArticleDraft;