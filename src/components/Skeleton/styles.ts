import { keyframes, styled } from '@stitchesConfig';

const shimmer = keyframes({
  '0%': {
    opacity: 1
  },
  '50%': {
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  }
});

export const SkeletonBox = styled('span', {
  display: 'inline-block',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#ccc',
  animation: `1.5s ease-in-out 0.5s infinite ${shimmer}`,

  variants: {
    variant: {
      circular: {
        borderRadius: '50%'
      },
      text: {
        borderRadius: 4
      },
      box: {}
    }
  },

  defaultVariants: {
    variant: 'box'
  }
});
