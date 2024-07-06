/* eslint-disable import/no-extraneous-dependencies */
import { Stack, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';
import Proptypes from 'prop-types';

const Card = (props) => {
  const { id, title, description, iconName, style, onClick } = props;
  return (
    <Stack key={id} p={3} sx={ style } width={280} height={300} onClick={onClick}>
      { iconName === 'link' && <LinkIcon fontSize='large' /> }
      { iconName === 'key' && <KeyIcon fontSize='large' /> }
      { iconName === 'gear' && <SettingsIcon fontSize='large' /> }
      <Typography variant='h4' mt={1.5}>{title}</Typography>
      <Typography variant='p' mt={1}>{description}</Typography>
    </Stack>
  );
};

Card.propTypes = {
  id: Proptypes.number,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  iconName: Proptypes.string.isRequired,
  style: Proptypes.object,
  onClick: Proptypes.func
};

export default Card;
