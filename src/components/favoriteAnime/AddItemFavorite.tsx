import AddIcon from '@mui/icons-material/Add'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	IconButton,
	TextField
} from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { addNameMyFavorite } from '../../store/slicer'

const AddItemFavorite = (): JSX.Element => {
	const theme = useTheme()
	const [open, setOpen] = useState(false)
	const [nameList, setNameList] = useState<string>('')
	const dispatch = useAppDispatch()

	const handleClickOpenAddName = (): void => {
		setOpen(true)
	}

	const handleCloseAddName = (): void => {
		setOpen(false)
		setNameList('')
	}

	const onKeyDown = ({
		key,
		target
	}: React.KeyboardEvent<HTMLElement>): void => {
		const value = (target as HTMLInputElement).value.trim()
		if (key === 'Enter' && value.length > 0) {
			dispatch(addNameMyFavorite(nameList))
			setNameList('')
		}
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value
		setNameList(value)
	}

	const onClick = (): void => {
		dispatch(addNameMyFavorite(nameList))
		setNameList('')
	}

	return (
		<Grid>
			<IconButton
				aria-label="delete"
				sx={{
					color: 'white',
					padding: '10px',
					marginRight: '10px'
				}}
				onClick={handleClickOpenAddName}
			>
				<AddIcon sx={{ fontSize: '22px' }} />
			</IconButton>
			<Dialog open={open} onClose={handleCloseAddName} disableScrollLock>
				<DialogContent sx={{ paddingBottom: '10px' }}>
					<DialogContentText>
						{`สามารถ "เพิ่ม" รายการอนิเมะที่ชื่นชอบของคุณ เช่น "Sword Act Online"`}
					</DialogContentText>
					<TextField
						value={nameList}
						autoFocus
						margin="dense"
						id="name"
						label="กรุณากรอกรายการที่ต้องการเพิ่ม :"
						type="text"
						fullWidth
						variant="standard"
						onChange={onChange}
						onKeyDown={onKeyDown}
					/>
				</DialogContent>
				<DialogActions
					sx={{
						padding: '0 10px 5px 10px'
					}}
				>
					<Button
						onClick={handleCloseAddName}
						sx={{
							'&:hover': {
								color: theme.palette.animeRed?.main
							}
						}}
					>
						ยกเลิก
					</Button>
					<Button
						onClick={onClick}
						sx={{
							'&:hover': {
								color: theme.palette.animeRed?.main
							}
						}}
					>
						ตกลง
					</Button>
				</DialogActions>
			</Dialog>
		</Grid>
	)
}

export default AddItemFavorite
