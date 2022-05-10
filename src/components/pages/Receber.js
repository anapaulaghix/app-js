import styles from './Receber.module.css'
import Alimentos from '../project/Alimentos'
import Roupas from '../project/Roupas'
import Higiene from '../project/Higiene'
import Brinquedos from '../project/Brinquedos'
import Moveis from '../project/Moveis'
import Container from '../layout/Container'
import LinkButton from  '../layout/LinkButton'

function Receber(){
    return(
        <div>
        <div className={styles.receber_container}>
            <h1>Escolha o que deseja</h1>
            <p>Você pode escolher as opções disponíveis doadas de cada categoria abaixo:</p>
            <br></br>
        </div>
            <Container>
            <LinkButton to="/Carrinho" text="Carrinho"/>
            <Alimentos />
            <Roupas/>
            <Higiene/>
            <Brinquedos/>
            <Moveis/>
            </Container>
        </div>
    )
}

export default Receber