# TListEditor

A list the PM authors: the same repeater as [TList](TList.md), with a name that says so.

- **Runtime value:** `readonly T[]`
- **LL field type:** `listEditor`
- **Inspector renderer:** `ListEditorControl` (a row per item, a cell per item field)

## Usage

```ts
import type { TListEditor } from '@tiledev/types';

interface Props {
  cards?: TListEditor<Card>;
}
```
