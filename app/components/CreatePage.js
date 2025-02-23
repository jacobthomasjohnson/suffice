"use client";

import { useRef, useState, useEffect } from "react";

import useStore from "../zustand/store";

export const CreatePage = ({ active }) => {
  const createModalOpen = useStore((state) => state.createModalOpen);
  const setCreateModalOpen = useStore((state) => state.setCreateModalOpen);

  return (
    <div
      className={`fixed z-50 top-36 left-14 right-14 bottom-14 backdrop-blur-2xl bg-gradient-to-bl p-14 blur-overlay ${
        createModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }  transition-all duration-75`}
    >
      Hello
    </div>
  );
};

export default CreatePage;
