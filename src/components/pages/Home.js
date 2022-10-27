import styles from './Home.module.css'
import templatex from '../../img/templatex.png'
import templatefooter from '../../img/templatefooter.png'
import LinkButton from '../layout/LinkButton'
import React from 'react'

function Home(){
    return (
        <div className={styles.home_container}>
           <img alt='template' src={templatex}></img>
           <br/>
           <b> O Solidariti quer espalhar nossa mensagem de esperança e compaixão. Acreditamos que uma única ação pode fazer a diferença na comunidade e que a ação coletiva pode impactar o mundo.
            "Bondade é a linguagem que os surdos conseguem ouvir e os cegos conseguem ver"
            Abaixo está as intruções de como ajudar nosso mercado solidário
            </b>
            <section>
            <b>Abaixo está as instruções de como usar o nosso mercado solidário</b>
            <label>INSTRUÇÕES DE COMO DOAR, RECEBER PRODUTOS E SE TORNAR CONTRIBUINTE!</label>
            <label>1. DOAR: Caso queira doar um produto, clique em Quero Doar e em qual produto você deseja. Depois, crie uma conta e selecione o ponto do mapa no contribuinte mais próximo, leve até o local em pelo menos 1 semana..</label>
            <label>2. AJUDANTES: Caso queira receber algum produto, clique em Quero Solicitar e em qual produto você deseja. Depois crie a conta e diremos se tal produto está doado ou ainda disponível. Caso esteja, busque no ponto do mapa mais próximo de você.</label>
            <label>3. QUERO SER CONTRIBUINTE: Caso queira ser contribuinte, clique em Quero ser ajudante e se registre para aceitar doações e buscas de produtos simultaneamente, te orientaremos depois, fique tranquilo. Tenha um espaço físico para receber as doações.</label>
            </section>
            <h1>Escolha sua opção</h1>
            <LinkButton to="/Doar" text="Quero doar"></LinkButton>
            <LinkButton to="/Receber" text="Ajudantes"></LinkButton>
            <LinkButton to="Company" text="Quero ser ajudante"></LinkButton>
            <img src={templatefooter} alt="footer"></img>
            <br></br>
           </div>
    )
}
export default Home