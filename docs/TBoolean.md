# TBoolean

On/off toggle.

- **Runtime value:** `boolean`
- **LL field type:** `boolean`
- **Inspector renderer:** `ToggleInput` (small)

## Usage

```ts
import type { TBoolean } from '@apptile/types';

interface Props {
  showBadge: TBoolean;
}

export default function ProductCard({ showBadge }: Props) {
  return <View>{showBadge && <Badge />}</View>;
}
```
