import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'

export function NavBar ({ drawerWidth }) {
  return (
    <AppBar
      position='fixed'
      sx={{ 
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
       }}
    >
      <Toolbar>
        <IconButton color='inherit' sx={{display: {sm: 'none'}}}>
          <MenuOutlined></MenuOutlined>
        </IconButton>

        <Grid container justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap >Journal App</Typography>
          <IconButton>
            <LogoutOutlined></LogoutOutlined>
          </IconButton>
        </Grid>

      </Toolbar>

    </AppBar>
  )
}
