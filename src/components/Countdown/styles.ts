import { styled } from '@stitchesConfig';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Timer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& span': {
    fontSize: '4.25rem'
  }
});
