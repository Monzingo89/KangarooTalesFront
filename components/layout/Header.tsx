import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import styled from 'styled-components';
import { SearchForm } from '../../features/browse/forms';
import CollectionSearchForm from '../../features/collections/forms/CollectionSearchForm';
import { SetCollectionSearchForm } from '../../features/collections/sets/forms';
import EditCardsForm from '../../features/edit-cards/forms/EditCardsForm';
import { SetSearchForm } from '../../features/sets/forms';
import AccountMenu from './AccountMenu';
import HeaderBar from './HeaderBar';
import HeaderSidenavButton from './HeaderSidenavButton';
import HeaderTitle from './HeaderTitle';
import HeaderToolbar from './HeaderToolbar';
import Sidenav from './Sidenav';
import SidenavHeader from './SidenavHeader';
import SidenavItems from './SidenavItems';

const Header: React.FC = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(true);
  const [isMobileSidenavOpen, setMobileSidenavOpen] = useState(false);

  const handleSidenavOpenDesktop = () => {
    setSidenavOpen(true);
  };
  const handleSidenavCloseDesktop = () => {
    setSidenavOpen(false);
  };

  const handleSidenavOpenMobile = () => {
    setMobileSidenavOpen(true);
  };

  const handleSidenavCloseMobile = () => {
    setMobileSidenavOpen(false);
  };

  const [menuAnchorElement, setMenuAnchorElement] = useState<null | HTMLElement>(null);
  const handleAccountMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setMenuAnchorElement(null);
  };

  return <>
    <HeaderBarMobile position="fixed" color="inherit" open={isMobileSidenavOpen}>
      <HeaderToolbar>
        <HeaderSidenavButton edge="start" color="inherit" aria-label="Open Side Menu" onClick={handleSidenavOpenMobile}>
          <MenuIcon />
        </HeaderSidenavButton>
        <HeaderTitle component="h1" variant="h6" color="inherit" noWrap>
          Kangaroo Tales Headquarters
        </HeaderTitle>
        <IconButton
          color="inherit"
          aria-controls="account-menu"
          aria-haspopup="true"
          onClick={handleAccountMenuOpen}
          size="large">
          <AccountCircleIcon />
        </IconButton>
        <AccountMenu anchorEl={menuAnchorElement} handleClose={handleAccountMenuClose} />
      </HeaderToolbar>
    </HeaderBarMobile>
    <HeaderBarDesktop position="fixed" color="inherit" open={isSidenavOpen}>
      <HeaderToolbar>
        <HeaderSidenavButton edge="start" color="inherit" aria-label="Open Side Menu" onClick={handleSidenavOpenDesktop}>
          <MenuIcon />
        </HeaderSidenavButton>
        <HeaderTitle component="h1" variant="h6" color="inherit" noWrap>
          Kangaroo Tales Headquarters
        </HeaderTitle>
        <IconButton
          color="inherit"
          aria-controls="account-menu"
          aria-haspopup="true"
          onClick={handleAccountMenuOpen}
          size="large">
          <AccountCircleIcon />
        </IconButton>
        <AccountMenu anchorEl={menuAnchorElement} handleClose={handleAccountMenuClose} />
      </HeaderToolbar>
    </HeaderBarDesktop>
    <SidenavMobile variant="temporary" open={isMobileSidenavOpen} anchor="left" onClose={handleSidenavCloseMobile}>
      <SidenavHeader>
        <IconButton onClick={handleSidenavCloseMobile} size="large">
          <ChevronLeftIcon />
        </IconButton>
      </SidenavHeader>
      <Divider />
      <List>
        <SidenavItems handleSidenavClose={handleSidenavCloseMobile} />
      </List>
      <Divider />
      <List>
        <SearchForm />
        <SetSearchForm />
        <CollectionSearchForm />
        <SetCollectionSearchForm />
        <EditCardsForm />
      </List>
      <MobileSidenavSpacer />
    </SidenavMobile>
    <SidenavDesktop variant="permanent" open={isSidenavOpen} anchor="left" disableScrollLock>
      <SidenavHeader>
        <IconButton onClick={handleSidenavCloseDesktop} size="large">
          <ChevronLeftIcon />
        </IconButton>
      </SidenavHeader>
      <Divider />
      <List>
        <SidenavItems />
      </List>
      <Divider />
      <List>
        <SearchForm />
        <SetSearchForm />
        <CollectionSearchForm />
        <SetCollectionSearchForm />
        <EditCardsForm />
      </List>
    </SidenavDesktop>
  </>;
};

const SidenavMobile = styled(Sidenav)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const SidenavDesktop = styled(Sidenav)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const HeaderBarMobile = styled(HeaderBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const HeaderBarDesktop = styled(HeaderBar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileSidenavSpacer = styled.div({
  minHeight: '300px',
});

export default Header;
