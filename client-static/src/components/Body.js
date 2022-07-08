import { useState, useRef } from 'react';
import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import WordComponent from './WordComponent';

export default function Body({ sx }) {
  const [inputText, setInputText] = useState('');

  const [resultData, setResultData] = useState(null);

  async function fetchData(textValue) {
    setResultData([
      {
        wordIndex: 0,
        wordSpelling: 'Halo',
        wordTypeRaw: 'notVrervb',
      },
      {
        wordIndex: 1,
        wordSpelling: 'dunia',
        wordTypeRaw: 'adjektivpa',
      },
      {
        wordIndex: 2,
        wordSpelling: 'yeah',
        wordTypeRaw: 'nounne',
      },
    ])
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
              />
              {' '}
            </>
          ))}
        </Box>
      </Box>

    </Container>
  );
}
