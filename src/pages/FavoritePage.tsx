import DeleteIcon from '@mui/icons-material/Delete'
import {
	Button,
	createTheme,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	ThemeProvider
} from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tab from '@mui/material/Tab'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import BasePagination from '../components/BasePagination'
import AddItemFavorite from '../components/favoriteAnime/AddItemFavorite'
import FavoriteAnimeList from '../components/favoriteAnime/FavoriteAnimeList'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { usePage } from '../hooks/usePage'
import {
	deleteNameMyFavorite,
	getFavorite,
	getTabsValue,
	setTabsValue
} from '../store/slicer'

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
	const dispatch = useAppDispatch()
	const value = useAppSelector(getTabsValue)
	const [indexNameFavorite, setIndexNameFavorite] = useState<number>(0)
	const [openNotEmpty, setOpenNotEmpty] = useState<boolean>(false)

	const { page, setPage } = usePage()

	const listNameAnimeFavorite = favoriteList.map((item) => item.name)

	const onChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page)
	}

	const handleChangeTabs = (
		event: React.SyntheticEvent,
		newValue: number
	): void => {
		dispatch(setTabsValue(newValue))
		setPage(1)
	}

	const [contextMenu, setContextMenu] = useState<{
		mouseX: number
		mouseY: number
	} | null>(null)

	const handleContextMenu = (
		event: React.MouseEvent,
		index: number
	): void => {
		event.preventDefault()
		setContextMenu(
			contextMenu === null
				? {
						mouseX: event.clientX + 2,
						mouseY: event.clientY - 6
				  }
				: null
		)
		setIndexNameFavorite(index)
	}

	const handleClose = (): void => {
		setContextMenu(null)
	}
	const handleCloseRemoveName = (): void => {
		const isEmpty = favoriteList[indexNameFavorite].data.length === 0
		setContextMenu(null)
		if (isEmpty) {
			onClickDeleteList()
		} else {
			setOpenNotEmpty(true)
		}
	}

	const onClickDeleteList = (): void => {
		dispatch(deleteNameMyFavorite(indexNameFavorite))
		dispatch(setTabsValue(0))
		setOpenNotEmpty(false)
	}

	const handleCloseMessageDelete = (): void => {
		setOpenNotEmpty(false)
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
							onChange={handleChangeTabs}
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
									<Tab
										key={index}
										label={resp}
										onContextMenu={(event): void => {
											index > 0
												? handleContextMenu(
														event,
														index
												  )
												: undefined
										}}
									/>
								)
							)}
						</Tabs>
						<Menu
							open={contextMenu !== null}
							onClose={handleClose}
							anchorReference="anchorPosition"
							anchorPosition={
								contextMenu !== null
									? {
											top: contextMenu.mouseY,
											left: contextMenu.mouseX
									  }
									: undefined
							}
							disableScrollLock
						>
							<MenuItem
								onClick={handleCloseRemoveName}
								sx={{ padding: '0 5px' }}
							>
								<Grid
									container
									sx={{
										alignItems: 'center',
										'&:hover': {
											color: '#fd5529'
										}
									}}
								>
									<DeleteIcon sx={{ fontSize: '0.9em' }} />
									<Typography
										sx={{
											fontSize: '0.9em',
											padding: '0 0 0 2px'
										}}
									>
										ลบรายการ
									</Typography>
								</Grid>
							</MenuItem>
						</Menu>
					</Grid>
					<Grid>
						<AddItemFavorite />
					</Grid>
				</Grid>

				<Dialog
					open={openNotEmpty}
					onClose={handleCloseMessageDelete}
					disableScrollLock
				>
					<DialogContent>
						<DialogContentText>
							{`มีอนิเมะในลิสรายการ "${listNameAnimeFavorite[indexNameFavorite]}" คุณต้องการลบหรือไม่ !`}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleCloseMessageDelete}
							sx={{
								'&:hover': {
									color: '#fd5529'
								}
							}}
						>
							Cancel
						</Button>
						<Button
							onClick={onClickDeleteList}
							sx={{
								'&:hover': {
									color: '#fd5529'
								}
							}}
						>
							OK
						</Button>
					</DialogActions>
				</Dialog>

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
