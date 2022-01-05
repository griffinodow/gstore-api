import { Category } from './category'
import { Item } from './item'

/**
 * The catalog that holds the Square catalog and related information.
 */
export class Catalog {
  locationId: string
  categories: Category[] = []
  items: Item[] = []

  constructor (locationId: string) {
    this.locationId = locationId
  }
}
