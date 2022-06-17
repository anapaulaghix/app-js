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
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione..."
      isMulti
      options={options}
    />
  )
}