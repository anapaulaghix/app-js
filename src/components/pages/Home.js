import styles from './Home.module.css'
import template from '../../img/template.png'
import LinkButton from '../layout/Link.Button'

function Home(){
    return (
        <section className={styles.home_container}>
            <img src={template} alt='template'></img>
            <LinkButton to="/doar" text=" Quero Doar"></LinkButton>
            <LinkButton to="/receber" text="Quero Receber"></LinkButton>
        </section>
    )
}

export default Home