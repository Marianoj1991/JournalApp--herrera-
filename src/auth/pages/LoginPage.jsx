import { Google } from '@mui/icons-material'
import { Link as LinkRouter } from 'react-router-dom'
import {
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export function LoginPage() {
  return (
    <AuthLayout title='Login'>
      <form style={{ marginTop: '1rem' }}>
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <TextField
              type='mail'
              label='mail'
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
              label='password'
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
              md={6}
            >
              <Button
                variant='contained'
                fullWidth
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
            >
              <Button
                variant='contained'
                fullWidth
              >
                <Google />
                <Typography pl={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent='end'
            mt={2}
          >
            <Link
              sx={{ textDecoration: 'none', color: 'inherit' }}
              component={LinkRouter}
              to='/auth/register'
            >
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

// <Grid
//   container
//   spacing={0}
//   justifyContent='center'
//   alignItems='center'
//   direction='column'
//   sx={{ backgroundColor: 'primary.main', minHeight: '100vh' }}
// >
//   <Grid
//     sx={{ padding: 4, backgroundColor: '#fcfcfc', borderRadius: '1rem' }}
//     item
//   >
//     <Typography variant='h5'>Login</Typography>

//     <Form style={{ marginTop: '1rem' }}>
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//         >
//           <TextField
//             type='mail'
//             label='mail'
//             placeholder='mail@gmail.com'
//             fullWidth
//           ></TextField>
//         </Grid>
//         <Grid
//           pt={2}
//           item
//           xs={12}
//         >
//           <TextField
//             type='password'
//             fullWidth
//             label='***********'
//             placeholder='mail@gmail.com'
//           ></TextField>
//         </Grid>

//         <Grid
//           pt={2}
//           spacing={2}
//           container
//         >
//           <Grid
//             item
//             xs={12}
//             md={6}
//           >
//             <Button
//               fullWidth
//               variant='contained'
//             >
//               Login
//             </Button>
//           </Grid>
//           <Grid
//             item
//             fullWidth
//             xs={12}
//             md={6}
//           >
//             <Button
//               fullWidth
//               variant='contained'
//             >
//               <Google></Google>
//               <Typography sx={{pl: 1}}>Google</Typography>
//             </Button>
//           </Grid>
//         </Grid>

//         <Grid
//           sx={{pt: 2}}
//           container
//           direction='row'
//           justifyContent='end'
//         >
//           <Grid item>
//             <Link
//               component={LinkRouter}
//               color='inherit'
//               to='/auth/register'
//             >
//               Create an account
//             </Link>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Form>
//   </Grid>
// </Grid>
