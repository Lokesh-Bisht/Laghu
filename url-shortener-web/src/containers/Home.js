import { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import URLShortenerModal from '../components/URLShortenerModal';
import { shortenURL } from '../service/UrlShortenerService';

function Home() {
  const [cardStyle, setCardStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid black',
    '&:hover': { cursor: 'pointer' }
  });
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

  function handleClickOnCard() {
    setCardStyle((prevState) => ({
      ...prevState,
      color: 'white',
      backgroundColor: '#3a3153',
      border: 'none'
    }));
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
              onChange={handleOnChange}
              sx={{ backgroundColor: 'white', borderRadius: '8px 3px 3px 8px' }}
            />
            <Button
              variant='outlined'
              sx={{ color: 'white',
                backgroundColor: '#645394',
                border: 'none',
                textTransform: 'none',
                borderRadius: '0 8px 8px 0',
                '&:hover': { backgroundColor: '#645394', border: 'none' } }}
              onClick={handleClick}
            >
              Shorten
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack p={10} backgroundColor='#3a3153' color='white' >
        <Stack direction='row'>
          <Stack>
            <Typography variant='h4'>Why Choose Laghu?</Typography>
            <Typography variant='p'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here, content here, making it look
            like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a search for
            lorem ipsum will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like).
            </Typography>
          </Stack>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/04/16/44/barberry-8612696_1280.jpg"
            style={{ position: 'relative', width: '300px', height: '200px', borderRadius: '12px' }}
          />
        </Stack>
      </Stack>
      <Stack m={4}>
      <Typography
        p={2}
        variant='h4'
        margin='auto'
      >
        <span style={{ fontWeight: 'bold', color: '#645394' }}>Features</span> - What We Offer
      </Typography>
        <Stack direction='row' backgroundColor='white' m='auto' spacing={4}>
          <Card id={1}
            title='Shorten URLs' description='It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is' iconName='link' style={cardStyle} onClick={handleClickOnCard} />
          <Card id={2}
            title='Shorten URLs' description='It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is' iconName='key' style={cardStyle} onClick={handleClickOnCard} />
          <Card id={3}
            title='Shorten URLs' description='It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is' iconName='gear' style={cardStyle} onClick={handleClickOnCard} />
        </Stack>
      </Stack>
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
