"use client";

import "./globals.css";

import { Nav } from "./components/Nav";
import Image from "next/image";

import CreatePage from "./components/CreatePage";
import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.production";

export default function RootLayout({ children }) {
  const createPageButton = useRef(null);
  const [createPageActive, setCreatePageActive] = useState(false);
  const createPage = () => {
    setCreatePageActive((prev) => !prev);
  }
  useEffect(() => {
    createPageButton.current.active = !createPageActive;
  }, [createPageActive]);
  return (
    <html lang="en" className="hide-scrollbar">
      <body className="hide-scrollbar">
        <CreatePage ref={createPageButton} active={false} />
        <header className="navbar p-14 flex justify-between items-center">
          <div className="logo">
            <img src="/logo-s.png" alt="Suffice" className="h-[30px]" />
          </div>
          <div className="nav flex items-center justify-center">
            <div className="w-[30px] h-[30px] hover:cursor-pointer flex items-center justify-center rounded-full outline-neutral-300 transition-all duration-100 opacity-90 hover:opacity-100" onClick={createPage}>
              <Image
                src="/icon-add.svg"
                alt="notification"
                width={20}
                height={20}
              />
            </div>
          </div>
        </header>
        <div className="app">
          <div className="sidebar min-w-[500px] flex flex-col p-14 pr-7 pt-0 gap-3  outline-blue-200">
            <div className="text-xl mb-2 border-b pb-4 border-neutral-700 border-dashed">
              Fake Company
            </div>
            <Nav />
          </div>
          <div className="primary p-14 pl-7 pt-0 grow outline-red-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
