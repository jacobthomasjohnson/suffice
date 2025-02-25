"use client";

import { useEffect } from "react";
import useStore from "../zustand/store";

export const HoverSearch = () => {
      const searchOpen = useStore((state) => state.searchOpen);
      const setSearchOpen = useStore((state) => state.setSearchOpen);

      useEffect(() => {
            window.addEventListener('keydown', (e) => {
                  if(e.key === "Escape") {
                        setSearchOpen(!searchOpen);
                  }
            })
      }, [])

      return (
            <div className={`w-full h-full fixed top-0 left-0 z-50 ${searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <div className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-[#11111150] backdrop-blur-sm"></div>
                  <div className="fixed top-1/4 z-50 w-full flex items-center justify-center">
                        <div className="w-4/5">
                              <input type="text" className="w-full h-full text-2xl rounded-2xl p-8 bg-[rgba(255,255,255,0.1)] backdrop-blur-xl focus:outline-none" placeholder="What are you looking for?" />
                        </div>
                  </div>
            </div>
      )
}

export default HoverSearch;