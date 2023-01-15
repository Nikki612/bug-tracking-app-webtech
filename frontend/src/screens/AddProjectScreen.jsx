import React, {useEffect,useState} from 'react';
import Header from '../components/Header';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import { Autocomplete } from '@mui/material';
import {TextField} from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function AddProjectsScreen() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [users,setUsers]=useState('')

  useEffect(() => {
    function completeList()
    {
      axios
      .get('http://localhost:5001/api/users')
      .then((response) => {
        setUsers(response.data);
        console.log("Response",response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }})
    
  return (
    <div>
      <Header />
      <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add a Project
            </Typography>
            <form
              id="modal-modal-description"
              sx={{ mt: 2 }}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Typography sx={{ mt: 2 }}>Name of the project:</Typography>
              <Input
                placeholder="name"
                required
                sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
              />
              <Typography sx={{ mt: 2 }}>Description:</Typography>
              <Input
                placeholder="zi ba ce face"
                required
                sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
              />
              <Typography sx={{ mt: 2 }}>Repository:</Typography>
              <Input
                placeholder="da linku"
                required
                sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
              />
              <Autocomplete
                multiple
                id="tags-standard"
                options={users}
                getOptionLabel={(users) => users.email}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Team Members"
                    placeholder="Favorites"
                />
                )}
      />
            </form>
            <Button onClick={handleClose} type="submit">
              Submit
            </Button>
          </Box>
    </div>
  );
}
export default AddProjectsScreen;
