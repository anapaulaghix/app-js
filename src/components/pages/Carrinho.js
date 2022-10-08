import { useEffect, useState } from "react"
import styles from './Company.module.css'
import Mapa from "./Mapa";
import styless from './Doar.module.css'


function Carrinho(){

    const [values, setvalues] = useState();
    const handleChangeValues = (value) => {
        setvalues((prevvalue) => ({
            ...prevvalue,
            [value.target.name]: value.target.value,
        }))
    }
    const handleClickButton = () => {
        console.log(values)
    }
    return(
        <div className={styless.doar_container}>
        <form>
        <h1>Informações do pedido</h1>
        <p>Crie uma conta Solidariti</p>
        <input type="text" 
        name="name"
        placeholder="Nome Completo" 
        onChange={handleChangeValues}></input>
        
        <input type="text" name="email"
        placeholder="Seu Email (Opcional)" 
        onChange={handleChangeValues}/>  
        
        <p>Essa senha deverá ser apresentada para o contribuinte</p>
        
        <input type="password" 
        name="senha"
        placeholder="Crie uma senha" onChange={handleChangeValues}></input>
        
        <p><b>Verfique se há contibuintes na região mais próxima, anote o endereço e clique no ícone do lugar escolhido no mapa</b></p>
        <p>Aceitamos entregas e pedidos pelo correio, anote o CEP</p>
        <p>Verficaremos se sua região está disponível</p>
        <Mapa />
        
       <button className={styles.button} onClick={() => handleClickButton() }>Enviar</button>
        </form>
        </div>
    )
}

export default Carrinho