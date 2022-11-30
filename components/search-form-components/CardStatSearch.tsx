/* eslint-disable react/jsx-no-undef */
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { ColorTypes, SearchAttribute, searchAttributeOptions, SearchComparators } from '../../features/browse/browseSlice';

interface CardStatSearchProps {
  cardStatSearches: any;
  updateSearchAttribute: (attribute: SearchAttribute, index: number) => void;
  updateComparator: (comparator: SearchComparators, index: number) => void;
  updateCardStatSearches: (value: string, index: number) => void;
  handleAddCardStatSearch: () => void;
  handleRemoveCardStatSearch: () => void;
  searchAttributeOptionsOverride?: any;
}

const CardStatSearch: React.FC<CardStatSearchProps> = ({
  cardStatSearches,
  updateSearchAttribute,
  updateComparator,
  updateCardStatSearches,
  handleAddCardStatSearch,
  handleRemoveCardStatSearch,
  searchAttributeOptionsOverride,
}) => {
  const handleSearchAttributeChange = (event: React.ChangeEvent<{ value: unknown }>, index: number) => {
    updateSearchAttribute(event.target.value as SearchAttribute, index);
  };

  const handleComparatorChange = (event: React.ChangeEvent<{ value: unknown }>, index: number) => {
    updateComparator(event.target.value as SearchComparators, index);
  };

  const handleCardStatSearchChange = (event: React.ChangeEvent<{ value: unknown }>, index: number) => {
    updateCardStatSearches(event.target.value as ColorTypes, index);
  };

  const searchAttributesToUse = searchAttributeOptionsOverride || searchAttributeOptions;
  return (
    <CardStatSearchGroup>
      {cardStatSearches.map((cardStatSearch, index) => (
        <div key={index}>
          <CardStatAttributeSelect
            value={cardStatSearch.searchAttribute}
            defaultValue="convertedManaCost"
            onChange={(event: any) => handleSearchAttributeChange(event, index)}
            variant="outlined"
          >
            {searchAttributesToUse.map((searchAttribute) => (
              <MenuItem key={searchAttribute.label} value={searchAttribute.value}>
                {searchAttribute.label}
              </MenuItem>
            ))}
          </CardStatAttributeSelect>
          <CardStatComparatorSelect
            value={cardStatSearch.comparator}
            defaultValue=">="
            // onChange={(event) => handleComparatorChange(event, index)}
            variant="outlined"
          >
            <MenuItem value="gte">{'>='}</MenuItem>
            <MenuItem value="gt">{'>'}</MenuItem>
            <MenuItem value="lte">{'<='}</MenuItem>
            <MenuItem value="lt">{'<'}</MenuItem>
            <MenuItem value="eq">=</MenuItem>
            <MenuItem value="not">!=</MenuItem>
          </CardStatComparatorSelect>
          <CardStatValue variant="outlined">
            <OutlinedInput
              value={cardStatSearch.value}
              placeholder="1, 2, 3"
              onChange={(event) => handleCardStatSearchChange(event, index)}
            />
          </CardStatValue>
        </div>
      ))}
      <CardStatAttributeAdderButtonGroup>
        <CardStatAttributeAdderInstructions size="small" variant="text" disabled>
          <em>Add or remove card attributes:</em>
        </CardStatAttributeAdderInstructions>
        <Button size="small" onClick={handleRemoveCardStatSearch}>
          {/* <RemoveIcon /> */}
        </Button>
        <Button size="small" onClick={handleAddCardStatSearch}>
          {/* <AddCircleIcon /> */}
        </Button>
      </CardStatAttributeAdderButtonGroup>
    </CardStatSearchGroup>
  );
};

const CardStatSearchGroup = styled.div(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingBottom: '10px',
}));

const CardStatValue = styled(FormControl)(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingBottom: '10px',
  width: '30%',
}));

const CardStatAttributeSelect = styled(Select)(() => ({
  width: '45%',
  marginRight: '8px',
}));

const CardStatComparatorSelect = styled(Select)(() => ({
  width: '25%',
}));

const CardStatAttributeAdderButtonGroup = styled(ButtonGroup)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
}));

const CardStatAttributeAdderInstructions = styled(Button)({
  textTransform: 'none',
  flex: '1',
});

export default CardStatSearch;
