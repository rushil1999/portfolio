import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const navItems = [
  { label: 'About', id: 'intro' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
];

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(8, 13, 26, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h6"
          onClick={() => scrollTo('intro')}
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            letterSpacing: '-0.02em',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          RS
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {navItems.map(({ label, id }) => (
            <Button
              key={id}
              onClick={() => scrollTo(id)}
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
