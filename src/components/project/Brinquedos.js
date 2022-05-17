import Selectbrinquedos from '../form/Selectbrinquedos'
import img from '../../img/brinquedos.png'
import styles from './Alimentos.module.css'

function Brinquedos(){
    return(
        <div className={styles.container}>
        <h1>Brinquedos</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <p>Escolha as opções disponíveis:</p>
        <Selectbrinquedos />
        </div>
    )
}

export default Brinquedos