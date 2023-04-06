import { styled } from '@stitchesConfig';

export const Main = styled('main', {
  width: '100%',
  height: 'calc(100vh - 64px)',
  display: 'grid',
  placeContent: 'center',
  gap: '$sSpaceMd',

  '& a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$sSpaceXs',
    color: '$foreground-rgb',
    textDecoration: 'none',
    padding: '$sSpaceSm',
    boxShadow: '0 0 0 1px $colors$foreground-rgb',
    borderRadius: 8,
    transition: 'all 0.1s ease-in-out',

    '&:hover': {
      boxShadow: '0 0 0 2px $colors$foreground-rgb',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$foreground-rgb'
    },

    '& svg': {
      width: '$5',
      height: '$5'
    }
  }
});
