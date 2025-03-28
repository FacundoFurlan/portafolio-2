import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBarPerso from "./navbar";


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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Facundo Furlan Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased xl:flex`}
      >
        <NavBarPerso></NavBarPerso>
        <nav className="hidden xl:grid grid grid-rows-2 h-[100vh] fixed min-w-[25vw] overflow-auto bg-zinc-900">
          <div className="flex flex-col self-start mt-6 mx-6">
            <a href="/" className="mb-2 hover:bg-zinc-800 p-3 rounded text-xl">This is me</a>
            <a href="/proyects" className="mb-2 hover:bg-zinc-800 p-3 rounded text-xl">Projects</a>
            <a href="/cv" className="mb-4 hover:bg-zinc-800 p-3 rounded text-xl">CV</a>
          </div>
          <div className="flex flex-col self-end m-6">
            <div className="flex flex-col ml-3 mr-2 justify-evenly rounded bg-zinc-800 p-1">
              <div className="p-2">
                <div>📫​ Email</div>
                <div className="ml-5">facundofurlan7@gmail.com</div>
                <div>📱​​ Work Number</div>
                <div className="ml-5">+54-3482-644200</div>
              </div>
              <div className="flex flex-row justify-evenly py-4 border-zinc-700">
                <a href="https://www.linkedin.com/in/facundo-furlan/" target="_blanc"><img className="w-8" src="/linkedin.svg" alt="" /></a>
                <a href="https://github.com/NeroWork" target="_blanc"><img className="w-8" src="/github.svg" alt="" /></a>
                <a href="https://t.me/FurlanFacundo" target="_blanc"><img className="w-8" src="/telegram.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}