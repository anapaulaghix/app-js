import styles from './Home.module.css'
import template from '../../img/template.png'

function Home(){
    return (
        <section>
            <img src={template} alt='template'></img>
            <h1>Bem-vindo ao <span>Solidariti</span></h1>
            <p>um mercado online solidário!</p>
            <a href="/">Doar</a>
            <a href="/">Receber</a>
        </section>
    )
}

export default Home