import Select from '../form/Select'
import img from '../../img/higiene.png'
import styles from './Alimentos.module.css'


function Higiene(){
    return(
        <div className={styles.container}>
        <h1>Higiene</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <Select />
        </div>
    )
}

export default Higiene