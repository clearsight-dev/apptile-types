# TShopifyCollection

Shopify collection handle — picker backed by the connected store's
integration API.

- **Runtime value:** `string` (collection handle)
- **LL field type:** `shopifyCollection`
- **Inspector renderer:** `ShopifyCollectionFieldControl` (searchable
  picker; hits `/api/apps/:appId/integrations`)
- **Schema affordances:** `disableAdd`

## Usage

```ts
import type { TShopifyCollection } from '@apptile/types';

interface Props {
  handle: TShopifyCollection;
}

export default function CollectionRail({ handle }: Props) {
  const products = useCollectionProducts(handle);
  return <FlatList data={products} … />;
}
```

Requires a Shopify integration to be connected on the app. Without one the
picker shows a "Connect a Shopify store" hint.
