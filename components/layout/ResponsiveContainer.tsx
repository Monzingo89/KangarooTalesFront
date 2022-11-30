import Container from '@mui/material/Container';
import styled from 'styled-components';

export const ResponsiveContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    padding: 0,
  },
}));
