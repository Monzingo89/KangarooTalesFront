import Typography from '@material-ui/core/Typography';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import Link from '../components/Link';
import CollapsibleTable from '../components/shared/CollapsibleTable';

const HomePage: React.FC = () => (
  <ResponsiveContainer maxWidth="xl">
    <Typography variant="h3" component="h1" align="center">
      Kangaroo Tales Input System
    </Typography>
    <br />
    <br />
    <Typography variant="h3" component="h2">
      Test Set Coming Soon.. ALPHA?
    </Typography>
    <Typography paragraph component="div">
      Got any alpha cards you need to input Dennis?
    </Typography>
    <br />
    <CollapsibleTable />
    <br />
    <Typography variant="h5" component="h2">
      Contact Info (This can be in footer(discuss later))
    </Typography>
    <Typography paragraph component="div">
      <ul>
        <li>
          Feel free to reach out to me via{' '}
          <Link href="https://www.facebook.com/KangarooTales/" target="_blank">
            Facebook
          </Link>
          ,{' '}
          <Link href="mailto:kangarootalesllc@gmail.com" target="_blank">
            Email
          </Link>
        </li>
      </ul>
    </Typography>
  </ResponsiveContainer>
);

export default HomePage;
