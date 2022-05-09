import styles from './Doar.module.css'
import Alimentos from '../project/Alimentos'
import Roupas from '../project/Roupas'
import Higiene from '../project/Higiene'
import Brinquedos from '../project/Brinquedos'
import Moveis from '../project/Moveis'

function Doar(){
    return(
        <div className={styles.doar_container}>
        <h1>Escolha por categorias</h1>
        <p>Só trabalhamos com o que está descrito em cada categoria, não aceitamos outras coisas.</p>
        <Alimentos />
        <Roupas/>
        <Higiene/>
        <Brinquedos/>
        <Moveis/>
        </div>
    )
}

export default Doar