import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeTODO",
  description: "Create and manage todos",
   icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="halloween">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}

      >
        <div className=" max-w-412.5 mx-auto px-2 md:px-8 ">
          <ClerkProvider >
            <Navbar />
            <NuqsAdapter>
              {children}

              <Footer />
            </NuqsAdapter>
          </ClerkProvider>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'font-medium',
            duration: 3000,
            style: {
              background: '#fafafa',
              color: '#333',
            },
          }}
        />
      </body>
    </html>
  );
}
