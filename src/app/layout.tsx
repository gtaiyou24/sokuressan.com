import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/provider";
import {Toaster} from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const appName = "即レスくん";
const baseURL = process.env.NODE_ENV === "production" ? 'https://sokures.com' : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    default: `${appName} | メッセージの返信文を生成する AI`,
    template: `%s | ${appName}`
  },
  description: `${appName}はメッセージの返信文を生成する AI です。ビジネスメールや友達とのやり取りの返信文を考えて出力してくれます。`,
  applicationName: appName,
  alternates: {
    canonical: baseURL
  },
  icons: {
    apple: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/light/apple-touch-icon.png',
        href: '/favicon/light/apple-touch-icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/dark/apple-touch-icon.png',
        href: '/favicon/dark/apple-touch-icon.png',
      },
    ],
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
        url: '/favicon/light/favicon-32x32.png',
        href: '/favicon/light/favicon-32x32.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
        url: '/favicon/dark/favicon-32x32.png',
        href: '/favicon/dark/favicon-32x32.png',
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="content-language" content="ja" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
