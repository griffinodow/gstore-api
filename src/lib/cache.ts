import { square } from './square'
import { Catalog } from '../models/catalog'
import { Category } from '../models/category'
import { Item } from '../models/item'
import { ItemVariation } from '../models/item_variation'
import { ItemImage } from '../models/item_image'

/**
 * Cache interface.
 */
interface ICache {
  itemImageUrls: ItemImage[]
  catalog: Catalog | undefined
}

/**
 * Local cache of Square catalog information.
 */
export const cache: ICache = {
  itemImageUrls: [],
  catalog: undefined
}

/**
 * Initializes the cache for catalog data.
 */
export const initCache = async (): Promise<void> => {
  cache.itemImageUrls = await getItemImageURLs()
  cache.catalog = new Catalog(await getLocationId())
  cache.catalog.categories = await getCategories()
  cache.catalog.items = await getItems()
}

/**
 * Fetches the location ID of the online store from Square.
 * @returns The location ID
 */
const getLocationId = async (): Promise<string> => {
  const response = await square.locationsApi.listLocations()
  if (!response.result.locations ||
      !response.result.locations[0] ||
      !response.result.locations[0].id) {
    throw new Error('Could not determine store location')
  }
  return response.result.locations[0].id
}

/**
 * Fetches the categories available for the online store selection.
 * @returns The store categories
 */
const getCategories = async (): Promise<Category[]> => {
  const categories: Category[] = []
  const response = await square.catalogApi.listCatalog(undefined, 'CATEGORY')
  if (!response.result.objects) {
    throw new Error('Could not determine categories')
  }
  response.result.objects.forEach(object => {
    if (object.categoryData && object.categoryData.name) {
      categories.push(new Category(
        object.id,
        object.categoryData.name
      ))
    }
  })
  return categories
}

/**
 * Fetches items from Square.
 * @returns The items.
 */
const getItems = async (): Promise<Item[]> => {
  const items: Item[] = []
  const response = await square.catalogApi.listCatalog(undefined, 'ITEM')
  if (!response.result.objects) {
    throw new Error('Could not get items')
  }
  response.result.objects.forEach(object => {
    if (object.itemData &&
        object.itemData.categoryId &&
        object.itemData.name &&
        object.itemData.description &&
        object.itemData.variations &&
        object.itemData.imageIds &&
        object.itemData.imageIds[0] !== undefined) {
      const url = getItemImageURL(object.itemData.imageIds[0])
      if (!url) return
      const item = new Item(
        object.id,
        object.itemData.categoryId,
        object.itemData.name,
        object.itemData.description,
        url)
      object.itemData.variations.forEach(variation => {
        if (variation.itemVariationData &&
            variation.itemVariationData.priceMoney) {
          item.variations.push(new ItemVariation(
            variation.id,
            item.id,
            Number(variation.itemVariationData.priceMoney.amount as BigInt)
          ))
        }
      })
      items.push(item)
    }
  })
  return items
}

/**
 * Fetches the image urls from Square.
 * @returns The image url objects.
 */
const getItemImageURLs = async (): Promise<ItemImage[]> => {
  const itemImageUrls: ItemImage[] = []
  const response = await square.catalogApi.searchCatalogObjects({
    objectTypes: ['IMAGE'],
    includeDeletedObjects: false
  })
  if (!response.result.objects) {
    throw new Error('Could not get item image URLs')
  }
  response.result.objects.forEach(object => {
    if (object.imageData && object.imageData.url) {
      itemImageUrls.push({ id: object.id, url: object.imageData.url })
    }
  })
  return itemImageUrls
}

/**
 * Searches the cache for an image url with its id.
 * @param id The image url ID on Square.
 * @returns  The image url.
 */
const getItemImageURL = (id: string): string | undefined => {
  return cache.itemImageUrls.find(item => item.id === id)?.url
}
