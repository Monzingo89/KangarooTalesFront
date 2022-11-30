import Autocomplete from '@mui/lab/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

interface AutocompleteOption {
  category: string;
  label: string;
  value: string;
  exclude: boolean;
}

interface AutocompleteWithNegationProps {
  options: AutocompleteOption[];
  selectedOptions: AutocompleteOption[];
  setSelectedOptionsRemotely: (newSelectedOptions: AutocompleteOption[]) => void;
  label: string;
}

const AutocompleteWithNegation: React.FC<AutocompleteWithNegationProps> = ({
  options,
  selectedOptions,
  setSelectedOptionsRemotely,
  label,
}) => (
  <Autocomplete
    multiple
    filterSelectedOptions
    autoComplete
    options={options}
    groupBy={(option) => option.category}
    isOptionEqualToValue={(option, value) => option.value === value.value}
    renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    onChange={(e, newSelectedOptions: AutocompleteOption[]) => {
      setSelectedOptionsRemotely(newSelectedOptions);
    }}
    value={selectedOptions}
    renderTags={(autocompleteOptions: AutocompleteOption[], getTagProps) =>
      autocompleteOptions.map((option: AutocompleteOption, index: number) => (
        <Tooltip
          key={option.value}
          TransitionComponent={Zoom}
          title={option.exclude ? '(Click to include this option)' : '(Click to exclude this option)'}
        >
          <Chip
            label={option.label}
            {...getTagProps({ index })}
            color={option.exclude ? 'default' : 'primary'}
            clickable
            onClick={() => {
              const clickedOption = { ...selectedOptions[index] };
              clickedOption.exclude = !clickedOption.exclude;

              const updatedOptions = [...selectedOptions];
              updatedOptions[index] = clickedOption;

              setSelectedOptionsRemotely(updatedOptions);
            }}
            style={{ textDecoration: option.exclude ? 'line-through' : '' }}
          />
        </Tooltip>
      ))
    }
  />
);

export default AutocompleteWithNegation;
