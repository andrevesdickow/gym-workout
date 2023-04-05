import { getCssText } from '@stitchesConfig';

export const StyleSheet = () => {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};