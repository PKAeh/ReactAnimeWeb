import { configureStore } from '@reduxjs/toolkit'
import { favoriteReducer } from './slicer'

export const store = configureStore({
	reducer: {
		favorite: favoriteReducer
	}
})
