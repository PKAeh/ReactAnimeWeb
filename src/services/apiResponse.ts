export interface ApiResponse<T> {
  data: T[]
  meta: {
    count: number
  }
  links: {
    first: string
    next: string
    last: string
  }
  included?: IncludedResponse[]
}

interface IncludedResponse {
  id: string
  type: string
  attributes: {
    slug: string
    title: string
  }
}
