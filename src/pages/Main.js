/*
 * @Author: lihuazheng
 * @Date: 2021-01-10 17:43:28
 * @LastEditTime: 2021-01-12 15:35:47
 * @FilePath: \myblog-admin\src\Pages\Main.js
 */
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
function Main(){
  return(
    <Router>
      <Route path="/"  exact component={Login} />
      <Route path="/index/"  component={AdminIndex} />
    </Router>
  )
}
export default Main