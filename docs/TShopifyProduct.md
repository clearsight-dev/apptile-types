# TShopifyProduct

One Shopify product, kept as its record.

- **Runtime value:** [`TShopifyResource`](#the-record): `{ id, handle, title, image }`
- **LL field type:** `shopifyProduct`
- **Inspector renderer:** `ShopifyResourcePicker` (product, record mode)

The picker comes in pairs: `T<Thing>Handle` keeps the handle a screen loads the thing with; `T<Thing>` keeps the record, enough to draw a card without a request. Price and stock aren't in the record: load the product when the card shows them. Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyProduct } from '@tiledev/types';

interface Props {
  product?: TShopifyProduct;
}
```

```tsx
<Card title={product?.title} image={product?.image} />
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
