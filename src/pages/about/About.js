import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>Sobre mim</h1>
      <div className={styles.text}>
        <p>Meu nome é Nikolas Oliveira e eu sou uma pessoa apaixonada por tecnologia e decidi trilhar o caminho da programação. Focado em Desenvolvimento Web. Aprendi com projetos em cursos envolvendo CRUD, APIs e banco de dados. E no meus projetos pessoais resolvi focar nas tecnologias voltadas ao FrontEnd. <br />
          Hoje já entendo tecnologias como ReactJS, Bootstrap, mas também tenho conhecimento de NodeJS, MongoDB, Mysql e busco a cada dia aprender e evoluir mais.</p>
        <p>Frase de efeito retirada do filme <q>À Procura da Felicidade</q>, que me descreve.<br /><q>Posso dizer uma coisa? Hm, eu sou o tipo de pessoa que, se você me fizer uma pergunta e eu não souber a resposta, eu vou te dizer que eu não sei. Mas eu vou apostar com você que eu sei como encontrar a resposta e eu vou encontra-lá.</q></p>
      </div>
    </div>
  )
}

export default About;
