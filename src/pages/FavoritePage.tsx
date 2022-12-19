import { createTheme, ThemeProvider } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { BaseLoader } from '../components/BaseLoader'
import BasePagination from '../components/BasePagination'
import AddItemFavorite from '../components/favoriteAnime/AddItemFavorite'
import FavoriteAnimeList from '../components/favoriteAnime/FavoriteAnimeList'
import { usePage } from '../hooks/usePage'
import { useShowAllAnime } from '../hooks/useShowAllAnime'

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

const listNameAnimeFavorite: string[] = [
	'อนิเมะชื่นชอบ',
	'Sword Act Online',
	'Boku Academe',
	'JoJo',
	'Anime Movie',
	'Fantasy',
	'Love comandy',
	'Action'
]

const FavoritePage = (): JSX.Element => {
	const [value, setValue] = useState<number>(0)

	const { page, setPage } = usePage()
	const { showAllAnimeLoading, showAllAnime, showAllAnimeError } =
		useShowAllAnime(page)
	const count = Math.ceil((showAllAnime?.meta.count ?? 0) / 40)

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

	if (showAllAnimeLoading) {
		return <BaseLoader style={{ marginTop: '100px' }} />
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
				<TabPanel value={value} index={0}>
					<Grid sx={{ padding: '0 10px', width: '100%' }}>
						<Grid>
							{showAllAnime && (
								<FavoriteAnimeList
									data={showAllAnime.data}
									listNameAnimeFavorite={
										listNameAnimeFavorite
									}
								/>
							)}
						</Grid>
						<Grid sx={{ padding: '15px 0' }}>
							<BasePagination
								page={page}
								count={count}
								onChange={onChange}
							/>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Sword Act Online
				</TabPanel>
				<TabPanel value={value} index={2}>
					Boku acadime
				</TabPanel>
			</Grid>
		</ThemeProvider>
	)
}

export default FavoritePage
