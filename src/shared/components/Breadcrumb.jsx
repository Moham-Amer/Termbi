import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

const Breadcrumb = ({ show, items }) => {
  if (!show) return null;

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      {items.map((item, index) => (
        index === items.length - 1 ? (
          <Typography key={index} color="text.primary">{item}</Typography>
        ) : (
          <Link key={index} color="inherit" href="#">{item}</Link>
        )
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;