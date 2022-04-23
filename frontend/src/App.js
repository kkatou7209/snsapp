import * as React from 'react';

//import components
import {
  Header,
  Main,
  Footer
} from './components/index';

//import MUI components
import { 
  Container,
  Button
} from '@mui/material';

export default function App() {
  return (
    <div>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}