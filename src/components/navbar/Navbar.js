import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1><NavLink to="/">Portfolio</NavLink></h1>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : '')}>Projetos</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
