import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types'; // Import PropTypes

const Appbar = ({ onMenuIconClick }) => {
  const handleMenuIconClick = () => {
    if (onMenuIconClick) {
      onMenuIconClick();
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleMenuIconClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Your App Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

// Add prop type validation
Appbar.propTypes = {
  onMenuIconClick: PropTypes.func, // Ensure 'onMenuIconClick' prop is a function
};

export default Appbar;
