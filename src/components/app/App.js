import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import Section1 from './../section-1';
import Section2 from './../section-2';
import Section3 from './../section-3';
function App() {
  return (

    <Container maxWidth="xl" className="App">
      <Section1 />
      <Section2 />
      <Section3 />
    </Container>
  );
}
export default App;