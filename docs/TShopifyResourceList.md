# TShopifyResourceList

An ordered list of Shopify products and/or collections: the inspector's
Products/Collections list picker (selected rows with remove and drag to
reorder, plus an "Add items" card with store search).

| Alias | Picker offers |
|---|---|
| `TShopifyResourceList` | Products \| Collections tabs |
| `TShopifyProductList` | products only |
| `TShopifyCollectionList` | collections only |

- **Runtime value:** `TShopifyResourceListItem[]`, in display order
- **LL field types:** `shopifyResourceList`, `shopifyProductList`, `shopifyCollectionList`
- **Inspector renderer:** `ShopifyResourceListPicker` (queries the connected
  store's Storefront API through `/api/apps/:appId/integrations`)
- **Schema affordances:** `disableAdd`, `min` (rows can't be removed below it),
  `max` (adds stop at it)

```ts
export interface TShopifyResourceListItem extends TShopifyResource {
  type: 'product' | 'collection';
}
export type TShopifyResourceList = TShopifyResourceListItem[];
```

## Usage

```ts
import type { TShopifyResourceList } from '@apptile/types';

interface Props {
  slides: TShopifyResourceList;
}

export default function LandscapeImageSlider({ slides }: Props) {
  return slides.map((s) => (
    <Slide
      key={`${s.type}:${s.handle}`}
      image={s.image}
      onPress={() => navigate(s.type === 'product' ? 'Product' : 'Collection', { handle: s.handle })}
    />
  ));
}
```

Requires a Shopify integration on the app. Without one the picker says the
store isn't linked.
