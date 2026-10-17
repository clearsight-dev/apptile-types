# TPosition

Absolute-position insets — `top` / `right` / `bottom` / `left`, each px or
percent.

- **Runtime value:** `TPositionValue`
- **LL field type:** `position`
- **Inspector renderer:** `PositionPrismControl` — per-side inputs with a
  unit toggle. Values are merged per-side on change so the object keeps
  all four sides

```ts
export interface TPositionValue {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}
export type TPosition = TPositionValue;
```

## Usage

```ts
import type { TPosition } from '@tiledev/types';

interface Props {
  position: TPosition;
}

export default function FloatingBadge({ position }: Props) {
  return <View style={{ position: 'absolute', ...position }} />;
}
```

Set `position: 'absolute'` (or `'fixed'` on web) at use-site — the LL
value carries only the inset keys.
