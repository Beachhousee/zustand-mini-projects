import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  activeItem: string;
  toggleSidebar: () => void;
  setActiveItem: (item: string) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  activeItem: "dashboard",
  toggleSidebar: () =>
    set((state) => ({ isOpen: !state.isOpen })),
  setActiveItem: (item) => set({ activeItem: item }),
}));
