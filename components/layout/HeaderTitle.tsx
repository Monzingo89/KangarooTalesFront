import Typography from '@mui/material/Typography';
import styled from 'styled-components';

// Reason: https://github.com/mui-org/material-ui/issues/20373
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderTitle = styled(Typography as any)<HeaderTitleProps>(() => ({ flexGrow: 1 }));

interface HeaderTitleProps {
  flexGrow: number;
}

export default HeaderTitle;
