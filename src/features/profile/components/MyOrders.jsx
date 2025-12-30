import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const staticOrders = [
  { id: 1, status: 'Delivered', total: 45.99 },
  { id: 2, status: 'In Progress', total: 32.50 },
  { id: 3, status: 'Cancelled', total: 18.75 },
];

export default function MyOrders() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>My Orders</Typography>
      {staticOrders.length > 0 ? (
        <List>
          {staticOrders.map((order) => (
            <ListItem key={order.id}>
              <ListItemText
                primary={`Order #${order.id}`}
                secondary={`Status: ${order.status} | Total: $${order.total}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No orders found.</Typography>
      )}
    </Box>
  );
}