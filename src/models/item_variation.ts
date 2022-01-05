/**
 * A variation of an item that includes a price.
 */
export class ItemVariation {
  id: string
  itemId: string
  price: number

  constructor (id: string, itemId: string, price: number) {
    this.id = id
    this.itemId = itemId
    this.price = price
  }
}
