import React from 'react';
import imgProfile from '../../images/imgPerfil.png';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <div className={styles.text}>
          <h1>Oi, eu sou Nikolas!</h1>
          <h2>Desenvolvedor Front End.</h2>
        </div>
        <div className={styles.link}>
          {/* upload para guthub, copiar o link e trocar palavra blob por raw */}
          <a href='https://github.com/nikolassco/asset/raw/main/Curriculo%20Nikolas%20Oliveira.pdf' download='' className='btn-redirect'>Currículo</a>
        </div>
      </div>
      <img src={imgProfile} alt="Foto do Perfil" />
    </div>
  )
}

export default Home;
