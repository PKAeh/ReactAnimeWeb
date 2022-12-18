import { useQuery } from '@tanstack/react-query'
import { getAllCategoryAnime } from './../services/anime/animeService'
import type { AnimeResponse } from '../services/anime/animeResponse'
import type { ApiResponse } from '../services/apiResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface AllCategoryAnimePram {
	allCategoryAnimeLoading: boolean
	allCategoryAnime: ApiResponse<AnimeResponse> | undefined
	allCategoryAnimeError: AxiosError<unknown, unknown> | null
}

export const useAllCategoryAnime = (
	page: number,
	category: string
): AllCategoryAnimePram => {
	const limit = 20

	const {
		isLoading: allCategoryAnimeLoading,
		data: allCategoryAnime,
		error: allCategoryAnimeError
	} = useQuery<
		AxiosResponse<ApiResponse<AnimeResponse>, unknown>[],
		AxiosError<unknown, unknown>,
		ApiResponse<AnimeResponse>,
		string[]
	>({
		queryKey: [`AllCategoryAnime-${page}-${category}`],
		queryFn: () => {
			const setPage = page * 2

			const offset = (setPage - 2) * 20
			const offset2 = (setPage - 1) * 20
			return Promise.all([
				getAllCategoryAnime(offset, limit, category),
				getAllCategoryAnime(offset2, limit, category)
			])
		},
		select(
			data: AxiosResponse<ApiResponse<AnimeResponse>>[]
		): ApiResponse<AnimeResponse> {
			return {
				...data[0].data,
				data: [...data[0].data.data, ...data[1].data.data]
			}
		}
	})

	return {
		allCategoryAnimeLoading,
		allCategoryAnime,
		allCategoryAnimeError
	}
}
