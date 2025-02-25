"use client";

import { useEffect } from "react";
import useStore from "@/app/zustand/store";

const useKeyPress = (callback, allowedModules = []) => {
  const activeModule = useStore((state) => state.activeModule);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Prevent keybinding when typing in an input or textarea
      if (["input", "textarea"].includes(event.target.tagName.toLowerCase()))
        return;

      // Allow Escape to always work regardless of activeModule
      if (event.key === "Escape") {
        callback(event);
        return;
      }

      // Only execute callback if activeModule is in the allowed list
      if (!activeModule || allowedModules.includes(activeModule)) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, activeModule]);
};

export default useKeyPress;
