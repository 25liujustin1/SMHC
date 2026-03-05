import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream font-body text-navy antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}