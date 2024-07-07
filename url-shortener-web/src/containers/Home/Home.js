import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import URLShortenerModal from '../../components/URLShortenerModal';
import { shortenURL } from '../../service/UrlShortenerService';
import WhyChooseLaghuSection from './WhyChooseLaghuSection';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');
  const [shortenUrl, setShortenUrl] = useState('');

  function handleOnChange(event) {
    const { value } = event.target;
    setUrl(value);
  }

  async function handleClick() {
    try {
      const res = await shortenURL(url);
      if (res) {
        setShortenUrl(res.data);
        setShowModal(true);
      }
    } catch (err) {
      alert(err);
    }
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <NavBar />
      <Stack p={5} alignItems='center' sx={{ backgroundColor: 'white' }}>
        <img
          src="https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_1280.jpg"
          style={{ position: 'relative', width: '650px', height: '350px', borderRadius: '12px' }}
        />
        <Stack
          mt={10}
          textAlign='center'
          sx={{ position: 'absolute', color: 'white' }}
        >
          <Typography variant='h4' fontWeight={600}>
            URL Shortener
          </Typography>
          <Typography variant='h6' fontWeight={500}>
            Paste your untidy link to shorten it
          </Typography>
          <Typography variant='p' mt={1.5} mb={2} sx={{ maxWidth: '500px' }}>
            Free tool to shorten a URL or reduce a link. Use our URL Shortener
            to create a shortened & neat link making it easier to remember
          </Typography>
          <Stack direction='row'>
            <TextField
              fullWidth
              type='text'
              color='primary'
              placeholder='Enter link here'
              onChange={handleOnChange}
              sx={{ backgroundColor: 'white', borderRadius: '8px 3px 3px 8px' }}
            />
            <Button
              variant='outlined'
              sx={{ color: 'white',
                backgroundColor: '#645394',
                border: 'none',
                textTransform: 'none',
                width: '150px',
                borderRadius: '0 8px 8px 0',
                '&:hover': { backgroundColor: '#645394', border: 'none' } }}
              onClick={handleClick}
            >
              Shorten URL
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <HowItWorks />
      <WhyChooseLaghuSection />
      <FeaturesSection />
      <URLShortenerModal
        title='Get a shortened URL'
        description={shortenUrl}
        showModal={showModal}
        handleClose={handleClose}
      />;
      <Footer />
    </>
  );
}

export default Home;
