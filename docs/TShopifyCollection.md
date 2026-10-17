# TShopifyCollection

One Shopify collection, kept as its record. **Changed in 0.2.0:** it was the handle; a prop that holds a handle is now [TShopifyCollectionHandle](TShopifyCollectionHandle.md).

- **Runtime value:** [`TShopifyResource`](#the-record): `{ id, handle, title, image }`
- **LL field type:** `shopifyCollection`
- **Inspector renderer:** `ShopifyResourcePicker` (collection, record mode)

The picker comes in pairs: `T<Thing>Handle` keeps the handle a screen loads the thing with; `T<Thing>` keeps the record, enough to draw a card without a request. Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyCollection } from '@tiledev/types';

interface Props {
  collection?: TShopifyCollection;
}
```

```tsx
<Card title={collection?.title} image={collection?.image} />
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
