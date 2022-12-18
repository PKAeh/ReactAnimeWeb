import { useQuery } from '@tanstack/react-query'
import { getLastAnime } from '../services/anime/animeService'
import type { ApiResponse } from '../services/apiResponse'
import type { AnimeResponse } from './../services/anime/animeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface useLastAnimePram {
	lastAnimeLoading: boolean
	lastAnime: ApiResponse<AnimeResponse> | undefined
	lastAnimeError: AxiosError<unknown, unknown> | null
}

export const useLastAnime = (page: number, total = 0): useLastAnimePram => {
	const limit = 20

	const {
		isLoading: lastAnimeLoading,
		data: lastAnime,
		error: lastAnimeError
	} = useQuery<
		AxiosResponse<ApiResponse<AnimeResponse>, unknown>[],
		AxiosError<unknown, unknown>,
		ApiResponse<AnimeResponse>,
		string[]
	>({
		queryKey: [`animeLast-${page}`],
		queryFn: () => {
			if (total === 0) {
				const setPage = page * 2

				const offset = (setPage - 2) * 20
				const offset2 = (setPage - 1) * 20
				return Promise.all([
					getLastAnime(offset, 20),
					getLastAnime(offset2, 20)
				])
			} else {
				const arr: Promise<
					AxiosResponse<ApiResponse<AnimeResponse>, unknown>
				>[] = []
				for (let i = 2; i > 0; i--) {
					const offset = (page * 2 - i) * limit
					if (offset < total) {
						arr.push(getLastAnime(offset, limit))
					} else {
						const newLimit = total % limit
						const newOffset = total - newLimit
						arr.push(getLastAnime(newOffset, newLimit))
						break
					}
				}

				return Promise.all(arr)
			}
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
		lastAnimeLoading,
		lastAnime,
		lastAnimeError
	}
}
