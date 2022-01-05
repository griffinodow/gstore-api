import { ItemVariation } from './item_variation'

/**
 * An item in the Square catalog.
 */
export class Item {
  id: string
  categoryId: string
  name: string
  description: string
  url: string
  variations: ItemVariation[] = []

  constructor (
    id: string,
    categoryId: string,
    name: string,
    description: string,
    url: string) {
    this.id = id
    this.categoryId = categoryId
    this.name = name
    this.description = description
    this.url = url
  }
}
