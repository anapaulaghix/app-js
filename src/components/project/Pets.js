import img from '../../img/pets.png'
import styles from './Alimentos.module.css'


function Pets(){
    return(
        <div className={styles.container}>
        <h1>Pets</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        </div>
    )
}

export default Pets