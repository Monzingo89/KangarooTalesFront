import Container from '@mui/material/Container';
import { privateRoute, useAuthentication } from '../auth/AuthenticationProvider';

const PrivatePage: React.FC = () => {
  const { isCheckingAuth, isAuthenticated } = useAuthentication();

  const showLoadingSkeleton = isCheckingAuth || !isAuthenticated;

  return (
    <Container maxWidth="xl">{showLoadingSkeleton ? <div>Loading...</div> : <div>You are LOGGED IN if you can read this.</div>}</Container>
  );
};

export default privateRoute(PrivatePage);
