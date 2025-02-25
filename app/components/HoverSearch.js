"use client";

import { useRef, useEffect } from "react";
import useStore from "../zustand/store";
import useKeyPress from "./hooks/useKeyPress";

export const HoverSearch = () => {
  const searchOpen = useStore((state) => state.searchOpen);
  const setSearchOpen = useStore((state) => state.setSearchOpen);
  const setActiveModule = useStore((state) => state.setActiveModule);
  const searchInput = useRef(null);

  useEffect(() => {
    if (searchOpen) {
      setActiveModule("search");
      setTimeout(() => searchInput.current?.focus(), 50); // Ensure input gets focus
    } else {
      setActiveModule(null);
      searchInput.current?.blur(); // Unfocus input when closing search
      setTimeout(() => {
        if (searchInput.current) searchInput.current.value = ""; // Now clearing works properly
      }, 10); // Delay clearing slightly to ensure state update
    }
  }, [searchOpen]);

  // Global keypress handler
  useKeyPress(
    (e) => {
      if (e.key === "Escape" && searchOpen) {
        e.preventDefault();
        setSearchOpen(false);
        setActiveModule(null);
      }

      if (
        e.key === " " &&
        !searchOpen &&
        e.target.tagName.toLowerCase() !== "input"
      ) {
        e.preventDefault(); // Prevent scrolling
        setSearchOpen(true);
        setActiveModule("search");
        setTimeout(() => searchInput.current?.focus(), 50); // Ensure input gets focus
      }
    },
    ["search"]
  );

  return (
    <div
      className={`w-full h-full backdrop-blur-sm  fixed transition-all duration-200 top-0 left-0 z-50 ${
        searchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]"></div>
      <div className="fixed top-1/4 z-50 w-full flex items-center justify-center">
        <div className="w-4/5">
          <input
            ref={searchInput}
            type="text"
            className="w-full h-full text-2xl rounded-2xl p-10 bg-[rgb(19,19,19)] border-2 border-[rgb(33,33,33)] focus:outline-none shadow-lg"
            placeholder="What are you looking for?"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                setSearchOpen(false);
                setActiveModule(null);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HoverSearch;
