import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate, createSearchParams } from 'react-router-dom'
import type { CategoryResponse } from '../../../services/categories/categoryResponse'

interface CategoryItemProps {
	data: CategoryResponse
	categoryName: string
}

const CategoryItem = ({
	data,
	categoryName
}: CategoryItemProps): JSX.Element => {
	const navigate = useNavigate()
	const slug = data.attributes.slug
	const name = data.attributes.title
	//   const category = searchParams.get('slug')

	const onClick = (): void => {
		navigate({
			pathname: '/category',
			search: createSearchParams({ slug, name }).toString()
		})
		window.scroll(0, 0)
	}
	return (
		<Grid
			container
			sx={{
				alignItems: 'center',
				padding: '10px 0 5px 0',
				borderBottom: '1px solid rgba(160,160, 160, 0.2)'
			}}
		>
			<Grid
				container
				onClick={onClick}
				sx={{
					color: 'rgb(160,160, 160)',
					'&:hover': {
						color: '#fd5529',
						cursor: 'pointer'
					}
				}}
			>
				<ArrowRightIcon
					sx={{
						fontSize: '18px',
						color:
							data.attributes.slug === categoryName
								? '#fd5529'
								: 'white'
					}}
				/>
				<Typography
					sx={{
						fontWeight: '500',
						fontSize: '0.9em',
						paddingLeft: '5px'
					}}
				>
					{data.attributes.title}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default CategoryItem
