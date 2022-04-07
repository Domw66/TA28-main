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
    <div className="footer">
    <div className='one mr-138'>
      <dl>
        <dt className='mt-38'>Your Account</dt>
        <dt className='mt-38'>Login</dt>
        <dt className='mt-38'>Sign up</dt>
        <dt className='mt-38'>Help</dt>
      </dl>
    </div>
    <div className='mr-138'>
      {/* <dl>
        <dt className='mt-38'>Company</dt>
        <dt className='mt-38'>Monash University</dt>
        <dt className='mt-38'>Contact Us</dt>
      </dl> */}
      <dl>
        <dt className='mt-38'>Company</dt>
        <dt className='mt-38'>Monash University</dt>
        <dt className='mt-38'>Contact Us</dt>
      </dl>
      
    </div>
    <div className='three'>
      <dl className='footer_btn'>
        <dt className='mt-38'>Our Website Designer</dt>
        <div className='btnArr mt-38'>
          <div className='ft_btn'>YW</div>
          <div className='ft_btn'>YL</div>
          <div className='ft_btn'>YX</div>
          <div className='ft_btn'>DW</div>
          <div className='ft_btn'>AP</div>
        </div>
      </dl>
    </div>


  </div>
  )
}

