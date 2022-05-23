import img from '../../img/Alimentos.png'
import styles from './Alimentos.module.css'
import Select from '../form/Select'

function Alimentos(){
    return(
        <div className={styles.container}>
        <h1>Alimentos</h1>
        <img className={styles.img} src={img} alt='logocomida'></img>
        <p>Escolha as opcões disponíveis (Pacotes de 1 a 10kg a unidade):</p>
        <Select />
        </div>
    )
}

export default Alimentos