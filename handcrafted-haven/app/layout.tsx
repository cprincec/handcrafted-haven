import '@/app/styles/global.css';
import { inter } from '@/app/styles/fonts';
import Navbar from './components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="flex flex-col bg-lightGreen p-6">{children}</main>
      </body>
    </html>
  );
}
