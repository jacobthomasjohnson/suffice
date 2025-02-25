"use client";
import "./globals.css";
import { Nav } from "./components/Nav";
import Image from "next/image";
import CreatePage from "./components/CreatePage";
import useStore from "./zustand/store";
import { useEffect } from "react";
import HoverSearch from "./components/HoverSearch";
import KeyBinds from "./components/KeyBinds";

export default function RootLayout({ children }) {
  const createModalOpen = useStore((state) => state.createModalOpen);
  const setCreateModalOpen = useStore((state) => state.setCreateModalOpen);

  const searchOpen = useStore((state) => state.searchOpen);
  const setSearchOpen = useStore((state) => state.setSearchOpen);

  const createPage = () => {
    setCreateModalOpen(!createModalOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  useEffect(() => {
    document.body.style.overflow = createModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [createModalOpen]);

  return (
    <html lang="en" className="hide-scrollbar">
      <body className="hide-scrollbar">
        {/* Modal overlay */}
        <div
          className={`fixed z-20 transition-all duration-200 top-0 left-0 right-0 bottom-0 pointer-events-none ${createModalOpen
            ? "backdrop-blur-sm bg-[rgba(0,0,0,0.5)]"
            : "backdrop-blur-0"
            }`}
        ></div>
        
        <CreatePage />
        <HoverSearch />
        <KeyBinds />

        <header className="navbar p-14 flex justify-between items-center">
          <div className="logo">
            <img
              src="/logo-s.png"
              alt="Suffice"
              className="h-[30px] relative z-30"
            />
          </div>
          <div className="nav flex items-center justify-center">
            <div
              className={`fixed z-30 m-12 w-[30px] h-[30px] hover:cursor-pointer flex items-center justify-center rounded-full outline-neutral-300 transition-all duration-75 opacity-90 hover:opacity-100 ${createModalOpen ? "rotate-45" : "rotate-0"
                }`}
              onClick={createPage}
            >
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
          <div className="sidebar min-w-[500px] flex flex-col p-14 pr-7 pt-0 gap-3 outline-blue-200">
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
