import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const staticBookings = [
  { id: 1, restaurant: 'Italian Bistro', date: '2025-01-15', time: '7:00 PM', status: 'Confirmed' },
  { id: 2, restaurant: 'Sushi Place', date: '2025-01-20', time: '6:30 PM', status: 'Pending' },
  { id: 3, restaurant: 'Burger Joint', date: '2025-01-10', time: '8:00 PM', status: 'Completed' },
];

export default function MyBookings() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>My Bookings</Typography>
      {staticBookings.length > 0 ? (
        <List>
          {staticBookings.map((booking) => (
            <ListItem key={booking.id}>
              <ListItemText
                primary={`${booking.restaurant} - ${booking.date} at ${booking.time}`}
                secondary={`Status: ${booking.status}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No bookings found.</Typography>
      )}
    </Box>
  );
}