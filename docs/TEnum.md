# TEnum

Dropdown over a union of string literals.

- **Runtime value:** the literal `T`
- **LL field type:** `enum`
- **Inspector renderer:** `EnumSelect` (dropdown variant)
- **Schema affordances:** `options` — extracted automatically from the
  generic parameter's literal union at auto-wire time

```ts
export type TEnum<T extends string> = T;
```

## Usage

```ts
import type { TEnum } from '@apptile/types';

interface Props {
  size:  TEnum<'sm' | 'md' | 'lg'>;
  align: TEnum<'left' | 'center' | 'right'>;
}

export default function Cta({ size, align }: Props) {
  return <Text style={{ fontSize: SIZE[size], textAlign: align }}>Buy</Text>;
}
```

## Auto-wire behaviour

The auto-wire pass reads the generic parameter and:

- Recognises single-literal (`TEnum<'md'>`), unions
  (`TEnum<'sm' | 'md' | 'lg'>`), and parenthesised unions.
- Emits `options: [{ value, label }]` into the schema field where `label`
  is a title-cased pretty version of `value`.
- Falls back to a plain text input when the generic is anything other than
  a literal-union of strings (e.g. `TEnum<string>` or a reference).

For a colour-value dropdown, prefer [TColor](TColor.md) with `presets`.
