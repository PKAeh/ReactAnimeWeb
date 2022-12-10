export interface AnimeResponse {
  id: string
  type: string
  attributes: {
    createdAt: string
    updatedAt: string
    slug: string
    synopsis: string
    description: string
    canonicalTitle: string
    startDate: string
    endDate: string
    popularityRank?: number
    subtype?: string
    posterImage: {
      tiny: string
      large: string
      small: string
      medium: string
      original: string
    }
    coverImage: {
      tiny: string
      large: string
      small: string
      original: string
    }
    episodeCount: number
    showType: string
  }
}
