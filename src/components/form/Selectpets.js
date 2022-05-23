import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const options =[
  { value: 'Ração para gatos', label: 'Ração para gatos' },
  { value: 'Ração para cachorros', label: 'Ração para cachorros' },
  { value: 'Roupas para pets' , label: 'Roupas para pets' },
  { value: 'Caminha' , label: 'Caminha' },
  { value: 'Arranhador' , label: 'Arranhador' },
  { value: 'Brinquedos para pets' , label: 'Brinquedos para pets' },
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