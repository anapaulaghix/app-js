import Checkbox from './Checkbox'
import * as React from 'react';

const Checks = () => {
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

export default Checks