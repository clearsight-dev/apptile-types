/**
 * @apptile/types
 * ---------------------------------------------------------------------------
 * Type aliases a tile author uses to declare which of their component's
 * props should be exposed to the Live Layer inspector. Each `T*` type
 * equates to EXACTLY the value shape the corresponding LL control emits
 * at runtime — no phantom brand, no wrapper. TypeScript sees a plain
 * `string` / `number` / `TTypographyValue` etc., so a value passes
 * through with zero cost.
 *
 * The differentiation is at the DECLARATION SITE: the editor's auto-wire
 * pass reads the type identifier used in the tile's Props (`title: TText`
 * vs. `title: TColor`) and generates the matching field control (text
 * input vs. colour picker) + a schema entry for the placed instance.
 *
 * Example:
 *   import type { TText, TImage, TColor } from '@apptile/types';
 *   interface Props {
 *     title: TText;
 *     hero:  TImage;
 *     tint:  TColor;
 *     count?: number;   // plain — ignored by auto-wire
 *   }
 *   export default function Banner({ title, hero, tint, count }: Props) { … }
 */

// ─── Primitive fields ────────────────────────────────────────────────────
export type TText              = string;
export type TTextArea          = string;
export type TMarkdown          = string;
export type TNumber            = number;
export type TBoolean           = boolean;
export type TColor             = string;  // e.g. '#ff5722' or 'rgb(…)'
export type TImage             = string;  // asset URI
export type TUrl               = string;  // absolute URL
export type TDeeplink          = string;  // scheme://…
export type TAspectRatio       = string;  // e.g. '16:9', '1:1'
export type TShopifyCollection = string;  // collection handle

// ─── Format-constrained text (email / phone / postal address) ────────────
//
// The value at runtime is still a plain string — the generic parameter is
// a hint for the editor to pick the matching validator and input mode.
// A tile that types a prop `contact: TFormatText<'email'>` gets an email
// field control in the LL inspector; the runtime value is `string`.
export type TFormatText<F extends 'phone' | 'email' | 'address'> = string & { readonly __format?: F };

// ─── Typography — composite RN TextStyle shape ───────────────────────────
export interface TTypographyValue {
  /** Theme token reference — inherits its base then applies `overrides`. */
  $ref?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: 'normal' | 'italic';
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  overrides?: Partial<TTypographyValue>;
}
export type TTypography = TTypographyValue;

// ─── Repeater over a nested item shape ───────────────────────────────────
//
// The child type `T` can itself use `T*` fields — the inspector unpacks
// them into columns. Ordering is authoring order; the runtime value is
// just a read-only array of `T`.
export type TList<T> = readonly T[];

// ─── Enum — union of string literals ─────────────────────────────────────
//
// The generic parameter's literal union becomes the `options` list in the
// LL schema. The runtime value is just the chosen string.
//   size: TEnum<'sm' | 'md' | 'lg'>
export type TEnum<T extends string> = T;

// ─── Slider — bounded number, dragged on a track ─────────────────────────
export type TSlider = number;

// ─── Angle — degrees, rendered with a rotation dial ──────────────────────
export type TAngle = number;

// ─── Dimension — number in px, a %-string, or 'auto' ─────────────────────
export type TDimensionValue = number | 'auto' | string;
export type TDimension      = TDimensionValue;

// ─── Spacing — padding + margin block (React-Native style keys) ──────────
export interface TSpacingValue {
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}
export type TSpacing = TSpacingValue;

// ─── Border — width/color/radius/style, per-corner radii optional ────────
export interface TBorderValue {
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
}
export type TBorder = TBorderValue;

// ─── Shadow — RN shadow* props + Android elevation ───────────────────────
export interface TShadowValue {
  shadowColor?: string;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
}
export type TShadow = TShadowValue;

// ─── Transform — translate / rotate / scale (uniform) ────────────────────
export interface TTransformValue {
  translateX?: number;
  translateY?: number;
  rotate?: number;
  scale?: number;
}
export type TTransform = TTransformValue;

// ─── Flexbox — direction / justify / align / wrap in one object ──────────
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

// ─── Flex-alignment single-token — for props that take just one axis ─────
export type TFlexAlign =
  | 'flex-start' | 'flex-end' | 'center'
  | 'space-between' | 'space-around' | 'space-evenly'
  | 'stretch' | 'baseline';

// ─── Position — absolute-position insets (px or %) ───────────────────────
export interface TPositionValue {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}
export type TPosition = TPositionValue;
