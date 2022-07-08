import img from '../../img/doacao-de-roupas.png'
import styles from './Alimentos.module.css'
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const options =[
  { value: 'Vestido', label: 'Vestido' },
  { value: 'Casaco', label: 'Casaco' },
  { value: 'Camiseta feminina' , label: 'Camiseta feminina' },
  { value: 'Camiseta masculina' , label: 'Camiseta masculina' },
  { value: 'Calça', label: 'Calça' },
  { value: 'Shorts', label: 'Shorts' },
  { value: 'Bermuda' , label: 'Bermuda' },
  { value: 'Meia' , label: 'Meia' },
  { value: 'Sapato' , label: 'Sapato em geral' },
]

export default function AnimatedMulti() {
  return (
    <div className={styles.container}>
        <h1>Roupas</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <p>Escolha as opções disponíveis:</p>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione..."
      isMulti
      options={options}
    />
    </div>
  )
}