import Multiselect from "multiselect-react-dropdown"

function Select(){
    return(
        <div>
            <Multiselect
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    {
      cat: 'Group 1',
      key: 'Option 1'
    },
    {
      cat: 'Group 1',
      key: 'Option 2'
    },
    {
      cat: 'Group 1',
      key: 'Option 3'
    },
    {
      cat: 'Group 2',
      key: 'Option 4'
    },
    {
      cat: 'Group 2',
      key: 'Option 5'
    },
    {
      cat: 'Group 2',
      key: 'Option 6'
    },
    {
      cat: 'Group 2',
      key: 'Option 7'
    }
  ]}
/>
        </div>
    )
}

export default Select 