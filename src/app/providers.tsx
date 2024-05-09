'use client';

import { NextUIProvider } from '@nextui-org/react';

interface ProvidersProprs {
  readonly children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProprs) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
