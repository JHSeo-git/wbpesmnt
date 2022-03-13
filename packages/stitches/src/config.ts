import { rem } from 'polished';
import { createStitches } from '@stitches/react';
import type { PropertyValue, VariantProps, CSS } from '@stitches/react';
import { colors, fonts } from '@wbpesmnt/design-token';

const {
  styled,
  getCssText,
  keyframes,
  theme: lightTheme,
  createTheme,
  globalCss,
  config,
  css,
} = createStitches({
  media: {
    /**
     * @see https://tailwindcss.com/docs/responsive-design#overview
     */
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    motion: '(prefers-reduced-motion: no-preference)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  theme: {
    colors: { ...colors.light.scale, ...colors.light.sementic },
    fonts: { ...fonts.default.scale, ...fonts.default.sementic },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    lineHeights: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '1.75rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
      '5xl': '1',
      '6xl': '1',
      '7xl': '1',
      '8xl': '1',
      '9xl': '1',
    },
    sizes: {
      1: rem(5),
      2: rem(10),
      3: rem(15),
      4: rem(20),
      5: rem(25),
      6: rem(35),
      7: rem(45),
      8: rem(65),
      9: rem(80),
      10: rem(100),
      11: rem(120),
      12: rem(160),
      maxWidth: rem(770),
      maxWidthLg: rem(1280),
      headerHeight: rem(70),
      footerHeight: rem(120),
      sidebarWidth: rem(250),
    },
    space: {
      1: rem(5),
      2: rem(10),
      3: rem(15),
      4: rem(20),
      5: rem(25),
      6: rem(35),
      7: rem(45),
      8: rem(65),
      9: rem(80),
      10: rem(100),
      11: rem(120),
      12: rem(160),
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '10',
      2: '20',
      3: '30',
      4: '40',
      5: '50',
      fixed: '500',
      modal: '998',
      max: '999',
    },

    shadows: {
      muiShadow1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      muiShadow2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      muiShadow3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      muiShadow4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      muiShadow5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      interactiveShadow1:
        '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
      interactiveShadow2:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    },
    // letterSpacings: {},
    // transitions: {},
    // fontWeights: {},
    // borderStyles: {},
    // borderWidths: {},
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value: PropertyValue<'textAlign'>) => ({ textAlign: value }),
    fd: (value: PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    ai: (value: PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    // fw: (value: PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    // fg: (value: PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    // fs: (value: PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    // fb: (value: PropertyValue<'flexBasis'>) => ({ flexBasis: value }),
    bc: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),
    bs: (value: PropertyValue<'boxShadow'>) => ({ boxShadow: value }),
    lh: (value: PropertyValue<'lineHeight'>) => ({ lineHeight: value }),
    ox: (value: PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: PropertyValue<'overflowY'>) => ({ overflowY: value }),
    pe: (value: PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    userSelect: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    appearance: (value: PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
    ellipsisLine: (value: number) => ({
      display: '-webkit-box',
      WebkitLineClamp: value,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }),
  },
});

const darkTheme = createTheme('dark-theme', {
  colors: { ...colors.dark.scale, ...colors.dark.sementic },
});

export const lightThemeClassName = lightTheme.className;
export const darkThemeClassName = darkTheme.className;
export { globalCss, styled, getCssText, keyframes, config, css };
export type StitchesCSS = CSS<typeof config>;
export type { VariantProps };
