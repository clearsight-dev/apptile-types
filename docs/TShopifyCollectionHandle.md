# TShopifyCollectionHandle

One Shopify collection, kept as its handle.

- **Runtime value:** `string` (the collection's handle, e.g. `summer-sale`)
- **LL field type:** `shopifyCollectionHandle`
- **Inspector renderer:** `ShopifyResourcePicker` (collection, handle mode)

The picker comes in pairs: `T<Thing>Handle` keeps the handle a screen loads the thing with; `T<Thing>` keeps the record, enough to draw a card without a request. Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyCollectionHandle } from '@tiledev/types';

interface Props {
  collectionHandle?: TShopifyCollectionHandle;
}
```

```tsx
useCollectionProducts({ handle: collectionHandle })
```
