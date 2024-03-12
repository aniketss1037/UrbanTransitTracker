import { useState } from 'react';
import PropTypes from 'prop-types';

import { Switch, FormGroup, FormControlLabel } from '@mui/material';

const ToggleSwitch = ({ label, darkMode, onThemeToggle }) => {
  const [checked, setChecked] = useState(darkMode);

  const handleToggleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onThemeToggle) {
      onThemeToggle(newValue);
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleToggleChange} />}
        label={label}
      />
    </FormGroup>
  );
};

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;
