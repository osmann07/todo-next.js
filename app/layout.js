import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black  p-4">{children}</body>
    </html>
  );
}
