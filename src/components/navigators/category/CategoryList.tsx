import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useCategoriesAll } from '../../../hooks/useCategory'
import { BaseLoader } from '../../BaseLoader'

export const CategoryList = (): JSX.Element => {
  const { categoriesLoading, categories, categoriesError } = useCategoriesAll()

  const click = (): void => {
    console.log('click')
  }

  if (categoriesLoading) {
    return <BaseLoader />
  }
  return (
    <>
      {categories?.data.data.map((resp) => (
        <Grid
          container
          key={resp.id}
          sx={{
            alignItems: 'center',
            padding: '10px 0 5px 0',
            borderBottom: '1px solid rgba(160,160, 160, 0.2)'
          }}
        >
          <Grid
            container
            onClick={click}
            sx={{
              color: 'rgb(160,160, 160)',
              '&:hover': {
                color: '#fd2226',
                cursor: 'pointer'
              }
            }}
          >
            <ArrowRightIcon sx={{ fontSize: '18px', color: 'white' }} />
            <Typography
              sx={{
                fontWeight: '500',
                fontSize: '0.9em',
                paddingLeft: '5px'
              }}
            >
              {resp.attributes.title}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
}
