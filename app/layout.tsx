import type { Metadata } from "next";
import "./globals.css";

import { site } from "@/config/site-config";
import { poppins } from "@/components/shared/fonts";
import { ThemeProvider } from "@/components/blocks/theme-provider";


export const metadata: Metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
           {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
