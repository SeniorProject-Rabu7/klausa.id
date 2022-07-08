import { useState, useRef } from 'react';
import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import WordComponent from './WordComponent';
import WordDefinitions from './WordDefinitions';

export default function Body({ sx }) {
  const [inputText, setInputText] = useState('');

  const [resultData, setResultData] = useState(null);
  const [currentWordDefinitions, setCurrentWordDefinitions] = useState(null);

  async function fetchData(textValue) {
    const PROCESS_TEXT_URL = 'http://localhost:7071/api/process-text'

    try {
      const rawResponse = await fetch(`${PROCESS_TEXT_URL}?text=${textValue}`);
      const jsonResponse = await rawResponse.json();
      setResultData(jsonResponse);
      setCurrentWordDefinitions(null);
    }
    catch (err) {
      window.alert('An error occured');
      throw err;
    }
  }

  const timeoutHandle = useRef(null);

  const handleInputTextChange = (ev) => {
    const { value } = ev.target;
    setInputText(value);

    if (timeoutHandle.current) {
      clearTimeout(timeoutHandle.current);
      timeoutHandle.current = null;
    }

    timeoutHandle.current = setTimeout(() => {
      fetchData(value)
    }, 500);
  };

  async function getWordDefinition(word) {
    const rawResponse = await fetch(`https://kbbi-api-amm.herokuapp.com/search?q=${word}`);
    const jsonResponse = await rawResponse.json();
    setCurrentWordDefinitions(jsonResponse.data.resultLists);
  }

  return (
    <Container component='main' sx={{
      p: '1rem', //?
      '& .text-wrapper': {
        m: '0.5rem'
      },
      display: 'flex',
      flexDirection: 'column',
      ...sx
    }} maxWidth='lg'>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        '& > .text-wrapper': {
          flex: '1 1 0%'
        }
      }}>
        <TextField
          id="multiline-text-entry"
          className='text-wrapper'
          label="Masukkan kalimat"
          multiline
          minRows={4}
          autoFocus
          fullWidth
          value={inputText}
          onChange={handleInputTextChange}
        />
        <Box
          className='text-wrapper'
          sx={{
            bgcolor: 'backdrop.main',
            borderRadius: 1,
            p: '0.75rem'
          }}
        >
          {resultData?.map(({ wordIndex, wordSpelling, wordTypeRaw }) => (
            <>
              <WordComponent
                key={wordIndex}
                wordIndex={wordIndex}
                spelling={wordSpelling}
                type={wordTypeRaw}
                onClick={getWordDefinition}
              />
              {' '}
            </>
          ))}
        </Box>
      </Box>
      {/* {currentWordDefinitions.map((wordDefArray) => (
        <WordDefini
      ))} */}
      {currentWordDefinitions && <WordDefinitions defs={currentWordDefinitions} />}
    </Container>
  );
}
