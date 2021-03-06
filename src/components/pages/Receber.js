import styles from './Receber.module.css'
import Alimentos from '../project/Alimentos'
import Roupas from '../project/Roupas'
import Higiene from '../project/Higiene'
import Pets from '../project/Pets'
import Brinquedos from '../project/Brinquedos'
import Moveis from '../project/Moveis'
import Container from '../layout/Container'
import LinkButton from  '../layout/LinkButton'
import Pedido from '../project/Pedido'

function Receber(){
    return(
        <div>
        <div className={styles.receber_container}>
            <h1>Escolha o que deseja</h1>
            <p>Você pode escolher as opções disponíveis doadas de cada categoria abaixo:</p>
            <p><span>Somente algumas quantidades e tamanhos estarão disponíveis</span></p>
            <br></br>
        </div>
            <Container customClass='start'>
            <Alimentos />
            <Roupas/>
            <Higiene/>
            <Brinquedos/>
            <Pets/>
            <Moveis/>
            <Pedido />
            <LinkButton to="/Carrinho" text="Concluir"/>
            </Container>
        </div>
    )
}

export default Receber