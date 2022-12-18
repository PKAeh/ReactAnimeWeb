import { useQuery } from '@tanstack/react-query'
import { getDetailAnimeEpisodes } from './../services/detailAnimeEpsiodes/detailAnimeEpisodesService'
import type { ApiResponse } from '../services/apiResponse'
import type { DetailAnimeEpisodesResponse } from '../services/detailAnimeEpsiodes/detailAnimeEpisodesResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface useLastAnimePram {
	detailAnimeEpisodesLoading: boolean
	detailAnimeEpisodes:
		| AxiosResponse<ApiResponse<DetailAnimeEpisodesResponse>>
		| undefined
	detailAnimeEpisodesError: AxiosError<unknown, unknown> | null
}

export const useDetailAnimeEpisodes = (
	page: number,
	id: string
): useLastAnimePram => {
	const limit = 20
	const offset = (page - 1) * limit

	const {
		isLoading: detailAnimeEpisodesLoading,
		data: detailAnimeEpisodes,
		error: detailAnimeEpisodesError
	} = useQuery<
		AxiosResponse<ApiResponse<DetailAnimeEpisodesResponse>>,
		AxiosError<unknown, unknown> | null
	>({
		queryKey: [`animeEpisodes-${id}-${page}`],
		queryFn: () => getDetailAnimeEpisodes(id, offset, limit)
	})

	return {
		detailAnimeEpisodesLoading,
		detailAnimeEpisodes,
		detailAnimeEpisodesError
	}
}
