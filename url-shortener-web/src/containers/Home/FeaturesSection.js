import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Card from '../../components/Card';

const FeaturesSection = () => {
  const [cardStyle, setCardStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid black',
    '&:hover': { cursor: 'pointer' }
  });

  function handleClickOnCard() {
    setCardStyle((prevState) => ({
      ...prevState,
      color: 'white',
      backgroundColor: '#3a3153',
      border: 'none'
    }));
  }

  return (
  <Stack m={4} id="home-page-features">
        <Typography
          p={2}
          variant='h2'
          margin='auto'
        >
          <span style={{ fontWeight: 'bold', color: '#645394' }}>Features</span> - What We Offer
        </Typography>
        <Stack direction='row' backgroundColor='white' m='auto' spacing={4}>
          <Card id={1}
            title='Shorten URLs' description='URL Shortener makes long links look cleaner and easier to share!
            Transform ugly links into nice, memorable and trackable short URLs.
            ' iconName='link' style={cardStyle} onClick={handleClickOnCard} />
          <Card id={2}
            title='Analytics' description='Track link clicks. Get insights about the performance of your shorten
            URL. See how much audience are you able to attract in real time.'
            iconName='analytics' style={cardStyle} onClick={handleClickOnCard} />
          <Card id={3}
            title='Generate QR Codes' description='Use our QR Code generator to generate dynamic and personalized
            QR codes for your links. Share it over websites, e-mails, social media to attract more customers.'
            iconName='qrCode' style={cardStyle} onClick={handleClickOnCard} />
        </Stack>
      </Stack>
  );
};

export default FeaturesSection;
