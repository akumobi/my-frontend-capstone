import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers";
import Cart from "./components/Cart";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Frontend Capstone Project~ Akumobi Kingsley",
  description: "An e-commerce application built with react, tailwind and nextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
        <Cart/>
        <NavBar/>
        {children}

        <Footer/>
        </SidebarProvider>
      </body>
    </html>
  );
}
