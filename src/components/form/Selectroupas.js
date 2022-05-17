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
      key: 'Vestido'
    },
    {
      cat: 'Group 1',
      key: 'Casaco'
    },
    {
      cat: 'Group 1',
      key: 'Camiseta feminina'
    },
    {
      cat: 'Group 2',
      key: 'Camiseta masculina'
    },
    {
      cat: 'Group 2',
      key: 'Calça'
    },
    {
      cat: 'Group 2',
      key: 'Shorts'
    },
    {
      cat: 'Group 2',
      key: 'Bermuda'
    },
    {
      cat: 'Group 2',
      key: 'Chinelo infantil'
    },
    {
      cat: 'Group 2',
      key: 'Meia'
    }
  ]}
/>
        </div>
    )
}

export default Select 