import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import {
	ClickAwayListener,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Tooltip,
	Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { useIsDesktop } from '../../hooks/useIsDesktop'
import { getTabsValue, moveToList, unFavorite } from '../../store/slicer'
import { toastUnFavorite, toastMoveFavorite } from '../../utils/toast'
import type { AnimeResponse } from '../../services/anime/animeResponse'

interface FavoriteAnimeItemProps {
	data: AnimeResponse
	listNameAnimeFavorite: string[]
}

const FavoriteAnimeItem = ({
	data,
	listNameAnimeFavorite
}: FavoriteAnimeItemProps): JSX.Element => {
	const theme = useTheme()
	const dispatch = useAppDispatch()
	const tabsValue = useAppSelector(getTabsValue)
	const { isDesktop } = useIsDesktop()

	const [hoverPlayAnimeItem, setHoverPlayAnimeItem] = useState<boolean>(false)

	const favoriteText = 'ชื่นชอบ'
	const bgFavorite = 'rgb(245,14,14)'
	const [openMenu, setOpenMenu] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const navigate = useNavigate()

	const onMouseEnter = (): void => {
		setHoverPlayAnimeItem(true)
	}

	const onMouseLeave = (): void => {
		setHoverPlayAnimeItem(false)
	}

	const clickLike = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.stopPropagation()
		dispatch(unFavorite(data))
		toastUnFavorite(data.attributes.canonicalTitle)
	}

	const clickToPage = (): void => {
		if (!openMenu) {
			navigate(`/anime/${data.id}`)
		}
	}

	const clickToMoveFavorite = (
		event: React.MouseEvent<HTMLButtonElement>
	): void => {
		event.stopPropagation()
		setOpenMenu((state) => !state)
		setAnchorEl(event.currentTarget)
	}

	const handleClose =
		(index?: number) =>
		(event: Event | React.SyntheticEvent): void => {
			event.stopPropagation()
			setOpenMenu((state) => !state)
			if (index !== undefined) {
				dispatch(
					moveToList({
						data: data,
						index: index
					})
				)
				toastMoveFavorite(
					data.attributes.canonicalTitle,
					listNameAnimeFavorite[index]
				)
			}
		}

	const showToolTip = (): JSX.Element => {
		if (isDesktop) {
			return (
				<Tooltip title="ย้ายรายการ" placement="right" followCursor>
					<Typography onClick={clickToMoveFavorite}>
						<ArticleOutlinedIcon
							aria-owns={
								openMenu ? 'mouse-over-popover' : undefined
							}
							sx={{
								bgcolor: 'rgba(0,0,0,0.8)',
								color: 'white',
								borderRadius: '3px',
								fontSize: '1.4em'
							}}
						/>
					</Typography>
				</Tooltip>
			)
		} else {
			return (
				<Typography onClick={clickToMoveFavorite}>
					<ArticleOutlinedIcon
						aria-owns={openMenu ? 'mouse-over-popover' : undefined}
						sx={{
							bgcolor: 'rgba(0,0,0,0.8)',
							color: 'white',
							borderRadius: '3px',
							fontSize: '1.4em'
						}}
					/>
				</Typography>
			)
		}
	}

	return (
		<Grid
			sx={{
				position: 'relative',
				height: '300px',
				padding: '0',
				borderRadius: '3px',
				backgroundImage: `url("${data.attributes.posterImage.medium}")`,
				backgroundSize: 'cover',
				'&:hover': {
					cursor: 'pointer',
					'&::after': {
						position: 'absolute',
						content: '""',
						display: 'block',
						bgcolor: 'rgba(0,0,0,0.7)',
						width: '100%',
						height: '100%',
						top: '0',
						zIndex: '1'
					}
				}
			}}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={clickToPage}
		>
			<Grid
				sx={{
					padding: '0',
					position: 'absolute',
					left: '8px',
					top: '5px',
					zIndex: openMenu ? '5' : '3'
				}}
			>
				{showToolTip()}
				<Popper
					id="mouse-over-popover"
					anchorEl={anchorEl}
					open={openMenu}
					placement="right"
					disablePortal
				>
					{(): JSX.Element => (
						<Paper
							sx={{
								bgcolor: 'rgba(80,80,80,0.8)',
								color: 'white'
							}}
						>
							<ClickAwayListener onClickAway={handleClose()}>
								<MenuList
									aria-labelledby="composition-button"
									sx={{
										overflowY: 'auto',
										height: '145px'
									}}
								>
									{listNameAnimeFavorite.map(
										(item, index) => {
											if (index === tabsValue) {
												return <div key={index}></div>
											}
											return (
												<MenuItem
													key={index}
													onClick={handleClose(index)}
													sx={{
														'&:hover': {
															color: theme.palette
																.animeRed?.main
														}
													}}
												>
													{item}
												</MenuItem>
											)
										}
									)}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					)}
				</Popper>
			</Grid>
			<Grid
				sx={{
					padding: '0',
					position: 'absolute',
					right: '5px',
					top: '5px',
					zIndex: '2'
				}}
			>
				<Typography
					sx={{
						bgcolor: bgFavorite,
						color: 'white',
						fontSize: '0.7em',
						padding: '1px 3px',
						borderRadius: '3px'
					}}
					onClick={clickLike}
				>
					{favoriteText}
				</Typography>
			</Grid>
			<Grid
				sx={{
					padding: '0',
					position: 'absolute',
					right: '5px',
					top: '28px',
					zIndex: '2'
				}}
			>
				<Typography
					sx={{
						bgcolor: 'rgb(0,0,0)',
						color: 'white',
						fontSize: '0.7em',
						padding: '1px 3px',
						borderRadius: '3px'
					}}
				>
					{' '}
					ตอนที่ {data.attributes.episodeCount}
				</Typography>
			</Grid>
			<Grid
				sx={{
					position: 'absolute',
					zIndex: '2',
					padding: '0',
					top: '120px',
					left: '80px'
				}}
			>
				{hoverPlayAnimeItem && (
					<ArrowForwardIosIcon
						sx={{
							fontSize: '50px',
							color: 'white'
						}}
					/>
				)}
			</Grid>

			<Grid
				sx={{
					position: 'absolute',
					bottom: '0',
					width: '100%',
					padding: '0',
					zIndex: '2'
				}}
			>
				<Typography
					sx={{
						textAlign: 'center',
						padding: '10px',
						bgcolor: 'rgba(0,0,0,0.7)',
						fontWeight: 'bold',
						color: 'white',
						fontSize: '0.8em'
					}}
				>
					{data.attributes.canonicalTitle}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default FavoriteAnimeItem
