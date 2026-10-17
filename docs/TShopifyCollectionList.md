# TShopifyCollectionList

Collections the PM picks, in their order.

- **Runtime value:** `readonly TShopifyResourceListItem[]`, every item `type: 'collection'`
- **LL field type:** `shopifyCollectionList`
- **Inspector renderer:** `ShopifyResourceListPicker`, collections only

Rows show each item's photo and name, reorder by drag, and are removed with their ✕; adding the same item twice is skipped; the schema's `min` / `max` limit removes and adds. Search runs in the store (Storefront `query:`). Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyCollectionList } from '@tiledev/types';

interface Props {
  collections?: TShopifyCollectionList;
}
```

```tsx
collections?.map((c) => <Card key={c.id} title={c.title} image={c.image} onPress={() => open(c.handle)} />)
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
