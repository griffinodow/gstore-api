import { ItemVariation } from './item_variation'

export class Item {
  id: string
  categoryId: string
  name: string
  description: string
  variations: ItemVariation[] = []

  constructor (id: string, categoryId: string, name: string, description: string) {
    this.id = id
    this.categoryId = categoryId
    this.name = name
    this.description = description
  }
}
