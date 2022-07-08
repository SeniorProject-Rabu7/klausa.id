import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import * as colors from '@mui/material/colors';

function SROnlySpan({ children }) {
  return (
    <Box component='span' display='block' sx={visuallyHidden}>
      {children}
    </Box>
  );
}

export default function WordComponent({ wordIndex, spelling, type, onClick }) {
  return (
    <Box
      sx={{
        display: 'inline-block',
        cursor: 'pointer',
        textAlign: 'center',
        ':hover': {
          bgcolor: colors.grey[400]
        }
      }}
      // onClick={() => {onClick(wordIndex)}}
      onClick={() => {onClick(spelling)}}
    >
      <Box component='span' display='block'>{spelling}</Box>
      <Box sx={{ height: '0.05em', bgcolor: 'currentcolor' }} role='presentation' />
      <Box component='span' display='block' fontSize='0.5em'>
        <SROnlySpan> (</SROnlySpan>{type}<SROnlySpan>)</SROnlySpan>
      </Box>
    </Box>
  );
}