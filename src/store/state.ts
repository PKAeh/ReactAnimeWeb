import type { AnimeResponse } from './../services/anime/animeResponse'

export interface FavoriteListData {
	name: string
	data: AnimeResponse[]
}

export interface FavoriteStoreState {
	data: FavoriteListData[]
}
