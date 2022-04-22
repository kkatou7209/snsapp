import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function App() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper >
        Hello
      </Paper>
    </Box>
  );
}

export default App;
