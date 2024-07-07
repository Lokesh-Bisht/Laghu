import { Stack, Typography } from '@mui/material';
import MiniCards from '../../components/MiniCards';

const HowItWorks = () => {
  const style = {
    color: 'white',
    justifyContent: 'space-between'
  };

  return (
    <Stack backgroundColor='rgb(22, 27, 34)' p={6} id='home-page-how-it-works'>
      <Stack direction='row' sx={style} m={2}>
        <Typography variant='h2'>
          How it works?
        </Typography>
      </Stack>
      <Stack direction='row' backgroundColor='#bdc3c7' p={2} m={2} borderRadius='16px'>
        <MiniCards step={1} title='Put Link'/>
        <MiniCards step={2} title='Click Shorten URL'/>
        <MiniCards step={3} title='Copy Shorten URL'/>
        <MiniCards step={4} title='Share'/>
      </Stack>
    </Stack>
  );
};

export default HowItWorks;
