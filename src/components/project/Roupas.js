import Select from '../form/Select'
import img from '../../img/roupas.jpg'
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