"use client";
import { useEffect } from "react";
import useStore from "../zustand/store";
import MultiBlockEditor from "./editor/MultiBlockEditor.js";

export const CreatePage = () => {
  const createModalOpen = useStore((state) => state.createModalOpen);

  useEffect(() => {
    if (createModalOpen) {
      document.body.scrollTop = 0;
    }
  }, [createModalOpen]);

  return (
    <div
      className={`fixed top-36 left-12 right-12 h-[100vh] backdrop-blur-2xl bg-gradient-to-bl p-14 rounded-t-xl blur-overlay z-50 flex flex-col ${
        createModalOpen ? "translate-y-0" : "translate-y-[100vh]"
      } transition-all duration-300 ease-[cubic-bezier(0,1,0,1)]`}
    >
      <MultiBlockEditor />
    </div>
  );
};

export default CreatePage;
