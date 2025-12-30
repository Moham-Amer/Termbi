import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Rating } from '@mui/material';

const staticReviews = [
  { id: 1, rating: 5, comment: 'Amazing food and service!' },
  { id: 2, rating: 4, comment: 'Good experience overall.' },
  { id: 3, rating: 3, comment: 'It was okay, nothing special.' },
];

export default function MyReviews() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>My Reviews</Typography>
      {staticReviews.length > 0 ? (
        <List>
          {staticReviews.map((review) => (
            <ListItem key={review.id}>
              <ListItemText
                primary={<Rating value={review.rating} readOnly />}
                secondary={review.comment}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No reviews yet.</Typography>
      )}
    </Box>
  );
}