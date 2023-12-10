import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Coinbase Commerce',
};

const google = localFont({
  src: [
    {
      path: '../assets/fonts/ProductSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ProductSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-google',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        
          ${google.variable}
           font-google transition-all duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
