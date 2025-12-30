import React, { useState } from 'react';
import { Box, Typography, Button, TextField, MenuItem, Grid, Paper, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const reservationTypes = [
  { label: 'Reserve a table', img: '/reserve1.png' },
  { label: 'Reserve multiple tables', img: '/reserve2.png' },
  { label: 'Reserve all restaurant', img: '/reserve3.png' },
  { label: 'Reserve for Event', img: '/reserve4.png' },
];

const times = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM',
];

export default function ReservationPage() {
  const [selectedType, setSelectedType] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6, p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
        <span style={{ color: '#DB4444' }}>Reserve</span> Details
      </Typography>
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {reservationTypes.map((type, idx) => (
          <Grid item xs={6} sm={3} key={type.label}>
            <Paper
              elevation={0}
              sx={{
                border: idx === selectedType ? '2px solid #DB4444' : '2px solid #eee',
                borderRadius: 3,
                p: 2,
                textAlign: 'center',
                cursor: 'pointer',
                boxShadow: idx === selectedType ? '0 2px 12px #f3f3f3' : 'none',
                transition: 'border 0.2s',
              }}
              onClick={() => setSelectedType(idx)}
            >
              <img src={type.img} alt={type.label} style={{ width: 80, height: 80, marginBottom: 8 }} />
              <Typography sx={{ fontWeight: idx === selectedType ? 700 : 500, color: idx === selectedType ? '#DB4444' : '#222', fontSize: 16 }}>
                {type.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'Row', gap: 2 }}>
   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Booking date"
            value={date}
            onChange={setDate}
            renderInput={(params) => (
              <TextField {...params} fullWidth InputProps={{ ...params.InputProps, endAdornment: (
                <InputAdornment position="end"><CalendarTodayIcon sx={{ color: '#DB4444' }} /></InputAdornment>
              ) }} />
            )}
          />
        </LocalizationProvider>
        <TextField
          select
          label="Booking Time"
          value={time}
          onChange={e => setTime(e.target.value)}
          fullWidth
          InputProps={{ endAdornment: (
            <InputAdornment position="end"><AccessTimeIcon sx={{ color: '#DB4444' }} /></InputAdornment>
          ) }}
        >
          {times.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
        </TextField>
        <TextField
          label="Guests"
          type="number"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          fullWidth
          inputProps={{ min: 1 }}
        />
     
      </Box>

<TextField 
          label="Notes, important details or special request"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          fullWidth
          multiline
          minRows={2}
        />
        
      </Box>
   
      
      
      <Button
        variant="contained"
        fullWidth
        sx={{ background: '#BDBDBD', color: '#fff', borderRadius: 2, fontWeight: 600, fontSize: 18, py: 1.5, mt: 2 }}
        disabled={!date || !time || !guests}
      >
        Reserve Now
      </Button>
    </Box>
    
  );
}
