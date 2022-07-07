import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import './Company.module.css'
import Select from 'react-select'
import Mapa from "./Mapa";

function Carrinho(){

    const [formValues, setFormValues] = useState([])

    return(
        <div>
        <form>
        <h1>Informações do pedido</h1>
        <p>Crie uma conta Solidariti</p>
        <p>Verficaremos se sua região está disponível</p>
        <input type="text" placeholder="Nome Completo" value={formValues.name} onChange={setFormValues}></input>
        <input type="text" placeholder="Seu Email (Opcional)" value={formValues.email} onChange={setFormValues}/>  
        <p>Essa senha deverá ser apresentada para o contribuinte</p>
        <input type="password" placeholder="Crie uma senha" value={formValues.senha} onChange={setFormValues}></input>
        <p>Verfique se há contibuintes na região mais próxima, anote o endereço e clique no ícone do lugar escolhido no mapa</p>
        <p>Aceitamos entregas e pedidos pelo correio, anote o CEP</p>
        <Mapa />
        <input type="submit" className="nextBtn" value="Enviar" />
        </form>
        </div>
    )
}

export default Carrinho