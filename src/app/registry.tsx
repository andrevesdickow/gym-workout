'use client';

import { useState } from 'react';

import { useServerInsertedHTML } from 'next/navigation';

import { getCssText } from '@stitchesConfig';

export default function StitchesRegistry({ children }: { children: JSX.Element }) {
  const [isRendered, setIsRendered] = useState(false);

  useServerInsertedHTML(() => {
    if (!isRendered) {
      setIsRendered(true);
      return <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />;
    }
  });

  return children;
}
