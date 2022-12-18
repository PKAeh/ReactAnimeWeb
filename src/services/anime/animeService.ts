import axios from 'axios'
import type { ApiResponse } from './../apiResponse'
import type { AnimeResponse } from './animeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const getLastAnime = async (
	offset: number,
	limit: number
): Promise<AxiosResponse<ApiResponse<AnimeResponse>>> =>
	await axios.get<AxiosError, AxiosResponse<ApiResponse<AnimeResponse>>>(
		`https://kitsu.io/api/edge/anime?sort=-endDate&page[limit]=${limit}&page[offset]=${offset}&filter[status]=current,finished`
	)

export const getShowAllAnime = async (
	offset: number,
	limit: number
): Promise<AxiosResponse<ApiResponse<AnimeResponse>>> =>
	await axios.get<AxiosError, AxiosResponse<ApiResponse<AnimeResponse>>>(
		`https://kitsu.io/api/edge/anime?sort=-user_count&page[limit]=${limit}&page[offset]=${offset}`
	)

export const getYearAnime = async (
	offset: number,
	limit: number,
	year: string
): Promise<AxiosResponse<ApiResponse<AnimeResponse>>> =>
	await axios.get<AxiosError, AxiosResponse<ApiResponse<AnimeResponse>>>(
		`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&page[limit]=${limit}&sort=-user_count&page[offset]=${offset}`
	)

export const getAllCategoryAnime = async (
	offset: number,
	limit: number,
	category: string
): Promise<AxiosResponse<ApiResponse<AnimeResponse>>> =>
	await axios.get<AxiosError, AxiosResponse<ApiResponse<AnimeResponse>>>(
		`https://kitsu.io/api/edge/anime?sort=-user_count&filter[categories]=${category}&page[limit]=${limit}&page[offset]=${offset}`
	)

export const getSearchAnime = async (
	offset: number,
	limit: number,
	search: string
): Promise<AxiosResponse<ApiResponse<AnimeResponse>>> =>
	await axios.get<AxiosError, AxiosResponse<ApiResponse<AnimeResponse>>>(
		`https://kitsu.io/api/edge/anime?filter[text]=${search}&page[limit]=${limit}&page[offset]=${offset}`
	)
