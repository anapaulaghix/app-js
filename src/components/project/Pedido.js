import styles from './Alimentos.module.css'
import Select from 'react-select'
import { useState } from 'react'

const options = [
    { value: '1', label: 'Pouca Quantidade 1-5' },
    { value: '2', label: 'Média quantidade 5-10' },
    { value: '3' , label: 'Grande quantidade 10-20' },
  ]


function Pedido(){ 
    const [value, setValue] = useState(null)
    const onDropDownChange = (value) => {
        setValue(value)
        console.log(value)
    }
    return(
        <div className={styles.container}>
        <h1>Carrinho</h1>
        <p>Verfique se sua lista está correta</p>
        <p>Defina a quantidade de produtos</p>
        <Select
      closeMenuOnSelect={false}
      placeholder="Selecione Pacotes..."
      options={options}
      onChange={onDropDownChange}
      value={value}
    />
    <p>Caixa para observações:</p>
    <textarea placeholder='Digite aqui'></textarea>
        </div>
    )
}

export default Pedido