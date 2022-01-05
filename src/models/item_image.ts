/**
 * An image id and url stored in the cache.
 */
export class ItemImage {
  id: string
  url: string

  constructor (id: string, url: string) {
    this.id = id
    this.url = url
  }
}
