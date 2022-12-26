import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import {
	addToFavorite,
	isFavoriteSelector,
	unFavorite
} from '../../store/slicer'
import { toastAddFavorite, toastUnFavorite } from '../../utils/toast'
import type { AnimeResponse } from '../../services/anime/animeResponse'

interface AnimeItemProps {
	data: AnimeResponse
}

const AnimeItem = ({ data }: AnimeItemProps): JSX.Element => {
	const theme = useTheme()
	const navigate = useNavigate()
	const isFavorite = useAppSelector(isFavoriteSelector(data.id))
	const dispatch = useAppDispatch()

	const [hoverPlayAnimeItem, setHoverPlayAnimeItem] = useState<boolean>(false)
	const favoriteText = isFavorite ? 'ชื่นชอบ' : 'เพิ่มรายการที่ชอบ'
	const bgFavorite = isFavorite
		? 'rgb(245,14,14)'
		: theme.palette.primary.main
	const bgAlpha = 'rgba(0,0,0,0.7)'

	const onMouseEnter = (): void => {
		setHoverPlayAnimeItem(true)
	}

	const onMouseLeave = (): void => {
		setHoverPlayAnimeItem(false)
	}

	const clickLike = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.stopPropagation()

		if (isFavorite) {
			dispatch(unFavorite(data))
			toastUnFavorite(data.attributes.canonicalTitle)
		} else {
			dispatch(addToFavorite(data))
			toastAddFavorite(data.attributes.canonicalTitle)
		}
	}

	const clickToPage = (): void => {
		window.scrollTo(0, 0)
		navigate(`/anime/${data.id}`)
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
						bgcolor: bgAlpha,
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
						bgcolor: theme.palette.primary.main,
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
						bgcolor: bgAlpha,
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

export default AnimeItem
