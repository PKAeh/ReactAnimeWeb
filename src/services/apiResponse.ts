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
}
