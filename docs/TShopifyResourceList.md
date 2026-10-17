# TShopifyResourceList

Products and collections the PM picks, mixed, in their order.

- **Runtime value:** `readonly TShopifyResourceListItem[]`: `{ type: 'product' | 'collection', id, handle, title, image }`
- **LL field type:** `shopifyResourceList`
- **Inspector renderer:** `ShopifyResourceListPicker`, with Products and Collections tabs

Rows show each item's photo and name, reorder by drag, and are removed with their ✕; adding the same item twice is skipped; the schema's `min` / `max` limit removes and adds. Search runs in the store (Storefront `query:`). Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyResourceList } from '@tiledev/types';

interface Props {
  items?: TShopifyResourceList;
}
```

```tsx
items?.map((item) => item.type === 'product' ? openProduct(item.handle) : openCollection(item.handle))
```

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
