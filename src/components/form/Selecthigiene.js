import Multiselect from "multiselect-react-dropdown"

function Select(){
    return(
        <div>
            <Multiselect
            placeholder="Selecione"
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    {
      cat: 'Group 1',
      key: 'Escova de dentes'
    },
    {
      cat: 'Group 1',
      key: 'Pasta de dentes'
    },
    {
      cat: 'Group 1',
      key: 'Fio dental'
    },
    {
      cat: 'Group 2',
      key: 'Papel higiênico'
    },
    {
      cat: 'Group 2',
      key: 'Desinfetante'
    },
    {
      cat: 'Group 2',
      key: 'Vassoura/rodo'
    },
    {
      cat: 'Group 2',
      key: 'Água sanitária'
    }
  ]}
/>
        </div>
    )
}

export default Select 