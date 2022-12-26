import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'
import { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import type { KeyboardEvent } from 'react'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	paddingLeft: '10px',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto'
	}
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1),
	height: '100%',
	position: 'absolute',
	right: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	zIndex: '1',
	cursor: 'pointer',
	'&:hover': {
		color: theme.palette.animeRed?.main
	}
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingRight: `calc(1em + ${theme.spacing(3)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '29.8ch'
		}
	}
}))

const SearchInput = (): JSX.Element => {
	const [searchText, setSearchText] = useState<string>('')
	const navigate = useNavigate()

	const onKeyDown = ({
		key,
		target
	}: KeyboardEvent<HTMLInputElement>): void => {
		const value = (target as HTMLInputElement).value.trim()
		if (key === 'Enter' && value.length > 0) {
			changeToSearchPage(value)
		}
	}

	const onClick = (): void => {
		changeToSearchPage(searchText)
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value
		setSearchText(value)
	}

	const changeToSearchPage = (search: string): void => {
		navigate({
			pathname: 'search',
			search: createSearchParams({ search }).toString()
		})

		setSearchText('')
	}
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon
					sx={{ fontSize: '1.2em', paddingRight: '1px' }}
					onClick={onClick}
				/>
			</SearchIconWrapper>
			<StyledInputBase
				value={searchText}
				// defaultValue={keyword}
				onChange={onChange}
				onKeyDown={onKeyDown}
				placeholder="ค้นหาอนิเมะ…"
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	)
}

export default SearchInput
