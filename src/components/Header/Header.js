import React from 'react';
import  hd from './header.module.css';

import {NavLink} from 'react-router-dom'
import logo from '../assets/img/logo.png'

function Header(props) {
  return (
    <header className={hd.header}>
    	<div className={hd.container}>
    		<span className={hd.logo}>
    			<img src={logo} />
		        <NavLink to={location => ({ ...location, pathname: "/search" })} activeClassName={hd.active}>
		        		Поиск
		        </NavLink>
		        <NavLink to={location => ({ ...location, pathname: "/favorites" })} activeClassName={hd.active}>
		        		Избранное
		        </NavLink>      			
    		</span>
            <button onClick={() => {
                localStorage.clear()
                props.logout(false)
            }}>Выйти</button>
    	</div>   	
    </header>
  )
}


export default Header;