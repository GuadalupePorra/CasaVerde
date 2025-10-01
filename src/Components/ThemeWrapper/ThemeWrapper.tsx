// src/components/ThemeWrapper.tsx
'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../Body/GlobalStyle';
import { lightTheme } from '../../../public/theme/themes';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
