// prettier-ignore
import { Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div
      className="flex w-full"
      style={{
        background: '#EBEBEB',
        width: '100%',
        marginBottom: '1rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 'center',
      }}
    >
      <div
        className="flex items-center p-4"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '200px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          Toxic People
        </Typography>
      </div>
      <div
        className="right corner"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className="add button">
          <Button variant="contained" component={Link} to="/registertoxic">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
