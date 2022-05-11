import styles from './Receber.module.css'
import Alimentos from '../project/Alimentos'
import Roupas from '../project/Roupas'
import Higiene from '../project/Higiene'
import Pets from '../project/Pets'
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
            <Container customClass='start'>
            <Alimentos />
            <Roupas/>
            <Higiene/>
            <Brinquedos/>
            <Pets/>
            <Moveis/>
            <LinkButton to="/Carrinho" text="Carrinho"/>
            </Container>
        </div>
    )
}

export default Receber