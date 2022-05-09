import Select from '../form/Select'
import img from '../../img/moveis.jpg'
import styles from './Alimentos.module.css'


function Moveis(){
    return(
        <div className={styles.container}>
        <h1>Móveis</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <Select />
        </div>
    )
}

export default Moveis