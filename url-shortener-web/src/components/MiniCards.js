import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const MiniCards = ({ step, title }) => {
  const mainStyle = {
    borderRadius: '8px',
    backgroundColor: 'rgb(0, 63, 205)'
  };

  const style = {
    backgroundColor: 'white',
    width: '22px',
    borderRadius: '32px',
    textAlign: 'center'
  };

  return (
    <Stack direction='row' p={2} mr={5} sx={mainStyle}>
      <Typography sx={style}>{step}</Typography>
      <Typography color='white' ml={1}>{title}</Typography>
    </Stack>
  );
};

MiniCards.propTypes = {
  step: PropTypes.number,
  title: PropTypes.string
};

export default MiniCards;
