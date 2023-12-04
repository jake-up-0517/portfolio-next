import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jake Crawford',
  description: 'Jake Crawford - Portfolio',
};

export default function RootLayout({ children }) {
  const themeCookie = cookies().get('theme');
  const currentTheme = themeCookie ? themeCookie.value : 'dark';
  return (
    <html lang="en" data-theme={currentTheme}>
      <body className={inter.className}>
        <div className="h-screen w-screen">
          <div className="flex justify-between items-center bg-accent pr-5">
            <Contact />
            <ThemeProvider />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
