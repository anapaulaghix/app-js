import Select from '../form/Select'
import img from '../../img/Alimentos.png'
import styles from './Alimentos.module.css'

function Alimentos(){
    return(
        <div className={styles.container}>
        <h1>Alimentos</h1>
        <img className={styles.img} src={img} alt='logocomida'></img>
        <Select />
        </div>
    )
}

export default Alimentos