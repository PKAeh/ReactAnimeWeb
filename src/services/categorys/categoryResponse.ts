export interface CategoryResponse {
  id: string
  type: string
  attributes: {
    createdAt: string
    updatedAt: string
    title: string
    description: string
    totalMediaCount: number
    slug: string
  }
}
