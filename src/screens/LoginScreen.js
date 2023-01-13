import * as React from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import TextField from '@mui/joy/TextField'
import Button from '@mui/joy/Button'
import Link from '@mui/joy/Link'

import { NavLink } from 'react-router-dom'

export default function App() {
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
            <Typography level="body2">Sign in to continue.</Typography>
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
          <Button sx={{ mt: 1 /* margin top */ }}>
            <NavLink to="/home"> Log in</NavLink>
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up"><NavLink to="/register"> Sign Up</NavLink></Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  )
}
