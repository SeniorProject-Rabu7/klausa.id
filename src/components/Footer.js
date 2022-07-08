import { Box } from '@mui/material';

function Footer() {
  return (
    <Box component='footer' sx={{
      bgcolor: 'secondary.main',
      fontSize: '0.6rem',
      textAlign: 'center',
      p: '1rem',
      '& p': {
        m: 0
      },
      mt: '1rem'
    }}>
      <p>&copy; 2022 Klausa.id. All rights reserved.</p>
    </Box>
  );
}

export default Footer;