import type { Metadata } from "next";
import { Public_Sans, Raleway } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Binnox Admin",
  description: "Binnox Admin Dashboard",
};

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

import { CurrencyProvider } from '@/contexts/CurrencyContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F1F1F1]">
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
