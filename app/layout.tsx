import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "aitcc",
  description: "Command center for your IT management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-y-hidden", GeistMono.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
