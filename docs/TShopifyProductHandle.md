# TShopifyProductHandle

One Shopify product, kept as its handle.

- **Runtime value:** `string` (the product's handle)
- **LL field type:** `shopifyProductHandle`
- **Inspector renderer:** `ShopifyResourcePicker` (product, handle mode)

The picker comes in pairs: `T<Thing>Handle` keeps the handle a screen loads the thing with; `T<Thing>` keeps the record, enough to draw a card without a request. Needs the app's Shopify connection (shop domain and Storefront token). Without one the picker says the store isn't linked.

## Usage

```ts
import type { TShopifyProductHandle } from '@tiledev/types';

interface Props {
  productHandle?: TShopifyProductHandle;
}
```

```tsx
useProduct({ handle: productHandle })
```
