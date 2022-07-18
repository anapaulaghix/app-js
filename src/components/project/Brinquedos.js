import img from '../../img/brinquedos.png'
import styles from './Alimentos.module.css'
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
const handleChange = (selectedOption) => {
  console.log(`Option selected:`, selectedOption);
}
export default function AnimatedMulti() {
  return (
    <div className={styles.container}>
        <h1>Brinquedos</h1>
        <img className={styles.img} src={img} alt='logobrinquedo'></img>
        <p>Escolha as opções disponíveis:</p>
    <Select
      onChange={handleChange}
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder="Selecione..."
      isMulti
      options={options}
    />
    </div>
  )
}