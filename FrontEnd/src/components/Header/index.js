import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate, NavLink, Outlet, useOutlet, Link, useLocation } from 'react-router-dom'
import './index.css'


export default function Header() {
  const { pathname } = useLocation()

  const navigate = useNavigate()
  function back() {
    navigate(-1)
  }
  function go() {
    navigate(1)
  }
  return (
    <div className='isHeader'>

      <div className='isHeader_left'>
        <div className='isLogo'></div>
        <div className='LoginName'>Gathero</div>
      </div>
      <div className='isHeader_right'>
        <NavLink className={({ isActive }) => { return pathname === '/home' ? 'isActive' : 'isHeader_right_menu' }} to="/home">Home</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/activites' ? 'isActive' : 'isHeader_right_menu' }} to="/activites">Activites</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/calendar' ? 'isActive' : 'isHeader_right_menu' }} to="/calendar">Calendar</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/myAccount' ? 'isActive' : 'isHeader_right_menu' }} to="/myAccount">My account</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/contactUs' ? 'isActive' : 'isHeader_right_menu' }} to="/contactUs">Contact us</NavLink>
        <NavLink className={({ isActive }) => { return pathname === '/aboutus' ? 'isActive' : 'isHeader_right_menu' }} to="/aboutus">About us</NavLink>
        <div className='isHeader_right_btn'>Sing up</div>
      </div>


      <Outlet />


    </div>
  )
}

