import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        {/* Add more menu items as needed */}
      </List>
    </Drawer>
  );
};

// Add prop type validation
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired, // Ensure 'open' prop is a boolean and required
  onClose: PropTypes.func.isRequired, // Ensure 'onClose' prop is a function and required
};

export default Sidebar;
