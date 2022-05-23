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
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione..."
      isMulti
      options={options}
    />
  )
}