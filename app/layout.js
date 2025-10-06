import "./globals.css";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"], 
});


export const metadata = {
  title: "Eames Page",
  description: "Wikipedia-like page about Charles & Ray Eames",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
         <body className="relative antialiased 
        bg-[url('/images/eames.png')] 
        bg-cover bg-center bg-no-repeat">
        {children}
      </body>
    </html>
  );
}

