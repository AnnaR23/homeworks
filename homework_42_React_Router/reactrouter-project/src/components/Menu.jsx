import React from 'react';
import { Link, NavLink } from 'react-router';

const Menu = () => {
  return (
    <div>
      <ul className="menu">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu