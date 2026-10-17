# TShopifyBlog

One Shopify blog, kept as its record.

- **Runtime value:** [`TShopifyResource`](#the-record): `{ id, handle, title, image }`
- **LL field type:** `shopifyBlog`
- **Inspector renderer:** `ShopifyResourcePicker` (blog, record mode)

The picker comes in pairs: `T<Thing>Handle` keeps the handle a screen loads the thing with; `T<Thing>` keeps the record, enough to draw a card without a request. Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyBlog } from '@tiledev/types';

interface Props {
  blog?: TShopifyBlog;
}
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
