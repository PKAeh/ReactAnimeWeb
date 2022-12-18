import { useQuery } from '@tanstack/react-query'
import { getYearAnime } from './../services/anime/animeService'
import type { AnimeResponse } from '../services/anime/animeResponse'
import type { ApiResponse } from '../services/apiResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface YearAnimePram {
	yearAnimeLoading: boolean
	yearAnime: ApiResponse<AnimeResponse> | undefined
	yearAnimeError: AxiosError<unknown, unknown> | null
}

export const useYearAnime = (page: number, year: string): YearAnimePram => {
	const limit = 20

	const {
		isLoading: yearAnimeLoading,
		data: yearAnime,
		error: yearAnimeError
	} = useQuery<
		AxiosResponse<ApiResponse<AnimeResponse>, unknown>[],
		AxiosError<unknown, unknown>,
		ApiResponse<AnimeResponse>,
		string[]
	>({
		queryKey: [`YearAnime-${page}-${year}`],
		queryFn: () => {
			const setPage = page * 2

			const offset = (setPage - 2) * 20
			const offset2 = (setPage - 1) * 20
			return Promise.all([
				getYearAnime(offset, limit, year),
				getYearAnime(offset2, limit, year)
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
		yearAnimeLoading,
		yearAnime,
		yearAnimeError
	}
}
