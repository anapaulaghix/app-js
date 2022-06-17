import { useState } from "react"
import CarrinhoMapa from "./carrinhoMapa";

function Carrinho(){
    const [formValues, setFormValues] = useState({
        senha:'',
        name:'',
        coordenadas: [0, 0]
    })
    
    console.log(formValues);

    return(
        <div>
        <h1>Adicionados ao carrinho:</h1>
        <p>Confira se sua lista está correta e defina a quantidade de produtos</p>
        <input type="number"></input>
        <p>Agora crie uma conta Solidariti</p>
        <p>Verficaremos se sua região está disponível</p>
        <input type="text" placeholder="Nome Completo" value={formValues.name} onChange={setFormValues}></input>
        <input type="password" placeholder="Senha" value={formValues.senha} onChange={setFormValues}></input>
        <p>Verfique se há contibuintes na região mais próxima e anote o endereço</p>
        <p>Caso seja uma doação, aceitamos entregas pelo correio, anote o CEP</p>
        <CarrinhoMapa/>
        <input type="submit" placeholder="Enviar"></input>
        </div>
    )
}

export default Carrinho