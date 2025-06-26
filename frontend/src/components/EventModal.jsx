import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, MenuItem, Stack, Divider
} from '@mui/material';
import dayjs from 'dayjs';

const colors = ['#f6be23', '#f6501e', '#0ea5e9', '#22c55e'];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  overflowY: 'auto',
};

const EventModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [color, setColor] = useState(colors[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !startTime || !endTime) return;

    onAdd({ title, date, startTime, endTime, color });
    onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <Box sx={modalStyle}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Add New Event</Typography>
            <Button onClick={onClose} color="error" size="small">Close</Button>
          </Box>
          <Divider />
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="Event Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
              <TextField type="date" label="Date" fullWidth value={date} InputLabelProps={{ shrink: true }} onChange={(e) => setDate(e.target.value)} />
              <Stack direction="row" spacing={2}>
                <TextField type="time" label="Start Time" fullWidth value={startTime} InputLabelProps={{ shrink: true }} onChange={(e) => setStartTime(e.target.value)} />
                <TextField type="time" label="End Time" fullWidth value={endTime} InputLabelProps={{ shrink: true }} onChange={(e) => setEndTime(e.target.value)} />
              </Stack>
              <TextField label="Color" select fullWidth value={color} onChange={(e) => setColor(e.target.value)}>
                {colors.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    <Box sx={{ width: 20, height: 20, backgroundColor: c, borderRadius: '50%', mr: 1 }} component="span" />
                    {c}
                  </MenuItem>
                ))}
              </TextField>
              <div className="flex justify-end">
                <Button type="submit" variant="contained" color="primary">Add Event</Button>
              </div>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EventModal;
