import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import { useParams } from 'react-router-dom'
import BaseLink from '../BaseLink'

const YearBar = (): JSX.Element => {
	const theme = useTheme()
	const redAnime = theme.palette.animeRed?.main
	const { year: pageYear } = useParams()
	const years = [
		'2022',
		'2021',
		'2020',
		'2019',
		'2018',
		'2017',
		'2016',
		'2015',
		'2014',
		'2013',
		'2012',
		'2011',
		'2010',
		'2009',
		'2008',
		'2007',
		'2006',
		'2005',
		'2004',
		'2003',
		'2002',
		'2001',
		'2000',
		'1999',
		'1997',
		'1996',
		'1993',
		'1989',
		'1988',
		'1971'
	]

	return (
		<Grid sx={{ padding: '5px 10px 5px 20px' }}>
			<Grid
				container
				sx={{
					alignItems: 'center'
				}}
			>
				<Grid xs={10}>
					<Typography
						sx={{ fontWeight: 'bold', color: 'rgb(160,160, 160)' }}
					>
						ปีที่อนิเมะฉาย
					</Typography>
				</Grid>
				<Grid
					xs={2}
					container
					sx={{ justifyContent: 'end', alignItems: 'center' }}
				>
					<ArrowDropDownIcon
						sx={{ fontSize: '1.9em', color: 'white' }}
					/>
				</Grid>
			</Grid>
			<Grid
				container
				sx={{ textAlign: 'center', padding: '10px 13px 10px 0' }}
				columns={9}
				spacing={0.5}
			>
				{years.map((year) => (
					<Grid key={year} xs={3}>
						<BaseLink to={`/year/${year}`}>
							<Typography
								sx={{
									fontSize: '0.8em',
									fontWeight: '700',
									backgroundColor:
										year === pageYear ? redAnime : 'black',
									color:
										year === pageYear
											? 'white'
											: 'rgb(160,160, 160)',
									padding: '5px',
									'&:hover': {
										backgroundColor: redAnime,
										color: 'white',
										cursor: 'pointer'
									}
								}}
							>
								{year}
							</Typography>
						</BaseLink>
					</Grid>
				))}
			</Grid>
		</Grid>
	)
}

export default YearBar
