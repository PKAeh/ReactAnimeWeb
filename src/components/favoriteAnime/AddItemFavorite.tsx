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
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { addNameMyFavorite } from '../../store/slicer'

const AddItemFavorite = (): JSX.Element => {
	const [open, setOpen] = useState(false)
	const [nameList, setNameList] = useState<string>('')
	const dispatch = useAppDispatch()

	const handleClickOpen = (): void => {
		setOpen(true)
	}

	const handleClose = (): void => {
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
				onClick={handleClickOpen}
			>
				<AddIcon sx={{ fontSize: '22px' }} />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent
					sx={{
						padding: '10px 10px 0 10px'
					}}
				>
					<DialogContentText>
						{`สามารถ "เพิ่มเติม" รายการความชื่นชอบของคุณ "ListNameFavorite"`}
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
						onClick={handleClose}
						sx={{
							'&:hover': {
								color: '#fd5529'
							}
						}}
					>
						Cancel
					</Button>
					<Button
						onClick={onClick}
						sx={{
							'&:hover': {
								color: '#fd5529'
							}
						}}
					>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Grid>
	)
}

export default AddItemFavorite
