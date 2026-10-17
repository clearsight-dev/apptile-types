# Content-binding aliases

All are plain strings at runtime; the alias picks the inspector control.

| Alias | Runtime value | LL field type | Control |
|---|---|---|---|
| `TIcon` | icon id | `icon` | searchable icon grid |
| `TDateTime` | local `YYYY-MM-DDTHH:mm` | `dateTime` | inline date/time picker |
| `TNavigation` | a screen, a route, or a raw link | `navigation` | destination picker |
| `TScreen` | screen name | `screen` | the app's screens |
| `TVideo` | Bunny Stream video guid (not a URL) | `bunnyStream` | video editor |
| `TVideoCollection` | shoppable-feed collection id | `videoCollection` | collection selector |
| `TListEditor<T>` | `readonly T[]` | `listEditor` | same repeater as [TList](TList.md) |
