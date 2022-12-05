import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import './App.css'
import AnimeAppBar from './components/navigators/AnimeAppBar'
import Footer from './components/navigators/Footer'

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
    <ThemeProvider theme={theme}>
      <div>
        <AnimeAppBar />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
