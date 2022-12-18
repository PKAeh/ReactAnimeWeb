import Grid from '@mui/material/Unstable_Grid2'
import { useSearchParams } from 'react-router-dom'
import { useCategoriesAll } from '../../../hooks/useCategory'
import { BaseLoader } from '../../BaseLoader'
import CategoryItem from './CategoryItem'

export const CategoryList = (): JSX.Element => {
	const { categoriesLoading, categories, categoriesError } =
		useCategoriesAll()
	const [searchParams] = useSearchParams()
	const categoryName = searchParams.get('slug') ?? ''

	if (categoriesLoading) {
		return <BaseLoader />
	}

	return (
		<Grid>
			{categories?.data.data.map((resp) => (
				<Grid key={resp.id}>
					<CategoryItem data={resp} categoryName={categoryName} />
				</Grid>
			))}
		</Grid>
	)
}
