import { styled } from '@stitchesConfig';

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - 64px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Timer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$sSpaceLg',

  '& span': {
    fontSize: '6.25rem'
  }
});