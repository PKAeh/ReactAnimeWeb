import axios from 'axios'
import type { ApiResponse } from './../apiResponse'
import type { CategoryResponse } from './categoryResponse'
import type { AxiosError, AxiosResponse } from 'axios'

const URL =
  'https://kitsu.io/api/edge/categories?page[limit]=40&sort=-total_media_count'

export const getCategory = async (): Promise<
  AxiosResponse<ApiResponse<CategoryResponse>>
> =>
  await axios.get<AxiosError, AxiosResponse<ApiResponse<CategoryResponse>>>(URL)
