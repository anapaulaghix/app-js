import img from '../../img/pngwing.png'
import styles from './Alimentos.module.css'
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const options =[
  { value: 'Cama', label: 'Cama/colchão' },
  { value: 'Sofá', label: 'Sofá' },
  { value: 'Geladeira' , label: 'Geladeira' },
  { value: 'Armário' , label: 'Armário' },
  { value: 'Guarda roupa' , label: 'Guarda roupa' },
  { value: 'Cadeira' , label: 'Cadeira' },
  { value: 'Mesa grande/pequena' , label: 'Mesa grande/pequena' },
]

export default function AnimatedMulti() {
  return (
    <div className={styles.container}>
        <h1>Móveis</h1>
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