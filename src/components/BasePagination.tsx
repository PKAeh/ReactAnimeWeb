import Pagination from '@mui/material/Pagination'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 0, 5)'
    },
    secondary: {
      main: '#edf2ff'
    }
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white',
          '&:hover': {
            color: '#fd5529'
          },
          '&.Mui-selected': {
            color: '#fd5529'
          }
        }
      }
    }
  }
})

interface BasePaginationProps {
  count: number
  page: number
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void
}

const BasePagination = ({
  count,
  page,
  onChange
}: BasePaginationProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Pagination
      page={page}
      onChange={onChange}
      count={count}
      shape="rounded"
      size="large"
      color="primary"
      sx={{}}
    />
  </ThemeProvider>
)

export default BasePagination
