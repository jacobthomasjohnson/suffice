"use client";

import { useState } from "react";
import useStore from "../zustand/store";
import { MenuBar, Editor } from "./Editor";

export const CreatePage = ({ active }) => {
  const createModalOpen = useStore((state) => state.createModalOpen);
  const [content, setContent] = useState("");
  const [editor, setEditor] = useState(null); // Store editor instance

  return (
    <div
      className={`fixed top-36 left-12 right-12 bottom-0 backdrop-blur-2xl bg-gradient-to-bl p-14 rounded-t-3xl blur-overlay z-50 flex flex-col ${
        createModalOpen ? "translate-y-0" : "translate-y-[100vh] pointer-events-none"
      } transition-all duration-200`}
    >
      {/* Toolbar */}
      <Editor />
    </div>
  );
};

export default CreatePage;
