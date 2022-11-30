import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuthentication } from '../../auth/AuthenticationProvider';
import Link from '../Link';

interface AccountMenuProps {
  anchorEl: null | HTMLElement;
  handleClose(): void;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ anchorEl, handleClose }) => {
  const { isAuthenticated } = useAuthentication();
  return (
    <Menu
      id="account-menu"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {!isAuthenticated && (
        <MenuItem onClick={handleClose} component={Link} href="/login" color="inherit">
          Log In
        </MenuItem>
      )}
      {!isAuthenticated && (
        <MenuItem onClick={handleClose} component={Link} href="/signup" color="inherit">
          Sign Up
        </MenuItem>
      )}
      {isAuthenticated && (
        <nav>
          <MenuItem onClick={handleClose} component={Link} href="/account" color="inherit">
            Account
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} href="/logout" color="inherit">
            Log Out
          </MenuItem>
        </nav>
      )}
    </Menu>
  );
};

export default AccountMenu;
