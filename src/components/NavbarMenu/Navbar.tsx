import React from 'react'
import SearchBar from './SearchBar';
import NavMenuList from './MenuList';
import './Navbar';

function Navbar() {
  return (
    <div className='navbar'>
      <SearchBar />
      <NavMenuList />
    </div>
  );
}

export default Navbar;