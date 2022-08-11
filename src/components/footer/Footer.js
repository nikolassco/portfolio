import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>Portfolio Desenvolvido por <Link to="/about">Nikolas</Link> &copy; 2022</p>
      </footer>
    </div>
  )
}

export default Footer;
