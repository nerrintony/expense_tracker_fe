import './globals.css';
import AppLayout from '@/components/AppLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
