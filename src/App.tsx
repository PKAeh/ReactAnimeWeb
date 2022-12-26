import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { router } from './routes/route'
import { persistor, store } from './store/store'
import 'react-toastify/dist/ReactToastify.css'
import { animeRed } from './theme/color'

declare module '@mui/material/styles' {
	interface Palette {
		animeRed?: Palette['primary']
	}

	interface PaletteOptions {
		animeRed?: PaletteOptions['primary']
	}
}

const queryClient = new QueryClient()

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(0, 0, 0)'
		},
		secondary: {
			main: '#edf2ff'
		},
		animeRed: {
			main: animeRed
		}
	}
})

function App(): JSX.Element {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<RouterProvider router={router} />
						<ToastContainer />
					</ThemeProvider>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
