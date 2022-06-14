import styles from './Home.module.css'
import template from '../../img/template.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <img src={template} alt='template'></img>
            <p>O Solidariti quer espalhar nossa mensagem de esperança e compaixão. Acreditamos que uma única ação pode fazer a diferença na comunidade e que a ação coletiva pode impactar o mundo.
            "Bondade é a linguagem que os surdos conseguem ouvir e os cegos conseguem ver"</p>
            <h1>Escolha sua opção</h1>
            <LinkButton to="/Doar" text="Quero Doar"></LinkButton>
            <LinkButton to="/Receber" text="Quero Receber"></LinkButton>
            <p>Lembrando que você não terá contato com seu doador! Somos uma Instuição!</p> 
            <p>Você deve levar sua doação ou buscar o que escolheu receber na instituição mais próxima de você.</p>
            <p>Aceitamos alimentos, produtos, etc. Ajude como quiser. </p> 
        </section>
    )
}

export default Home