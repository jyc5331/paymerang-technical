import React, { useRef, useState, useEffect } from 'react';
import { FormClose } from 'grommet-icons';
import { Box, Button, CheckBox, Select, Text } from 'grommet';
import data from '../utils/paymentData';

const allPayees = data.map(({
  Payee
}) => Payee);
console.log(allPayees);

export const SelectBar = () => {
  const [selectedPayees, setSelectedPayees] = useState([]);
  const [payees, setPayees] = useState(allPayees);
  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectRef = useRef();

  const clearPayees = () => {
    setSelectedPayees([]);
  };

  useEffect(() => {
    const filterPayees = allPayees.filter(
      s => s.Name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

    setTimeout(() => {
      setSearching(false);
      setPayees(filterPayees);
    }, 500);
  }, [searching, searchQuery]);

  const renderOption = ({ Name }) => (
    <Box direction="row" align="center" pad="small" flex={false}>
      <CheckBox
        tabIndex="-1"
        checked={selectedPayees.some(payee => payee.Name === Name)}
        label={<Text size="small">{Name}</Text>}
        onChange={() => {}}
      />
    </Box>
  );

  const renderPayees = () => (
    <Box
      direction="row"
      gap="xsmall"
      pad={{ left: 'small', vertical: 'small' }}
      align="center"
      flex
    >
      <Box
        background="brand"
        round="medium"
        align="center"
        justify="center"
        pad={{ horizontal: 'xsmall' }}
        style={{ minWidth: '21px' }}
      >
        <Text size="small">{selectedPayees.length}</Text>
      </Box>
      <Box flex>
        <Text size="small" truncate>
          {selectedPayees.length > 1
            ? 'multiple'
            : selectedPayees.map(({ Name }) => Name)}
        </Text>
      </Box>
      <Button
        href="#"
        onFocus={event => event.stopPropagation()}
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          clearPayees();
          selectRef.current.focus();
        }}
      >
        <Box background="gray" round="full">
          <FormClose style={{ width: '12px', height: '12px' }} />
        </Box>
      </Button>
    </Box>
  );

  const sortPayees = selectedPayeeNames => (p1, p2) => {
    const p1Exists = selectedPayeeNames.includes(p1.Name);
    const p2Exists = selectedPayeeNames.includes(p2.Name);

    if (!p1Exists && p2Exists) {
      return 1;
    }
    if (p1Exists && !p2Exists) {
      return -1;
    }
    if (p1.Name.toLowerCase() < p2.Name.toLowerCase()) {
      return -1;
    }
    return 1;
  };

  return (
      <Box fill align="center" justify="center" width="medium">
        <Select
          ref={selectRef}
          closeOnChange={false}
          placeholder="List of Payees"
          searchPlaceholder="Payees:"
          emptySearchMessage="No payees found"
          searching={searching}
          multiple
          value={
            selectedPayees.length ? renderPayees() : undefined
          }
          selected={selectedPayees.map(option =>
            payees.indexOf(option),
          )}
          options={payees}
          onChange={({ option }) => {
            const newSelectedPayees = [...selectedPayees];
            const seasonIndex = newSelectedPayees
              .map(({ Name }) => Name)
              .indexOf(option.Name);
            if (seasonIndex >= 0) {
              newSelectedPayees.splice(seasonIndex, 1);
            } else {
              newSelectedPayees.push(option);
            }
            const selectedPayeeNames = newSelectedPayees.map(
              ({ Name }) => Name,
            );
            const sortedPayees = [...allPayees].sort(
              sortPayees(selectedPayeeNames),
            );
            setSelectedPayees(newSelectedPayees);
            setPayees(sortedPayees);
          }}
          onSearch={query => {
            setSearching(true);
            setSearchQuery(query);
          }}
        >
          {renderOption}
        </Select>
      </Box>
  );
};

// CustomSearch.storyName = 'Custom search';

export default SelectBar;