import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-multiline-static"
          label="Masukan Kalimat"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
      <div>
        <Button
        variant="contained">
          Cek Struktur
        </Button>
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue=""
        />
      </div>

    </Box>
  );
}
