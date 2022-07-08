import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material'
import * as colors from '@mui/material/colors'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DD4A48',
    },
    secondary: {
      main: '#F5EEDC'
    },
    backdrop: {
      main: colors.grey.A200
    }
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif'
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <Body sx={{ flexGrow: 1 }}  />
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
