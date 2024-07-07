import { Link, Stack, Typography } from '@mui/material';

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
      <Link
        sx={{ ml: 10, mt: 1.5 }}
        underline='none'
        color='black'
        href='#home-page-why-laghu'
      >
        Why Laghu?
      </Link>
      <Link
        sx={{ ml: 5, mt: 1.5 }}
        underline='none'
        color='black'
        href='#home-page-features'
      >
        Features
      </Link>
      <Link
        sx={{ ml: 5, mt: 1.5 }}
        underline='none'
        color='black'
        href='#home-page-how-it-works'
      >
        How it works?
      </Link>
    </Stack>
  );
}

export default NavBar;
