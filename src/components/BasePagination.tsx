import Pagination from '@mui/material/Pagination'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import { useSearchParams } from 'react-router-dom'

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
}: BasePaginationProps): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams()
	const changeToPage = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		if (onChange) {
			onChange(event, page)
		}
		window.scroll(0, 0)
		setSearchParams((prev) => {
			prev.set('page', page.toString())

			return prev
		})
	}
	return (
		<ThemeProvider theme={theme}>
			<Pagination
				page={page}
				onChange={changeToPage}
				count={count}
				shape="rounded"
				size="large"
				color="primary"
			/>
		</ThemeProvider>
	)
}

export default BasePagination
