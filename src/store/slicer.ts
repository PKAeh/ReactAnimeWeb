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
	],
	tabsValue: 0
}

type PayloadMoveItem = {
	data: AnimeResponse
	index: number
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: initialState,
	reducers: {
		setTabsValue: (state, action: PayloadAction<number>) => {
			state.tabsValue = action.payload
		},
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
		},
		moveToList: (state, action: PayloadAction<PayloadMoveItem>) => {
			for (const list of state.data) {
				const index = list.data.findIndex(
					(item) => item.id === action.payload.data.id
				)
				if (index >= 0) {
					list.data.splice(index, 1)
					break
				}
			}
			state.data[action.payload.index].data.push(action.payload.data)
		}
	}
})

export const {
	addToFavorite,
	unFavorite,
	addNameMyFavorite,
	deleteNameMyFavorite,
	setTabsValue,
	moveToList
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

export const getTabsValue = (state: RootState): number => {
	return state.favorite.tabsValue
}

export const getFavoriteCount = (state: RootState): number => {
	return state.favorite.data.map((item) => item.data).flat().length
}
export const favoriteReducer = favoriteSlice.reducer
