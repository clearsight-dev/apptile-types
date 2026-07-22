# TFlex

Flexbox layout block — direction, main-axis alignment, cross-axis
alignment, wrap.

- **Runtime value:** `TFlexValue`
- **LL field type:** `flex`
- **Inspector renderer:** `FlexboxControl`

```ts
export interface TFlexValue {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start' | 'flex-end' | 'center'
    | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?:
    | 'flex-start' | 'flex-end' | 'center' | 'stretch'
    | 'space-between' | 'space-around';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
export type TFlex = TFlexValue;
```

## Usage

```ts
import type { TFlex } from '@apptile/types';

interface Props {
  layout: TFlex;
  children: React.ReactNode;
}

export default function Stack({ layout, children }: Props) {
  return <View style={layout}>{children}</View>;
}
```

For a single axis (just `alignItems` or just `justifyContent`), use
[TFlexAlign](TFlexAlign.md).
