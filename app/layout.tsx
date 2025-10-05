// app/layout.tsx
import ThemeWrapper from "../src/Components/ThemeWrapper/ThemeWrapper";
import type { ReactNode } from "react";
import { Montserrat, Elsie_Swash_Caps } from "next/font/google";

// Carga las fuentes con sus configuraciones
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

const elsie = Elsie_Swash_Caps({
  subsets: ["latin"],
  variable: "--font-elsie",
  weight: ["900"],
});

export const metadata = {
  title: 'Casa Verde',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${elsie.variable}`}>
      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
