import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientSideLayout from './ClientSideLayout';

const geistSans = Geist({
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
});

export const metadata = {
  title: 'IUT Test Prep - Mock Test Platform',
  description: 'Practice for IUT admission with realistic mock tests and track your progress',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased flex flex-col min-h-screen`}
      >
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
