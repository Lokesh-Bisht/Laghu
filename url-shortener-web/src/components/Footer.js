/* eslint-disable import/no-extraneous-dependencies */
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider, IconButton, Stack, Typography } from '@mui/material';

function Footer() {
  return (
    <>
      <Stack p={2} backgroundColor='rgb(22, 27, 34)' color='white'>
        <Typography>URL Shortener</Typography>
        <Divider ml='12px' color='white'></Divider>
      </Stack>
      <Stack direction='row' p={2} backgroundColor='rgb(22, 27, 34)'>
        <IconButton href='https://github.com/Lokesh-Bisht/'>
          <GitHubIcon sx={{ color: 'white', marginLeft: '12px' }} />
        </IconButton>
        <IconButton href='https://www.linkedin.com/in/lokesh-bisht-2b479b202/'>
          <LinkedInIcon sx={{ color: 'white' }} />
        </IconButton>
        <Typography
          ml='auto'
          mr={5}
          mt='auto'
          mb='auto'
          color='white'
          sx={{ fontWeight: 'bold' }}
        >
          Copyright © 2024 Laghu | Lokesh Bisht
        </Typography>
      </Stack>
    </>
  );
}

export default Footer;
