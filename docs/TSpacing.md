# TSpacing

Padding + margin block using React-Native style keys — one field for all
eight sides.

- **Runtime value:** `TSpacingValue`
- **LL field type:** `spacing`
- **Inspector renderer:** `BoxSpacingControl` (padding + margin prism)

```ts
export interface TSpacingValue {
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}
export type TSpacing = TSpacingValue;
```

## Usage

```ts
import type { TSpacing } from '@tiledev/types';

interface Props {
  spacing: TSpacing;
}

export default function Card({ spacing }: Props) {
  return <View style={spacing}>…</View>;
}
```

The keys are already RN style keys, so spreading the value onto a `View`
style is enough — no adapter needed.
