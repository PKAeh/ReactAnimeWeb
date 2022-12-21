import { createTheme, ThemeProvider } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import BasePagination from '../components/BasePagination'
import AddItemFavorite from '../components/favoriteAnime/AddItemFavorite'
import FavoriteAnimeList from '../components/favoriteAnime/FavoriteAnimeList'
import { useAppSelector } from '../hooks/reduxHooks'
import { usePage } from '../hooks/usePage'
import { getFavorite } from '../store/slicer'

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
		MuiTab: {
			styleOverrides: {
				root: {
					color: 'white',
					textTransform: 'none',
					padding: '10px',
					'&:hover': {
						color: '#fd5529'
					},
					'&.Mui-selected': {
						color: '#fd5529'
					},
					'&.Mui-focusVisible': {
						backgroundColor: '#d1eaff'
					}
				}
			}
		}
	}
})

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps): JSX.Element {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Grid sx={{ paddingTop: 2 }}>{children}</Grid>}
		</div>
	)
}

const FavoritePage = (): JSX.Element => {
	const favoriteList = useAppSelector(getFavorite)
	const [value, setValue] = useState<number>(0)

	const { page, setPage } = usePage()

	const listNameAnimeFavorite = favoriteList.map((item) => item.name)

	const onChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page)
	}

	const handleChange = (
		event: React.SyntheticEvent,
		newValue: number
	): void => {
		setValue(newValue)
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid
				sx={{
					color: 'white',
					width: '100%'
				}}
			>
				<Grid
					container
					sx={{ alignItems: 'center', bgcolor: 'rgba(0,0,0,0.5)' }}
				>
					<Grid xs>
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons
							aria-label="scrollable auto tabs example"
							TabIndicatorProps={{
								style: {
									backgroundColor: '#fd5529'
								}
							}}
							sx={{
								[`& .${tabsClasses.scrollButtons}`]: {
									'&.Mui-disabled': { opacity: 0.3 }
								}
							}}
						>
							{listNameAnimeFavorite.map(
								(resp, index): JSX.Element => (
									<Tab key={index} label={resp} />
								)
							)}
						</Tabs>
					</Grid>
					<Grid>
						<AddItemFavorite />
					</Grid>
				</Grid>

				{favoriteList.map((resp, index) => {
					const limit = 40
					const count = Math.ceil(resp.data.length / limit)
					const startIndex = (page - 1) * limit
					const endIndex = page * limit
					const data = resp.data.slice(startIndex, endIndex)
					return (
						<TabPanel key={index} value={value} index={index}>
							<Grid sx={{ padding: '0 10px', width: '100%' }}>
								<Grid>
									<FavoriteAnimeList
										data={data}
										listNameAnimeFavorite={
											listNameAnimeFavorite
										}
									/>
								</Grid>
								{count > 1 && (
									<Grid sx={{ padding: '15px 0' }}>
										<BasePagination
											page={page}
											count={count}
											onChange={onChange}
										/>
									</Grid>
								)}
							</Grid>
						</TabPanel>
					)
				})}
			</Grid>
		</ThemeProvider>
	)
}

export default FavoritePage
