# TAspectRatio

Aspect-ratio string like `'16:9'`, `'1:1'`, `'3:4'`.

- **Runtime value:** `string` (colon-separated `W:H`)
- **LL field type:** `aspectRatio`
- **Inspector renderer:** `AspectRatioControl` — preset ratios + a custom
  W×H input
- **Schema affordances:** `presets` — ratios to show above the freeform input

## Usage

```ts
import type { TAspectRatio } from '@tiledev/types';

interface Props {
  ratio: TAspectRatio;
}

export default function MediaTile({ ratio }: Props) {
  const [w, h] = ratio.split(':').map(Number);
  return <View style={{ aspectRatio: w / h }} />;
}
```
