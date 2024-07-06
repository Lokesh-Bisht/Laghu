import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Modal, Stack, TextField, Typography } from '@mui/material';
import Proptypes from 'prop-types';

const URLShortenerModal = ({ title, description, showModal, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& .MuiBackdrop-root': {
      backgroundColor: 'white'
    },
    backgroundColor: 'white',
    width: 400,
    borderRadius: '8px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  };

  return (
    <Modal
      open={showModal}
      sx={style}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Stack>
        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" mt={5} mb={3}>{title}</Typography>
          <IconButton onClick={handleClose} sx={{ width: '1.5rem', height: '2rem', float: 'right' }}>
            <CloseIcon sx={{ color: 'black' }} />
          </IconButton>
        </Stack>
        <Stack direction='row'>
          <TextField
            type="input"
            disabled={true}
            value={description}
            sx={{ color: 'black' }}
            fullWidth={true}
          />
          <IconButton
            sx={{ width: '2rem',
              height: '3.5rem',
              marginTop: 'center',
              borderRadius: '5px' }}
          >
            <ContentCopyIcon sx={{ color: 'black' }} />
          </IconButton>
        </Stack>
      </Stack>
    </Modal>
  );
};

URLShortenerModal.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string,
  showModal: Proptypes.bool,
  handleClose: Proptypes.func
};

export default URLShortenerModal;
