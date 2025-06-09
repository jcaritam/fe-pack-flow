import type { JSX } from "react";
import { create } from "zustand";

interface ISidePanelOptions<T = unknown> {
  data?: T;
  title?: string;
}

export interface SidePanelStore<DataType = unknown> {
  component: JSX.Element | null;
  options: ISidePanelOptions<DataType> | null;
  isOpen: boolean;
  openSidePanel: (component: JSX.Element, options?: ISidePanelOptions<DataType>) => void;
  closeSidePanel: () => void;
}

export const sidePanelStore = create<SidePanelStore>((set) => ({
  component: null,
  options: null,
  isOpen: false,
  openSidePanel: (component, options) => set({
    component, options, isOpen: true
  }),
  closeSidePanel: () => set({ component: null, options: null, isOpen: false })
}))