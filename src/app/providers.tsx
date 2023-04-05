'use client';

import React from 'react';

import { queryClient } from '@/services/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}