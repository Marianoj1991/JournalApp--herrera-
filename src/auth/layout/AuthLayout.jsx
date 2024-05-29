import { Grid, Typography } from '@mui/material'

export function AuthLayout({ title, children }) {
  return (
    <Grid
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
      spacing={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
      container
    >
      <Grid
        item
        sx={{
          backgroundColor: '#f0f0f0',
          padding: '2rem',
          borderRadius: '20px',
          width: {md: 450, sm: 450 }
        }}
      >
        <Typography variant='h5'>{title}</Typography>
        {children}
      </Grid>
    </Grid>
  )
}
