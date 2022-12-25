import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BaseLoader } from '../components/BaseLoader'
import BasePagination from '../components/BasePagination'
import AnimeList from '../components/anime/AnimeList'
import YearAnimeTitle from '../components/yearAnime/YearAnimeTitle'
import { usePage } from '../hooks/usePage'
import { useYearAnime } from '../hooks/useYearAnime'
import { toastError } from '../utils/toast'

const YearAnimePage = (): JSX.Element => {
	const { page, setPage } = usePage()
	const { year } = useParams()
	const { yearAnimeLoading, yearAnime, yearAnimeError } = useYearAnime(
		page,
		year ?? ''
	)
	const count = Math.ceil((yearAnime?.meta.count ?? 0) / 40)

	const onChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page)
	}

	useEffect(() => {
		if (yearAnimeError) {
			toastError(yearAnimeError.message)
		}
	}, [yearAnimeError])

	if (yearAnimeLoading) {
		return <BaseLoader style={{ marginTop: '100px' }} />
	}
	return (
		<Grid sx={{ padding: '10px', width: '100%' }}>
			<Grid sx={{ padding: '15px 8px' }}>
				<YearAnimeTitle year={year ?? ''} />
			</Grid>
			<Grid sx={{ width: '100%' }}>
				{yearAnime && <AnimeList data={yearAnime.data} />}
			</Grid>
			<Grid sx={{ padding: '15px 0' }}>
				<BasePagination page={page} count={count} onChange={onChange} />
			</Grid>
		</Grid>
	)
}

export default YearAnimePage
