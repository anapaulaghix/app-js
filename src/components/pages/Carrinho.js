import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

function Carrinho(){
    return(
        <div>
        <h1>Adicionados ao carrinho:</h1>
        <p>Confira se sua lista está correta e defina a quantidade de produtos</p>
        <input type="number"></input>
        <p>Agora crie uma conta Solidariti</p>
        <p>Verficaremos se sua região está disponível</p>
        <input type="text" placeholder="Nome Completo"></input>
        <input type="password" placeholder="Senha"></input>
        <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione seu Estado do Brasil"
    />
        <input type="text" placeholder="Endereço Completo"></input>
        <input type="submit"></input>
        </div>
    )
}

export default Carrinho