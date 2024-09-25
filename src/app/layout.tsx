import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/components/provider";
import {Toaster} from "@/components/ui/toaster";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import {APP_NAME, BASE_URL} from "@/lib/constants";

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${APP_NAME} | メッセージの返信文を生成する AI`,
    template: `%s | ${APP_NAME}`
  },
  description: `${APP_NAME}はメッセージの返信文を生成する AI です。ビジネスメールや友達とのやり取りの返信文を考えて出力してくれます。`,
  applicationName: APP_NAME,
  alternates: {
    canonical: BASE_URL
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col max-w-5xl mx-auto items-center justify-center py-2 min-h-screen`}>
        <Provider>
          <Header />
          <main className="flex-grow mb-12">
            {children}
          </main>
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
