import React from 'react'
import SearchBar from './SearchBar';
import NavMenuList from './MenuList';
import style from './Navbar.module.scss';
import { createCss } from '@utils';
const css = createCss(style);

function Navbar() {
  return (
    <div className={css('navbar')}>
      <SearchBar />
      <NavMenuList />
    </div>
  );
}

export default Navbar;