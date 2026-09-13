import './globals.css';

export const metadata = {
  title: 'Engineering Camp',
  description: 'Platform pendaftaran dan aksi nyata volunteer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}