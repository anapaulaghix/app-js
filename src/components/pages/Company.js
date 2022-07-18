import './Company.module.css'
import LinkButton from '../layout/LinkButton'
import CarrinhoMapa from './carrinhoMapa';
import { useState } from "react"


function Company(handleSubmit){
    const [formValues, setFormValues] = useState({
        senha:'',
        name:'',
        endereco:'',
        email: '',
        telefone: '',
    }) 
    return (
        <div className = "form-box">
            <h1>Quem Somos</h1>
            <p>Somos uma instituição de doações de produtos online, temos o intuito de ajudar sem fins lucrativos.</p>
            <p>O nosso site foi feito para você doar ou receber sem contato pessoal com o doador/receptor.
                A nossa ideia é que você selecione somente o que quiser/precisa, para que não haja desperdício.</p>
            <br>
            </br>
            <p>Para ser um de nossos parceiros (pessoas que serão receptores e doadores dos produtos), preencha o formulário abaixo e aguarde nosso contato.</p>
        <br></br>
        <h3 className = "form-step"> Formuário para ser um de nossos ajudantes </h3>
        <form>
            <div className = "field1">
            <label> Preencha com seus dados </label>
            <input placeholder="Nome Completo" value={formValues.name} onChange={setFormValues}/>  
            <input type="password" placeholder="Senha" value={formValues.senha} onChange={setFormValues}></input>     
            <input placeholder="Telefone celular 00-0000-0000" value={formValues.telefone} onChange={setFormValues}/>
            <input placeholder="E-mail" value={formValues.email} onChange={setFormValues}/>
            <textarea placeholder="Endereço Completo" value={formValues.endereco} onChange={setFormValues}/>
            <label>Marque sua região no mapa
            Assim os receptores e doadores saberão a sua localização
            </label>
            <CarrinhoMapa/>
            </div>
        </form>
        <LinkButton to="/Formulario" text="Próximo Passo"/>
        <br></br>
        <label>Já sou contribuinte</label>
        <input placeholder="Email" value={formValues.email} onChange={setFormValues}/>  
        <input type="password" placeholder="Senha" value={formValues.senha} onChange={setFormValues}></input>
        <LinkButton to="/Formulario" text="Entrar"/>
    </div>
    )
}

export default Company