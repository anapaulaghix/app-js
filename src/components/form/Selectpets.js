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
      key: 'Ração para gatos'
    },
    {
      cat: 'Group 1',
      key: 'Ração para cachorros'
    },
    {
      cat: 'Group 1',
      key: 'Roupas para pets'
    },
    {
      cat: 'Group 2',
      key: 'Caminha'
    },
    {
      cat: 'Group 2',
      key: 'Arranhador'
    },
    {
      cat: 'Group 2',
      key: 'Brinquedos para pets'
    }
  ]}
/>
        </div>
    )
}

export default Select 