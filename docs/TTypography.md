# TTypography

Composite typography value — font family, weight, size, line-height,
letter-spacing, transform, decoration. Optionally inherits from a theme
token via `$ref` and applies `overrides`.

- **Runtime value:** `TTypographyValue`
- **LL field type:** `typography`
- **Inspector renderer:** `TypographyControl` — theme-token dropdown, plus
  overridable font family / weight / size / etc.
- **Schema affordances:** `presets` — theme tokens surfaced at the top

```ts
export interface TTypographyValue {
  $ref?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: 'normal' | 'italic';
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecorationLine?:
    | 'none' | 'underline' | 'line-through' | 'underline line-through';
  overrides?: Partial<TTypographyValue>;
}
export type TTypography = TTypographyValue;
```

## Usage

```ts
import type { TTypography } from '@apptile/types';
import { resolveTypography } from '@/core/theme';

interface Props {
  title: TTypography;
}

export default function Headline({ title }: Props) {
  return <Text style={resolveTypography(title)}>Hello</Text>;
}
```

`resolveTypography` (or your app's equivalent) merges the referenced theme
token with `overrides` and returns a plain RN `TextStyle`.
