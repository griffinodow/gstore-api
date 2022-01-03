import { square } from './square'
import { Catalog } from '../models/catalog'
import { Category } from '../models/category'
import { Item } from '../models/item'
import { ItemVariation } from '../models/item_variation'

export class Cache {
  static catalog: Catalog
  static async init () {
    const resLocationId = await square.locationsApi.listLocations()

    if (resLocationId.result.locations) {
      this.catalog = new Catalog(resLocationId.result.locations[0].id as string)
    } else {
      throw new Error('Error connecting to Square')
    }

    const resCategories = await square.catalogApi.listCatalog(undefined, 'CATEGORY')

    if (resCategories.result.objects) {
      resCategories.result.objects.forEach(object => {
        this.catalog.categories.push(new Category(
          object!.id,
          object.categoryData!.name as string
        ))
      })
    } else {
      throw new Error('Error connecting to Square')
    }

    const resItems = await square.catalogApi.listCatalog(undefined, 'ITEM')

    const resImages = await square.catalogApi.searchCatalogObjects({ objectTypes: ['IMAGE'], includeDeletedObjects: false })

    if (resItems.result.objects) {
      resItems.result.objects.forEach(object => {
        const category = this.catalog.categories.find(entry => entry.id === object.itemData!.categoryId)
        if (category) {
          const url = resImages.result.objects!.find((item) => item.id === object!.itemData!.imageIds![0])!.imageData!.url

          const item = new Item(object.id, object!.itemData!.categoryId as string, object!.itemData!.name as string, object!.itemData!.description as string, url as string)
          object!.itemData!.variations!.forEach(variation => item.variations.push(new ItemVariation(variation.id, item.id, Number(variation!.itemVariationData!.priceMoney!.amount as BigInt))))
          this.catalog.items.push(item)
        }
      })
    } else {
      throw new Error('Error connecting to Square')
    }
    console.log('Cache initialized')
  }
}
