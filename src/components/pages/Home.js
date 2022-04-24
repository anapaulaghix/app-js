import styles from './Home.module.css'
import template from '../../img/template.png'
import LinkButton from '../layout/Link.Button'
import fundo from '../../img/fundo.jpg'

function Home(){
    return (
        <section className={styles.home_container}>
            <img src={template} alt='template'></img>
            <h1>Bem-vindo ao <span>Solidariti</span></h1>
            <p>Escolha uma opção e seja um voluntário</p>
            <LinkButton to="/doar" text="Doar"></LinkButton>
            <LinkButton to="/receber" text="Receber"></LinkButton>
        </section>
    )
}

export default Home