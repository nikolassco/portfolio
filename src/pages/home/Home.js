import React from 'react';
import imgProfile from '../../images/imgPerfil.png';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.text}>
          <p>Oi, eu sou Nikolas!</p>
          <p>Desenvolvedor Front End.</p>
        </div>
        <div className={styles.link}>
          <a href='https://www.linkedin.com/in/nikolas-santa-clara-90619a16a/' className='btn-redirect'>Linkedin</a>
        </div>
      </div>
      <img src={imgProfile} alt="Foto do Perfil" />
    </div>
  )
}

export default Home;
