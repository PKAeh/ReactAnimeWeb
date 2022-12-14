import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCategoriesAll } from '../../../hooks/useCategory'
import { BaseLoader } from '../../BaseLoader'

export const CategoryList = (): JSX.Element => {
  const { slug: category } = useParams()
  const { categoriesLoading, categories, categoriesError } = useCategoriesAll()

  const click = (): void => {
    window.scroll(0, 0)
  }

  if (categoriesLoading) {
    return <BaseLoader />
  }
  return (
    <Grid>
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
          <Link
            to={`/category/${resp.attributes.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <Grid
              container
              onClick={click}
              sx={{
                color: 'rgb(160,160, 160)',
                '&:hover': {
                  color: '#fd5529',
                  cursor: 'pointer'
                }
              }}
            >
              <ArrowRightIcon
                sx={{
                  fontSize: '18px',
                  color: resp.attributes.slug === category ? '#fd5529' : 'white'
                }}
              />
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
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}
