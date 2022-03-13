export const colorScaleNames = [
  'gray',
  'grayA',
  'mauve',
  'red',
  'orange',
  'purple',
  'blue',
  'green',
  'sky',
  'yellow',
] as const;
export const colorScaleIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

export type ColorScaleName = typeof colorScaleNames[number];
export type ColorScaleIndex = typeof colorScaleIndices[number];

export type ColorScheme<CSN extends ColorScaleName, CSI extends ColorScaleIndex> = `${CSN}${CSI}`;
export type ColorToken = ColorScheme<ColorScaleName, ColorScaleIndex>;

export function isScaleIndex(num: number): num is ColorScaleIndex {
  return colorScaleIndices.includes(num as ColorScaleIndex);
}
export function isScaleName(str: string): str is ColorScaleName {
  return colorScaleNames.includes(str as ColorScaleName);
}

export type ColorScale = Record<ColorToken, string>;
export type ColorSementic = {
  hiContrast: string;
  loContrast: string;

  primary: string;
  secondary: string;

  success: string;
  warning: string;
  error: string;
};

/**
 * Color Type
 */
export type Color = {
  scale: ColorScale;
  sementic: ColorSementic;
};
