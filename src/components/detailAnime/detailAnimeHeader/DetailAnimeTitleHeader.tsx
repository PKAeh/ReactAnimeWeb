import { Typography } from '@mui/material'
import BaseLink from '../../BaseLink'

interface DetailAnimeTitleHeaderProps {
  name: string
  pathPage: string
}

const DetailAnimeTitleHeader = ({
  name,
  pathPage
}: DetailAnimeTitleHeaderProps): JSX.Element => (
  <BaseLink to={pathPage}>
    <Typography
      sx={{ fontSize: '0.8em', fontWeight: 'bold', color: 'rgb(190,190, 190)' }}
    >
      {name}
    </Typography>
  </BaseLink>
)

export default DetailAnimeTitleHeader
