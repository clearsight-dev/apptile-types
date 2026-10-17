# TShadow

Drop-shadow block — RN `shadow*` props on iOS + Android `elevation`.

- **Runtime value:** `TShadowValue`
- **LL field type:** `shadow`
- **Inspector renderer:** `ShadowControl` — colour + offset + blur +
  opacity + elevation. The control emits partial deltas; the LL FieldRow
  merges them with the current value before propagating

```ts
export interface TShadowValue {
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
}
export type TShadow = TShadowValue;
```

## Usage

```ts
import type { TShadow } from '@tiledev/types';

interface Props {
  shadow: TShadow;
}

export default function LiftedCard({ shadow }: Props) {
  const { shadowOffsetX = 0, shadowOffsetY = 0, ...rest } = shadow;
  return (
    <View
      style={{
        ...rest,
        shadowOffset: { width: shadowOffsetX, height: shadowOffsetY },
      }}
    />
  );
}
```

Split `shadowOffsetX` / `shadowOffsetY` back into RN's expected
`shadowOffset: { width, height }` shape at use-site — the LL value is flat
so the inspector can edit X and Y independently.
