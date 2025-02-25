"use client";

import useStore from "../zustand/store";
import MultiBlockEditor from "./editor/MultiBlockEditor.js";
import useKeyPress from "./hooks/useKeyPress";

export const CreatePage = () => {
  const createModalOpen = useStore((state) => state.createModalOpen);
  const setCreateModalOpen = useStore((state) => state.setCreateModalOpen);
  const searchOpen = useStore((state) => state.searchOpen);
  const setActiveModule = useStore((state) => state.setActiveModule);

  useKeyPress(
    (e) => {
      if (e.key === "Escape" && createModalOpen) {
        e.preventDefault();
        setCreateModalOpen(false);
        setActiveModule(null);
      }
      if (e.key === "n" && !createModalOpen && !searchOpen) {
        e.preventDefault();
        setCreateModalOpen(true);
        setActiveModule("createPage");
      }
    },
    ["createPage", null]
  ); // Only listen when createPage or nothing is active

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
