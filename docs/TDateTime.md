# TDateTime

A local date and time.

- **Runtime value:** `string`, `YYYY-MM-DDTHH:mm`
- **LL field type:** `dateTime`
- **Inspector renderer:** `DateTimeInput`

## Usage

```ts
import type { TDateTime } from '@tiledev/types';

interface Props {
  startsAt?: TDateTime;
}
```
