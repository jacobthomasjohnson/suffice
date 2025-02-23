"use client";

import { create } from "zustand";

const useStore = create((set, get) => ({
    createModalOpen: false,
    setCreateModalOpen: (open) => set({ createModalOpen: open }),
}));

export default useStore;