# TLink

Where a tap goes, as one destination: a collection, a product, a page or one of the app's screens. It
replaces a tile's separate collection, product and page fields, where one silently won over the others
(decided 2026-10-27).

- **Runtime value:** one of
  - `{ type: 'collection', handle: string }`
  - `{ type: 'product', handle: string }`
  - `{ type: 'page', url: string }`
  - `{ type: 'screen', screen: string }`
- **Unset** (or `null`): no tap. An empty `handle`, `url` or `screen` is no tap either: the dashboard writes
  the kind as soon as it is picked, before its destination.
- **LL field type:** `link` ("Opens": Collection · Product · Page · Screen · Nothing, then that kind's picker)
- **Inspector renderer:** `LinkInput`

## Usage

```ts
import type { TLink } from '@tiledev/types';

interface Props {
  link?: TLink;
  onOpen?: (link: TLink) => void;
}
```
