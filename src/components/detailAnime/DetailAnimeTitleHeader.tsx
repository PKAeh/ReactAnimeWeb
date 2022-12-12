import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface DetailAnimeTitleHeaderProps {
  name: string
  pathPage: string
}

const DetailAnimeTitleHeader = ({
  name,
  pathPage
}: DetailAnimeTitleHeaderProps): JSX.Element => (
  <Link
    to={pathPage}
    style={{
      color: 'rgb(190,190, 190)',
      textDecoration: 'none'
    }}
  >
    <Typography sx={{ fontSize: '0.8em', fontWeight: 'bold' }}>
      {name}
    </Typography>
  </Link>
)

export default DetailAnimeTitleHeader
