import "./globals.scss";
import Header from "./header/Header";
import Providers from "./providers/Providers";
export const metadata = {
  title: "Breaking News",
  description: "today news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
