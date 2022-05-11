import styles from './Doar.module.css'
import Alimentos from '../project/Alimentos'
import Roupas from '../project/Roupas'
import Higiene from '../project/Higiene'
import Pets from '../project/Pets'
import Brinquedos from '../project/Brinquedos'
import Moveis from '../project/Moveis'
import Container from '../layout/Container'
import LinkButton from  '../layout/LinkButton'

function Doar(){
    return(
        <div>
        <div className={styles.doar_container}>
        <h1>Escolha por categorias</h1>
        <p>Só trabalhamos com o que está descrito em cada categoria, não aceitamos doações de outras coisas. Após escolher, clique no carrinho, e pronto! :)</p>
        <br></br>
        </div>
        <Container customClass="start">
        <Alimentos /> 
        <Roupas />
        <Higiene/>
        <Brinquedos/>
        <Pets />
        <Moveis/>
        </Container>
        <LinkButton to="/Carrinho" text="Carrinho"/>
        </div>
    )
}

export default Doar