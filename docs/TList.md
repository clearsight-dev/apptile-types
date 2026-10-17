# TList

Repeater over a nested item shape. The child type `T` can itself use `T*`
fields — the inspector unpacks them into columns.

- **Runtime value:** `readonly T[]`
- **LL field type:** `list`
- **Inspector renderer:** `ListFieldControl` — sortable rows with per-column
  inputs derived from the nested schema
- **Schema affordances:** `itemFields` (nested), `disableAdd`

```ts
export type TList<T> = readonly T[];
```

## Usage

```ts
import type { TList, TText, TImage, TDeeplink } from '@tiledev/types';

interface Slide {
  title: TText;
  hero:  TImage;
  href:  TDeeplink;
}

interface Props {
  slides: TList<Slide>;
}

export default function HeroCarousel({ slides }: Props) {
  return (
    <FlatList
      data={slides}
      horizontal
      renderItem={({ item }) => <Slide {...item} />}
      keyExtractor={(_, i) => String(i)}
    />
  );
}
```

Auto-wire recurses into `Slide` and emits `itemFields` for each `T*`-typed
member — the inspector then renders a text / image / deeplink column per
row.
