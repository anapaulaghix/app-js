import img from '../../img/Alimentos.png'
import styles from './Alimentos.module.css'
import Checks from '../form/Checks'

function Alimentos(){
    return(
        <div className={styles.container}>
        <h1>Alimentos</h1>
        <img className={styles.img} src={img} alt='logocomida'></img>
        <Checks />
        </div>
    )
}

export default Alimentos