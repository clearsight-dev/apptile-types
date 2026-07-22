# TColor

Colour value — hex, rgb(), or a colour keyword.

- **Runtime value:** `string` (e.g. `'#ff5722'`, `'rgb(255,87,34)'`)
- **LL field type:** `color`
- **Inspector renderer:** `ColorInput` (with swatch popover)
- **Schema affordances:** `presets` — an array of preset hex colours pinned
  above the picker

## Usage

```ts
import type { TColor } from '@apptile/types';

interface Props {
  accent: TColor;
}

export default function CtaButton({ accent }: Props) {
  return <Pressable style={{ backgroundColor: accent }}>…</Pressable>;
}
```
