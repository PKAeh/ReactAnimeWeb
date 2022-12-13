export interface DetailAnimeEpisodesResponse {
  id: string
  type: string
  attributes: {
    createdAt: string
    updatedAt: string
    description: string
    canonicalTitle: string
    seasonNumber: number
    number: number
    airdate: string
    thumbnail?: {
      original: string
    }
  }
}
