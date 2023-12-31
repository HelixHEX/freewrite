import Nav from "../components/ui/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/modeToggle";
import Providers from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className + "h-screen dark:bg-black"}>
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Nav />
              <div className="h-full w-full px-80 py-5">{children}</div>
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
