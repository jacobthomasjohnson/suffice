"use client";

import { create } from "zustand";

const useStore = create((set, get) => ({
    createModalOpen: false,
    setCreateModalOpen: (open) => set({ createModalOpen: open }),
    searchOpen: false,
    setSearchOpen: (open) => set({ searchOpen: open }),
    keyBindsOpen: false,
    setKeyBindsOpen: (open) => set({ keyBindsOpen: open }),
    activeModule: null,
    setActiveModule: (module) => set({ activeModule: module }),
}));

export default useStore;