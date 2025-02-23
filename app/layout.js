"use client";

import "./globals.css";

import { Nav } from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar p-8 flex justify-between">
          <div className="logo">
            <img src="/logo-s.png" alt="Suffice" className="max-h-8" />
          </div>
          <div className="nav flex"></div>
        </header>
        <div className="app border-neutral-700">
          <div className="sidebar min-w-[300px] flex flex-col p-8 gap-2">
            <div className="text-xl mb-2 border-b pb-4 border-neutral-700 border-dashed">
              Fake Company
            </div>
            <Nav />
          </div>
          <div className="primary mr-36 p-8 grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
