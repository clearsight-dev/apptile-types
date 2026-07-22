# TAngle

Angle in degrees, edited with a rotation dial.

- **Runtime value:** `number` (degrees)
- **LL field type:** `angle`
- **Inspector renderer:** `AngleInput` — draggable dial + numeric input
- **Schema affordances:** `min` (default -360), `max` (default 360), `step`

## Usage

```ts
import type { TAngle } from '@apptile/types';

interface Props {
  tilt: TAngle;
}

export default function SkewedCard({ tilt }: Props) {
  return <View style={{ transform: [{ rotate: `${tilt}deg` }] }} />;
}
```
