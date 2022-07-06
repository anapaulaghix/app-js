import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import './Company.module.css'
import Select from 'react-select'
import Mapa from "./Mapa";

function Carrinho(){

    const [formValues, setFormValues] = useState([])
    const options =[
        { value: '1', label: 'Pouca Quantidade 1-5' },
        { value: '2', label: 'Média quantidade 5-10' },
        { value: '3' , label: 'Grande quantidade 10-20' },
      ]

    return(
        <div>
        <form>
        <h1>Adicionados ao carrinho:</h1>
        <p>Confira se sua lista está correta</p>
        <Select
         closeMenuOnSelect={true}
         placeholder="Selecione a quantidade..."
         options={options}
    />
        <p>Agora crie uma conta Solidariti</p>
        <p>Verficaremos se sua região está disponível</p>
        <input type="text" placeholder="Nome Completo" value={formValues.name} onChange={setFormValues}></input>
        <input type="text" placeholder="Seu Email (Opcional)" value={formValues.email} onChange={setFormValues}/>  
        <p>Essa senha deverá ser apresentada para o contribuinte</p>
        <input type="password" placeholder="Crie uma senha" value={formValues.senha} onChange={setFormValues}></input>
        <p>Verfique se há contibuintes na região mais próxima e anote o endereço</p>
        <p>Aceitamos entregas e pedidos pelo correio, anote o CEP</p>
        <Mapa />
        <input type="submit" className="nextBtn" value="Enviar" />
        </form>
        </div>
    )
}

export default Carrinho