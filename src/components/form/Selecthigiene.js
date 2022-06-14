import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const options =[
  { value: 'Escova de dentes', label: 'Escova de dentes' },
  { value: 'Pasta de dentes', label: 'Pasta de dentes' },
  { value: 'Fio dental' , label: 'Fio dental' },
  { value: 'Papel higiênico' , label: 'Papel higiênico' },
  { value: 'Desinfetante' , label: 'Desinfetante' },
  { value: 'Vassoura/rodo' , label: 'Vassoura/rodo' },
  { value: 'Água sanitária' , label: 'Água sanitária' },
  { value: 'Perfume' , label: 'Perfume' },
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