# TImage

Asset URI — always a plain URL string, not an RN `{ uri: … }` literal.

- **Runtime value:** `string` (URL)
- **LL field type:** `image`
- **Inspector renderer:** thumbnail tile that opens the image-picker modal,
  plus a 480/720/1080/1400/original variant strip

## Usage

```ts
import type { TImage } from '@tiledev/types';

interface Props {
  hero: TImage;
}

export default function HeroBanner({ hero }: Props) {
  return <Image source={{ uri: hero }} style={{ width: '100%', height: 200 }} />;
}
```

CDN variant URLs are derived from the picked URL — the inspector strip
switches between them without extra work.
