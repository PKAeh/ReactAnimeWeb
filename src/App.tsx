import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { router } from './routes/route'
import { store } from './store/store'
import 'react-toastify/dist/ReactToastify.css'

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
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<RouterProvider router={router} />
					<ToastContainer />
				</ThemeProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default App
