/**
 * A category of the catalog.
 */
export class Category {
  id: string
  name: string

  constructor (id: string, name: string) {
    this.id = id
    this.name = name
  }
}
