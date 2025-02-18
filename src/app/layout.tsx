import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import MainProvider from "@/providers/MainProvider";
import Topbar from "@/components/shared/Topbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Management",
  description: "This is a product management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        style={{ ...geistMono.style }}
        className="antialiased w-full min-h-screen overflow-x-hidden"
      >
        <MainProvider>
          <header className="container mx-auto px-4 mb-4">
            <Topbar />
          </header>
          <main className="container mx-auto px-4">{children}</main>
        </MainProvider>
      </body>
    </html>
  );
}
