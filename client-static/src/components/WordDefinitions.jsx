import { Box } from '@mui/material';

export default function WordDefinitions({ defs }) {
    // const {} = 
    return (
        <Box>
            {defs?.map(({ kata, arti }) => (
                <>
                    <h1>{kata}</h1>
                    <ol>
                        {arti.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ol>
                </>
            ))}
        </Box>
    )
}