import { Form, Link as LinkRouter } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export function RegisterPage() {
  return (
    <AuthLayout title='Register'>
      <form style={{ marginTop: '1rem' }}>
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <TextField
              type='text'
              label='Full-name'
              placeholder='Jonh Doe'
              fullWidth
            ></TextField>
          </Grid>
          <Grid
            item
            xs={12}
            pt={2}
          >
            <TextField
              type='mail'
              label='Mail'
              placeholder='mail@gmail.com'
              fullWidth
            ></TextField>
          </Grid>
          <Grid
            item
            xs={12}
            pt={2}
          >
            <TextField
              type='password'
              label='Password'
              placeholder='**************'
              fullWidth
            ></TextField>
          </Grid>

          <Grid
            container
            spacing={1}
            pt={2}
          >
            <Grid
              item
              xs={12}
            >
              <Button
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent='end'
            mt={2}
          >
            <Typography mr={1}>
              Do you have an account?
            </Typography>
            <Link
              sx={{ color: 'inherit' }}
              component={LinkRouter}
              to='/auth/login'
            >
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
