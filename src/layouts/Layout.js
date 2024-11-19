import Header from "./../components/Header";
import Hero from "./../components/Hero";
import localFont from "next/font/local";
import Footer from "./../components/Footer";

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({ children }) {
  return (
    <div
      className={`min-h-dvh w-100 relative antialiased ${geistSans.variable} ${geistMono.variable} `}
    >
      <div>
        <Header />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
