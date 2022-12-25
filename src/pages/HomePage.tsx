import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { BaseLoader } from '../components/BaseLoader'
import BasePagination from '../components/BasePagination'
import AnimeList from '../components/anime/AnimeList'
import HomePageTitle from '../components/homepage/HomePageTitle'
import { useLastAnime } from '../hooks/useLastAnime'
import { usePage } from '../hooks/usePage'

const HomePage = (): JSX.Element => {
	const { page, setPage } = usePage()
	const { lastAnimeLoading, lastAnime, lastAnimeError } = useLastAnime(page)
	const count = Math.ceil(Math.min(lastAnime?.meta.count ?? 0, 10000) / 40)

	const onChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page)
	}

	if (lastAnimeLoading) {
		return <BaseLoader style={{ marginTop: '100px' }} />
	}

	return (
		<Grid sx={{ padding: '10px', width: '100%' }}>
			<Grid sx={{ padding: '15px 8px' }}>
				<HomePageTitle />
			</Grid>
			<Grid sx={{ width: '100%' }}>
				{lastAnime && <AnimeList data={lastAnime.data} />}
			</Grid>
			<Grid sx={{ padding: '15px 0' }}>
				<BasePagination page={page} count={count} onChange={onChange} />
			</Grid>
		</Grid>
	)
}
export default HomePage
