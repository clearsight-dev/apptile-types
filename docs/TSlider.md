# TSlider

Bounded number, dragged on a track. Same runtime type as `TNumber` but the
inspector renders a slider with track-drag and typed number input.

- **Runtime value:** `number`
- **LL field type:** `slider`
- **Inspector renderer:** `SliderInput` — track + numeric input
- **Schema affordances:** `min` (default 0), `max` (default 1), `step`

## Usage

```ts
import type { TSlider } from '@tiledev/types';

interface Props {
  opacity: TSlider;   // usually 0..1
  weight:  TSlider;   // set min/max in the schema for other ranges
}

export default function Overlay({ opacity, weight }: Props) {
  return <View style={{ opacity, borderWidth: weight }} />;
}
```

Use [TNumber](TNumber.md) when a stepper (up/down buttons) is a better fit
than a drag track.
