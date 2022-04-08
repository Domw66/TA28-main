import React from 'react'
import {NavLink,useRoutes,useInRouterContext} from 'react-router-dom'

// import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import routes from './routers'
export default function App() {
    console.log('路由上下文 被路由包裹',useInRouterContext())


  // 根据路由表生成对应的路由规则
  const routerList = useRoutes(routes)

  return (
    <div>
      <Header/>
      {routerList}
      <Footer/>
    </div>
  )
}
