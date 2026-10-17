# TShopifyProduct / TShopifyBlog / …Handle

One Shopify record, picked from the connected store. Each entity comes as a
pair: the `…Handle` alias stores the bare handle a runtime fetches with; the
bare alias stores the resolved record so a tile can render without a second
round-trip.

| Alias | Runtime value | LL field type |
|---|---|---|
| `TShopifyProductHandle` | `string` | `shopifyProductHandle` |
| `TShopifyProduct` | `TShopifyResource` | `shopifyProduct` |
| `TShopifyCollectionHandle` | `string` | `shopifyCollectionHandle` |
| `TShopifyBlogHandle` | `string` | `shopifyBlogHandle` |
| `TShopifyBlog` | `TShopifyResource` | `shopifyBlog` |

- **Inspector renderer:** `ShopifyResourcePicker` (searchable, thumbnailed list)
- **Schema affordances:** `disableAdd`

```ts
export interface TShopifyResource {
  id: string;      // Storefront GID
  handle: string;
  title: string;
  image?: string | null;
}
```

With no Shopify integration the picker falls back to typing the handle; the
stored shape is the same, so connecting a store later loses nothing.

`TShopifyCollection` predates this pairing and is typed as the handle string —
see [TShopifyCollection](TShopifyCollection.md).
