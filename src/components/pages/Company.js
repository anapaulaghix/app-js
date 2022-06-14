import './Company.module.css'
import LinkButton from '../layout/LinkButton'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
function Company(){
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
            <input placeholder="Nome Completo"/>        
            <input placeholder="Telefone celular 000-000-0000"/>
            <input placeholder="E-mail"/>
            <textarea placeholder="Endereço Completo"/>
            <label>Local fixo de quais regiões você receberá</label>
            <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione o estado" 
    />
            <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione a cidade" 
    />
            </div>
        </form>
        <LinkButton to="/Formulario"text="Próximo Passo"/>
    </div>
    )
}

export default Company