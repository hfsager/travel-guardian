import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import LoginForm from './LoginForm';

const LoginPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        data-testid="login-button"
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        color="warning"
      >
        Login
      </Button>

      <Popover
        data-testid="login-popover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          style: { width: '20%', height: '30%' },
        }}
      >
        <Typography sx={{ p: 4 }}>
          <LoginForm />
        </Typography>
      </Popover>
    </>
  );
};

export default LoginPopover;
