import styles from './Home.module.css'
import template from '../../img/template.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <div className={styles.home_container}>
            <img src={template} alt='template'></img>
            <p>O Solidariti quer espalhar nossa mensagem de esperança e compaixão. Acreditamos que uma única ação pode fazer a diferença na comunidade e que a ação coletiva pode impactar o mundo.
            "Bondade é a linguagem que os surdos conseguem ouvir e os cegos conseguem ver"</p>
            <h1>Escolha sua opção</h1>
            <LinkButton to="/Doar" text="Quero Doar"></LinkButton>
            <LinkButton to="/Receber" text="Quero Solicitar"></LinkButton>
            <label>INSTRUÇÕES DE COMO DOAR, RECEBER PRODUTOS E SE TORNAR CONTRIBUINTE!</label>
            <label>1. DOAR: Caso queira doar um produto, clique em Quero Doar e em qual produto você deseja. Depois, crie uma conta e selecione o ponto do mapa no contribuinte mais próximo, leve até o local em pelo menos 1 semana..</label>
            <label>2. RECEBER: Caso queira receber algum produto, clique em Quero Solicitar e em qual produto você deseja. Depois crie a conta e diremos se tal produto está doado ou ainda disponível. Caso esteja, busque no ponto do mapa mais próximo de você.</label>
            <label>3. CONTRIBUINTE: Caso queira ser contribuinte, clique em Quem Somos e se registre para aceitar doações e buscas de produtos simultaneamente, te orientaremos depois, fique tranquilo. Tenha um espaço para receber as doações.</label>
            <p>Lembrando que você não terá contato com seu doador, apenas com o contribuinte Solidariti! Somos uma Instuição!</p> 
            <p>Aceitamos alimentos, produtos, etc. Ajude como quiser. </p>
            <p>Abaixo está nosso pix para doar e nosso email para nos contatar.</p>
           </div>
    )
}
export default Home