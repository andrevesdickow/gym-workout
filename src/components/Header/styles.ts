import { styled } from '@stitchesConfig';

export const Header = styled('header', {
  width: '100%',
  height: '$8',
  padding: '$sSpaceSm',
  display: 'flex',
  gap: '$sSpaceXs',
  background: '$header',
  color: '$white',

  '& a': {
    color: '$white',
    width: '$6',
    height: '$6',
    display: 'grid',
    placeContent: 'center',
    borderRadius: '50%',

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
  }
});

export const HeaderTitleContent = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& h2': {
    textTransform: 'uppercase',
    fontWeight: '$bold'
  }
});
