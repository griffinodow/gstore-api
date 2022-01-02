import { Category } from './category'
import { Item } from './item'

export class Catalog {
  locationId: string
  categories: Category[] = []
  items: Item[] = []

  constructor (locationId: string) {
    this.locationId = locationId
  }
}
