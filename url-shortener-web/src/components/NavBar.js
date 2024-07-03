import { Stack, Typography } from '@mui/material';

function NavBar() {
  return (
    <Stack direction='row' sx={{ p: 2 }}>
      <Typography
        variant='h4'
        sx={{ ml: 12 }}
        color='#645394'
      >
        Laghu
      </Typography>
      <Typography
        sx={{ ml: 10, mt: 1.5 }}
      >
        Why Laghu?
      </Typography>
      <Typography
        sx={{ ml: 5, mt: 1.5 }}
      >
        Features
      </Typography>
    </Stack>
  );
}

export default NavBar;
