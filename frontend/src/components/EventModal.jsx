import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Divider,
  Stack,
} from '@mui/material';

const colors = ['#f6be23', '#f6501e', '#0ea5e9', '#22c55e'];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  overflowY: 'auto',
};

const EventModal = ({ onClose, onAdd }) => {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [color, setColor] = useState(colors[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !startTime || !endTime || !date) return;

    const newEvent = {
      title,
      date,
      startTime,
      endTime,
      color,
    };

    onAdd(newEvent);
    setTitle('');
    setStartTime('');
    setEndTime('');
    setDate(dayjs().format('YYYY-MM-DD'));
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={modalStyle}>
        <Stack spacing={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Add New Event</Typography>
            <Button onClick={onClose} color="error" size="small">Close</Button>
          </Box>

          <Divider />

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Event Title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Stack direction="row" spacing={2}>
                <TextField
                  label="Start Time"
                  type="time"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <TextField
                  label="End Time"
                  type="time"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </Stack>
              <TextField
                label="Color"
                select
                fullWidth
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {colors.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    <Box sx={{ width: 20, height: 20, backgroundColor: c, borderRadius: '50%', mr: 1 }} component="span" />
                    {c}
                  </MenuItem>
                ))}
              </TextField>

              <Button type="submit" variant="contained" color="primary">Add Event</Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EventModal;
