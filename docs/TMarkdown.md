# TMarkdown

Multi-line text intended to be rendered as markdown.

- **Runtime value:** `string` (markdown source)
- **LL field type:** `markdown`
- **Inspector renderer:** styled `<textarea>` with a markdown placeholder
- **Schema affordances:** `maxLength`

The store still holds a plain string — you decide how to render it (e.g.
`react-native-markdown-display`, a custom renderer, or as-is).

## Usage

```ts
import type { TMarkdown } from '@apptile/types';
import Markdown from 'react-native-markdown-display';

interface Props {
  body: TMarkdown;
}

export default function FaqItem({ body }: Props) {
  return <Markdown>{body}</Markdown>;
}
```
