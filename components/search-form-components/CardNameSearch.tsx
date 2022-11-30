import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

interface CardNameSearchProps {
  searchQuery: string;
  updateSearchQuery: (query: string) => void;
}

const CardNameSearch: React.FC<CardNameSearchProps> = ({ searchQuery, updateSearchQuery }) => (
  <StyledCardNameSearch fullWidth variant="outlined">
    <InputLabel htmlFor="search-query" className="input-label-fix">
      Card Name
    </InputLabel>
    <OutlinedInput
      id="search-query"
      value={searchQuery}
      placeholder="Search by card name"
      label="Card Name"
      onChange={(e) => updateSearchQuery(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon color="disabled" />
        </InputAdornment>
      }
    />
  </StyledCardNameSearch>
);

const StyledCardNameSearch = styled(FormControl)(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingBottom: '10px',
}));

export default CardNameSearch;
