import React, { useState } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const options =[
  { value: 'Arroz', label: 'Arroz' },
  { value: 'Feijão', label: 'Feijão' },
  { value: 'Macarrão' , label: 'Macarrão' },
  { value: 'Farinha de trigo/fubá' , label: 'Farinha de trigo/fubá/amido' },
  { value: 'Sal/Açúcar' , label: 'Sal/Açúcar' },
  { value: 'Café' , label: 'Café' },
  { value: 'Molho de tomate' , label: 'Molho de tomate' },
  { value: 'Bolachas' , label: 'Bolachas' },
  { value: 'conserva' , label: 'Produtos em conserva' },
  { value: 'cesta' , label: 'Cesta básica completa'},
  
]

export default function AnimatedMulti() {

  return (
    <div>
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione Pacotes..."
      isSearchable={true}
      isMulti
      options={options}
    />
    </div>
  )
}