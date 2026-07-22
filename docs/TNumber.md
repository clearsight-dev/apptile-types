# TNumber

Plain numeric value with optional bounds.

- **Runtime value:** `number`
- **LL field type:** `number`
- **Inspector renderer:** `NumberInput` (with stepper)
- **Schema affordances:** `min`, `max`

## Usage

```ts
import type { TNumber } from '@apptile/types';

interface Props {
  columns: TNumber;
}

export default function ProductGrid({ columns }: Props) {
  return <FlatList numColumns={columns} … />;
}
```

For a slider surface instead of a stepper, use [TSlider](TSlider.md).
