
//import MUI components
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  AccountCircle,
  Create
} from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar position='static' >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography variant='h5' sx={{flexGrow: 1}}>
            SNSAPP
          </Typography>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}