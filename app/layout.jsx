import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <hr />
        <Providers>{children}</Providers>

        <footer>
          <p>My Next App 2026</p>
        </footer>
      </body>
    </html>
  );
}
