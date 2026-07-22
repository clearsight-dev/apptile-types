# TTransform

Uniform 2D transform — translate, rotate, and a single scale factor.

- **Runtime value:** `TTransformValue`
- **LL field type:** `transform`
- **Inspector renderer:** `TransformControl`

```ts
export interface TTransformValue {
  translateX?: number;
  translateY?: number;
  rotate?: number;    // degrees
  scale?: number;
}
export type TTransform = TTransformValue;
```

## Usage

```ts
import type { TTransform } from '@apptile/types';

interface Props {
  xform: TTransform;
}

export default function AnimatedTile({ xform }: Props) {
  const { translateX = 0, translateY = 0, rotate = 0, scale = 1 } = xform;
  return (
    <View
      style={{
        transform: [
          { translateX }, { translateY },
          { rotate: `${rotate}deg` },
          { scale },
        ],
      }}
    />
  );
}
```

RN's `transform` prop wants an array of single-key objects — build it from
the flat LL value at use-site.
