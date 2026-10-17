# @apptile/types

Type aliases a tile author uses to tell the TilePacket editor which of their
component's props are Live-Layer-editable. Each `T*` alias equates to exactly
the runtime value shape the corresponding LL control emits — no phantom brand,
no wrapper. TypeScript sees a plain `string` / `number` / `TTypographyValue`
etc., so a value passes through with zero cost.

The differentiation is at the **declaration site**. The editor's auto-wire
pass reads the type identifier used in each Props field (`title: TText` vs.
`title: TColor`) and:

1. Emits a `useLiveLayer` hook binding that prop to the LL store.
2. Rewrites the JSX site to consume the wired value.
3. Appends a matching field entry to `src/live-layer.schema.json` — with the
   `type` (the LL field type), and where applicable `options`, `format`,
   `min`, `max`, etc.

The Live Layer inspector then renders the exact same rich control that the
visual builder's right panel uses for that value shape.

---

## Quick start

```ts
import type {
  TText, TImage, TColor, TEnum, TSpacing, TShadow,
} from '@apptile/types';

interface Props {
  title:   TText;
  hero:    TImage;
  tint:    TColor;
  size:    TEnum<'sm' | 'md' | 'lg'>;
  padding: TSpacing;
  shadow:  TShadow;
  count?:  number;                 // plain — ignored by auto-wire
}

export default function PromoBanner({
  title, hero, tint, size, padding, shadow,
}: Props) {
  // Values arrive as normal props — the wire path takes care of
  // reading from LL. Nothing to do inside the component.
  return <View style={{ ...padding, ...shadow, backgroundColor: tint }}>…</View>;
}
```

Drop this tile onto any screen and the LL panel gets a group with six
editable fields — text, image, colour, enum dropdown, spacing block,
shadow control.

---

## The alias catalogue

Each alias has its own doc — click through for the runtime value type, the
LL field it maps to, the inspector renderer used, and a usage example.

### Primitive fields

- [TText](docs/TText.md)                — free-form text
- [TTextArea](docs/TTextArea.md)        — multi-line text
- [TMarkdown](docs/TMarkdown.md)        — markdown body copy
- [TNumber](docs/TNumber.md)            — number with optional min/max
- [TBoolean](docs/TBoolean.md)          — toggle
- [TColor](docs/TColor.md)              — colour picker
- [TImage](docs/TImage.md)              — asset URI (opens the image modal)
- [TUrl](docs/TUrl.md)                  — absolute URL
- [TDeeplink](docs/TDeeplink.md)        — deeplink URI
- [TAspectRatio](docs/TAspectRatio.md)  — ratio picker
- [TShopifyCollection](docs/TShopifyCollection.md) — Shopify collection handle
- [TFormatText](docs/TFormatText.md)    — validated text (phone / email / address)

### Composite fields

- [TTypography](docs/TTypography.md)    — font family / weight / size / …
- [TList](docs/TList.md)                — repeater over a nested item shape
- [TEnum](docs/TEnum.md)                — dropdown from a string-literal union

### Right-panel parity (added 2026-07)

- [TSlider](docs/TSlider.md)            — bounded number on a track
- [TAngle](docs/TAngle.md)              — degrees, rotation dial
- [TDimension](docs/TDimension.md)      — `number | '<n>%' | 'auto'`
- [TSpacing](docs/TSpacing.md)          — padding + margin block
- [TBorder](docs/TBorder.md)            — width / color / radius / style
- [TShadow](docs/TShadow.md)            — RN shadow props + Android elevation
- [TTransform](docs/TTransform.md)      — translate / rotate / scale
- [TFlex](docs/TFlex.md)                — flexDirection / justify / align / wrap
- [TFlexAlign](docs/TFlexAlign.md)      — single-axis alignment token
- [TPosition](docs/TPosition.md)        — absolute-position insets

### Shopify (added 2026-10)

- [TShopifyProduct / TShopifyBlog / …Handle](docs/TShopifyResource.md) — one store record, or its handle
- [TShopifyResourceList](docs/TShopifyResourceList.md) — ordered products and/or collections (also `TShopifyProductList`, `TShopifyCollectionList`)

### Content binding (added 2026-10)

- [TIcon / TDateTime / TNavigation / TScreen / TVideo / TVideoCollection / TListEditor](docs/content-binding.md)

---

## Notes on the wire path

- Any prop whose type annotation is **not** one of the `T*` aliases is left
  alone by auto-wire. Plain `string`, `number`, `boolean`, custom interface
  — all ignored. Mix wired and plain props freely.
- Optional wrap is honoured: `title?: TText` and `title: TText | undefined`
  are both detected — the first `T*` branch wins.
- Auto-wire runs on drop and on delete-cleanup. Editing the file by hand
  and re-saving is fine too; the runtime scanner (`runFilesAstSync.ts`)
  re-scans the file's AST on every tick and re-derives the LL bindings.
- The `T_TYPE_MAP` registry lives in
  `autoWireLiveLayer.ts`. Adding a new alias
  means (a) exporting it here, (b) a `LiveLayerFieldType` entry in
  `api/liveLayer.ts`, (c) a map entry in
  `T_TYPE_MAP`, (d) a switch case in `FieldRow.tsx`.

---

## Install

```bash
npm install @apptile/types
```

Type-only package — no runtime footprint.
