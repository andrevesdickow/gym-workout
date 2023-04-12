import { lightColors, darkColors } from '@/styles/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

/**
 * Tokens e configurações
 */
export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset
} = createStitches({
  theme: {
    colors: {
      ...lightColors
    },
    space: {
      'noSpace': '0',
      'sSpaceXxs': '4px',
      'sSpaceXs': '8px',
      'sSpaceSm': '16px',
      'sSpaceMd': '24px',
      'sSpaceLg': '32px',
      'sSpaceXl': '48px',
      'sSpaceXxl': '64px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px'
    },
    fontSizes: {
      'text1': '0.625rem', // 10px
      'body3': '0.75rem', // 12px
      'body2': '0.875rem', // 14px
      'body1': '1rem', // 16px
      'h2': '1.125rem', // 18px
      'h1': '1.625rem' // 26px
    },
    fontWeights: {
      'regular': 400,
      'bold': 700
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999'
    },
    transitions: {
      fast: '100ms ease-in-out',
      regular: '300ms ease-in-out'
    }
  },
  media: {
    downXs: `(max-width: ${breakpoints.xs}px)`,
    upXs: `(min-width: ${breakpoints.xs}px)`,
    downSm: `(max-width: ${breakpoints.sm}px)`,
    upSm: `(min-width: ${breakpoints.sm}px)`,
    downMd: `(max-width: ${breakpoints.md}px)`,
    upMd: `(min-width: ${breakpoints.md}px)`,
    downLg: `(max-width: ${breakpoints.lg}px)`,
    upLg: `(min-width: ${breakpoints.lg}px)`,
    downXl: `(max-width: ${breakpoints.xl}px)`,
    upXl: `(min-width: ${breakpoints.xl}px)`,
    downXxl: `(max-width: ${breakpoints.xxl}px)`,
    upXxl: `(min-width: ${breakpoints.xxl}px)`,
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },
  utils: {
    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    })
  }
});

/**
 * Types
 */
export type CSS = Stitches.CSS<typeof config>

/**
 * Tema escuro
 */
export const darkTheme = createTheme('dark', {
  colors: {
    ...darkColors
  }
});

/**
 * Estilos globais
 */
export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    WebkitFontSmoothing: 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  'body': {
    color: '$foreground-rgb',
    background: `linear-gradient(
        to bottom,
        transparent,
        $colors$background-end-rgb
      )
      $colors$background-start-rgb`,
    height: '100vh',
    minHeight: '-webkit-fill-available',
    overflow: 'hidden'
  },
  'html': {
    height: '-webkit-fill-available'
  },
  '@media (prefers-color-scheme: dark)': {
    ':root': {
      ...Object.values(darkTheme.colors).reduce((result: Record<string, string>, i) => {
        result[i.variable] = i.value;
        return result;
      }, {})
    }
  },
  // '::-webkit-scrollbar': {
  //   width: '$1',
  //   height: '$1'
  // },
  // '::-webkit-scrollbar-thumb': {
  //   background: '$primary-light',
  //   borderRadius: '$1'
  // },
  // '::-webkit-scrollbar-track': {
  //   background: 'rgba(19,21,23,.9)'
  // },
  '::selection': {
    background: '$header',
    color: '$white'
  }
});
