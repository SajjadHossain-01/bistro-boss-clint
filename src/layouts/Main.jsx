import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import NavBar from '../pages/shared/Navbar/NavBar';
import useMenu from '../hooks/useMenu';

const Main = () => {
  const location =useLocation();
  const [,loading]=useMenu()
  const noHeaderFooter = location.pathname.includes('/login')|| location.pathname.includes('/signup')

  
    return (
        <div>
            {noHeaderFooter||<NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;