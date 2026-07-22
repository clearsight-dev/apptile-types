# TText

Free-form single-line text.

- **Runtime value:** `string`
- **LL field type:** `text`
- **Inspector renderer:** styled `<input type="text">` (28px, 11pt)
- **Schema affordances:** `maxLength`, `example` (placeholder)

## Usage

```ts
import type { TText } from '@apptile/types';

interface Props {
  headline: TText;
}

export default function Banner({ headline }: Props) {
  return <Text>{headline}</Text>;
}
```
