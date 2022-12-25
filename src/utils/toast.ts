import { toast } from 'react-toastify'

export const toastAddFavorite = (title: string): void => {
	toast.success(`เพิ่ม "${title}" เรียบร้อยแล้ว`, {
		position: 'top-right',
		autoClose: 1200,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}

export const toastUnFavorite = (title: string): void => {
	toast.error(`ลบ "${title}" เรียบร้อยแล้ว`, {
		position: 'top-right',
		autoClose: 1200,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}

export const toastMoveFavorite = (title: string, listName: string): void => {
	toast.info(`ย้าย "${title}" ไปที่ "${listName}" เรียบร้อยแล้ว`, {
		position: 'top-right',
		autoClose: 2500,
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
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light'
	})
}
