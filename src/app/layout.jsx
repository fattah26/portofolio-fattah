import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "fattaah",
  description: "Portofolio Fattah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
            <div className="mx-6 lg:mx-48 mt-16 lg:mt-20 min-h-screen">
              {children}
            </div>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
