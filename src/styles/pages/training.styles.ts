import { styled } from '@stitchesConfig';

export const Section = styled('section', {
  width: '100%',
  height: '100vh',
  display: 'grid',
  placeContent: 'center',

  '& svg': {
    fontSize: '$h2',
    color: '$header',
    marginBottom: -4,
    marginRight: '$sSpaceXxs'
  }
});
