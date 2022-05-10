import Select from '../form/Select'
import img from '../../img/brinquedo.jpg'
import styles from './Brinquedos.module.css'

function Brinquedos(){
    return(
        <div className={styles.container}>
        <h1>Brinquedos</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <Select />
        </div>
    )
}

export default Brinquedos