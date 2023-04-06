import { styled } from '@stitchesConfig';

export const Button = styled('button', {
  border: 'none',
  margin: 0,
  padding: 0,
  width: '$7',
  height: '$7',
  backgroundColor: 'transparent',
  color: 'inherit',
  font: 'inherit',
  lineHeight: 'normal',
  WebkitTapHighlightColor: 'transparent',
  WebkitFontSmoothing: 'inherit',
  '-moz-osx-font-smoothing': 'inherit',
  WebkitAppearance: 'none',
  borderRadius: '50%',

  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },

  '& svg': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },

  '&:focus': {
    border: '1px solid rgba(255, 255, 255, 0.4)'
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    opacity: 0.7
  }
});
