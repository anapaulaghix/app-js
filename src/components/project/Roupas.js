import Select from '../form/Select'
import img from '../../img/doacao-de-roupas.png'
import styles from './Alimentos.module.css'

function Roupas(){
    return(
        <div className={styles.container}>
        <h1>Roupas</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <Select />
        </div>
    )
}

export default Roupas