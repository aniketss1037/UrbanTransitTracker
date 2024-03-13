import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
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
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMenuIconClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap sx={{ marginLeft: 24 }}>
            UrbanTransitTracker
          </Typography>
        </div>
        <div>
          <Button variant="contained" color="secondary" href="/login" sx={{ marginRight: 1 }}>
            Login
          </Button>
          <Button variant="contained" color="secondary" href="/register">
            Register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// Add prop type validation
Appbar.propTypes = {
  onMenuIconClick: PropTypes.func, // Ensure 'onMenuIconClick' prop is a function
};

export default Appbar;
