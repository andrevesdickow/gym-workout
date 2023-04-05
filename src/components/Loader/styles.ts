import { styled, keyframes } from '@stitchesConfig';

const animLoader = keyframes({
  '0%': {
    height: '$7'
  },
  '100%': {
    height: '$1'
  }
});

export const Loader = styled('span', {
  width: '$2',
  height: 40,
  borderRadius: 4,
  display: 'block',
  margin: '20px auto',
  position: 'relative',
  background: 'CurrentColor',
  color: '$black',
  boxSizing: 'border-box',
  animation: `${animLoader} 0.3s 0.3s linear infinite alternate`,

  '@dark': {
    color: '$white'
  },

  '&::after': {
    content: '',
    width: '$2',
    height: 40,
    borderRadius: 4,
    background: 'CurrentColor',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 20,
    boxSizing: 'border-box',
    animation: `${animLoader} 0.3s  0.45s  linear infinite alternate`
  },

  '&::before': {
    content: '',
    width: '$2',
    height: 40,
    borderRadius: 4,
    background: 'CurrentColor',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    boxSizing: 'border-box',
    animation: `${animLoader} 0.3s  0.45s  linear infinite alternate`,
    left: -20,
    animationDelay: '0s'
  }
});