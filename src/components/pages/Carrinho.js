import { useState } from "react"
import CarrinhoMapa from "./carrinhoMapa";

function Carrinho(){
    const [formValues, setFormValues] = useState({
        senha:'',
        name:'',
        endereco:'',
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
        <input type="text" placeholder="Endereço Completo" value={formValues.endereco} onChange={setFormValues}></input>
        <CarrinhoMapa/>
        <input type="submit" placeholder="Enviar"></input>
        </div>
    )
}

export default Carrinho