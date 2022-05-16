import Checkbox from '../form/Checkbox'
import * as React from 'react';

const Select = () => {
  const [checkedOne, setCheckedOne] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  return (
    <div>
      <Checkbox
        label="Value 1"
        value={checkedOne}
        onChange={handleChangeOne}
      />
    </div>
  );
};

export default Select;