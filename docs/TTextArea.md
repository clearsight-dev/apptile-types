# TTextArea

Multi-line plain text — copy blocks, descriptions.

- **Runtime value:** `string`
- **LL field type:** `textarea`
- **Inspector renderer:** styled `<textarea>` (taller, same inspector tone)
- **Schema affordances:** `maxLength`

## Usage

```ts
import type { TTextArea } from '@apptile/types';

interface Props {
  description: TTextArea;
}

export default function ProductBlurb({ description }: Props) {
  return <Text>{description}</Text>;
}
```
