import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

export const BaseLoader = (): JSX.Element => (
  <Box sx={{ width: '100%', textAlign: 'center' }}>
    <CircularProgress />
  </Box>
)
