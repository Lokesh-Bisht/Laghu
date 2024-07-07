import { Stack, Typography } from '@mui/material';

const WhyChooseLaghuSection = () => (
  <Stack p={8} backgroundColor='#3a3153' color='white' id='home-page-why-laghu'>
        <Stack direction='row'>
          <Stack>
            <Typography variant='h2' mb={2}>Why Choose Laghu?</Typography>
            <Typography variant='p' mr={4} letterSpacing={1} lineHeight={1.5}>
              With Laghu&apos;s URL Shortener you can transform long and complex URLs into
              simplified, shareable and trackable links. Reuse the short link on your websites,
              documents, graphics, share it over the email or social media. And find the
              total number of clicks your short link has received. Besides Laghu&apos;s URL
              shortener you can also use the QR Code generator to genrate personalized
              QR codes for your links. Make the most of all-in-one short URL generator
              and get all the performance data you need to boost your marketing game.
            </Typography>
          </Stack>
          <img
            src="https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3.png"
            style={{ position: 'relative', width: '350px', height: '250px', borderRadius: '12px' }}
          />
        </Stack>
      </Stack>
);

export default WhyChooseLaghuSection;
