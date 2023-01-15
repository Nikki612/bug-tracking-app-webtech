<<<<<<< Updated upstream
import  React, { useEffect, useState } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import TextField from '@mui/joy/TextField'
import Button from '@mui/joy/Button'
import Link from '@mui/joy/Link'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios'

  export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(event) {
      event.preventDefault();
      return axios.post('http://localhost:5001/api/newUser', {
          email: email,
          password: password
      })
        .then((response) => {
          navigate("/")
        })
        .catch((error) => {
          console.error(error);
        });
    }
=======
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { NavLink } from 'react-router-dom';

function SignUpScreen() {
>>>>>>> Stashed changes
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Register now</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
<<<<<<< Updated upstream
          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSubmit}> Sign Up</Button>
=======
          <Button sx={{ mt: 1 /* margin top */ }}>
            <NavLink to="/"> Sign Up</NavLink>
          </Button>
>>>>>>> Stashed changes
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

export default SignUpScreen;
