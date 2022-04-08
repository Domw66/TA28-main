import React from 'react'
import {Navigate,NavLink,Outlet,useOutlet} from 'react-router-dom'

export default function Home() {
  console.log('@@@',useOutlet())
  // const [sum,setSum] = React.useState(1)
  return (
    <div>
      <span>text内容</span>
      <Outlet />
    </div>
  )
}
