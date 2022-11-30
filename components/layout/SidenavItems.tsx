import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LibraryIcon from '@mui/icons-material/ImportContacts';
import IsoIcon from '@mui/icons-material/Iso';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuthentication } from '../../auth/AuthenticationProvider';
import Link from '../Link';

interface SidenavItemsProps {
  handleSidenavClose?: () => void;
}

const SidenavItems: React.FC<SidenavItemsProps> = ({ handleSidenavClose = null }) => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthentication();
  const currentPath = router.asPath;

  const [isCollectionMenuOpen, setCollectionMenuOpen] = useState(false);

  const handleRouteChange = () => {
    if (handleSidenavClose) {
      handleSidenavClose();
    }
  };
  return (
    <List disablePadding>
      <ListItem button component={Link} href="/" color="inherit" selected={currentPath === '/'} onClick={handleRouteChange}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} href="https://monzingo89.github.io/KangarooTalesCrypt" color="inherit" target="_blank">
        <ListItemIcon>
          <ThunderstormIcon />
        </ListItemIcon>
        <ListItemText primary="Back to Crypt" />
      </ListItem>
      <ListItem
        button
        component={Link}
        href="/browse"
        color="inherit"
        selected={currentPath.startsWith('/browse')}
        onClick={handleRouteChange}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Browse (DB Not Connected Yet)" />
      </ListItem>
      {isAuthenticated && (
        <ListItem
          button
          component={Link}
          href={`/collections/${user.id}`}
          color="inherit"
          selected={currentPath?.startsWith(`/collections/${user.id}`)}
          onClick={handleRouteChange}
        >
          <ListItemIcon>
            <LibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Collection" />
        </ListItem>
      )}
      {isAuthenticated && currentPath?.startsWith(`/collections`) && (
        <List component="div" disablePadding>
          <ListItem
            button
            component={Link}
            href="/collections/edit-cards"
            color="inherit"
            selected={currentPath?.startsWith(`/collections/edit-cards`)}
            onClick={handleRouteChange}
          >
            <ListItemIcon style={{ marginLeft: '1.5em' }}>
              <IsoIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Cards" />
          </ListItem>
        </List>
      )}
      {/* <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Goals (In Development)" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Patrons (In Development)" />
      </ListItem>
      <ListItem
        button
        component={Link}
        href="/changelog"
        color="inherit"
        selected={currentPath === '/changelog'}
        onClick={handleRouteChange}
      >
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Changelog" />
      </ListItem> */}
    </List>
  );
};

export default SidenavItems;
