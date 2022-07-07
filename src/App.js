import './App.css';
import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[700],
    },
  },
});

function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  </ThemeProvider>
  );
}

export default App;
