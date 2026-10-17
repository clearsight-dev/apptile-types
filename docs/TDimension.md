# TDimension

Length value — a number in `px`, a percent string, or the keyword `'auto'`.

- **Runtime value:** `number | 'auto' | string`
- **LL field type:** `dimension`
- **Inspector renderer:** `DimensionInput` — number field with a cycling
  `px` / `%` / `auto` unit toggle
- **Schema affordances:** `min`, `max`

```ts
export type TDimensionValue = number | 'auto' | string;
export type TDimension      = TDimensionValue;
```

## Usage

```ts
import type { TDimension } from '@tiledev/types';

interface Props {
  width:  TDimension;
  height: TDimension;
}

export default function ResponsiveTile({ width, height }: Props) {
  return <View style={{ width, height }} />;
}
```

Values like `120`, `'50%'`, `'auto'` all flow through unchanged — RN accepts
them as `DimensionValue` natively.
