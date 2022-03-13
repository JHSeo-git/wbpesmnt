import {
  gray,
  grayA,
  grayDark,
  grayDarkA,
  mauve,
  mauveDark,
  red,
  redDark,
  orange,
  orangeDark,
  purple,
  purpleDark,
  blue,
  blueDark,
  green,
  greenDark,
  sky,
  skyDark,
  yellow,
  yellowDark,
} from '@radix-ui/colors';
import type { Color } from './types';

const light: Readonly<Color> = Object.freeze({
  scale: {
    ...gray,
    ...grayA,
    ...mauve,
    ...red,
    ...orange,
    ...purple,
    ...blue,
    ...green,
    ...sky,
    ...yellow,
  },
  sementic: {
    hiContrast: '$mauve12',
    loContrast: '#FFF',

    primary: '$blue11',
    secondary: '$purple11',

    success: '$green11',
    warning: '$orange11',
    error: '$red11',
  },
});

const dark: Readonly<Color> = Object.freeze({
  scale: {
    ...grayDark,
    ...grayDarkA,
    ...mauveDark,
    ...redDark,
    ...orangeDark,
    ...purpleDark,
    ...blueDark,
    ...greenDark,
    ...skyDark,
    ...yellowDark,
  },
  sementic: {
    hiContrast: '$mauve12',
    loContrast: '$mauve3',

    primary: '$blue11',
    secondary: '$purple11',

    success: '$green11',
    warning: '$orange11',
    error: '$red11',
  },
});

export { light, dark };
