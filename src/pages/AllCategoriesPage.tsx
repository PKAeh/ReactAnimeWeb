import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BaseLoader } from '../components/BaseLoader'
import BasePagination from '../components/BasePagination'
import AnimeList from '../components/anime/AnimeList'
import AllCategoryAnimeTitle from '../components/navigators/category/AllCategoryAnimeTitle'
import { useAllCategoryAnime } from '../hooks/useAllCategoryAnime'
import { usePage } from '../hooks/usePage'
import { toastError } from '../utils/toast'

const AllCategoriesPage = (): JSX.Element => {
	const [searchParams] = useSearchParams()
	const slug = searchParams.get('slug')
	const title = searchParams.get('name')
	const { page, setPage } = usePage()

	const { allCategoryAnimeLoading, allCategoryAnime, allCategoryAnimeError } =
		useAllCategoryAnime(page, slug ?? '')
	const count = Math.ceil((allCategoryAnime?.meta.count ?? 0) / 40)

	const onChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	): void => {
		setPage(page)
	}

	useEffect(() => {
		if (allCategoryAnimeError) {
			toastError(allCategoryAnimeError.message)
		}
	}, [allCategoryAnimeError])

	if (allCategoryAnimeLoading) {
		return <BaseLoader style={{ marginTop: '100px' }} />
	}
	return (
		<Grid sx={{ padding: '10px', width: '100%' }}>
			<Grid sx={{ padding: '15px 8px' }}>
				<AllCategoryAnimeTitle category={title ?? ''} />
			</Grid>
			<Grid sx={{ width: '100%' }}>
				{allCategoryAnime && <AnimeList data={allCategoryAnime.data} />}
			</Grid>
			<Grid sx={{ padding: '15px 0' }}>
				<BasePagination page={page} count={count} onChange={onChange} />
			</Grid>
		</Grid>
	)
}

export default AllCategoriesPage
