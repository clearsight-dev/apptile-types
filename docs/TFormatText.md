# TFormatText

Text with a format hint — the LL inspector picks a validator and input mode
(phone keypad, email keyboard, address autocomplete) based on the generic
parameter. The runtime value is a plain `string`.

- **Runtime value:** `string`
- **LL field type:** `formatText`
- **Inspector renderer:** `FormatInputControl` (validated input)
- **Schema affordances:** `format` — extracted from the generic parameter

```ts
export type TFormatText<F extends 'phone' | 'email' | 'address'> = string;
```

## Usage

```ts
import type { TFormatText } from '@apptile/types';

interface Props {
  supportEmail: TFormatText<'email'>;
  supportPhone: TFormatText<'phone'>;
  storeAddress: TFormatText<'address'>;
}

export default function ContactPanel({
  supportEmail, supportPhone, storeAddress,
}: Props) { … }
```

The auto-wire pass reads the generic parameter and writes `format: 'email'`
(etc.) into the schema field.
