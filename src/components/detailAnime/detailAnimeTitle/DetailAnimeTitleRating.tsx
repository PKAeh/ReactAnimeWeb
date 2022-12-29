import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Typography } from '@mui/material'
import Rating from '@mui/material/Rating'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'

interface DetailAnimeTitleRatingProps {
	rating: number
}

const DetailAnimeTitleRating = ({
	rating
}: DetailAnimeTitleRatingProps): JSX.Element => {
	const [ratingValue, setRatingValue] = useState<number | null>(10)

	return (
		<Grid
			container
			sx={{
				alignItems: 'center',
				padding: { sm: '10px 0 13px 0', xs: '10px 0 3px 0' },
				borderBottom: '1px solid rgba(160,160, 160, 0.2)'
			}}
		>
			<Grid sx={{ marginRight: { sm: '20px', xs: '10px' } }}>
				<Typography
					sx={{
						bgcolor: 'rgba(190,190,190,0.2)',
						fontSize: '2em',
						padding: '2px 8px',
						borderRadius: '3px'
					}}
				>
					{rating}
				</Typography>
			</Grid>
			<Grid sx={{ marginRight: { sm: '20px' } }}>
				<Grid>
					<Rating
						name=""
						value={ratingValue}
						max={10}
						onChange={(event, newValue): void => {
							setRatingValue(newValue)
						}}
					/>
				</Grid>
				<Grid container>
					<AccountCircleIcon sx={{ fontSize: '15px' }} />
					<Typography sx={{ marginLeft: '5px', fontSize: '0.65em' }}>
						จำนวน votes
					</Typography>
				</Grid>
			</Grid>
			<Grid>
				<Typography
					sx={{
						bgcolor: 'rgba(190,190,190,0.2)',
						fontSize: '0.7em',
						padding: '2px 8px',
						borderRadius: '3px',
						margin: { xs: '10px 0' }
					}}
				>
					Your rating: {ratingValue}
				</Typography>{' '}
			</Grid>
		</Grid>
	)
}

export default DetailAnimeTitleRating
