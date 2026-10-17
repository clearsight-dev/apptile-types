# TBorder

Border block — width, colour, style, uniform + per-corner radius.

- **Runtime value:** `TBorderValue`
- **LL field type:** `border`
- **Inspector renderer:** `BorderControl`

```ts
export interface TBorderValue {
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
}
export type TBorder = TBorderValue;
```

## Usage

```ts
import type { TBorder } from '@tiledev/types';

interface Props {
  border: TBorder;
}

export default function ChipButton({ border }: Props) {
  return <View style={border}>…</View>;
}
```

Keys are RN style keys — spread onto a `View` style directly.
