# TUrl

Absolute URL — displayed as monospaced text in the inspector.

- **Runtime value:** `string` (URL)
- **LL field type:** `url`
- **Inspector renderer:** styled `<input>` with monospaced font and
  `'https://…'` placeholder

## Usage

```ts
import type { TUrl } from '@tiledev/types';

interface Props {
  learnMore: TUrl;
}

export default function InlineLink({ learnMore }: Props) {
  return <Pressable onPress={() => Linking.openURL(learnMore)}>…</Pressable>;
}
```

For scheme-based routes inside your app, use [TDeeplink](TDeeplink.md).
