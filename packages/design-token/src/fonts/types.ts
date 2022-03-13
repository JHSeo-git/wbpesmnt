export type FontScaleName = 'pretendard' | 'default' | 'code';

export type FontScale = Record<FontScaleName, string>;
export type FontSementic = {
  system: string;
};

/**
 * Font Type
 */
export type Font = {
  scale: FontScale;
  sementic: FontSementic;
};
