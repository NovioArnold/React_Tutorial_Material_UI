import  * as React from 'react';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { TextField } from '@mui/material';



import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        href="https://mui.com" color='inherit'>
          My app
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>

  );
}

export default function App() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{ my: 4 }}>
          <Button type="button" onClick={() => window.location.reload()}>Reset</Button>
        <Typography component="h1" variant="h4" color="text.primary" gutterBottom>
          Create React App example
        </Typography>
        <TextField>Hello</TextField>
        <ProTip />
        <Copyright /> 
      </Box>
    </Container>
  )
}

