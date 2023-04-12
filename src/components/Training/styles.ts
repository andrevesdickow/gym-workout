import { styled } from '@stitchesConfig';

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - 64px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // justifyContent: 'space-evenly',
  gap: '$sSpaceMd',
  padding: '$sSpaceXs',
  color: '$black',

  '& h3': {
    padding: '$sSpaceMd'
  },

  '& small': {
    fontSize: '$body3'
  },

  '& img': {
    width: 'auto'
  },

  '@dark': {
    color: '$white',

    '& img': {
      filter: 'invert(1)'
    }
  },

  '@downSm': {
    // height: '-webkit-fill-available',

    '& img': {
      width: '100%',
      height: 'auto',
      maxWidth: 250
    }
  }
});
