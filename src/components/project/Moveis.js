
import img from '../../img/pngwing.png'
import styles from './Alimentos.module.css'


function Moveis(){
    return(
        <div className={styles.container}>
        <h1>Móveis</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        </div>
    )
}

export default Moveis