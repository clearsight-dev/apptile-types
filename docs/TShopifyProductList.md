# TShopifyProductList

Products the PM picks, in their order.

- **Runtime value:** `readonly TShopifyResourceListItem[]`, every item `type: 'product'`
- **LL field type:** `shopifyProductList`
- **Inspector renderer:** `ShopifyResourceListPicker`, products only

Rows show each item's photo and name, reorder by drag, and are removed with their ✕; adding the same item twice is skipped; the schema's `min` / `max` limit removes and adds. Search runs in the store (Storefront `query:`). A product card shows price and stock, which aren't in the record: the screen loads the products. Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyProductList } from '@tiledev/types';

interface Props {
  products?: TShopifyProductList;
}
```

The screen loads each product's price and stock by its `id` or `handle`. `@tiledev/sdk-shopify` has no hook for a list of products yet (2026-10-18).

## The record

```ts
export interface TShopifyResource {
  id: string;
  handle: string;
  title: string;
  image?: string | null;
}
export interface TShopifyResourceListItem extends TShopifyResource {
  type: 'product' | 'collection';
}
```
