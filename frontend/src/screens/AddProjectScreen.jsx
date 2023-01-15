import React, {useEffect,useState} from 'react';
import Header from '../components/Header';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import { Autocomplete,createFilterOptions} from '@mui/material';
import {TextField} from '@mui/material';
import axios from 'axios';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

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
 
  const filter = createFilterOptions();

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;


  const [users, setCategories] = useState([]);

  const [openDialog, toggleOpenDialog] = React.useState(false);

  
  const handleClose = () => {
    setDialogValue({
      email: '',
      slug: '',
      image: '',
    });

    toggleOpenDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories({
      email: dialogValue.email
    });

    handleClose();
  };


  const [dialogValue, setDialogValue] = React.useState({
    email: ''

  });


  React.useEffect(() => {
      let active = true;

      if (!loading) {
          return undefined;
      }

      (async () => {

          var config = {
              method: 'get',
              url: 'http://localhost:5001/api/users',
          };

          axios(config)
              .then(function (response) {
                  response.data = response.data.filter((category) => category.email)
                  if (active) {
                      setOptions([...response.data]);
                  }

              })
              .catch(function (error) {
                  console.log(error);
          });


      })();

      return () => {
          active = false;
      };
  }, [loading]);

  React.useEffect(() => {
      if (!open) {
          setOptions([]);
      }
  }, [open]);
    
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
                id="async-list"
                open={open}
                limitTags={2}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.email === value.email}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option.email;
                }}
                options={options}
                loading={loading}
                multiple
                renderInput={(params) => (
                    <>
                        <TextField
                            {...params}
                            label="Team members"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                        {console.log(options)}
                    </>
                )}
                renderOption={(props, option, { inputValue }) => {
                    const matches = match(option.email, inputValue);
                    const parts = parse(option.email, matches);
      
                    return (
                        <li {...props}>
                            <div>
                                {parts.map((part, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            color: part.highlight ? "red" : 'inherit',
                                            fontWeight: part.highlight ? 700 : 400,
                                        }}
                                    >
                                      {part.text}
                                    </span>
                                ))}
                            </div>
                        </li>
                    );
                }}
      
                value={users}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    // timeout to avoid instant validation of the dialog's form.
                    setTimeout(() => {
                      toggleOpenDialog(true);
                      setDialogValue({
                        email: newValue
                       });
                    });
                  } else if (newValue && newValue.inputValue) {
                    toggleOpenDialog(true);
                    setDialogValue({
                      email: newValue.inputValue,
                    });
                  } else {
                    setCategories(newValue);
                  }
        
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    const { inputValue } = params;
                    const isExisting = options.some((option) => inputValue === option.email);
                    if (inputValue !== '' && !isExisting) {
                        filtered.push({
                            inputValue:inputValue,
                            email: `Add "${inputValue}"`,
                        });
                    }
                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
      
            />
            </form>
            <Button type="submit">
              Submit
            </Button>
          </Box>
    </div>
  );
}
export default AddProjectsScreen;
