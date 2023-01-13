import React from 'react'
import NavigationComponent from '../components/navbar/NavigationComponent'
import { Outlet} from "react-router-dom";




const Layout = () => {
  return (
    <div className="App">
    <NavigationComponent></NavigationComponent>
    <Outlet />
    </div>
  );
}

export default Layout