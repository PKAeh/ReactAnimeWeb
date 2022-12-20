import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from './../../node_modules/@reduxjs/toolkit/src/createAction'
import type { AnimeResponse } from './../services/anime/animeResponse'
import type { FavoriteListData, FavoriteStoreState } from './state'

const initialState: FavoriteStoreState = {
	data: [
		{
			name: 'อนิมะชื่นชอบ',
			data: []
		}
	]
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: initialState,
	reducers: {
		addToFavorite: (state, action: PayloadAction<AnimeResponse>) => {
			const first = state.data[0]
			first.data.push(action.payload)
		}
		// unFavorite: () => {},
		// moveToList: () => {},
		// addNameMyFavorite: () => {},
		// deleteNameMyFavorite: () => {}
	}
})

export const { addToFavorite } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer
