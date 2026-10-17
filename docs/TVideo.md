# TVideo

A Bunny Stream video.

- **Runtime value:** `string` (the video's guid, not a URL)
- **LL field type:** `bunnyStream`
- **Inspector renderer:** `BunnyStreamEditor`

## Usage

```ts
import type { TVideo } from '@tiledev/types';

interface Props {
  video?: TVideo;
}
```
