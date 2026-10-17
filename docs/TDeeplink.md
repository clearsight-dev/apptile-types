# TDeeplink

Deep-link URI — `scheme://path` targeting a route inside your app.

- **Runtime value:** `string` (deeplink)
- **LL field type:** `deeplink`
- **Inspector renderer:** styled `<input>` with monospaced font and
  `'mystore://…'` placeholder

## Usage

```ts
import type { TDeeplink } from '@tiledev/types';

interface Props {
  onTapRoute: TDeeplink;
}

export default function TileCard({ onTapRoute }: Props) {
  return <Pressable onPress={() => Linking.openURL(onTapRoute)}>…</Pressable>;
}
```

For external absolute URLs, use [TUrl](TUrl.md).
