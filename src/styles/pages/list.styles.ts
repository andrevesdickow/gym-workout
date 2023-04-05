import { styled } from '@stitchesConfig';

export const Main = styled('main', {
  width: '100%',
  height: 'calc(100vh - 64px)',
  display: 'grid',
  placeContent: 'center'
});

export const List = styled('ul', {
  listStyle: 'none',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$sSpaceMd',
  alignItems: 'center',

  '& a': {
    outline: 'none',
    textDecoration: 'none',
    fontWeight: '$bold',
    fontSize: '$h2',
    color: '$black'
  },

'@dark': {
  '& a': {
    color: '$white'
  }
}
});