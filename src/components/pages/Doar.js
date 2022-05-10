import styles from './Doar.module.css'
import Alimentos from '../project/Alimentos'
import Roupas from '../project/Roupas'
import Higiene from '../project/Higiene'
import Brinquedos from '../project/Brinquedos'
import Moveis from '../project/Moveis'
import Container from '../layout/Container'
import LinkButton from  '../layout/LinkButton'

function Doar(){
    return(
        <div>
        <div className={styles.doar_container}>
        <h1>Escolha por categorias</h1>
        <p>Só trabalhamos com o que está descrito em cada categoria, não aceitamos doações de outras coisas.</p>
        <br></br>
        </div>
        <Container>
        <LinkButton to="/Carrinho" text="Carrinho"/>
        <Alimentos /> 
        <Roupas />
        <Higiene/>
        <Brinquedos/>
        <Moveis/>
        </Container>
        </div>
    )
}

export default Doar