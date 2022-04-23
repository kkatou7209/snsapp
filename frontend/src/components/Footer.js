//import MUI components
import {
  Box,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';

//import MUI icons
import {
  Create,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <footer>
      <Box >
        <BottomNavigation>
          <BottomNavigationAction icon={<Create />}/>
        </BottomNavigation>
      </Box>
    </footer>
  )
}