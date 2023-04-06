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
    border: '1px solid $colors$foreground-rgb',
    borderRadius: 8,

    '&:hover': {
      borderWidth: 2
    },

    '&:focus': {
      borderWidth: 2
    },

    '& svg': {
      width: '$5',
      height: '$5'
    }
  }
});
