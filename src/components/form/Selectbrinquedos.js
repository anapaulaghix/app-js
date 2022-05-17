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
      key: 'Boneca'
    },
    {
      cat: 'Group 1',
      key: 'Carrinho'
    },
    {
      cat: 'Group 1',
      key: 'Animais de borracha'
    },
    {
      cat: 'Group 2',
      key: 'Animais de pelúcia'
    },
    {
      cat: 'Group 2',
      key: 'Materiais de desenho'
    },
    {
      cat: 'Group 2',
      key: 'Pistas Hotwells'
    },
    {
      cat: 'Group 2',
      key: 'Casa da Barbie'
    }
  ]}
/>
        </div>
    )
}

export default Select 