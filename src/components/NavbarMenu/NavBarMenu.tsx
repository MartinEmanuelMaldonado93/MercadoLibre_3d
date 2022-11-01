import React from 'react'
import SearchBar from './SearchBar'; 
import NavMenuList from '../Asides/AsideMenu';
import './NavBarMenu';

function NavBarMenu() {
  return (
    <div className='navbar-menu'>
        <SearchBar/>
        <NavMenuList/>
    </div>
  );
}

export default NavBarMenu;