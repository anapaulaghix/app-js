import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const options =[
  { value: 'Boneca', label: 'Boneca' },
  { value: 'Carrinho', label: 'Carrinho' },
  { value: 'Animais de borracha' , label: 'Animais de borracha' },
  { value: 'Animais de pelúcia' , label: 'Animais de pelúcia' },
  { value: 'Barbie' , label: 'Casa da Barbie' },
  { value: 'Pista' , label: 'Pista Hotwells' },
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