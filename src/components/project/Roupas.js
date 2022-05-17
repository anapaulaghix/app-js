import Selectroupas from '../form/Selectroupas'
import img from '../../img/doacao-de-roupas.png'
import styles from './Alimentos.module.css'

function Roupas(){
    return(
        <div className={styles.container}>
        <h1>Roupas</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <p>Escolha as opções disponíveis:</p>
        <Selectroupas />
        </div>
    )
}

export default Roupas