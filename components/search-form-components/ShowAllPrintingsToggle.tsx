import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

interface ShowAllPrintingsToggleProps {
  showAllPrintings: boolean;
  updateShowAllPrintings: (showAllPrintings: boolean) => void;
}

const ShowAllPrintingsToggle: React.FC<ShowAllPrintingsToggleProps> = ({ showAllPrintings, updateShowAllPrintings }) => {
  const handleShowAllPrintingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateShowAllPrintings(event.target.checked);
  };

  return (
    <ToggleGroupWrapper variant="outlined">
      <FormGroup>
        <StyledFormControlLabel
          control={<Switch checked={showAllPrintings} onChange={handleShowAllPrintingsChange} name="showAllPrintings" color="primary" />}
          label="Show All Unique Printings"
        />
      </FormGroup>
    </ToggleGroupWrapper>
  );
};

const ToggleGroupWrapper = styled(Paper)(() => ({ margin: '8px', marginTop: '0px' }));
const StyledFormControlLabel = styled(FormControlLabel)(() => ({ display: 'flex', justifyContent: 'center' }));

export default ShowAllPrintingsToggle;
