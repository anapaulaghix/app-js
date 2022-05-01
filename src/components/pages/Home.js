import styles from './Home.module.css'
import template from '../../img/template.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <img src={template} alt='template'></img>
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