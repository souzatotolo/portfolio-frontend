import { Fira_Sans } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Richard Totolo`s Portfolio',
  description: 'Hope you like it',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#0A2144" />

      <body className="bg-[#0A2144]">{children}</body>
    </html>
  );
}
