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
      key: 'Cama'
    },
    {
      cat: 'Group 1',
      key: 'Sofá'
    },
    {
      cat: 'Group 1',
      key: 'Geladeira'
    },
    {
      cat: 'Group 2',
      key: 'Armário'
    },
    {
      cat: 'Group 2',
      key: 'Guarda roupa'
    },
    {
      cat: 'Group 2',
      key: 'Mesa'
    },
    {
      cat: 'Group 2',
      key: 'Cadeira'
    }
  ]}
/>
        </div>
    )
}

export default Select 