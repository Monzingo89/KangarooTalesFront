import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { CardColors, ColorTypes } from '../../features/browse/browseSlice';
import {
  BlackManaButton,
  BlueManaButton,
  ColorlessManaButton,
  GreenManaButton,
  RedManaButton,
  WhiteManaButton,
} from '../../features/browse/forms/buttons';

interface ColorSelectorProps {
  cardColors: CardColors;
  updateCardColors: (color: string) => void;
  updateColorType: (colorType: ColorTypes) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ cardColors, updateCardColors, updateColorType }) => {
  const handleManaButtonClick = (color) => {
    updateCardColors(color);
  };

  const handleColorTypeChange = (event: React.ChangeEvent<{ value: ColorTypes }>) => {
    updateColorType(event.target.value);
  };

  return (
    <ColorSelectorWrapper variant="outlined">
      <ColorSelect>
        <WhiteManaButton toggled={cardColors.white} handleClick={() => handleManaButtonClick('white')} />
        <BlueManaButton toggled={cardColors.blue} handleClick={() => handleManaButtonClick('blue')} />
        <BlackManaButton toggled={cardColors.black} handleClick={() => handleManaButtonClick('black')} />
        <RedManaButton toggled={cardColors.red} handleClick={() => handleManaButtonClick('red')} />
        <GreenManaButton toggled={cardColors.green} handleClick={() => handleManaButtonClick('green')} />
        <ColorlessManaButton toggled={cardColors.colorless} handleClick={() => handleManaButtonClick('colorless')} />
      </ColorSelect>
      <ColorTypeSelect>
        <Select value={cardColors.type} style={{ width: '100%' }}>
          <MenuItem value="at-least-these-colors">At Least These Colors</MenuItem>
          <MenuItem value="only-these-colors">Only These Colors</MenuItem>
          <MenuItem value="at-most-these-colors">At Most These Colors</MenuItem>
        </Select>
      </ColorTypeSelect>
    </ColorSelectorWrapper>
  );
};

const ColorSelectorWrapper = styled(Paper)(() => ({ margin: '8px', marginTop: '0px', paddingTop: '8px' }));

const ColorSelect = styled.div(() => ({ display: 'flex', justifyContent: 'center' }));

const ColorTypeSelect = styled.div(() => ({
  paddingLeft: '8px',
  paddingRight: '8px',
  paddingTop: '10px',
  paddingBottom: '10px',
}));

export default ColorSelector;
