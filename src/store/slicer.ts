import { createSlice } from '@reduxjs/toolkit'
import type { AnimeResponse } from './../services/anime/animeResponse'
import type { FavoriteListData, FavoriteStoreState } from './state'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit'

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
		},
		unFavorite: (state, action: PayloadAction<AnimeResponse>) => {
			for (const list of state.data) {
				const index = list.data.findIndex(
					(item) => item.id === action.payload.id
				)
				if (index >= 0) {
					list.data.splice(index, 1)
					break
				}
			}
		},
		addNameMyFavorite: (state, action: PayloadAction<string>) => {
			state.data.push({
				name: action.payload,
				data: []
			})
		},
		deleteNameMyFavorite: (state, action: PayloadAction<number>) => {
			state.data.splice(action.payload, 1)
		}
		// moveToList: () => {},
	}
})

export const {
	addToFavorite,
	unFavorite,
	addNameMyFavorite,
	deleteNameMyFavorite
} = favoriteSlice.actions

export const isFavoriteSelector =
	(id: string) =>
	(state: RootState): boolean => {
		const array = state.favorite.data.map((item) => item.data).flat()
		return !!array.find((item) => item.id === id)
	}

export const getFavorite = (state: RootState): FavoriteListData[] => {
	return state.favorite.data
}

export const favoriteReducer = favoriteSlice.reducer
