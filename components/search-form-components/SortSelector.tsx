import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { sortByOptions as defaultSortByOptions } from '../../features/browse/browseSlice';

interface SortSelectorProps {
  sortBy: string;
  sortByDirection: string;
  sortByOptions: any;
  handleSortByChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleSortByDirectionChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({
  sortBy,
  sortByDirection,
  sortByOptions,
  handleSortByChange,
  handleSortByDirectionChange,
}) => {
  const sortByOptionsToUse = sortByOptions || defaultSortByOptions;

  return (
    <StyledSortSelector>
      <SortByOption value={sortBy} variant="outlined">
        {sortByOptionsToUse?.map((sortByOption) => (
          <MenuItem key={sortByOption.label} value={sortByOption.value}>
            Sort by {sortByOption.label}
          </MenuItem>
        ))}
      </SortByOption>
      <SortByDirection value={sortByDirection} variant="outlined">
        <MenuItem value="ASC">ASC</MenuItem>
        <MenuItem value="DESC">DESC</MenuItem>
      </SortByDirection>
    </StyledSortSelector>
  );
};

const StyledSortSelector = styled.div(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingBottom: '10px',
  width: '100%',
}));

const SortByOption = styled(Select)(() => ({
  width: '65%',
  marginRight: '8px',
}));

const SortByDirection = styled(Select)(() => ({
  width: 'calc(35% - 8px)',
}));

export default SortSelector;
