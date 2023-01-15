import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';

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

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Add Project</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
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
              <Typography sx={{ mt: 2 }}>Team:</Typography>
              <Input
                placeholder="write the e-mails of the team-members separated by ,"
                required
                sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
              />
            </form>
            <Button onClick={handleClose} type="submit">
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default BasicModal;
