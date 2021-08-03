import React from 'react';

import { Box, Select } from 'grommet';
import data from '../utils/paymentData';

const newOptions = data.map((item) => (item.Payee.Name))
const options = newOptions;

export const SearchBar = ({value, setValue}) => {
  
  //code for filtering here
  //set a new variable to the cards being mapped over in Cards.js
  // https://www.emgoto.com/react-search-bar/
  return (
      <Box fill align="center" justify="start" pad="small" gap="small">
        <Select
          id="select"
          name="select"
          placeholder="Payees"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
  );
};

export default SearchBar;