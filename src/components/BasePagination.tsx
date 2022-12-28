import Pagination from '@mui/material/Pagination'
import { useTheme } from '@mui/material/styles'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useSearchParams } from 'react-router-dom'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { animeRed } from '../theme/color'

const newTheme = createTheme({
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
						color: animeRed
					},
					'&.Mui-selected': {
						color: animeRed
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
	const { isDesktop } = useIsDesktop()

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
		<ThemeProvider theme={newTheme}>
			<Pagination
				page={page}
				onChange={changeToPage}
				count={count}
				shape="rounded"
				size={isDesktop ? 'large' : 'small'}
				color="primary"
			/>
		</ThemeProvider>
	)
}

export default BasePagination
