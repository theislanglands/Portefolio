import React from 'react'
import NavigationComponent from '../components/navbar/NavigationComponent'
import { Outlet, Link } from "react-router-dom";




const Layout = () => {
  return (
    <div>
    <NavigationComponent></NavigationComponent>
    <Outlet />
    </div>
    
  );
}

export default Layout