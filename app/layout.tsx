import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDockDemo } from "./(home)/components/Navbar";
import Template from "./template";

export const metadata: Metadata = {
  title: "JC DEV",
  description: "Generated by JC DEV",
};

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${ibm.className} relative`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="bg-black/65">
              <Template>
                {children}
              </Template>
              <FloatingDockDemo />
            </main>
          </ThemeProvider>
          <BackgroundBeams />
        </body>
      </html>
    </>
  );
}

