import { toast } from 'react-toastify'

export const toastAddFavorite = (title: string): void => {
	toast.success(`เพิ่ม "${title}" เรียบร้อยแล้ว`, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}

export const toastDeleteFavorite = (title: string): void => {
	toast.info(`ลบ "${title}" เรียบร้อยแล้ว`, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}

export const toastMoveFavorite = (title: string): void => {
	toast.info(`ย้าย ชื่อเรื่อง "${title}" เรียบร้อยแล้ว`, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}

export const toastError = (message: string): void => {
	toast.error(`${message}`, {
		position: 'top-right',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}
