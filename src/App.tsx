import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import AnimeAppBar from './components/navigators/AnimeAppBar'
import CategoryBar from './components/navigators/CategoryBar'
import Footer from './components/navigators/Footer'
import YearBar from './components/navigators/YearBar'
import { router } from './routes/route'

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 0, 0)'
    },
    secondary: {
      main: '#edf2ff'
    }
  }
})

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AnimeAppBar />
        <Container>
          <Grid container>
            <Grid xs={8}>
              <RouterProvider router={router} />
            </Grid>
            <Grid xs={4} sx={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
              <Grid>
                <CategoryBar />
              </Grid>
              <Grid>
                <YearBar />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
