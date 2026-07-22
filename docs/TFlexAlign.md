# TFlexAlign

Single-axis flex alignment token — for props that only need one of
`justifyContent` / `alignItems` values.

- **Runtime value:** one of
  `'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'baseline'`
- **LL field type:** `flexAlign`
- **Inspector renderer:** `FlexAlignControl` — icon-buttons for each token

## Usage

```ts
import type { TFlexAlign } from '@apptile/types';

interface Props {
  align: TFlexAlign;
}

export default function CenteredRow({ align }: Props) {
  return <View style={{ flexDirection: 'row', justifyContent: align }} />;
}
```

For the full flexbox block (direction + alignment + wrap in one field),
use [TFlex](TFlex.md).
