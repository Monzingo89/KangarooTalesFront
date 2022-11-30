import StyledComponents from 'styled-components';
import IconButton from '@mui/material/IconButton';

export interface ToggleButtonProps {
  size?: 'small' | 'medium';
  toggled?: boolean;
  handleClick?: () => void;
}

const ToggleableButton: React.FC<ToggleButtonProps> = ({ size, children, toggled, handleClick }) => (
  <StyledIconButton size={size} styled={{ toggled }} onClick={() => handleClick()}>
    {children}
  </StyledIconButton>
);

export default ToggleableButton;

interface StyledIconButtonProps {
  styled: { toggled: boolean };
}

const StyledIconButton = StyledComponents(IconButton)<StyledIconButtonProps>(({ styled }) => ({
  opacity: styled.toggled ? '1' : '0.3',
}));
