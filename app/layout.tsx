// app/layout.tsx (SIN 'use client')

import ThemeWrapper from "../src/Components/ThemeWrapper/ThemeWrapper";

export const metadata = {
  title: 'Casa Verde',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">

      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
