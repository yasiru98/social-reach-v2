import Typography from '@material-ui/core/Typography';
import logo from './../logo.svg';
import { Button, Paper,Box } from '@material-ui/core';


  
  function Section2(props) {
    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Section 3
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Box>
    );
  }
  
  export default Section2;