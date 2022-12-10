import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../services/categorys/categoryService'
import type { ApiResponse } from '../services/apiResponse'
import type { CategoryResponse } from '../services/categorys/categoryResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const useCategoriesAll = (): {
  categoriesLoading: boolean
  categories: AxiosResponse<ApiResponse<CategoryResponse>> | undefined
  categoriesError: AxiosError<unknown, unknown> | null
} => {
  const {
    isLoading: categoriesLoading,
    data: categories,
    error: categoriesError
  } = useQuery<
    AxiosResponse<ApiResponse<CategoryResponse>>,
    AxiosError<unknown, unknown> | null
  >(['category'], () => getCategory())

  return {
    categoriesLoading,
    categories,
    categoriesError
  }
}
