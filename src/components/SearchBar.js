import React, { useState } from 'react';

import { Box, Select } from 'grommet';
import data from '../utils/paymentData';

const newOptions = data.map((item) => (item.Payee.Name))
console.log(newOptions)

export const SearchBar = () => {
  const options = newOptions;
  const [value, setValue] = useState('');
  return (
      <Box fill align="center" justify="start" pad="small" gap="small">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
  );
};

export default SearchBar