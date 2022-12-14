import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

interface AllCategoryAnimeTitleProps {
  category: string
}

const AllCategoryAnimeTitle = ({
  category
}: AllCategoryAnimeTitleProps): JSX.Element => (
  <Grid
    container
    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
  >
    <Grid container>
      <Typography
        sx={{
          fontSize: '1.2em',
          fontWeight: '600',
          borderLeft: '3.5px solid #fd5529 ',
          paddingLeft: '13px',
          lineHeight: '21px',
          color: 'white'
        }}
      >
        อนิเมะ {category}
      </Typography>
    </Grid>
  </Grid>
)

export default AllCategoryAnimeTitle
