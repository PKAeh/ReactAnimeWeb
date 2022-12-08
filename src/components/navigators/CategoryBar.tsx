import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FacebookDummy from './category/FacebookDummy'

const CategoryBar = (): JSX.Element => (
  <Grid>
    <FacebookDummy />
    <Grid sx={{ padding: '5px 10px 5px 20px' }}>
      <Grid
        container
        sx={{
          alignItems: 'center'
        }}
      >
        <Grid xs={10}>
          <Typography sx={{ fontWeight: 'bold', color: 'rgb(160,160, 160)' }}>
            ประเภท / แนวอนิเมะ
          </Typography>
        </Grid>
        <Grid
          xs={2}
          container
          sx={{ justifyContent: 'end', alignItems: 'center' }}
        >
          <ArrowDropDownIcon sx={{ fontSize: '1.9em', color: 'white' }} />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ textAlign: 'center', padding: '10px 13px 10px 0' }}
        columns={9}
        spacing={0.5}
      ></Grid>
    </Grid>
  </Grid>
)

export default CategoryBar
