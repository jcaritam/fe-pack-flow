import type { JSX } from "react";
import { create } from "zustand";

export interface ModalStore<DataType = unknown> {
  component: JSX.Element | null;
  data: DataType | null;
  isOpen: boolean;
  openModal: (component: JSX.Element, data?: DataType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  component: null,
  data: {},
  isOpen: false,
  openModal: (component, data = {}) =>
    set({ component, data, isOpen: true }),
  closeModal: () =>
    set({ isOpen: false, component: null, data: {} }),
}));
