import {Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Activites from '../pages/Activites'
import ContactUs from '../pages/ContactUs'
import MyAccount from '../pages/MyAccount'
import Calendar from '../pages/Calendar'
import AboutUs from '../pages/AboutUs'
// 路由表
export default [
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/activites',
      element:<Activites/>
    },
    {
      path:'/contactUs',
      element:<ContactUs/>
    },
    {
      path:'/myAccount',
      element:<MyAccount/>
    },
    {
      path:'/calendar',
      element:<Calendar/>
    },
    {
      path:'/aboutus',
      element:<AboutUs/>
    },


    {
      path:'*',
      element:<Navigate to="/home" />
    },
  ]