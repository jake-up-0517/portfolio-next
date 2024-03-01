import { Inter, Roboto_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Jake Crawford',
  description: 'Jake Crawford - Portfolio',
};

export default function RootLayout({ children }) {
  const themeCookie = cookies().get('theme');
  const currentTheme = themeCookie ? themeCookie.value : 'dark';
  return (
    <html lang="en" data-theme={currentTheme}>
      <body className={roboto.className}>
        <header className="sticky top-0 z-50 h-12 flex justify-between items-center bg-accent pr-5">
          <Contact />
          <Navigation />
          <ThemeProvider />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
