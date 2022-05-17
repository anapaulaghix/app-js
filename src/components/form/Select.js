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
  options={[
    {
      cat: 'Group 1',
      key: 'Arroz'
    },
    {
      cat: 'Group 1',
      key: 'Feijão'
    },
    {
      cat: 'Group 1',
      key: 'Macarrão'
    },
    {
      cat: 'Group 2',
      key: 'Óleo'
    },
    {
      cat: 'Group 2',
      key: 'Farinha de trigo/fubá'
    },
    {
      cat: 'Group 2',
      key: 'Sal'
    },
    {
      cat: 'Group 2',
      key: 'Café'
    },
    {
      cat: 'Group 2',
      key: 'Molho de tomate'
    },
    {
      cat: 'Group 2',
      key: 'Bolacha água e sal'
    },
    {
      cat: 'Group 2',
      key: 'Sardinha'
    },
    {
      cat: 'Group 2',
      key: 'Cesta básica completa'
    }
  ]}
/>
        </div>
    )
}

export default Select 