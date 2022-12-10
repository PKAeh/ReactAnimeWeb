import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

interface BaseLoaderProps {
  style?: React.CSSProperties
}

export const BaseLoader = ({ style }: BaseLoaderProps): JSX.Element => (
  <Box sx={{ width: '100%', textAlign: 'center' }} style={style}>
    <CircularProgress />
  </Box>
)
