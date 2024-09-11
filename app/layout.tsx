import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrap News UI - Admin",
  description: "Administration Scrap News App",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
