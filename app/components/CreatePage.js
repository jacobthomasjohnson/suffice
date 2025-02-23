"use client";

import { useRef, useState, useEffect } from "react";

export const CreatePage = ({ active }) => {
  const [windowOpen, setWindowOpen] = useState(false);

  useEffect(() => {
    if (active) {
      setWindowOpen(true);
    } else {
      setWindowOpen(false);
    }
  }, [active]);
  return (
    <div
      className={`fixed z-50 top-36 left-14 right-14 bottom-14 backdrop-blur-2xl bg-gradient-to-bl p-14 blur-overlay ${
        windowOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-all duration-300`}
    >
      Hello
    </div>
  );
};

export default CreatePage;
