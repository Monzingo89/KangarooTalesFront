import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const HeaderSidenavButton = styled(IconButton)<HeaderSidenavButtonProps>(({ open }) => {
  if (open) {
    return {
      display: 'none',
    };
  }

  return {
    marginRight: 36,
  };
});

interface HeaderSidenavButtonProps {
  open?: boolean;
}

export default HeaderSidenavButton;
